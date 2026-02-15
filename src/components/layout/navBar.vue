<template>
    <div id="navBarDiv" class="fixed top-0 w-full bg-white border-b border-gray-200 shadow-sm z-50 transition-all duration-300">
        <div class="px-6 h-16 flex items-center gap-4">
            
            <!-- Left Side - Menu, Search, Brand -->
            <div class="flex items-center gap-2">
                <button @click="$emit('toggleSideBar')" class="p-2 rounded-lg hover:bg-gray-100 transition-colors" title="Menu">
                    <svg class="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>

                <button class="p-2 rounded-lg hover:bg-gray-100 text-gray-500 hover:text-green-600 transition-colors" title="Search">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                </button>

                <div class="flex items-center cursor-pointer group ml-2" @click="showHomeScreen">
                    <img src="../../assets/images/logo.svg" alt="Logo" class="h-9 w-9 transition-transform duration-300 group-hover:scale-110" />
                    <div class="ml-3 flex flex-col">
                        <span class="font-bold text-lg text-gray-900 tracking-tight group-hover:text-green-600 transition-colors leading-tight">SMT</span>
                        <span class="hidden sm:block text-xs text-gray-500 leading-tight">Sharif Memorial Trust</span>
                    </div>
                </div>
            </div>

            <!-- Center - Navigation Links (Desktop) -->
            <nav class="hidden md:flex flex-1 items-center justify-center space-x-1">
                <!-- Main Navigation Tabs -->
                <router-link v-if="!showHomePageSections" to="/" :class="navLinkClass('/')">
                    Home
                </router-link>

                <!-- Home Page Sections (only on home page) -->
                <router-link v-if="showHomePageSections" :to="{ path: '/', hash: '#home' }" @click="goToHomePageSection('home')" :class="sectionLinkClass('home')">
                    Intro
                </router-link>
                
                <router-link v-if="showHomePageSections" :to="{ path: '/', hash: '#aboutUs' }" @click="goToHomePageSection('aboutUs')" :class="sectionLinkClass('aboutUs')">
                    About Us
                </router-link>
                
                <router-link v-if="showHomePageSections" :to="{ path: '/', hash: '#contacts' }" @click="goToHomePageSection('contacts')" :class="sectionLinkClass('contacts')">
                    Contacts
                </router-link>

                <router-link to="/donations" :class="navLinkClass('/donations')">
                    Donations
                </router-link>
                
                <router-link to="/ourAimsAndObjectives" :class="navLinkClass('/ourAimsAndObjectives')">
                    Our Aims
                </router-link>
                
                <router-link to="/futureProjects" :class="navLinkClass('/futureProjects')">
                    Projects
                </router-link>
            </nav>

            <div class="hidden md:block w-8"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NavBar',
    props: ['showHomePageSections'],
    data()
    {
        return {
            selectedHomePageSection: 'home',
            sectionObserver: null,
            sectionObserverRetries: 0
        }
    },
    mounted()
    {
        this.setupSectionObserver();
    },
    beforeUnmount()
    {
        this.teardownSectionObserver();
    },
    watch: {
        '$route.hash': {
            immediate: true,
            handler(hash) {
                if (!hash) {
                    this.selectedHomePageSection = 'home';
                    return;
                }
                const section = hash.replace('#', '');
                if (['home', 'aboutUs', 'contacts'].includes(section)) {
                    this.selectedHomePageSection = section;
                }
            }
        },
        showHomePageSections() {
            this.setupSectionObserver();
        }
    },
    methods: {
        showHomeScreen()
        {
            this.$emit('screenChanged', '/');
            this.$router.push('/');
        },
        goToHomePageSection(sectionName)
        {            
            this.selectedHomePageSection = sectionName;
        },
        navLinkClass(path)
        {
            const isActive = this.$route.path === path;
            return `px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${isActive ? 'bg-green-50 text-green-700 font-semibold' : 'text-gray-600 hover:bg-gray-50 hover:text-green-600'}`;
        },
        sectionLinkClass(section)
        {
            const isActive = this.selectedHomePageSection === section;
            return `px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${isActive ? 'bg-green-50 text-green-600 font-semibold' : 'text-gray-600 hover:bg-gray-50 hover:text-green-600'}`;
        },
        setupSectionObserver()
        {
            this.teardownSectionObserver();
            if (!this.showHomePageSections) { return; }

            const sections = ['home', 'aboutUs', 'contacts']
                .map((id) => document.getElementById(id))
                .filter(Boolean);

            if (!sections.length) {
                if (this.sectionObserverRetries < 3) {
                    this.sectionObserverRetries += 1;
                    this.$nextTick(() => this.setupSectionObserver());
                }
                return;
            }

            this.sectionObserverRetries = 0;

            this.sectionObserver = new IntersectionObserver(
                (entries) => {
                    const visible = entries
                        .filter((entry) => entry.isIntersecting)
                        .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
                    if (visible.length) {
                        const id = visible[0].target.id;
                        if (this.selectedHomePageSection !== id) {
                            this.selectedHomePageSection = id;
                        }
                    }
                },
                {
                    root: null,
                    rootMargin: '-20% 0px -60% 0px',
                    threshold: [0.2, 0.4, 0.6]
                }
            );

            sections.forEach((section) => this.sectionObserver.observe(section));
        },
        teardownSectionObserver()
        {
            if (this.sectionObserver) {
                this.sectionObserver.disconnect();
                this.sectionObserver = null;
            }
        }
    }
}
</script>

<style scoped>
/* Additional styles if needed */
</style>

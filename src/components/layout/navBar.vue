<template>
    <div id="navBarDiv" class="fade-in flex justify-between items-center px-5 bg-white border-b border-gray-200">

        <!-- Left Side -->
        <div class="flex justify-center items-center cursor-pointer" @click="showHomeScreen">
            <img src="../../assets/images/logo.svg" alt="Logo" class="mr-2" />
            <span class="font-bold text-lg">
                SMT<span class="hidden sm:inline text-lg"> - Sharif Memorial Trust</span>
            </span>
        </div>

        <!-- Right Side -->
        <div class="flex justify-center items-center">
            <router-link v-if="showHomePageSections" to="#home" @click="goToHomePageSection('home')"
                :class="`mr-3 hidden md:inline
                        ${selectedHomePageSection=='home'?'border-b-2 border-green-500':'hover-underline-animation'}`">
                Home
            </router-link>
            <router-link v-if="showHomePageSections" to="#aboutUs" @click="goToHomePageSection('aboutUs')" 
                :class="`mr-3 hidden md:inline 
                        ${selectedHomePageSection=='aboutUs'?'border-b-2 border-green-500':'hover-underline-animation'}`">
                About Us
            </router-link>
            <!-- <router-link v-if="showHomePageSections" to="#impact" @click="goToHomePageSection('impact')" 
                :class="`mr-3 hidden md:inline 
                        ${selectedHomePageSection=='impact'?'border-b-2 border-green-500':'hover-underline-animation'}`">
                Your Impact
            </router-link> -->
            <router-link v-if="showHomePageSections" to="#contacts" @click="goToHomePageSection('contacts')" 
                :class="`mr-3 hidden md:inline 
                        ${selectedHomePageSection=='contacts'?'border-b-2 border-green-500':'hover-underline-animation'}`">
                Contacts
            </router-link>

            <!-- <button class="mr-3 bg-green-100 p-2 rounded-lg hover:opacity-75" title="Search">
                <img src="../../assets/images/navBar/search.svg" alt="Search" />
            </button> -->

            <button @click="$emit('toggleSideBar')" class="bg-green-100 p-2 rounded-lg hover:opacity-75" title="Open Side Bar">
                <img :src="sideBarOpenImage" alt="Open Side Bar" />
            </button>
        </div>
    </div>
</template>

<script>
import sideBarOpenImage from '@/assets/images/navBar/sideBarOpen.svg';

export default {
    name: 'NavBar',
    props: ['showHomePageSections'],
    data()
    {
        return {
            selectedHomePageSection: 'home',
            sideBarOpenImage
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
        }
    }
}
</script>

<style scoped>

#navBarDiv {
    height: 65px;
}

</style>

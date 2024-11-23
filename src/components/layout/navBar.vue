<template>
    <div id="navBarDiv" class="fade-in flex justify-between items-center px-5 bg-white border-b border-gray-200">

        <!-- Left Side -->
        <div class="flex justify-center items-center cursor-pointer" @click="$router.push('/')">
            <img src="../../assets/images/logo.svg" alt="Logo" class="mr-2" />
            <span class="font-bold text-lg">
                SMT<span class="hidden sm:inline text-lg"> - Sharif Memorial Trust</span>
            </span>
        </div>

        <!-- Right Side -->
        <div class="flex justify-center items-center">
            <a href="#home" @click="goToHomePageSection('home')"
                :class="`mr-3 hidden md:inline
                        ${selectedHomePageSection=='home'?'border-b-2 border-green-500':'hover-underline-animation'}`">
                Home
            </a>
            <a href="#aboutUs" @click="goToHomePageSection('aboutUs')" 
                :class="`mr-3 hidden md:inline 
                        ${selectedHomePageSection=='aboutUs'?'border-b-2 border-green-500':'hover-underline-animation'}`">
                About Us
            </a>
            <a href="#contacts" @click="goToHomePageSection('contacts')" 
                :class="`mr-3 hidden md:inline 
                        ${selectedHomePageSection=='contacts'?'border-b-2 border-green-500':'hover-underline-animation'}`">
                Contacts
            </a>

            <button class="mr-3 bg-green-100 p-2 rounded-lg hover:opacity-75" title="Search">
                <img src="../../assets/images/navBar/search.svg" alt="Search" />
            </button>

            <button @click="$emit('toggleSideBar')" class="bg-green-100 p-2 rounded-lg hover:opacity-75" title="Open Side Bar">
                <img :src="sideBarOpenIcon" alt="Open Side Bar" />
            </button>
        </div>
    </div>
</template>

<script>
import sideBarOpenIcon from '@/assets/images/navBar/sideBarOpen.svg';

export default {
    name: 'NavBar',
    data()
    {
        return {
            selectedHomePageSection: 'home',
            sideBarOpenIcon
        }
    },
    methods: {
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

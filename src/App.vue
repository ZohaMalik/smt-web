<script setup>

import { ref } from 'vue';
import NavBar from '@/components/layout/navBar.vue';
import SideBar from '@/components/layout/sideBar.vue';
import Footer from '@/components/layout/footer.vue';

const isSidebarOpen = ref(false);

function toggleSideBar() { isSidebarOpen.value = !isSidebarOpen.value; }

</script>

<template>
    <div>
        <NavBar @toggleSideBar="toggleSideBar" />
        <SideBar :isOpen="isSidebarOpen" @toggleSideBar="toggleSideBar" />
        <router-view />
        <Footer />
    </div>
</template>

<style>
</style>

<script setup>

import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import NavBar from '@/components/layout/navBar.vue';
import SideBar from '@/components/layout/sideBar.vue';
import Footer from '@/components/layout/footer.vue';

const isSidebarOpen = ref(false);
const showHomePageSectionsOnNavBar = ref(false);
const route = useRoute();

function toggleSideBar() { isSidebarOpen.value = !isSidebarOpen.value; }

function screenChanged(screen)
{
    if(screen == '/') { showHomePageSectionsOnNavBar.value = true; }
    else { showHomePageSectionsOnNavBar.value = false; }
}

watch(
    () => route.path,
    (path) => {
        showHomePageSectionsOnNavBar.value = path === '/';
    },
    { immediate: true }
);

</script>

<template>
    <div class="scroll-smooth">
        <NavBar :showHomePageSections="showHomePageSectionsOnNavBar" @toggleSideBar="toggleSideBar" @screenChanged="screenChanged" />
        <SideBar :isOpen="isSidebarOpen" @toggleSideBar="toggleSideBar" @screenChanged="screenChanged" />
        <router-view />
        <Footer />
    </div>
</template>

<style>
</style>

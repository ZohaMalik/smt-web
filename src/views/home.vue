<script setup>

import Intro from '@/components/homeComponents/intro.vue';
import AboutUs from '@/components/homeComponents/aboutUs.vue';
import Contacts from '@/components/homeComponents/contacts.vue';

</script>

<template>
    <div class="screenContainerDiv fade-in scroll-smooth">
        <div id="home">
            <Intro />
        </div>
        <div id="aboutUs">
            <AboutUs />
        </div>
        <div id="contacts">
            <Contacts />
        </div>
    </div>
</template>

<style scoped>
</style>

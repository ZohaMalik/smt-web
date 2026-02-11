<script setup>

import Intro from '@/components/homeComponents/intro.vue';
import AboutUs from '@/components/homeComponents/aboutUs.vue';
// import Impact from '@/components/homeComponents/impact.vue';
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
        <!-- <div id="impact">
            <Impact />
        </div> -->
        <div id="contacts">
            <Contacts />
        </div>
    </div>
</template>

<style scoped>
</style>

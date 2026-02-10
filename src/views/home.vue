<script setup>

import Intro from '@/components/homeComponents/intro.vue';
import AboutUs from '@/components/homeComponents/aboutUs.vue';
import Contacts from '@/components/homeComponents/contacts.vue';

</script>

<template>
    <div class="fade-in scroll-smooth">
        <section id="home">
            <Intro />
        </section>
        <section id="aboutUs">
            <AboutUs />
        </section>
        <section id="contacts">
            <Contacts />
        </section>
    </div>
</template>

<style scoped>
</style>

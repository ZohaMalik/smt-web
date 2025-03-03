<script setup>

import Image from '@/components/utils/image.vue';
import InformationsImage1 from '@/assets/images/informations/home/1.jpg';
import InformationsImage2 from '@/assets/images/informations/home/2.jpg';
import InformationsImage3 from '@/assets/images/informations/home/3.png';
import InformationsImage4 from '@/assets/images/informations/home/4.png';
import InformationsImage5 from '@/assets/images/informations/home/5.jpg';

</script>

<template>
    <div class="screenContainerDiv fade-in text-center sm:text-left">
        <h1 class="font-extrabold text-4xl mb-5">Informations</h1>
        <div class="flex justify-center items-center gap-9 flex-wrap">
            <Image :imageSrc="InformationsImage1" />
            <Image :imageSrc="InformationsImage2" />
            <Image :imageSrc="InformationsImage3" />
            <Image :imageSrc="InformationsImage4" />
            <Image :imageSrc="InformationsImage5" />
        </div>
    </div>
</template>

<style scoped>
</style>

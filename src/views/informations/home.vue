<script setup>

import Image from '@/components/utils/image.vue';
import InformationsImage1 from '@/assets/images/informations/home/1.jpg';
import InformationsImage2 from '@/assets/images/informations/home/2.jpg';
import InformationsImage3 from '@/assets/images/informations/home/3.png';
import InformationsImage4 from '@/assets/images/informations/home/4.png';
import InformationsImage5 from '@/assets/images/informations/home/5.jpg';

</script>

<template>
    <div class="pt-24 pb-20 px-4 bg-white">
        <div class="max-w-6xl mx-auto">
            <div class="text-center mb-12">
                <h1 class="font-extrabold text-4xl md:text-5xl text-gray-900 mb-4 tracking-tight">Informations</h1>
                <div class="w-24 h-1 bg-green-500 mx-auto rounded-full mb-6"></div>
                <p class="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    Highlights and moments from our activities.
                </p>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div class="rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                    <Image :imageSrc="InformationsImage1" />
                </div>
                <div class="rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                    <Image :imageSrc="InformationsImage2" />
                </div>
                <div class="rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                    <Image :imageSrc="InformationsImage3" />
                </div>
                <div class="rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                    <Image :imageSrc="InformationsImage4" />
                </div>
                <div class="rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                    <Image :imageSrc="InformationsImage5" />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
</style>

<script setup>

import Image from '@/components/utils/image.vue';
import UpdatesImage from '@/assets/images/informations/updates/1.jpg';
import ConstructionImage1 from '@/assets/images/informations/updates/construction/1.jpg';
import ConstructionImage2 from '@/assets/images/informations/updates/construction/2.jpg';

</script>

<template>
    <div class="pt-24 pb-20 px-4 bg-white">
        <div class="max-w-6xl mx-auto">
            <div class="text-center mb-12">
                <h1 class="font-extrabold text-4xl md:text-5xl text-gray-900 mb-4 tracking-tight">Updates</h1>
                <div class="w-24 h-1 bg-green-500 mx-auto rounded-full mb-6"></div>
                <p class="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    Recent progress and community initiatives.
                </p>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mb-10">
                <div class="modern-card border border-gray-100 p-4 md:p-6">
                    <Image :imageSrc="UpdatesImage" />
                </div>
                <div class="modern-card border border-gray-100 p-6 md:p-8">
                    <h2 class="text-2xl font-bold text-gray-900 mb-3">Construction & Repairing</h2>
                    <p class="text-gray-600 leading-relaxed">
                        Construction & Repairing of (DRS PURA) GRAVE YARD WALLS
                    </p>
                </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div class="rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                    <Image :imageSrc="ConstructionImage1" />
                </div>
                <div class="rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                    <Image :imageSrc="ConstructionImage2" />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
</style>

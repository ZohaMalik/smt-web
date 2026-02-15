<script setup>

import Image from '@/components/utils/image.vue';
import SeeratImage1 from '@/assets/images/iqraTaleemUlQuranAcademy/seeratHazratUmarFarooqRA/1.png';
import SeeratImage2 from '@/assets/images/iqraTaleemUlQuranAcademy/seeratHazratUmarFarooqRA/2.png';
import SeeratImage3 from '@/assets/images/iqraTaleemUlQuranAcademy/seeratHazratUmarFarooqRA/3.png';
import SeeratImage4 from '@/assets/images/iqraTaleemUlQuranAcademy/seeratHazratUmarFarooqRA/4.jpg';
import SeeratImage5 from '@/assets/images/iqraTaleemUlQuranAcademy/seeratHazratUmarFarooqRA/5.jpg';
import SeeratImage6 from '@/assets/images/iqraTaleemUlQuranAcademy/seeratHazratUmarFarooqRA/6.jpg';
import SeeratImage7 from '@/assets/images/iqraTaleemUlQuranAcademy/seeratHazratUmarFarooqRA/7.jpg';
import SeeratImage8 from '@/assets/images/iqraTaleemUlQuranAcademy/seeratHazratUmarFarooqRA/8.jpg';
import SeeratImage9 from '@/assets/images/iqraTaleemUlQuranAcademy/seeratHazratUmarFarooqRA/9.jpg';
import SeeratImage10 from '@/assets/images/iqraTaleemUlQuranAcademy/seeratHazratUmarFarooqRA/10.jpg';
import SeeratImage11 from '@/assets/images/iqraTaleemUlQuranAcademy/seeratHazratUmarFarooqRA/11.jpg';

</script>

<template>
    <div class="pt-24 pb-20 px-4 bg-white">
        <div class="max-w-6xl mx-auto">
            <div class="text-center mb-12">
                <h1 class="font-extrabold text-4xl md:text-5xl text-gray-900 mb-4 tracking-tight">Seerat Hazrat Umar Farooq (RA)</h1>
                <div class="w-24 h-1 bg-green-500 mx-auto rounded-full mb-6"></div>
                <p class="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    A curated collection of study materials and visuals.
                </p>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div class="rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                    <Image :imageSrc="SeeratImage1" />
                </div>
                <div class="rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                    <Image :imageSrc="SeeratImage2" />
                </div>
                <div class="rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                    <Image :imageSrc="SeeratImage3" />
                </div>
                <div class="rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                    <Image :imageSrc="SeeratImage4" />
                </div>
                <div class="rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                    <Image :imageSrc="SeeratImage5" />
                </div>
                <div class="rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                    <Image :imageSrc="SeeratImage6" />
                </div>
                <div class="rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                    <Image :imageSrc="SeeratImage7" />
                </div>
                <div class="rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                    <Image :imageSrc="SeeratImage8" />
                </div>
                <div class="rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                    <Image :imageSrc="SeeratImage9" />
                </div>
                <div class="rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                    <Image :imageSrc="SeeratImage10" />
                </div>
                <div class="rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                    <Image :imageSrc="SeeratImage11" />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
</style>

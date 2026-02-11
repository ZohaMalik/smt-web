<script setup>

import LeavesHeaderImage from '@/assets/images/home/leaves.svg';

import 'vue3-carousel/carousel.css';
import { Carousel, Slide, Navigation } from 'vue3-carousel';

const images = Array.from({ length: 10 }, (_, index) => ({
    id: index + 1,
    url: `https://picsum.photos/seed/${Math.random()}/800/600`,
}));

const config = {
    height: 200,
    itemsToShow: 2,
    gap: 5,
    wrapAround: true,
};

</script>

<template>
    <div>
        <h2 class="font-extrabold text-4xl mb-5 max-w-screen-lg mx-auto flex items-center gap-2">
            <img :src="LeavesHeaderImage" alt="Leaves Image" width="30" /> <span>Impact Made Possible by Your Support</span>
        </h2>

        <!-- !!! from here -->
        <!-- <div v-for="" :key="">
            <Carousel v-bind="config" style="height: 500px;">
                <Slide v-for="image in images" :key="image.id" style="width: 450px;">
                <div style="border: 2px solid green; padding: 10px; border-radius: 8px; width: 100%; height: 100%; display: flex; justify-content: center; align-items: center;">
                    <img :src="image.url" alt="image" class="carousel-img" />
                </div>
                </Slide>

                <template #addons>
                <Navigation />
                </template>
            </Carousel>
        </div> -->


    </div>
</template>

<style scoped>

/* .carousel { */
    /* --vc-nav-background: rgba(255, 255, 255, 0.7); */
    /* --vc-nav-border-radius: 100%; */
/* } */

.carousel-img {
    border-radius: 8px;
    width: 98%;
    height: 98%;
    object-fit: cover;
}

</style>

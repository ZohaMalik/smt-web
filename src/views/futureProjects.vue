<script setup>

import { ref, onMounted, onBeforeUnmount } from 'vue';
import FutureProjectsImage1 from '@/assets/images/futureProjects/contentImages/1.jpg';
import FutureProjectsImage2 from '@/assets/images/futureProjects/contentImages/2.jpg';
import FutureProjectsImage3 from '@/assets/images/futureProjects/contentImages/3.jpg';
import FutureProjectsImage4 from '@/assets/images/futureProjects/contentImages/4.jpg';
import FutureProjectsImage5 from '@/assets/images/futureProjects/contentImages/5.jpg';
import FutureProjectsImage6 from '@/assets/images/futureProjects/contentImages/6.jpg';
import FutureProjectsImage7 from '@/assets/images/futureProjects/contentImages/7.jpg';

const sliderImages = [
    FutureProjectsImage1,
    FutureProjectsImage2,
    FutureProjectsImage3,
    FutureProjectsImage4,
    FutureProjectsImage5,
    FutureProjectsImage6,
    FutureProjectsImage7
];

const currentSlide = ref(0);
let sliderTimer = null;

onMounted(() => {
    sliderTimer = setInterval(() => {
        currentSlide.value = (currentSlide.value + 1) % sliderImages.length;
    }, 4000);
});

onBeforeUnmount(() => {
    if (sliderTimer) {
        clearInterval(sliderTimer);
        sliderTimer = null;
    }
});

const goToSlide = (index) => {
    currentSlide.value = index;
};

const goPrev = () => {
    currentSlide.value = (currentSlide.value - 1 + sliderImages.length) % sliderImages.length;
};

const goNext = () => {
    currentSlide.value = (currentSlide.value + 1) % sliderImages.length;
};

</script>

<template>
    <div class="pt-24 pb-20 px-4 bg-white">
        <div class="max-w-6xl mx-auto">

            <!-- Header -->
            <div class="text-center mb-12">
                <h1 class="font-extrabold text-4xl md:text-5xl text-gray-900 mb-4 tracking-tight">Future Projects</h1>
                <div class="w-24 h-1 bg-green-500 mx-auto rounded-full mb-6"></div>
                <p class="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    IQRA Taleem ul Quran Academy - Proposed Building
                </p>
            </div>

            <!-- Auto Slider -->
            <div class="relative mb-12">
                <div class="relative w-full overflow-hidden rounded-3xl border border-gray-100 bg-gray-50 shadow-md aspect-[16/7]">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent z-10"></div>
                    <div class="absolute inset-0">
                        <div v-for="(slide, index) in sliderImages" :key="slide"
                            class="absolute inset-0 transition-opacity duration-700"
                            :class="currentSlide === index ? 'opacity-100' : 'opacity-0'">
                            <img :src="slide" alt="Future project image" class="w-full h-full object-cover" />
                        </div>
                    </div>
                    <div class="absolute z-20 left-6 bottom-6 text-white">
                        <div class="text-xs uppercase tracking-[0.2em] text-white/80 mb-2">Project Vision</div>
                        <div class="text-2xl md:text-3xl font-bold">Building for the next generation</div>
                    </div>
                    <button @click="goPrev"
                        class="absolute z-20 left-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/80 hover:bg-white text-gray-700 shadow-md transition-colors">
                        <svg class="w-5 h-5 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                        </svg>
                    </button>
                    <button @click="goNext"
                        class="absolute z-20 right-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/80 hover:bg-white text-gray-700 shadow-md transition-colors">
                        <svg class="w-5 h-5 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                    </button>
                </div>
                <div class="flex justify-center gap-2 mt-4">
                    <button v-for="(slide, index) in sliderImages" :key="`${slide}-dot`"
                        @click="goToSlide(index)"
                        class="h-2.5 w-2.5 rounded-full transition-all"
                        :class="currentSlide === index ? 'bg-green-500 w-6' : 'bg-gray-300 hover:bg-gray-400'">
                    </button>
                </div>
            </div>

            <!-- Overview + Snapshot -->
            <div class="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-10 items-start mb-14">
                <div>
                    <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Project Overview</h2>
                    <div class="space-y-4 text-gray-600 leading-relaxed text-base md:text-lg">
                        <p>
                            The proposed multi-story building for the academy will cover approximately 45,000 sq. ft. It will include a boys' hostel with accomodation for 100 male students, residences for the head madaras (male and female) and other necessary staff.
                        </p>
                        <p>
                            The academy is designed to provide primary and secondary education for male and female students separately, along with comprehensive Quranic and Hadith education, in a safe and secure environment.
                        </p>
                        <p>
                            The estimated development cost, based on current market prices (as of January, 2023), is approximately PRS 250 million.
                        </p>
                        <p class="font-semibold text-gray-800">
                            All members and followers are kindly requested to contribute both morally and financially to complete this project for our children.
                        </p>
                    </div>
                </div>

                <div class="modern-card border border-gray-100 p-6 md:p-7 bg-gradient-to-br from-green-50 via-white to-white">
                    <div class="flex items-center justify-between mb-5">
                        <h3 class="text-lg font-bold text-gray-900">Project Snapshot</h3>
                        <span class="text-xs font-semibold text-green-700 bg-green-100 px-2.5 py-1 rounded-full">Key Numbers</span>
                    </div>
                    <div class="grid gap-4">
                        <div class="rounded-2xl border border-green-100 bg-white px-4 py-4 shadow-sm">
                            <div class="text-xs text-gray-500 mb-1">Estimated Area</div>
                            <div class="text-2xl font-extrabold text-green-600">45,000</div>
                            <div class="text-xs text-gray-400">sq. ft.</div>
                        </div>
                        <div class="rounded-2xl border border-green-100 bg-white px-4 py-4 shadow-sm">
                            <div class="text-xs text-gray-500 mb-1">Student Hostel</div>
                            <div class="text-2xl font-extrabold text-green-600">100</div>
                            <div class="text-xs text-gray-400">seats</div>
                        </div>
                        <div class="rounded-2xl border border-green-100 bg-white px-4 py-4 shadow-sm">
                            <div class="text-xs text-gray-500 mb-1">Estimated Cost</div>
                            <div class="text-2xl font-extrabold text-green-600">PRS 250M</div>
                            <div class="text-xs text-gray-400">as of Jan 2023</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<style scoped>
</style>

<script setup>

import FutureProjectsImage from '@/assets/images/futureProjects/futureProjects.svg';

import Image from '@/components/utils/image.vue';
import FutureProjectsImage1 from '@/assets/images/futureProjects/contentImages/1.jpg';
import FutureProjectsImage2 from '@/assets/images/futureProjects/contentImages/2.jpg';
import FutureProjectsImage3 from '@/assets/images/futureProjects/contentImages/3.jpg';
import FutureProjectsImage4 from '@/assets/images/futureProjects/contentImages/4.jpg';
import FutureProjectsImage5 from '@/assets/images/futureProjects/contentImages/5.jpg';
import FutureProjectsImage6 from '@/assets/images/futureProjects/contentImages/6.jpg';
import FutureProjectsImage7 from '@/assets/images/futureProjects/contentImages/7.jpg';

</script>

<template>
    <div class="screenContainerDiv fade-in text-center sm:text-left">
        <h1 class="font-extrabold text-4xl mb-5">Future Projects</h1>
        <div class="font-medium mb-5">IQRA Taleem ul Quran Academy - Proposed Building</div>

        <p class="mb-3">The proposed multi-story building for the academy will cover approximately 45,000 sq. ft. It will include a boys' hostel with accomodation for 100 male students, residences for the head madaras (male and female) and other necessary staff.</p>
        <p class="mb-3">The academy is designed to provide primary and secondary education for male and female students separately, along with comprehensive Quranic and Hadith education, in a safe and secure environment.</p>
        <p class="mb-3">The estimated development cost, based on current market prices (as of January, 2023), is approximately PRS 250 million.</p>
        <p class="mb-5">All members and followers are kindly requested to contribute both morally and financially to complete this project for our children.</p>

        <div class="mt-10 flex justify-center lg:justify-start items-center gap-9 flex-wrap">
            <Image :imageSrc="FutureProjectsImage1" />
            <Image :imageSrc="FutureProjectsImage2" />
            <Image :imageSrc="FutureProjectsImage3" />
            <Image :imageSrc="FutureProjectsImage4" />
            <Image :imageSrc="FutureProjectsImage5" />
            <Image :imageSrc="FutureProjectsImage6" />
            <Image :imageSrc="FutureProjectsImage7" />
        </div>

        <img :src="FutureProjectsImage" alt="Image" class="mt-7 ml-auto mr-auto sm:mr-0" />
    </div>
</template>

<style scoped>
</style>

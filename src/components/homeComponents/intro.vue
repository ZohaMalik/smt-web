<script setup>

import LogoImage from '@/assets/images/logo.svg';
import DonateArrowImage from '@/assets/images/home/intro/donateArrow.svg';
import LectureArrowImage from '@/assets/images/home/intro/lectureArrow.svg';

</script>

<template>
    <div id="introDiv" class="p-5 rounded-lg flex flex-col justify-center items-center mb-12 max-w-screen-lg mx-auto">
        
        <!-- Donate Now Button -->
        <div id="donateNowDiv" class="relative w-full flex justify-end items-center mb-3">
            <button id="donateButton" title="Click to Donate" @click="$router.push('/donations')"
                class="px-3 py-2 rounded-lg bg-green-500 text-white flex justify-center items-center hover:opacity-75">
                <span class="mr-2 text-lg">Donate Now</span>
                <img :src="DonateArrowImage" alt="Arrow" />
            </button>

            <!-- Lecture Link on Bigger Devices -->
            <div id="lectureLinkDiv" class="hidden md:block absolute right-0 w-40 rounded p-2 bg-white text-center border-2 border-black text-sm cursor-pointer hover:border-green-500 hover:opacity-75"
                title="Go to Lecture" @click="$router.push('/iqraTaleemUlQuranAcademy/alQuranLecture')">
                A little effort to convert Quran audio lecture to urdu text and translated into english &nbsp;
                <img :src="LectureArrowImage" alt="Arrow" class="inline w-3" />
            </div>
        </div>

        <!-- Logo -->
        <img :src="LogoImage" alt="Logo" width="200px" class="mb-3" />

        <!-- Org Name -->
        <h1 id="orgName" class="text-center text-white font-extrabold text-5xl mb-3">Sharif Memorial Trust</h1>

        <!-- Org Description -->
        <p id="orgDescription" class="text-center text-black font-semibold text-lg mb-3">
            Sharif Memorial Trust is a civic organization formed by voluntary entities in the social sphere. 
            SMT represents a wide range of interests and is solely dedicated to community welfare.
        </p>

        <!-- Lecture Link on Smaller Devices -->
        <div class="block md:hidden rounded p-2 bg-white text-center border-2 border-black cursor-pointer hover:border-green-500 hover:opacity-75"
            title="Go to Lecture" @click="$router.push('/iqraTaleemUlQuranAcademy/alQuranLecture')">
            A little effort to convert Quran audio lecture to urdu text and translated into english &nbsp;
            <img :src="LectureArrowImage" alt="Arrow" class="inline w-3" />
        </div>
    </div>
</template>

<style scoped>

#introDiv {
    background-image: url("../../assets/images/home/intro/building.svg");
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    background-color: #C3FFF5;
}

@media screen and (max-width: 375px) {
    #donateNowDiv {
        justify-content: center;
    }
}

#donateButton {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

#lectureLinkDiv {
    bottom: -135px;
}

#orgName {
    -webkit-text-stroke: 6px black;
    paint-order: stroke fill;
}

#orgDescription {
    max-width: 750px;
    text-shadow: 0 4px 4px white;
}

</style>

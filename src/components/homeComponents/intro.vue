<script setup>

import LogoImage from '@/assets/images/logo.svg';
import ArrowImage from '@/assets/images/home/intro/arrow.svg';

</script>

<template>
    <div id="introDiv" class="p-5 rounded-lg flex flex-col justify-center items-center mb-12 max-w-screen-lg mx-auto">
        
        <!-- Lecture Button on Smaller Devices -->
        <div id="lectureButtonDiv" class="ml-auto flex justify-center rounded-lg px-3 py-2 bg-green-500 text-white cursor-pointer hover:border-green-500 hover:opacity-75 mb-3"
            title="Go to Lecture" @click="$router.push('/iqraTaleemUlQuranAcademy/alQuranLecture')">
            <span class="mr-2 text-lg">Read the Quran Lecture<span class="hidden sm:inline"> - A Worthwhile Effort</span></span>
            <img :src="ArrowImage" alt="Arrow" />
        </div>

        <!-- Donate Now Button -->
        <div id="donateNowDiv" class="relative w-full flex justify-end items-center mb-3">
            <button id="donateButton" title="Click to Donate" @click="$router.push('/donations')"
                class="px-3 py-2 rounded-lg bg-green-500 text-white flex justify-center items-center hover:opacity-75">
                <span class="mr-2 text-lg">Donate Now</span>
                <img :src="ArrowImage" alt="Arrow" />
            </button>
        </div>

        <!-- Logo -->
        <img :src="LogoImage" alt="Logo" width="200px" class="mb-3" />

        <!-- Org Name -->
        <h1 id="orgName" class="text-center text-white font-extrabold text-5xl mb-3">Sharif Memorial Trust</h1>

        <!-- Org Description -->
        <p id="orgDescription" class="text-center text-black font-semibold text-lg">
            Sharif Memorial Trust is a civic organization formed by voluntary entities in the social sphere. 
            SMT represents a wide range of interests and is solely dedicated to community welfare.
        </p>
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

#lectureButtonDiv {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    align-items: center;
}

@media screen and (max-width: 345px) {
    #lectureButtonDiv {
        align-items: flex-end;
    }
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

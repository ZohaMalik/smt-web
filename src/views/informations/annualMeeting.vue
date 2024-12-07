<script setup>

import AnnualMeetingImage from '@/assets/images/informations/annualMeeting/1.jpg';

</script>

<template>
    <div class="screenContainerDiv fade-in text-center sm:text-left bg-green-100">
        <h1 class="font-extrabold text-4xl mb-10">Annual Meeting</h1>
        <div class="border rounded-lg overflow-hidden shadow-md w-2/4 mx-auto min-w-52">
            <img :src="AnnualMeetingImage" alt="Annual Meeting Image" class="w-full" />
        </div>
    </div>
</template>

<style scoped>
</style>

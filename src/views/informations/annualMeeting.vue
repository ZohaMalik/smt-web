<script setup>

import AnnualMeetingImage from '@/assets/images/informations/annualMeeting/1.jpg';

</script>

<template>
    <div class="pt-24 pb-20 px-4 bg-white">
        <div class="max-w-5xl mx-auto">
            <div class="text-center mb-12">
                <h1 class="font-extrabold text-4xl md:text-5xl text-gray-900 mb-4 tracking-tight">Annual Meeting</h1>
                <div class="w-24 h-1 bg-green-500 mx-auto rounded-full mb-6"></div>
                <p class="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                    A snapshot from our annual gathering.
                </p>
            </div>

            <div class="flex justify-center">
                <div class="modern-card border border-gray-100 p-4 md:p-6 max-w-3xl w-full">
                    <img :src="AnnualMeetingImage" alt="Annual Meeting" class="w-full rounded-xl" />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
</style>

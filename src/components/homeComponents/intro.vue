<script setup>

import LogoImage from '@/assets/images/logo.svg';
import ArrowImage from '@/assets/images/home/intro/arrow.svg';

</script>

<template>
    <div class="relative min-h-screen flex items-center justify-center px-0 pt-24 pb-20 overflow-hidden bg-gradient-to-br from-teal-50 via-green-50 to-cyan-50">
        
        <!-- Background Decorative Elements -->
        <div class="absolute inset-0 z-0 opacity-30">
            <div class="absolute top-20 left-10 w-72 h-72 bg-green-400 rounded-full mix-blend-multiply filter blur-3xl animate-float"></div>
            <div class="absolute bottom-20 right-10 w-96 h-96 bg-teal-400 rounded-full mix-blend-multiply filter blur-3xl animate-float" style="animation-delay: 2s;"></div>
            <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-300 rounded-full mix-blend-multiply filter blur-3xl animate-float" style="animation-delay: 4s;"></div>
        </div>

        <!-- Main Content -->
        <div class="relative z-10 max-w-5xl mx-auto text-center px-6">
            
            <!-- Logo -->
            <div class="mb-8 animate-slide-up">
                <img :src="LogoImage" alt="Sharif Memorial Trust Logo" class="w-48 md:w-56 mx-auto drop-shadow-lg hover:scale-105 transition-transform duration-500" />
            </div>

            <!-- Organization Name -->
            <h1 class="font-extrabold text-4xl md:text-6xl mb-6 animate-slide-up delay-100">
                <span class="text-green-600">Sharif</span>
                <span class="text-gray-900"> Memorial Trust</span>
            </h1>

            <!-- Mission Statement -->
            <div class="max-w-3xl mx-auto mb-12 animate-slide-up delay-200">
                <p class="text-lg md:text-xl text-gray-700 leading-relaxed font-medium mb-4">
                    A civic organization dedicated to community welfare, driven by voluntary action and social responsibility.
                </p>
                <p class="text-base md:text-lg text-gray-600 leading-relaxed">
                    SMT represents a wide range of interests and is solely dedicated to serving our community through education, charitable activities, and civic betterment.
                </p>
            </div>

            <!-- Call-to-Action Buttons (Equal Weight) -->
            <div class="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up delay-300">
                
                <!-- Read Quran Lecture Button -->
                <button @click="$router.push('/iqraTaleemUlQuranAcademy/alQuranLecture')"
                    class="group px-8 py-4 rounded-xl bg-gradient-to-r from-green-500 to-teal-500 text-white font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center min-w-[240px]">
                    <span>Read Quran Lecture</span>
                    <img :src="ArrowImage" alt="Arrow" class="ml-2 w-5 h-5 filter brightness-0 invert group-hover:translate-x-1 transition-transform" />
                </button>

                <!-- Support Button -->
                <button @click="$router.push('/donations')"
                    class="group px-8 py-4 rounded-xl bg-white text-gray-800 font-bold text-lg border-2 border-gray-300 shadow-lg hover:shadow-xl hover:border-green-500 hover:text-green-600 transition-all duration-300 flex items-center justify-center min-w-[240px]">
                    <span>Support Our Mission</span>
                    <svg class="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                    </svg>
                </button>

            </div>

            <!-- Subtle Info Text -->
            <p class="mt-8 text-sm text-gray-500 animate-slide-up delay-400">
                Established 1997 • Serving the community for over 25 years
            </p>

        </div>

    </div>
</template>

<style scoped>
/* Animation delays */
.delay-100 { animation-delay: 0.1s; }
.delay-200 { animation-delay: 0.2s; }
.delay-300 { animation-delay: 0.3s; }
.delay-400 { animation-delay: 0.4s; }
</style>

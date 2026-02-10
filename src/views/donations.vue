<script setup>

import EasyPaisaImage from '@/assets/images/donations/easypaisa.svg';
import UBLImage from '@/assets/images/donations/ubl.svg';

import Image from '@/components/utils/image.vue';
import DonationsImage1 from '@/assets/images/donations/contentImages/1.jpg';
import DonationsImage2 from '@/assets/images/donations/contentImages/2.jpg';
import DonationsImage3 from '@/assets/images/donations/contentImages/3.jpg';
import DonationsImage4 from '@/assets/images/donations/contentImages/4.jpg';
import DonationsImage5 from '@/assets/images/donations/contentImages/5.jpg';
import DonationsImage6 from '@/assets/images/donations/contentImages/6.jpeg';

</script>

<template>
    <div class="pt-24 pb-20 px-4 bg-white">
        <div class="max-w-6xl mx-auto">
            
            <!-- Page Header -->
            <div class="text-center mb-12">
                <h1 class="font-extrabold text-4xl md:text-5xl text-gray-900 mb-4 tracking-tight">Support Our Mission</h1>
                <div class="w-24 h-1 bg-green-500 mx-auto rounded-full mb-6"></div>
                <p class="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    IQRA Taleem ul Quran Academy has resumed its work after a year's gap, under the Sharif Memorial Trust's divine mission. 
                    We kindly request everyone to contribute both financially and physically to support our noble objectives.
                </p>
            </div>

            <!-- Payment Methods -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                
                <!-- EasyPaisa Card -->
                <div class="group modern-card p-8 border border-gray-100 relative overflow-hidden">
                    <div class="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-green-400 to-green-600"></div>
                    <div class="flex flex-col items-center text-center">
                        <div class="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center mb-5 ring-1 ring-green-100 group-hover:scale-105 transition-transform">
                            <img :src="EasyPaisaImage" alt="EasyPaisa" class="w-12 h-12" />
                        </div>
                        <h3 class="text-2xl font-bold text-gray-800 mb-2">EasyPaisa</h3>
                        <p class="text-sm text-gray-500 mb-5">Mobile Wallet</p>
                        <div class="w-full bg-white border border-green-100 rounded-2xl px-6 py-4 shadow-sm">
                            <p class="text-xs text-gray-500 mb-1">Account Number</p>
                            <p class="text-2xl font-mono font-bold text-green-600 tracking-wider">03215188747</p>
                        </div>
                        <p class="text-xs text-gray-400 mt-4">Fastest way to support</p>
                    </div>
                </div>

                <!-- UBL Card -->
                <div class="group modern-card p-8 border border-gray-100 relative overflow-hidden">
                    <div class="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-400 to-blue-600"></div>
                    <div class="flex flex-col items-center text-center">
                        <div class="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-5 ring-1 ring-blue-100 group-hover:scale-105 transition-transform">
                            <img :src="UBLImage" alt="UBL" class="w-12 h-12" />
                        </div>
                        <h3 class="text-2xl font-bold text-gray-800 mb-2">United Bank Limited</h3>
                        <p class="text-sm text-gray-500 mb-5">Bank Transfer</p>
                        <div class="w-full bg-white border border-blue-100 rounded-2xl px-6 py-4 shadow-sm mb-2">
                            <p class="text-xs text-gray-500 mb-1">IBAN</p>
                            <p class="text-base font-mono font-bold text-blue-600 break-all">PK20UNIL0109000251229265</p>
                        </div>
                        <p class="text-sm text-gray-600 font-medium">Cruise Pakistan</p>
                    </div>
                </div>

            </div>

            <!-- Contact Info Card -->
            <div class="modern-card p-8 mb-12 border border-gray-100">
                <div class="flex items-start space-x-4">
                    <div class="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center shrink-0 mt-1">
                        <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3a2 2 0 012 2v2a2 2 0 01-2 2H7a11 11 0 005 5v-1a2 2 0 012-2h2a2 2 0 012 2v3a2 2 0 01-2 2h-1C9.82 20 4 14.18 4 7V6a1 1 0 01-1-1z"></path>
                        </svg>
                    </div>
                    <div class="flex-grow">
                        <h3 class="text-lg font-bold text-gray-800 mb-2">Transaction Confirmation</h3>
                        <p class="text-gray-600 mb-4">
                            Please forward a scanned copy of the transaction along with a description of the donation (Sadaqah/Zakat) via WhatsApp:
                        </p>
                        <div class="bg-gray-50 rounded-xl p-4 inline-block">
                            <p class="font-bold text-gray-800">ENGR. IMRAN NAWAZ MALIK</p>
                            <p class="text-sm text-gray-500 mb-2">General Secretary</p>
                            <a href="tel:+923008561706" class="text-green-600 font-bold text-lg hover:underline">+92 300 8561706</a>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Gallery Section -->
            <div class="mt-16">
                <h2 class="text-3xl font-bold text-center text-gray-800 mb-8">Our Impact</h2>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div class="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                        <Image :imageSrc="DonationsImage1" />
                    </div>
                    <div class="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                        <Image :imageSrc="DonationsImage2" />
                    </div>
                    <div class="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                        <Image :imageSrc="DonationsImage3" />
                    </div>
                    <div class="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                        <Image :imageSrc="DonationsImage4" />
                    </div>
                    <div class="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                        <Image :imageSrc="DonationsImage5" />
                    </div>
                    <div class="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                        <Image :imageSrc="DonationsImage6" />
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<style scoped>
/* Removed background image for cleaner modern look */
</style>

<script setup>

import LeavesHeaderImage from '@/assets/images/home/leaves.svg';
import EarthImage from '@/assets/images/home/aboutUs/earth.svg';
import ScholarHatImage from '@/assets/images/home/aboutUs/scholarHat.svg';
import HealthShieldImage from '@/assets/images/home/aboutUs/healthShield.svg';
import LeavesImage from '@/assets/images/home/aboutUs/leaves.svg';
import NewspaperImage from '@/assets/images/home/aboutUs/newspaper.svg';

</script>

<template>
    <div class="py-20 px-4 bg-white">
        <div class="max-w-6xl mx-auto">
            
            <!-- Section Header -->
            <div class="text-center mb-16 relative">
                <h2 class="font-extrabold text-4xl md:text-5xl text-gray-900 mb-4 tracking-tight">About Us</h2>
                <div class="w-24 h-1 bg-green-500 mx-auto rounded-full"></div>
            </div>

            <!-- Main Content Grid -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
                <!-- Text Content -->
                <div class="space-y-6 text-lg text-gray-600 leading-relaxed font-medium">
                    <p class="animate-slide-up delay-100">
                        <span class="text-green-600 font-bold text-xl">Sharif Memorial Trust</span> was founded by the late Sharif Ahmed Malik, a visionary philanthropist dedicated to community welfare and Islamic values.
                    </p>
                    <p class="animate-slide-up delay-200">
                        Starting with <span class="text-gray-900 font-semibold">Madrisa Taleem Ul Quran</span> in 1977, the trust has grown from a local initiative in Kotli Loharan East to a comprehensive organization serving the broader community.
                    </p>
                    <p class="animate-slide-up delay-300">
                        Established formally in 1997, the Trust continues to honor its founder's legacy through sustainable development, education, and social welfare programs.
                    </p>
                </div>

                <!-- Highlight Card -->
                <div class="modern-card glass border-l-4 border-green-500 p-8 transform rotate-1 hover:rotate-0 transition-transform duration-500">
                    <h3 class="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
                    <p class="text-gray-600 italic">
                        "To foster a strong, active, and diverse community network dedicated to civic betterment, skill development, and social welfare."
                    </p>
                </div>
            </div>

            <!-- Objectives Grid -->
            <h3 class="text-3xl font-bold text-center text-gray-800 mb-12">Our Core Objectives</h3>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
                
                <!-- Objective 1 -->
                <div class="modern-card group flex flex-col items-center text-center p-6 hover:bg-green-50 border border-gray-100 h-full">
                    <div class="w-16 h-16 mb-5 rounded-full bg-green-100 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                        <img :src="EarthImage" alt="Civic Duty" class="w-8 h-8" />
                    </div>
                    <h4 class="text-lg font-bold text-gray-800 mb-3 group-hover:text-green-600 transition-colors min-h-[56px] flex items-center">Civic Betterment</h4>
                    <p class="text-gray-600 text-sm leading-relaxed">Promoting collective efforts toward civic improvement within provincial boundaries.</p>
                </div>

                <!-- Objective 2 -->
                <div class="modern-card group flex flex-col items-center text-center p-6 hover:bg-green-50 border border-gray-100 h-full">
                    <div class="w-16 h-16 mb-5 rounded-full bg-blue-100 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                        <img :src="ScholarHatImage" alt="Education" class="w-8 h-8" />
                    </div>
                    <h4 class="text-lg font-bold text-gray-800 mb-3 group-hover:text-green-600 transition-colors min-h-[56px] flex items-center">Skill Development</h4>
                    <p class="text-gray-600 text-sm leading-relaxed">Empowering local manpower through specialized international industrial accreditation programs.</p>
                </div>

                <!-- Objective 3 -->
                <div class="modern-card group flex flex-col items-center text-center p-6 hover:bg-green-50 border border-gray-100 h-full">
                    <div class="w-16 h-16 mb-5 rounded-full bg-red-100 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                        <img :src="HealthShieldImage" alt="Health" class="w-8 h-8" />
                    </div>
                    <h4 class="text-lg font-bold text-gray-800 mb-3 group-hover:text-green-600 transition-colors min-h-[56px] flex items-center">Health & Safety</h4>
                    <p class="text-gray-600 text-sm leading-relaxed">Raising community awareness on health, safety, and environmental protection.</p>
                </div>

                <!-- Objective 4 -->
                <div class="modern-card group flex flex-col items-center text-center p-6 hover:bg-green-50 border border-gray-100 h-full">
                    <div class="w-16 h-16 mb-5 rounded-full bg-yellow-100 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                        <img :src="NewspaperImage" alt="Publications" class="w-8 h-8" />
                    </div>
                    <h4 class="text-lg font-bold text-gray-800 mb-3 group-hover:text-green-600 transition-colors min-h-[56px] flex items-center">Civic Pride</h4>
                    <p class="text-gray-600 text-sm leading-relaxed">Publishing our newsletter to keep members informed and engaged with SMT activities.</p>
                </div>

                <!-- Objective 5 -->
                <div class="modern-card group flex flex-col items-center text-center p-6 hover:bg-green-50 border border-gray-100 h-full">
                    <div class="w-16 h-16 mb-5 rounded-full bg-purple-100 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                        <img :src="LeavesImage" alt="Charity" class="w-8 h-8" />
                    </div>
                    <h4 class="text-lg font-bold text-gray-800 mb-3 group-hover:text-green-600 transition-colors min-h-[56px] flex items-center">Charitable Activities</h4>
                    <p class="text-gray-600 text-sm leading-relaxed">Conducting broad-based charitable initiatives to support the underprivileged.</p>
                </div>

                <!-- Objective 6 (Optional - for better grid balance) -->
                <div class="modern-card group flex flex-col items-center text-center p-6 hover:bg-green-50 border border-gray-100 h-full">
                    <div class="w-16 h-16 mb-5 rounded-full bg-teal-100 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                        <svg class="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                        </svg>
                    </div>
                    <h4 class="text-lg font-bold text-gray-800 mb-3 group-hover:text-green-600 transition-colors min-h-[56px] flex items-center">Community Building</h4>
                    <p class="text-gray-600 text-sm leading-relaxed">Fostering collaboration with civic groups and federations to amplify our community impact.</p>
                </div>
            </div>


            <!-- Additional Info -->
            <div class="bg-gray-50 rounded-3xl p-8 md:p-12 border border-gray-200">
                <div class="grid md:grid-cols-2 gap-10">
                    <div>
                        <h4 class="text-xl font-bold text-gray-900 mb-4 flex items-center">
                            <span class="w-2 h-8 bg-green-500 mr-3 rounded-full"></span>
                            Nature of Activities
                        </h4>
                        <p class="text-gray-600 leading-relaxed">
                            We are a non-partisan, non-sectarian organization. While we do not participate in political campaigns, we actively advocate for legislation and actions that promote community welfare.
                        </p>
                    </div>
                    <div>
                        <h4 class="text-xl font-bold text-gray-900 mb-4 flex items-center">
                            <span class="w-2 h-8 bg-teal-500 mr-3 rounded-full"></span>
                            Affiliations
                        </h4>
                        <p class="text-gray-600 leading-relaxed">
                            We collaborate with like-minded federations and civic groups to amplify our impact, always maintaining our independent identity and core values.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<style scoped>
/* Scoped styles removed in favor of Tailwind classes */
</style>

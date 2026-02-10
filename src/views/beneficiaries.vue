<script setup>

import BeneficiariesImage from '@/assets/images/beneficiaries/beneficiaries.svg';

</script>

<template>
    <div class="pt-24 pb-20 px-4 bg-white">
        <div class="max-w-6xl mx-auto">
            <div class="text-center mb-12">
                <h1 class="font-extrabold text-4xl md:text-5xl text-gray-900 mb-4 tracking-tight">Beneficiaries</h1>
                <div class="w-24 h-1 bg-green-500 mx-auto rounded-full mb-6"></div>
                <p class="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    The beneficiaries of the trust shall be public at large.
                </p>
            </div>

            <div class="flex justify-center">
                <div class="modern-card border border-gray-100 bg-gray-50 p-6 md:p-8">
                    <img :src="BeneficiariesImage" alt="Beneficiaries illustration" class="w-full max-w-3xl mx-auto" />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
</style>

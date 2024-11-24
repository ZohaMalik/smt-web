<script setup>

import BeneficiariesImage from '@/assets/images/beneficiaries/beneficiaries.svg';

</script>

<template>
    <div class="screenContainerDiv fade-in text-center sm:text-left">
        <h1 class="font-extrabold text-4xl mb-5">Beneficiaries</h1>
        <p class="mb-5">The beneficiaries of the trust shall be public at large.</p>
        <img id="beneficiariesImage" :src="BeneficiariesImage" alt="Beneficiaries Image" class="ml-auto mr-auto sm:mr-0" />
    </div>
</template>

<style scoped>

#beneficiariesImage { height: 700px; }
@media screen and (max-width: 800px) { #beneficiariesImage { height: 400px; } }
@media screen and (max-width: 500px) { #beneficiariesImage { height: 300px; } }

</style>

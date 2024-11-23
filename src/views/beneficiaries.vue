<script setup>

import BeneficiariesIcon from '@/assets/images/beneficiaries/beneficiaries.svg';

</script>

<template>
    <div class="screenContainerDiv fade-in">
        <h1 class="font-extrabold text-4xl mb-5">Beneficiaries</h1>
        <p class="mb-5">The beneficiaries of the trust shall be public at large.</p>
        <img id="beneficiariesImage" :src="BeneficiariesIcon" alt="Beneficiaries Image" />
    </div>
</template>

<style scoped>

#beneficiariesImage {
    height: 700px;
    margin-left: auto;
}

@media screen and (max-width: 800px) { #beneficiariesImage { height: 500px; } }
@media screen and (max-width: 500px) { #beneficiariesImage { height: 300px; } }

</style>

<script setup>

import EasyPaisaImage from '@/assets/images/donations/easypaisa.svg';
import UBLImage from '@/assets/images/donations/ubl.svg';

</script>

<template>
    <div id="donationsDiv" class="screenContainerDiv fade-in text-center sm:text-left">
        <h1 class="font-extrabold text-4xl mb-5">Donations</h1>
        <p class="mb-5">IQRA Taleem ul Quran Academy has resumed its work after a year's gap, under the Sharif Memorial Trust's divine mission inspired by the great mystics of Islam, aligned with the latest educational advancements. We kindly request everyone to contribute both financially and physically to support and promote the noble objectives of the Trust.</p>
        <p class="mb-10">Please donate (Zakat/Sadaqah) directly through:</p>

        <div class="flex justify-center items-baseline flex-wrap">
            <div class="flex flex-col justify-center items-center mb-10 sm:mr-20">
                <img :src="EasyPaisaImage" alt="Easy Paisa Image" class="mb-3" />
                <span class="font-bold">EasyPaisa Account #:</span>
                <span>03215188747</span>
            </div>
            <div class="flex flex-col justify-center items-center mb-10">
                <img :src="UBLImage" alt="Easy Paisa Image" class="mb-3" />
                <span class="font-bold">United Bank Limited IBAN:</span>
                <span>PK20UNIL0109000251229265</span>
                <span>Cruise Pakistan</span>
            </div>
        </div>

        <p class="mb-3">Note: Please forward a scanned copy of the transaction along with a description of the donation (i.e. Sadaqah/Zakat) via WhatsApp:</p>
        <div class="font-medium">ENGR. IMRAN NAWAZ MALIK (General Secretary)</div>
        <div class="text-green-500 font-medium">+92 300 8561706</div>

        <div style="min-height: 500px;"></div>
    </div>
</template>

<style scoped>

#donationsDiv {
    background-image: url('../assets/images/donations/flowerBg.svg');
    background-repeat: no-repeat;
    background-position: bottom right;
}

</style>

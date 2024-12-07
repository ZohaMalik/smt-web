<script setup>

import Image from '@/components/utils/image.vue';
import UpdatesImage from '@/assets/images/informations/updates/1.jpg';
import ConstructionImage1 from '@/assets/images/informations/updates/construction/1.jpg';
import ConstructionImage2 from '@/assets/images/informations/updates/construction/2.jpg';

</script>

<template>
    <div class="screenContainerDiv fade-in text-center sm:text-left bg-green-100">
        <h1 class="font-extrabold text-4xl mb-5">Updates</h1>
        <div class="flex justify-center sm:justify-start items-center mb-5">
            <Image :imageSrc="UpdatesImage" />
        </div>
        <div class="font-medium mb-5">Construction & Repairing of (DRS PURA) GRAVE YARD WALLS</div>
        <div class="flex justify-center sm:justify-start items-center gap-9 flex-wrap">
            <Image :imageSrc="ConstructionImage1" />
            <Image :imageSrc="ConstructionImage2" />
        </div>
    </div>
</template>

<style scoped>
</style>

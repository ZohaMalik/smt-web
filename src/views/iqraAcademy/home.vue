<script setup>

import TopHeaderDesignImage from '@/assets/images/iqraTaleemUlQuranAcademy/topHeaderDesign.svg';
import BottomHeaderDesignImage from '@/assets/images/iqraTaleemUlQuranAcademy/bottomHeaderDesign.svg';
import EndLineDesignImage from '@/assets/images/iqraTaleemUlQuranAcademy/endLineDesign.svg';

</script>

<template>
    <div class="screenContainerDiv fade-in flex flex-col justify-center items-center text-center">
        <img :src="TopHeaderDesignImage" alt="Image" />
        <h1 class="font-extrabold text-4xl">IQRA Taleem ul Quran Academy</h1>
        <img :src="BottomHeaderDesignImage" alt="Image" class="mb-5" />
        <p class="text-2xl mb-5">
            Established in 1977 as Madrassa Taleem ul Quran under the supervision of<br/>
            <b>Sharif Memorial Trust,</b><br/>
            it was upgraded and renamed as Iqra Taleem ul Quran Academy in 2020.<br/>
            The academy is currently affiliated with<br/>
            <b>Iqra Education Foundation, Wazirabad,</b><br/>
            and follows a curriculum sponsored by<br/>
            <b>Jamia Tur Rasheed, Karachi.</b>
        </p>
        <img :src="EndLineDesignImage" alt="Image" />
    </div>
</template>

<style scoped>
</style>

<script setup>

import LeavesHeaderImage from '@/assets/images/home/leaves.svg';
import EarthImage from '@/assets/images/home/aboutUs/earth.svg';
import ScholarHatImage from '@/assets/images/home/aboutUs/scholarHat.svg';
import HealthShieldImage from '@/assets/images/home/aboutUs/healthShield.svg';
import LeavesImage from '@/assets/images/home/aboutUs/leaves.svg';
import NewspaperImage from '@/assets/images/home/aboutUs/newspaper.svg';

</script>

<template>
    <div>
        <h2 class="font-extrabold text-4xl mb-5 max-w-screen-lg mx-auto flex items-center gap-2">
            <img :src="LeavesHeaderImage" alt="Leaves Image" width="30" /> <span>About Us</span>
        </h2>
        <!-- First Paragraph -->
        <div class="max-w-screen-lg mx-auto mb-8">
            <p>
                <span class="font-medium">Sharif Memorial Trust</span> was established in <span class="font-medium">1997</span> by the descendants of the late <span class="font-medium">Sharif Ahmed Malik</span>,                        
                a respected <span class="font-medium">philanthropist</span> and <span class="font-medium">agriculturist</span>, to carry forward his legacy of Islamic education and community service.
            </p>
            <p>
                His mission began in <span class="font-medium">1977</span> with the founding of <span class="font-medium">Madrisa Taleem Ul Quran</span> and <span class="font-medium">Jamia Masjid Hanfia Talab Wali (Daras Pura)</span> in Kotli Loharan East, Sialkot, Pakistan.
                In his memory, the family donated residential property and land to support the Trust's charitable work.
            </p>
            <p>
                Today, the Trust continues Haji Sharif Ahmed Malik's lifelong commitment to faith, education, and social welfare, driven by active and diverse community networks. Its main objectives are:
            </p>
        </div>

        <!-- Mid Part - Objective Points -->
        <div class="flex justify-center items-baseline flex-wrap gap-y-10 gap-x-12 mb-12 max-w-screen-lg mx-auto">
            <div class="flex flex-col justify-center items-center objectiveDiv text-center">
                <img :src="LeavesImage" alt="Leaves Image" />
                <p>Promoting civic betterment across the province.</p>
            </div>

            <div class="flex flex-col justify-center items-center objectiveDiv text-center">
                <img :src="ScholarHatImage" alt="Scholar Hat Image" />
                <p>Developing local manpower through international industrial accreditation programs.</p>
            </div>

            <div class="flex flex-col justify-center items-center objectiveDiv text-center">
                <img :src="HealthShieldImage" alt="Health Shield Image" />
                <p>Raising community awareness on safety, health, and the environment through courses and conferences.</p>
            </div>

            <div class="flex flex-col justify-center items-center objectiveDiv text-center">
                <img :src="NewspaperImage" alt="Newspaper Image" />
                <p>Advancing SMT objectives through “Civic Pride,” the organization's newsletter.</p>
            </div>

            <div class="flex flex-col justify-center items-center objectiveDiv text-center">
                <img :src="LeavesImage" alt="Leaves Image" />
                <p>Charitable activities</p>
            </div>
        </div>

        <!-- Last Paragraphs -->
        <div class="max-w-screen-lg mx-auto mb-10">
            <div class="mb-2">
                <span class="font-medium">Nature of Activities:</span> The organization is non-partisan and non-sectarian, focusing solely on its mission. It may comment on legislation or actions affecting community welfare.
            </div>
            <div>
                <span class="font-medium">Affiliation with Other Groups:</span> The Trust may collaborate with aligned civic groups, ensuring its own independence is maintained.
            </div>
            <!-- <p></p> -->
        </div>
    </div>
</template>

<style scoped>

.objectiveDiv {
    max-width: 280px;
}

</style>

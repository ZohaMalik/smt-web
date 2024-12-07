<script setup>

import EarthImage from '@/assets/images/home/aboutUs/earth.svg';
import ScholarHatImage from '@/assets/images/home/aboutUs/scholarHat.svg';
import HealthShieldImage from '@/assets/images/home/aboutUs/healthShield.svg';
import LeavesImage from '@/assets/images/home/aboutUs/leaves.svg';
import NewspaperImage from '@/assets/images/home/aboutUs/newspaper.svg';

</script>

<template>
    <div>
        <h2 class="font-extrabold text-4xl mb-5 max-w-screen-lg mx-auto">About Us</h2>
        <div id="aboutUsText" class="mb-10">
            <p>Sharif Memorial Trust was founded by the late Sharif Ahmed Malik, a philanthropist and agriculturist by profession, who was blessed with the ability to propagate Islamic ideology. His first project was launched in Kotli Loharan East, Kharota Syedan, Sialkot, Pakistan, in 1977 as Madrisa Taleem Ul Quran, along with Jamia Masjid Hanfia Talab Wali (Daras Pura).</p>
            <p>In the early 1940s, he moved from Behlolpur, a village located on Jalalpur-Marala Headworks Road, Sialkot-Punjab, to Kotli Loharan East, Sialkot, to look after his father's (Ghulam Muyidin Khokhar Rajput) properties and agricultural lands. Later, the descendants of Haji Sharif Ahmed Malik established a trust in his memory in 1997, named "Sharif Memorial Trust."</p>
            <p>The successors of the Kotli Loharan property donated the main residence, shops, and land adjacent to the mosque to the Trust for its divine cause.</p>
            <p>Sharif Memorial Trust is characterized by strong, active, diverse community-based groups and networks with the following main objectives:</p>
        </div>

        <div class="flex justify-center items-baseline flex-wrap gap-y-10 gap-x-12 mb-10 max-w-screen-lg mx-auto">
            <div class="flex flex-col justify-center items-center objectiveDiv text-center">
                <img :src="EarthImage" alt="Earth Image" />
                <p>Promoting all efforts toward civic betterment in the area within the provincial boundaries.</p>
            </div>

            <div class="flex flex-col justify-center items-center objectiveDiv text-center">
                <img :src="ScholarHatImage" alt="Scholar Hat Image" />
                <p>Improving local manpower skills by arranging preparation programs for specialized international industrial accrediation courses to fulfill local job seekers' requirements.</p>
            </div>

            <div class="flex flex-col justify-center items-center objectiveDiv text-center">
                <img :src="HealthShieldImage" alt="Health Shield Image" />
                <p>Promoting community awareness of safety, health, and the environment by organizing short courses and conferences.</p>
            </div>

            <div class="flex flex-col justify-center items-center objectiveDiv text-center">
                <img :src="NewspaperImage" alt="Newspaper Image" />
                <p>Promoting SMT objectives by publishing “Civic Pride”, a newsletter for the members of the organization.</p>
            </div>

            <div class="flex flex-col justify-center items-center objectiveDiv text-center">
                <img :src="LeavesImage" alt="Leaves Image" />
                <p>Charitable activities</p>
            </div>
        </div>
    </div>
</template>

<style scoped>

.objectiveDiv {
    max-width: 280px;
}

</style>

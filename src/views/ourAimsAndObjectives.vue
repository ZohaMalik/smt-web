<script setup>

import FirstKalmaIcon from '@/assets/images/ourAimsAndObjectives/firstKalma.svg';
import MasjidIcon from '@/assets/images/ourAimsAndObjectives/masjid.svg';
import SpeakerIcon from '@/assets/images/ourAimsAndObjectives/speaker.svg';
import BalanceIcon from '@/assets/images/ourAimsAndObjectives/balance.svg';
import BulbIcon from '@/assets/images/ourAimsAndObjectives/bulb.svg';
import BookIcon from '@/assets/images/ourAimsAndObjectives/book.svg';
import SupportIcon from '@/assets/images/ourAimsAndObjectives/support.svg';
import ShapesIcon from '@/assets/images/ourAimsAndObjectives/shapes.svg';
import BuildingIcon from '@/assets/images/ourAimsAndObjectives/building.svg';
import CalendarIcon from '@/assets/images/ourAimsAndObjectives/calendar.svg';
import BadgeIcon from '@/assets/images/ourAimsAndObjectives/badge.svg';
import GearsIcon from '@/assets/images/ourAimsAndObjectives/gears.svg';
import PermissionsIcon from '@/assets/images/ourAimsAndObjectives/permissions.svg';
import ObjectivesIcon from '@/assets/images/ourAimsAndObjectives/objectives.svg';

</script>

<template>
    <div class="screenContainerDiv fade-in text-xl">
        <h1 class="font-extrabold text-4xl mb-5 text-center sm:text-left">Our Aims & Objectives</h1>
        <p class="mb-5 text-center sm:text-left">To establish hospitals, medical clinics, test laboratories, and academics for the public in Kotli Loharan (East), Sialkot, the Sharif Memorial Trust aims to:</p>

        <div class="flex flex-col sm:flex-row justify-start items-center mb-4 text-center sm:text-left">
            <img :src="FirstKalmaIcon" alt="Image" class="mr-4" />
            <p>Teach and promote the divine mission of Islamic mystics.</p>
        </div>

        <div class="flex flex-col sm:flex-row justify-start items-center mb-4 text-center sm:text-left">
            <img :src="MasjidIcon" alt="Image" class="mr-4" />
            <p>Foster love for the Holy Prophet Muhammad (صَلَّى ٱللَّٰهُ عَلَيْهِ وَسَلَّمَ) in the hearts of Muslims.</p>
        </div>

        <div class="flex flex-col sm:flex-row justify-start items-center mb-4 text-center sm:text-left">
            <img :src="SpeakerIcon" alt="Image" class="mr-4" />
            <p>Raise public awareness on basic health issues through volunteers, community meetings, and reading materials in local languages.</p>
        </div>

        <div class="flex flex-col sm:flex-row justify-start items-center mb-4 text-center sm:text-left">
            <img :src="BalanceIcon" alt="Image" class="mr-4" />
            <p>Promote justice, equity, unity, and patriotism; condemn sectarian violence, terrorism, and violations of fundamental rights.</p>
        </div>

        <div class="flex flex-col sm:flex-row justify-start items-center mb-4 text-center sm:text-left">
            <img :src="BulbIcon" alt="Image" class="mr-4" />
            <p>Establish educational institutions for males and females separately, and technical and professional training centers for girls.</p>
        </div>

        <div class="flex flex-col sm:flex-row justify-start items-center mb-4 text-center sm:text-left">
            <img :src="BookIcon" alt="Image" class="mr-4" />
            <p>Provide scholarships to deserving students, build a well-equipped library, establish a database with electronic connectivity and a website for research publications, manage the mosque built on Trust property, and oversee its affairs.</p>
        </div>

        <div class="flex flex-col sm:flex-row justify-start items-center mb-4 text-center sm:text-left">
            <img :src="SupportIcon" alt="Image" class="mr-4" />
            <p>Develop special projects to support destitute, poor, helpless, physically and psychologically disabled, or able individuals, including women, girls, the elderly, and children, by providing medical, psychological, residential, educational, training, vocational, legal, and business support to help them live independently and contribute positively to society.</p>
        </div>

        <div class="flex flex-col sm:flex-row justify-start items-center mb-4 text-center sm:text-left">
            <img :src="ShapesIcon" alt="Image" class="mr-4" />
            <p>Form partnerships, both within Pakistan and internationally, with individuals, trusts, institutions, associations, foundations, and corporations with similar interests and objectives.</p>
        </div>

        <div class="flex flex-col sm:flex-row justify-start items-center mb-4 text-center sm:text-left">
            <img :src="BuildingIcon" alt="Image" class="mr-4" />
            <p>Hire, open, lease, buy, purchase, sell, rent, and store assets, buildings, offices, equipment, machinery, materials, and products related to the Trust's objectives.</p>
        </div>

        <div class="flex flex-col sm:flex-row justify-start items-center mb-4 text-center sm:text-left">
            <img :src="CalendarIcon" alt="Image" class="mr-4" />
            <p>Hold seminars, workshops, sessions, sports competitions, etc., to promote human welfare and awareness.</p>
        </div>

        <div class="flex flex-col sm:flex-row justify-start items-center mb-4 text-center sm:text-left">
            <img :src="BadgeIcon" alt="Image" class="mr-4" />
            <p>Offer prizes, gifts, medals, and other incentives to students, children, adults, and others who distinguish themselves in human welfare projects and activities.</p>
        </div>

        <div class="flex flex-col sm:flex-row justify-start items-center mb-4 text-center sm:text-left">
            <img :src="GearsIcon" alt="Image" class="mr-4" />
            <p>Perform all necessary work, projects, activities, policies, strategies, and administrative tasks to ensure the smooth and progressive operation of the Trust and its objectives, following relevant rules, regulations, enactments, and laws of the Government of Pakistan and other organizations.</p>
        </div>

        <div class="flex flex-col sm:flex-row justify-start items-center mb-10 text-center sm:text-left">
            <img :src="PermissionsIcon" alt="Image" class="mr-4" />
            <p>Obtain necessary licenses, permissions, and approvals from relevant public authorities as required under statutory regulations and laws to carry out specific objectives.</p>
        </div>
        
        <hr class="mb-10" />

        <div class="font-medium mb-5 text-center sm:text-left">The trust objectives are:</div>
        <p class="text-center sm:text-left mb-4">Sharif Memorial Trust, Sialkot, is an independent, non-governmental, and non-profit organization. It operates under its own memorandum of association, rules, regulations, and leadership. The Trust is not affiliated with any political party and is solely dedicated to charitable activities and programs. Any financial support provided to other organizations, domestically or internationally, will be solely for the divine mission of the great mystics of Islam.</p>
        <img :src="ObjectivesIcon" alt="Objectives Image" class="ml-auto mr-auto sm:mr-0" />
    </div>
</template>

<style scoped>
</style>

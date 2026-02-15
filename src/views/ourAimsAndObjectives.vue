<script setup>

import FirstKalmaImage from '@/assets/images/ourAimsAndObjectives/firstKalma.svg';
import MasjidImage from '@/assets/images/ourAimsAndObjectives/masjid.svg';
import SpeakerImage from '@/assets/images/ourAimsAndObjectives/speaker.svg';
import BalanceImage from '@/assets/images/ourAimsAndObjectives/balance.svg';
import BulbImage from '@/assets/images/ourAimsAndObjectives/bulb.svg';
import BookImage from '@/assets/images/ourAimsAndObjectives/book.svg';
import SupportImage from '@/assets/images/ourAimsAndObjectives/support.svg';
import ShapesImage from '@/assets/images/ourAimsAndObjectives/shapes.svg';
import BuildingImage from '@/assets/images/ourAimsAndObjectives/building.svg';
import CalendarImage from '@/assets/images/ourAimsAndObjectives/calendar.svg';
import BadgeImage from '@/assets/images/ourAimsAndObjectives/badge.svg';
import GearsImage from '@/assets/images/ourAimsAndObjectives/gears.svg';
import PermissionsImage from '@/assets/images/ourAimsAndObjectives/permissions.svg';
import ObjectivesImage from '@/assets/images/ourAimsAndObjectives/objectives.svg';

const aims = [
    {
        icon: FirstKalmaImage,
        text: 'Teach and promote the divine mission of Islamic mystics.',
        tone: 'bg-green-100 text-green-600'
    },
    {
        icon: MasjidImage,
        text: 'Foster love for the Holy Prophet Muhammad (صَلَّى ٱللَّٰهُ عَلَيْهِ وَسَلَّمَ) in the hearts of Muslims.',
        tone: 'bg-teal-100 text-teal-600'
    },
    {
        icon: SpeakerImage,
        text: 'Raise public awareness on basic health issues through volunteers, community meetings, and reading materials in local languages.',
        tone: 'bg-blue-100 text-blue-600'
    },
    {
        icon: BalanceImage,
        text: 'Promote justice, equity, unity, and patriotism; condemn sectarian violence, terrorism, and violations of fundamental rights.',
        tone: 'bg-emerald-100 text-emerald-600'
    },
    {
        icon: BulbImage,
        text: 'Establish educational institutions for males and females separately, and technical and professional training centers for girls.',
        tone: 'bg-amber-100 text-amber-600'
    },
    {
        icon: BookImage,
        text: 'Provide scholarships to deserving students, build a well-equipped library, establish a database with electronic connectivity and a website for research publications, manage the mosque built on Trust property, and oversee its affairs.',
        tone: 'bg-purple-100 text-purple-600'
    },
    {
        icon: SupportImage,
        text: 'Develop special projects to support destitute, poor, helpless, physically and psychologically disabled, or able individuals, including women, girls, the elderly, and children, by providing medical, psychological, residential, educational, training, vocational, legal, and business support to help them live independently and contribute positively to society.',
        tone: 'bg-rose-100 text-rose-600'
    },
    {
        icon: ShapesImage,
        text: 'Form partnerships, both within Pakistan and internationally, with individuals, trusts, institutions, associations, foundations, and corporations with similar interests and objectives.',
        tone: 'bg-cyan-100 text-cyan-600'
    },
    {
        icon: BuildingImage,
        text: 'Hire, open, lease, buy, purchase, sell, rent, and store assets, buildings, offices, equipment, machinery, materials, and products related to the Trust\'s objectives.',
        tone: 'bg-lime-100 text-lime-600'
    },
    {
        icon: CalendarImage,
        text: 'Hold seminars, workshops, sessions, sports competitions, etc., to promote human welfare and awareness.',
        tone: 'bg-orange-100 text-orange-600'
    },
    {
        icon: BadgeImage,
        text: 'Offer prizes, gifts, medals, and other incentives to students, children, adults, and others who distinguish themselves in human welfare projects and activities.',
        tone: 'bg-fuchsia-100 text-fuchsia-600'
    },
    {
        icon: GearsImage,
        text: 'Perform all necessary work, projects, activities, policies, strategies, and administrative tasks to ensure the smooth and progressive operation of the Trust and its objectives, following relevant rules, regulations, enactments, and laws of the Government of Pakistan and other organizations.',
        tone: 'bg-sky-100 text-sky-600'
    },
    {
        icon: PermissionsImage,
        text: 'Obtain necessary licenses, permissions, and approvals from relevant public authorities as required under statutory regulations and laws to carry out specific objectives.',
        tone: 'bg-indigo-100 text-indigo-600'
    }
];

</script>

<template>
    <div class="pt-24 pb-20 px-4 bg-white">
        <div class="max-w-6xl mx-auto">

            <!-- Page Header -->
            <div class="text-center mb-14">
                <h1 class="font-extrabold text-4xl md:text-5xl text-gray-900 mb-4 tracking-tight">Our Aims & Objectives</h1>
                <div class="w-24 h-1 bg-green-500 mx-auto rounded-full mb-6"></div>
                <p class="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
                    Guided by compassion and community responsibility, the Sharif Memorial Trust is committed to establishing hospitals, medical clinics, test laboratories, and academic institutions for the public in Kotli Loharan (East), Sialkot. Our aims are:
                </p>
            </div>

            <!-- Aims Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
                <div v-for="(aim, index) in aims" :key="index"
                    class="group relative modern-card border border-gray-100 p-6 md:p-7 overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 h-full bg-gradient-to-br from-white via-white to-green-50/40">
                    <div class="absolute left-0 top-0 h-full w-1 bg-green-500/25"></div>
                    <div class="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-green-100/70 blur-2xl opacity-70"></div>
                    <div class="absolute right-5 top-4 text-4xl md:text-5xl font-extrabold text-green-100/70">
                        {{ String(index + 1).padStart(2, '0') }}
                    </div>

                    <div class="flex items-start gap-5 h-full">
                        <div class="w-14 h-14 md:w-[60px] md:h-[60px] rounded-2xl flex items-center justify-center shrink-0 ring-1 ring-black/5" :class="aim.tone">
                            <img :src="aim.icon" alt="Aim icon" class="w-7 h-7" />
                        </div>
                        <div class="flex flex-col h-full pr-6">
                            <div class="flex items-center gap-3 mb-3">
                                <div class="text-xs font-semibold text-green-600 tracking-[0.25em] uppercase">Aim {{ String(index + 1).padStart(2, '0') }}</div>
                                <span class="hidden sm:block h-px w-10 bg-green-200"></span>
                            </div>
                            <p class="text-gray-900 text-lg md:text-xl leading-relaxed md:leading-8 font-semibold">
                                {{ aim.text }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Trust Objectives -->
            <div class="mt-16">
                <div class="modern-card border border-gray-100 bg-gray-50 p-8 md:p-12">
                    <div class="grid md:grid-cols-2 gap-10 items-center">
                        <div>
                            <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-4">The Trust Objectives Are</h2>
                            <p class="text-gray-600 leading-relaxed">
                                Sharif Memorial Trust, Sialkot, is an independent, non-governmental, and non-profit organization. It operates under its own memorandum of association, rules, regulations, and leadership. The Trust is not affiliated with any political party and is solely dedicated to charitable activities and programs. Any financial support provided to other organizations, domestically or internationally, will be solely for the divine mission of the great mystics of Islam.
                            </p>
                        </div>
                        <div class="flex justify-center md:justify-end">
                            <img :src="ObjectivesImage" alt="Objectives illustration" class="w-full max-w-xs md:max-w-sm drop-shadow-sm" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<style scoped>
</style>

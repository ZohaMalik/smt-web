import { createRouter, createWebHistory } from 'vue-router';

// views
import Home from '@/views/home.vue';
import OurAimsAndObjectives from '@/views/ourAimsAndObjectives.vue';
import Beneficiaries from '@/views/beneficiaries.vue';
import Donations from '@/views/donations.vue';
import FutureProjects from '@/views/futureProjects.vue';
import IqraAcademyHome from '@/views/iqraAcademy/home.vue';
import IqraAcademyQuranLecture from '@/views/iqraAcademy/QuranLecture.vue';
import IqraAcademySeeratHUmarRA from '@/views/iqraAcademy/seeratHUmarRA.vue';
import IqraAcademyUlamaBiyans from '@/views/iqraAcademy/ulamaBiyans.vue';
import IqraAcademyLessons from '@/views/iqraAcademy/lessons.vue';
import InformationsHome from '@/views/informations/home.vue';
import InformationsAnnualMeeting from '@/views/informations/annualMeeting.vue';
import InformationsUpdates from '@/views/informations/updates.vue';
import PageNotFound from '@/views/pageNotFound.vue';

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/ourAimsAndObjectives', name: 'OurAimsAndObjectives', component: OurAimsAndObjectives },
    { path: '/beneficiaries', name: 'Beneficiaries', component: Beneficiaries },
    { path: '/donations', name: 'Donations', component: Donations },
    { path: '/futureProjects', name: 'FutureProjects', component: FutureProjects },

    // Iqra Academy Routes
    { path: '/iqraTaleemUlQuranAcademy/home', name: 'IqraAcademyHome', component: IqraAcademyHome },
    { path: '/iqraTaleemUlQuranAcademy/alQuranLecture', name: 'IqraAcademyQuranLecture', component: IqraAcademyQuranLecture },
    { path: '/iqraTaleemUlQuranAcademy/seeratHazratUmarFarooqRA', name: 'IqraAcademySeeratHUmarRA', component: IqraAcademySeeratHUmarRA },
    { path: '/iqraTaleemUlQuranAcademy/ulamaBiyans', name: 'IqraAcademyUlamaBiyans', component: IqraAcademyUlamaBiyans },
    { path: '/iqraTaleemUlQuranAcademy/lessons', name: 'IqraAcademyLessons', component: IqraAcademyLessons },

    // Informations Routes
    { path: '/informations/home', name: 'InformationsHome', component: InformationsHome },
    { path: '/informations/annualMeeting', name: 'InformationsAnnualMeeting', component: InformationsAnnualMeeting },
    { path: '/informations/updates', name: 'InformationsUpdates', component: InformationsUpdates },

    // not found page
    { path: '/404', name: 'PageNotFound', component: PageNotFound },
    // Redirect any unmatched routes to the 404 page
    { path: '/:pathMatch(.*)*', redirect: '/404' }
];

const router = createRouter({
    history: createWebHistory(),
    routes,

    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition; // Handles back/forward navigation.
        } else if (to.hash) {
            return {
                el: to.hash,
                behavior: 'smooth', // Enables smooth scrolling.
            };
        } else {
            return { top: 0 }; // Default scroll to top.
        }
    }
});

export default router;

import { createRouter, createWebHistory } from 'vue-router';

// views
import Home from '@/views/home.vue';
import OurAimsAndObjectives from '@/views/ourAimsAndObjectives.vue';
import Beneficiaries from '@/views/beneficiaries.vue';
import Donations from '@/views/donations.vue';
import FutureProjects from '@/views/futureProjects.vue';

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/ourAimsAndObjectives', name: 'OurAimsAndObjectives', component: OurAimsAndObjectives },
    { path: '/beneficiaries', name: 'Beneficiaries', component: Beneficiaries },
    { path: '/donations', name: 'Donations', component: Donations },
    { path: '/futureProjects', name: 'FutureProjects', component: FutureProjects }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;

import { createRouter, createWebHistory } from 'vue-router';

// views
import Home from '@/views/home.vue';
import Beneficiaries from '@/views/beneficiaries.vue';

const routes = [
    { path: '/', name: Home, component: Home },
    { path: '/beneficiaries', name: Beneficiaries, component: Beneficiaries }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;

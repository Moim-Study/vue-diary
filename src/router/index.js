import { createRouter, createWebHistory } from 'vue-router';
import Main from '../components/Main.vue';
import Setting from '../components/Setting.vue';

const routes = [
  {
    path: '/',
    component: Main,
  },
  {
    path: '/setting',
    component: Setting,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

import { createRouter, createWebHistory } from 'vue-router';
import Main from '../views/Main.vue';
import Setting from '../views/Setting.vue';

const routes = [
  {
    path: '/loading',
    name: 'Loading',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Loading.vue'),
  },
  {
    path: '/',
    component: Main,
  },
  {
    path: '/todo',
    name: 'Todo',
    component: () => import('../views/Todo.vue'),
  },
  {
    path: '/setting',
    component: Setting,
  },
  {
    path : './diary',
    name : 'diary'
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

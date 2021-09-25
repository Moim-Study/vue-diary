import { createRouter, createWebHistory } from 'vue-router';

import Setting from '../components/Setting.vue';

const routes = [
  {
    path: '/setting',
    component: Setting,
  },
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
    path: '/todo',
    name: 'Todo',
    component: () =>
      import('../views/Todo.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

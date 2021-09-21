import { createRouter, createWebHistory } from 'vue-router';
import Main from '../views/Main.vue';

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
  },
  {
    path: '/timeline',
    name: 'timeline',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/TimeLine.vue'),
  },
  {
    path: '/todo',
    name: 'Todo',
    component: () => import('../views/Todo.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

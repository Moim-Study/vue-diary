import { createRouter, createWebHistory } from 'vue-router';
import Loading from '../views/Loading.vue';
import Main from '../views/Main.vue';
import Setting from '../views/Setting.vue';
import Todo from '../views/Todo.vue';
import Diary from '../views/Diary.vue';
import TimeLine from '../views/TimeLine.vue';

/* 이걸 해당 .vue 스크립트에서 export할 때 name으로 지정해줘야 함 - 나무효크 필기 */

const routes = [
  {
    path: '/',
    component: Main,
  },
  {
    path: '/setting',
    component: Setting,
  },
  {
    path: '/loading',
    name: 'Loading',
    component: Loading,

    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () =>
    //   import(/* webpackChunkName: "about" */ '../views/Loading.vue'),
    name: 'Main',
    component: Main,
  },
  {
    path: '/setting',
    name: 'Setting',
    component: Setting,
  },
  {
    path: '/loading',
    name: 'Loading',
    component: Loading,
    // component: () =>
    //   import(/* webpackChunkName: "about" */ '../views/Loading.vue'),
  },
  {
    path: '/todo',
    name: 'Todo',
    component: Todo,
  },
  {
    {
    path: '/diary',
    name: 'Diary',
    component: Diary,
  }
  {
    path: '/timeline',
    name: 'TimeLine',
    component: TimeLine,
  },

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
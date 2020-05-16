import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import AuthGuard from './authGuard';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    beforeEnter: AuthGuard,
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    beforeEnter: AuthGuard,
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;

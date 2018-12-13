import Vue from 'vue';
import Router from 'vue-router';
import Menu from './views/Menu.vue';
import Balance from './views/Balance.vue';
import Statements from './views/Statements.vue';
import Transfer from './views/Transfer.vue';
import Login from './views/Login.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'menu',
      component: Menu,
    },
    {
      path: '/balance',
      name: 'balance',
      component: Balance,
      meta: {
        requireAuth: false,
      },
    },
    {
      path: '/statements',
      name: 'statements',
      component: Statements,
      meta: {
        requireAuth: false,
      },
    },
    {
      path: '/transfer',
      name: 'transfer',
      component: Transfer,
      meta: {
        requireAuth: false,
      },
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
  ],
});

export default router;

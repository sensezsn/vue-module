import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export function createRouter() {
  const router = new Router({
    mode: 'history',
    linkActiveClass: 'active',
    scrollBehavior: () => ({ y: 0 }),
    routes: [
      {
        path: '/',
        component: () => import('views/Home.vue')
      },
    ]
  });

  return router;
}

import Vue from 'vue';
import { sync } from 'vuex-router-sync';
// import VueRouter from 'vue-router';

import App from './App.vue';

import { createStore } from './store';
import { createRouter } from './router';

const store = createStore();
const router = createRouter(store);

sync(store, router);

const app = new Vue({
  router,
  store,
  render: h => h(App)
});

app.$mount('#app');

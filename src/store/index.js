import Vue from 'vue';
import Vuex from 'vuex';

import user from './modules/user';

const debug = process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'test';

Vue.use(Vuex);

export function createStore() {
  return new Vuex.Store({
    state: {},
    modules: {
      user
    },
    strict: debug
  });
}

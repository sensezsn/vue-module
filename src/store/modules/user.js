import axios from 'axios';

const initialState = () => ({
  logging: false,
  isLogin: false,
  username: ''
});

const actions = {
  async login(context, { username, password, captcha }) {
    context.commit('setLogging', true);

    const { data: result } = await axios.post('/user/login', {
      username,
      password,
      captcha
    });

    context.commit('setProfile', result.data);
  }
};

const mutations = {
  setProfile(state, payload) {
    state.isLogin = true;
    state.username = payload.username;
  },
  setLogging(state, logging) {
    state.logging = logging;
  }
};

export default {
  state: initialState,
  actions,
  mutations
};

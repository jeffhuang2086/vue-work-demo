import * as types from './mutationTypes';


const actions = {
  setName({commit, state}, params) {
    commit(types.SET_NAME, params);
  },
  setAge({commit, state}, params) {
    commit(types.SET_AGE, params);
  }
}

export default actions;

export const state = () => ({
  name: "store / news / index.js"
});
export const mutations = {
  add(state, payload) {
    state.name = payload;
  }
};

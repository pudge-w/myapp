import Vue from "vue";
import Vuex from "vuex";
import data from "../assets/json/data.json";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    data: data,
    stage: sessionStorage.getItem("stage") || "css"
  },
  mutations: {},
  actions: {},
  getters: {
    items: state => {
      console.log(1111);
      let itemsData = [];
      for (let item of state.data) {
        if (item.stage === state.stage) {
          if (!state.select) {
            itemsData.push(item);
          } else {
            if (item.tags.includes(state.select)) {
              itemsData.push(item);
            }
          }
        }
      }
      return itemsData;
    }
  },
  modules: {}
});

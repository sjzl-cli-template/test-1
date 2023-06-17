import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);

export const treeData = {
  namespaced: true,
  state: {
    tasks: [
      {
        id: 1,
        name: "Shrek",
        tasks: []
      },
      {
        id: 2,
        name: "Fiona",
        tasks: [
          {
            id: 4,
            name: "Lord Farquad",
            tasks: []
          },
          {
            id: 5,
            name: "Prince Charming",
            tasks: []
          }
        ]
      },
      {
        id: 3,
        name: "Donkey",
        tasks: []
      }
    ]
  },
  mutations: {
    updateTasks: (state, payload) => {
      state.tasks = payload;
    }
  },
  actions: {
    updateTasks: ({ commit }, payload) => {
      commit("updateTasks", payload);
    }
  }
};

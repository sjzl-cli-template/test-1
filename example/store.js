import { nested } from "./components/nested/nested-store";
import { treeData } from "./components/infra/infra-store";
import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);

export default new Vuex.Store({
  namespaced: true,
  modules: {
    nested,
    treeData
  }
});

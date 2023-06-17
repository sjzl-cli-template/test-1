<template>
  <div class="row">
    <div class="col-3">
      <h3>Draggable 1</h3>
      <draggable
        class="dragArea list-group"
        :list="list1"
        :group="{ name: 'people', pull: 'clone', put: false }"
        @change="log"
        @clone="clone"
      >
        <div
          class="list-group-item"
          v-for="element in list1"
          :key="element.name"
        >
          {{ element.name }}
        </div>
      </draggable>
    </div>
    <div class="col-8">
      <h3>Nested draggable</h3>
      <nested-draggable @dragEnd="dragEnd" :treeData="list" :tasks="list" />
    </div>

    <rawDisplayer class="col-3" :value="list" title="List" />
  </div>
</template>

<script>
import nestedDraggable from "./infra/nested";
import { getTreeArrayId } from "@/util";
import draggable from "@/vuedraggable";

export default {
  name: "nested-example",
  display: "Nested",
  order: 15,
  components: {
    nestedDraggable,
    draggable
  },
  computed: {
    list: {
      get() {
        return this.$store.state.treeData.tasks;
      }
    }
  },
  data() {
    return {
      // list: this.$store.state.treeData.tasks,
      // treeData: this.$store.state.treeData.tasks,
      list1: [
        { name: "John", id: 1, tasks: [] },
        { name: "Joao", id: 2, tasks: [] },
        { name: "Jean", id: 3, tasks: [] },
        { name: "Gerard", id: 4, tasks: [] }
      ]
    };
  },
  watch: {
    // list: {
    //   deep: true,
    //   handler(val) {
    //     // eslint-disable-next-line no-console
    //     this.list = getTreeArrayId(val);
    //     console.log(val);
    //   }
    // }
  },
  created() {
    console.log(this.$store);
  },
  methods: {
    dragEnd() {
      // this.list = getTreeArrayId(this.list);
      console.log(this.list);
    },
    log: function(evt) {
      window.console.log(evt, this.list);
    },
    clone({ e }) {
      console.log(e, this.list);
    }
  }
};
</script>
<style scoped></style>

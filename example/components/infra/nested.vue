<template>
  <draggable class="dragArea" tag="ul" :list="tasks" @end="onEnd" @add="onEnd" :group="{ name: 'people' }">
    <li v-for="el in tasks" :key="el.templateId">
      <p>{{ el.templateId }} {{ el.name }}</p>
      <nested-draggable v-if="el.tasks" :tasks="el.tasks" :treeData="treeData" />
    </li>
  </draggable>
</template>
<script>
import draggable from "@/vuedraggable";
import { getTreeArrayId } from "@/util";

export default {
  props: {
    tasks: {
      required: true,
      type: Array
    },
    treeData:{
      type:Array
    }
  },
  components: {
    draggable
  },
  name: "nested-draggable",
  methods: {
    onEnd(doc) {
        console.log(doc)
      // this.$emit('dragEnd')
      this.$store.dispatch('treeData/updateTasks',getTreeArrayId(this.treeData))
      console.log(this.treeData,this.$store.state.treeData.tasks)
    }
  }
};
</script>
<style scoped>
.dragArea {
  min-height: 50px;
  outline: 1px dashed;
}
</style>

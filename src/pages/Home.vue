<template>
  <node-table></node-table>
</template>

<script lang="ts">
import Vue from 'vue';
import NodeTable from "@/components/nodes-table/nodes-table.vue"; // @ is an alias to /src

export default Vue.extend({
  name: 'Home',
  components: {
    NodeTable,
  },
});
</script>

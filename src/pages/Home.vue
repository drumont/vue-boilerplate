<template>
  <users-table></users-table>
</template>

<script lang="ts">
import Vue from 'vue';
import UsersTable from "@/components/users-table/users-table.vue"; // @ is an alias to /src

export default Vue.extend({
  name: 'Home',
  components: {
    UsersTable,
  },
});
</script>

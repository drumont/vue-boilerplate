<template>
  <div class="container">
    <h1>Node table</h1>
    <div class="container-fluid">
      {{ this.getCreatedNodes }}
    </div>
    <div class="row">
      <button
        class="action-button"
        @click="showToast"
      >
        Show toast
      </button>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { mapGetters, mapActions } from 'vuex';
import * as langHelpers from "@/helpers/lang.helpers";
export default Vue.extend({
  name: 'NodeTable',
  data() {
    return {
    }
  },
  computed: {
    ...mapGetters('admin', ['getNodes', 'getCreatedNodes']),
  },

  methods: {
    ...mapActions('admin', ['searchNodes', 'addNodes']),

    showToast() {
      this.$toast.success("I'm a toast!");
    }
  },

  mounted() {
    this.addNodes()
  }

})
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.action-button {
  display: inline-block;
  font-size: 1.2rem;
  color: #fff;
  background-color: #3eaf7c;
  padding: .8rem 1.6rem;
  border-radius: 4px;
  -webkit-transition: background-color .1s ease;
  transition: background-color .1s ease;
  box-sizing: border-box;
  border-bottom: 1px solid #389d70;
  cursor: pointer;
}
</style>

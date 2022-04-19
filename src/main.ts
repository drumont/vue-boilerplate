import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Toast from "vue-toastification";
import 'vue-toastification/dist/index.css'
import {PluginOptions} from "vue-toastification/dist/types/src/types";

Vue.config.productionTip = false

Vue.config.errorHandler = function (error, vm, info) {
  //Toast.error(error.message)
  console.log(error.message)
  console.log(vm)
  console.log(info)
}

const options: PluginOptions = {
};

Vue.use(Toast, options);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

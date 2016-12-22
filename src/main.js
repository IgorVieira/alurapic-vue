import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';
// Global view object. Use para usar o plugin. Toda view terá acesso ao resource através de $http
Vue.use(VueResource);

new Vue({
  el: '#app',
  render: h => h(App)
})

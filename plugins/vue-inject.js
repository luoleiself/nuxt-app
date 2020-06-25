import Vue from "vue";
// 注入 vue 实例方法
Vue.prototype.$vueInjectedFunction = args =>
  console.log("this is vue-inject ", args);

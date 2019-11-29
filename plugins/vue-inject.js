import Vue from "vue";
// 注入 vue 实例方法
Vue.prototype.$myInjectedFunction = args =>
  console.log("this is vue-inject ", args);

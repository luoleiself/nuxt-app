export default ({ app }, inject) => {
  // inject 方法同时注入context,app,vuex
  app.myInjectedFunction = (...args) =>
    console.log("this is context inject ", args);
};

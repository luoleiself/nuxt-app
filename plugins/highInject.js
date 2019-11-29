export default ({}, inject) => {
  inject("highInjectFunction", (...args) => {
    console.log("this is server and client injectFunction ", args);
  });
};

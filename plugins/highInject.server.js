export default (context, inject) => {
  inject("highInjectFunction", (...args) => {
    console.log("this is highInjectFunction server: ", args);
  });
};

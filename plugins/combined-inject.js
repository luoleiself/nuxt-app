export default (context, inject) => {
  inject("combinedInjectFunction", (...args) => {
    console.log("this is combined-inject,", args);
  });
};

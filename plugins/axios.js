export default ({ $axios, redirect }, inject) => {
  // let xhr = $axios.create({
  //   timeout: 10000,
  //   headers: {
  //     "X-Requested-With": "XMLHttpRequest",
  //     Accept: "application/json"
  //   }
  // });
  $axios.defaults.baseURL = "http://localhost:6000";
  $axios.onRequest(config => {
    console.log("config", config.method);
    // return config;
  });
  $axios.onResponse(res => {
    console.log("res", res);
    // return res;
  });
  $axios.onError(err => {
    // if (err.response.status == 404) {
    //   redirect("/news/"+Math.random().toString(16).substr(2).toUpperCase());
    // }
  });
  $axios.onRequestError(err => {
    console.log(err);
    // return Promise.reject(err);
  });
  $axios.onResponseError(err => {});

  // inject("xhr", xhr);
};

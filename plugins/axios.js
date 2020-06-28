export default ({ $axios, redirect }, inject) => {
  let xhr = $axios.create({
    timeout: 10000,
    headers: {
      common: {
        "X-Requested-With": "XMLHttpRequest",
        Accept: "application/json"
      }
    }
  });
  xhr.onRequest(config => {
    console.log(config);
    console.log("plugins axios onRequest config...", Object.keys(config));
  });
  xhr.onResponse(res => {
    if (res.status !== 200) {
      return Promise.reject(res);
    }
    return Promise.resolve(res.data);
  });
  xhr.onRequestError(err => {
    console.log(err);
  });
  xhr.onResponseError(err => {
    console.log(err);
  });
  xhr.onError(err => {
    console.log(err);
  });

  inject("xhr", xhr);
};

export default ({ $axios, app, route, store }) => {
  $axios.onRequest(config => {});
  $axios.onResponse(res => {});
  $axios.onError(err => {});
  $axios.onRequestError(err => {});
  $axios.onResponseError(err => {});
};

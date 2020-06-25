<template>
  <div>
    Come from pages news content.vue
    <p class="name-box">{{name}}--- {{len}}</p>
    <nuxt-link to="/news">to news.vue</nuxt-link>
    <el-button type="primary" v-on:click="elBtnClick">Click Me</el-button>
  </div>
</template>
<script>
export default {
  async asyncData({ app, store, route, params, query, redirect, $axios }) {
    // console.log(process.env.NODE_ENV);
    // console.log("asyncData context keys: ", Object.keys(context));
    // console.log("asyncData context.app keys: ", Object.keys(context.app));
    // console.log("asyncData context.$axios keys: ", Object.keys(context.$axios));
    // context.app.$combinedInjectFunction("<---> call from asyncData method");
    // console.log(Object.keys(context));
    app.$highInjectFunction("hello nuxt");
    let name = Math.random()
      .toString(16)
      .substr(2)
      .toUpperCase();
    let len = Math.floor(Math.random() * 10 + 1);
    // let result = (await context.$axios.get(`/${name}`)).data;
    // let result = await app.$xhr.get(`/${name}`);
    // $axios
    //   .get(`/${name}`)
    //   .then(res => {
    //     console.log(res);
    //   })
    //   .catch(err => {
    //     console.log(err.message);
    //   });
    let result = "hello world";
    // console.log(result);
    console.log("<-------------------------------------------------------->");
    return {
      title: "pages news content.vue",
      name: (result + " ").repeat(len),
      len
    };
  },
  fetch({ app }) {},
  layout(context) {
    return "default";
  },
  data() {
    return {};
  },
  methods: {
    elBtnClick($evt) {
      console.log($evt);
      this.$axios
        .get(`/ceshipm2log`)
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  created() {
    // this.$xhr
    //   .get("/hello")
    //   .then(res => {
    //     console.log(res);
    //   })
    //   .catch(err => {
    //     console.log(err.message);
    //   });
    // console.log(this.name);
  },
  mounted() {
    // console.log(process.env.NODE_ENV);
    // console.log("hello dynamic route");
    // console.log("vue mounted this.$axios keys: ", Object.keys(this.$axios));
    this.$combinedInjectFunction("<---> call from vue mounted method");
    this.$vueInjectedFunction(
      "/pages/news/_content.vue mounted instance injected"
    );
    this.$highInjectFunction("hello nuxt");
  }
};
</script>
<style lang="scss" scoped>
.name-box {
  font-size: 18px;
}
</style>
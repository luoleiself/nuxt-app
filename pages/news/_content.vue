<template>
  <div>
    Come from pages news content.vue
    <p>{{name}}</p>
    <nuxt-link to="/news">news.vue</nuxt-link>
  </div>
</template>
<script>
export default {
  asyncData(context) {
    console.log(process.env.NODE_ENV);
    console.log("asyncData context keys: ", Object.keys(context));
    console.log("asyncData context.app keys: ", Object.keys(context.app));
    console.log("asyncData context.$axios keys: ", Object.keys(context.$axios));
    context.app.$combinedInjectFunction("<---> call from asyncData method");
    context.app.myInjectedFunction("/pages/news/_content.vue asyncData");
    context.app.$highInjectFunction("hello nuxt");
    return {
      title: "pages news content.vue",
      name: context.params.content + ",HAHA"
    };
  },
  layout(context) {
    return "default";
  },
  data() {
    return {};
    // return {
    //   title: "pages news content.vue",
    //   name: this.$route.params.content
    // };
  },
  mounted() {
    console.log(process.env.NODE_ENV);
    console.log("hello dynamic route");
    console.log("vue mounted this.$axios keys: ", Object.keys(this.$axios));
    this.$combinedInjectFunction("<---> call from vue mounted method");
    this.$myInjectedFunction(
      "/pages/news/_content.vue mounted instance injected"
    );
    this.$highInjectFunction("hello nuxt");
  }
};
</script>
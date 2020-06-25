<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">
        nuxt-app
      </h1>
      <h2 class="subtitle">
        My transcendent Nuxt.js project
      </h2>
      <div class="links">
        <a href="https://nuxtjs.org/" target="_blank" class="button--green">
          Documentation
        </a>
        <a href="https://github.com/nuxt/nuxt.js" target="_blank" class="button--grey">
          GitHub
        </a>
        <h4>asyncData: {{title}}</h4>
        <h4>store modules: {{name}}</h4>
        <ul>
          <li v-for="(item,index) in contextData" :key="index">{{item}}</li>
          <nuxt-link to="" />
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import Logo from "~/components/Logo.vue";

import { createNamespacedHelpers } from "vuex";
const { mapState, mapMutations, mapActions } = createNamespacedHelpers(
  "news/content"
);

export default {
  data(){
    return {
      age: 18
    }
  },
  asyncData(context) {
    // 异步获取数据渲染组件数据
    
    // console.log(context);
    // console.log(`是否来自客户端渲染，process.client: `, process.client);
    // console.log(`是否来自服务端渲染，process.server: `, process.server);
    // console.log(
    //   `是否来自 Nuxt generate 静态化，process.static: `,
    //   process.static
    // );
    // context.app.myInjectedFunction("asyncData");
    return new Promise((resolve, reject) => {
      resolve();
    }).then(() => {
      return {
        title: "this msg from asyncDdata method",
        contextData: Object.keys(context)
      };
    });
  },
  fetch(context) {
    // 异步获取数据填充状态树vuex
    return new Promise((resolve, reject) => {
      resolve("fetch method");
    }).then(res => {
      console.log(`console from index.vue: ${res}`);
    });
  },
  head() {
    // 设置本页头部 Object | Function
    return {
      title: "Hello Nuxt"
    };
  },
  key(route) {
    // 设置内部 router-view 组件的 key 属性
    return route.fullPath;
  },
  layout(context) {
    // 设置页面的布局文件
    return "dark";
  },
  // loading: false,
  // middleware: ["auth"],
  // validate({ redirect }) {
    // return redirect("/news/20002");
  // },
  computed: {
    ...mapState(["name"])
  },
  methods: {
    // ...mapActions(),
    // ...mapMutations()
  },
  components: {
    Logo
  },
  mounted() {
    // console.log(`是否来自客户端渲染，process.client: `, process.client);
    // console.log(`是否来自服务端渲染，process.server: `, process.server);
    // console.log(
    //   `是否来自 Nuxt generate 静态化，process.static: `,
    //   process.static
    // );
    this.$myInjectedFunction("index.vue");
  }
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

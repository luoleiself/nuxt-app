<template>
  <div>
    Come from pages news content.vue
    <ul>
      <li v-for="(item,index) in list" :key="index">{{item.id}}---{{item.name}}----{{item.color}}</li>
    </ul>
    <p v-if="len%2 === 0">len is even!</p>
    <p v-else>len is odd!</p>
    <nuxt-link to="/news">to news.vue</nuxt-link>
    <el-button type="primary" v-on:click="elBtnClick">Click Me</el-button>
    <span class="trans_eg" :class="{'trans_active': trans_flag}"></span>
    <h1 class="name-box">@nuxtjs/style-resources example...</h1>
    <div class="mixin-box">
      <span></span>
    </div>
    <div class="flex-box">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div>
      <input class="input_cls" type="text" name="test" placeholder="Please try later..." />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
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
    // $axios
    //   .get("123", { params: { name: "hello world", age: 18 } })
    //   .then(res => {
    //     console.log("res", res.status);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
    let result = await app.$xhr.get("123", {
      params: { name: `${name}`, age: 18 }
    });
    console.log("<-------------------------------------------------------->");
    return {
      title: "pages news content.vue",
      // name: (result + " ").repeat(len),
      len,
      ...result
      // ...result
    };
  },
  fetch({ app }) {},
  layout(context) {
    return "default";
  },
  data() {
    return {
      trans_flag: false,
    };
  },
  methods: {
    async elBtnClick($evt) {
      console.log($evt);
      let result = await this.$xhr.post("/gg", {
        name: "hello world",
        age: 18
      });
      console.log(result);
      this.trans_flag = !this.trans_flag;
      // this.$xhr
      //   .get(`/gg`, { params: { name: "hello world", age: 18 } })
      //   .then(res => {
      //     console.log(res);
      //   })
      //   .catch(err => {
      //     console.log(err);
      //   });
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
  color: $color-08f;
}
.trans_eg{
  display: inline-block;
  margin-left: 10px;
  width: 40px;
  height: 40px;
  vertical-align: middle;
  border: 1px solid #bbb;
  transition: all .5s linear;
}
.trans_active{
  width: 200px;
}
.mixin-box {
  height: 200px;
  line-height: 200px;
  text-align: center;
  span {
    @include rotate45;
    display: inline-block;
    width: 50px;
    height: 50px;
    box-sizing: border-box;
    border: 1px solid #aaa;
    animation: animations 2s ease-out infinite;
  }
}
@keyframes animations {
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(90deg);
  }
  50% {
    transform: rotate(180deg);
  }
  75% {
    transform: rotate(270deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.flex-box {
  height: 200px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: flex-start;
  span {
    display: inline-block;
    width: 50px;
    height: 50px;
    border: 1px solid #aaa;
  }
}
::placeholder {
  color: red;
}
</style>
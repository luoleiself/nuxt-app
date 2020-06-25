<template>
  <div>
    <p>
      Come from pages news index.vue
    </p>
    <p>{{content}}--- {{len}}</p>
    <nuxt-link to="/news/10001">to _content.vue</nuxt-link>
  </div>
</template>
<script>
export default {
  async asyncData({ $axios }) {
    let name = Math.random()
      .toString(16)
      .substr(2)
      .toUpperCase();
    let len = Math.floor(Math.random() * 10 + 1);
    // let result = await $axios.get(`/${name}`);
    // console.log(result.data);
    console.log("<----------------------------------------->");
    return {
      content: name /* (result.data + ' ').repeat(len) */,
      len
    };
  },
  created() {
    // console.log(Object.keys(this.$axios))
  }
};
</script>
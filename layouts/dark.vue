<template>
  <div class="dark-theme">
    <h1>{{name}}</h1>
    <nuxt />
  </div>
</template>
<script>
export default {
  data(){
    return {
      name: ''
    }
  },
  // middleware: ["auth"],
}
</script>
<style scoped>
.dark-theme {
  background-color: rgba(00, 00, 00, 0.4);
}
</style>
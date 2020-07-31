<template>
  <div id="app">
    <header></header>
    <nav></nav>
    <aside></aside>
    <footer></footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  @import url("style/index.css");
#app {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
header{
  width: 100%;
  height: 50px;
  background: #42B983;
}
</style>

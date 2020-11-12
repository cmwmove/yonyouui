<template>
  <div id="app">
    <div id="nav">
    </div>
    <router-view/>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'App',
  components: {
  }
}
</script>

<style lang="less">
@import './assets/fonts/fonts.css';
#app{
  font-family: 'PingFang-RE';
}
</style>

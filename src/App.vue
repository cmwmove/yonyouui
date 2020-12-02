<template>
<a-config-provider :locale="locale">
    <div id="app">
      <div id="nav"></div>
      <router-view/>
    </div>
  </a-config-provider>
</template>

<script>
// @ is an alias to /src
import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN';

export default {
  name: 'App',
  data(){
    return{
      locale:zhCN,
    }
  },
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

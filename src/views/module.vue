<template>
  <div class="home">
    <HeaderModule></HeaderModule>
    <ModuleLeftNav></ModuleLeftNav>
    <router-view></router-view>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderModule from '@/components/headerModule.vue'
import ModuleLeftNav from '@/components/moduleLeftNav.vue'

export default {
  name: 'modulePage',
  components: {
    HeaderModule,
    ModuleLeftNav
  }
}
</script>

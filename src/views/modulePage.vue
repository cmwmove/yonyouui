<template>
  <div class="home">
    <Header></Header>
    <ModuleLeftNav></ModuleLeftNav>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/header.vue'
import ModuleLeftNav from '@/components/moduleLeftNav.vue'

export default {
  name: 'modulePage',
  components: {
    Header,
    ModuleLeftNav
  }
}
</script>

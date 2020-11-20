<template>
  <div class="home">
    <HeaderModule></HeaderModule>
    <ModuleLeftNav></ModuleLeftNav>
    <router-view @child-event='parentEvent' :number="NamNumber"></router-view>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderModule from '@/components/headerModule.vue'
import ModuleLeftNav from '@/components/moduleLeftNav.vue'

export default {
  name: 'modulePage',
  data(){
    return{
      NamNumber:""
    }
  },
  components: {
    HeaderModule,
    ModuleLeftNav
  },
  methods:{
    parentEvent(number){
      this.NamNumber = number
      console.log(this.NamNumber)
    }
  }
}
</script>

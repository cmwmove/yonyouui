<template>
  <div class="home">
    <HeaderModule></HeaderModule>
    <div>
      <ModuleLeftNav></ModuleLeftNav>
      <router-view></router-view>
    </div>
     
    <!-- @child-event='parentEvent' :number="NamNumber" -->
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
      // NamNumber:""
    }
  },
  components: {
    HeaderModule,
    ModuleLeftNav
  },
  methods:{
    // parentEvent(number){
    //   this.NamNumber = number
    //   console.log(this.NamNumber)
    // }
  }
}
</script>

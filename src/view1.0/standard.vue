<template>
  <div class="home">
    <HeaderNorm></HeaderNorm>
    <div>
      <NormLeftNav></NormLeftNav>
      <router-view></router-view>
    </div>
     
    <!-- @child-event='parentEvent' :number="NamNumber" -->
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderNorm from '@/components/headerNorm.vue'
import NormLeftNav from '@/components/normLeftNav.vue'

export default {
  name: 'standard',
  data(){
    return{
    }
  },
  components: {
    HeaderNorm,
    NormLeftNav
  },
  methods:{

  }
}
</script>
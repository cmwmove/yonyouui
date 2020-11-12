<template>
  <div class="about">
    <HeaderModule></HeaderModule>
    <GuideLeftNav></GuideLeftNav>
  </div>
</template>

<script>
import { Icon } from "ant-design-vue";

import HeaderModule from '@/components/headerModule.vue'
import GuideLeftNav from '@/components/guideLeftNav.vue'
export default {
  name: 'guide',
  components: {
    HeaderModule,
    GuideLeftNav
  }
}

</script>

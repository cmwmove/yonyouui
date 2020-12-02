<template>
  <div class="about">
    <HeaderGuide></HeaderGuide>
    <GuideLeftNav></GuideLeftNav>
    <router-view></router-view>
  </div>
</template>

<script>
import { Icon } from "ant-design-vue";

import HeaderGuide from '@/components/headerGuide.vue'
import GuideLeftNav from '@/components/guideLeftNav.vue'
export default {
  name: 'guide',
  components: {
    HeaderGuide,
    GuideLeftNav
  }
}

</script>

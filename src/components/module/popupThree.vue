<template>
  <div>
    <a-button type="primary" @click="showModal">
      表单弹窗
    </a-button>
    <a-modal v-model="visible" title="弹窗标题" @ok="handleOk">
        <div style="width: 250px">
            <a-tabs
            :default-active-key="1"
            tab-position=left
            >
            <a-tab-pane v-for="i in 3" :key="i" :tab="`选项${i}`">  </a-tab-pane>
            </a-tabs>
        </div>
    </a-modal>
  </div>
</template>
<script>
export default {
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    showModal() {
      this.visible = true;
    },
    handleOk(e) {
      console.log(e);
      this.visible = false;
    },
  },
};
</script>

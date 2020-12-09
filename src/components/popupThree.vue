<template>
  <div>
    <a-button type="primary" @click="showModal">
      Open Modal
    </a-button>
    <a-modal v-model="visible" title="Basic Modal" @ok="handleOk">
        <div style="width: 250px">
            <a-tabs
            default-active-key="1"
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

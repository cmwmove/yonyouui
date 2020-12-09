<template>
  <div>
    <a-radio-group style="margin-right: 8px" :default-value="placement" @change="onChange">
      <a-radio value="top">
        top
      </a-radio>
      <a-radio value="right">
        right
      </a-radio>
      <a-radio value="bottom">
        bottom
      </a-radio>
      <a-radio value="left">
        left
      </a-radio>
    </a-radio-group>
    <a-button class="margin-top20" type="primary" @click="showDrawer">
      Open
    </a-button>
    <a-drawer
      title="弹框标题"
      :placement="placement"
      :closable="true"
      :visible="visible"
      @close="onClose"
    >
      <p>发吧就开始阿萨德玻璃钢阀辅导班尽快发货阿双方和借款方感受过咖啡馆阿卡莎录入奥孔古十六日了巴方将阿克苏给分了很赶阿法狗比例提高昂扬发过来的把控改不了安理会法术暴击奥卡福回家吧按客户菲律宾进口国哈人尬u好烦bare胡椒粉呢爱国热交换反抗前面号格式符号爱国法律解释龙湖区别按法律发送到</p>
    </a-drawer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      visible: false,
      placement: 'left',
    };
  },
  methods: {
    showDrawer() {
      this.visible = true;
    },
    onClose() {
      this.visible = false;
    },
    onChange(e) {
      this.placement = e.target.value;
    },
  },
};
</script>

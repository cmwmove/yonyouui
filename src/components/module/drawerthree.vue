<template>
  <div>
    <a-list
      :data-source="[
        {
          name: '王用友',
        },
      ]"
      bordered
    >
      <a-list-item slot="renderItem" :key="`a-${item.id}`" slot-scope="item, index">
        <a slot="actions" @click="showDrawer">详细信息</a>
        <a-list-item-meta description="北京市">
          <a slot="title" href="https://www.antdv.com/">{{ item.name }}</a>
          <a-avatar
            slot="avatar"
            src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png"
          />
        </a-list-item-meta>
      </a-list-item>
    </a-list>
    <a-drawer width="520" placement="right" :closable="true" title="弹框标题" :visible="visible" @close="onClose">
        <a-descriptions :column="{md:2}">
            <a-descriptions-item label="姓名" >
                王用友
            </a-descriptions-item>
            <a-descriptions-item label="出生年月" >
                1988.04.20
            </a-descriptions-item>
            <a-descriptions-item label="性别" >
                男
            </a-descriptions-item>
            <a-descriptions-item label="户口所在地" >
                北京
            </a-descriptions-item>
            <a-descriptions-item label="单位地址" >
                北京市海淀区XX街道
            </a-descriptions-item>
            <a-descriptions-item label="居住地" >
                北京
            </a-descriptions-item>
            <a-descriptions-item label="联系方式" >
                135463XXXXX
            </a-descriptions-item>
            <a-descriptions-item label="出生地" >
                江西省南昌市
            </a-descriptions-item>
            <a-descriptions-item label="邮箱" >
                wangyy@yonyou.com
            </a-descriptions-item>
        </a-descriptions>
    </a-drawer>
  </div>
</template>
<script>
// import descriptionItem from './descriptionItem';

export default {
  components: {
    // descriptionItem,
  },
  data() {
    return {
      visible: false,
      pStyle: {
        fontSize: '16px',
        color: 'rgba(0,0,0,0.85)',
        lineHeight: '24px',
        display: 'block',
        marginBottom: '16px',
      },
      pStyle2: {
        marginBottom: '24px',
      },
    };
  },
  methods: {
    showDrawer() {
      this.visible = true;
    },
    onClose() {
      this.visible = false;
    },
  },
};
</script>

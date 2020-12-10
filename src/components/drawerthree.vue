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
    <!-- <a-drawer width="640" placement="right" :closable="false" :visible="visible" @close="onClose"> -->
      <!-- <a-descriptions>
                        <a-descriptions-item label="名称">
                            系统管理一
                        </a-descriptions-item>
                        <a-descriptions-item label="部门名称">
                            总体调研部
                        </a-descriptions-item>
                        <a-descriptions-item label="项目编码">
                            0000012
                        </a-descriptions-item>
                        <a-descriptions-item label="时间">
                            2019-8-18
                        </a-descriptions-item>
                        <a-descriptions-item label="下属单位名称">
                            123
                        </a-descriptions-item>
                        <a-descriptions-item label="项目类别">
                            财政
                        </a-descriptions-item>
                        <a-descriptions-item label="结束时间">
                            2019-8-18
                        </a-descriptions-item>
                        <a-descriptions-item label="人员数量">
                            3214
                        </a-descriptions-item>
                        <a-descriptions-item label="总金额">
                            2,342,987,00
                        </a-descriptions-item>
                        <a-descriptions-item label="说明">
                            尚然居很有较三国性福安市电话费巴适得板家乐福和va客户施蒂利克弗兰克斯电话费卡计算电荷发不舍得胡椒粉把垃圾袋上分卡和三等发卡的说法第三方拉喀什
                        </a-descriptions-item>
                    </a-descriptions>
    </a-drawer> -->
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
            <a-descriptions-item label="身份证" >
                1199977998584XXX
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

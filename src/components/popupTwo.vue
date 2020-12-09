<template>
    <div>
        <a-button type="primary" @click="showModal">
            Open Modal
        </a-button>
        <a-modal v-model="visible" title="弹窗标题" @ok="handleOk">
            <a-table :columns="columns" :data-source="data" bordered>
                <template slot="name" slot-scope="text">
                <a>{{ text }}</a>
                </template>
                <!-- <template slot="title" slot-scope="currentPageData">
                Header
                </template> -->
                <!-- <template slot="footer" slot-scope="currentPageData">
                Footer
                </template> -->
            </a-table>
        </a-modal>
    </div>
</template>

<script>
const columns = [
  {
    title: '序号',
    dataIndex: 'name',
    // scopedSlots: { customRender: 'name' },
  },
  {
    title: '编码',
    className: 'column-money',
    dataIndex: 'money',
  },
  {
    title: '标题',
    dataIndex: 'address',
  },
  {
    title: '时间',
    dataIndex: 'time',
  },
  {
    title: '数量',
    dataIndex: 'number',
  },
];

const data = [
  {
    key: '1',
    name: '1',
    money: 'Dc170511123',
    address: '简情歌发包价half安抚卡哈比地方范德萨发而发和',
    time: '2018-8-8',
    number: '23'
  },
  {
    key: '2',
    name: '2',
    money: 'Dc170511123',
    address: '简情歌发包价half安抚卡哈比地方范德萨发而发和',
    time: '2018-8-8',
    number: '233'
  },
  {
    key: '3',
    name: '3',
    money: 'Dc170511123',
    address: '简情歌发包价half安抚卡哈比地方范德萨发而发和',
    time: '2018-8-8',
    number: '13'
  },
  {
    key: '4',
    name: '4',
    money: 'Dc170511123',
    address: '简情歌发包价half安抚卡哈比地方范德萨发而发和',
    time: '2018-8-8',
    number: '24'
  },
  {
    key: '5',
    name: '5',
    money: 'Dc170511123',
    address: '简情歌发包价half安抚卡哈比地方范德萨发而发和',
    time: '2018-8-8',
    number: '54'
  },
];
export default {
    data() {
        return {
            data,
            columns,
            visible: false,
        };
  },
  methods: {
        showModal() {
            this.visible = true;
        },
        handleOk(e) {
            this.visible = false;
        },
    },
}
</script>

<style>

</style>
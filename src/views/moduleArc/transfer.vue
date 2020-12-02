<template>
    <div class="rightBox">
        <div class="container">
            <h1>穿梭框</h1>
            <div class="intrduce">
                <p>双栏穿梭选择框</p>
            </div>
            <h1 class="margin-top40">何时使用</h1>
            <div class="intrduce ">
                <p>◆ 需要在多个可选项中进行多选时。</p>
                <p>◆ 比起 Select 和 TreeSelect，穿梭框占据更大的空间，可以展示可选项的更多信息。</p>
                <p class="margin-top20">穿梭选择框用直观的方式在两栏中移动元素，完成选择行为。选择一个或以上的选项后，点击对应的方向键，可以把选中的选项移动到另一栏。其中，左边一栏为 源，右边一栏为 目标。</p>
            </div>
            <h1 class="margin-top40">基本状态</h1>
            <div class="intrduce ">
                <p>默认左右箭头不可用，当选择源列表元素时，向右箭头可用，点击箭头，目标列表增加内容，同时源列表中的元素复选框变成选中不可操作状态。</p>
                <p>当选择目标列表元素时，向左箭头可用，点击箭头，目标列表减少元素，同时源列表中元素复选框变成未选中状态。</p>
            </div>
            <div class="margin-top40">
                <div class="transferBox">
                    <a-transfer
                    :data-source="mockData"
                    :titles="['Source', 'Target']"
                    :target-keys="targetKeys"
                    :selected-keys="selectedKeys"
                    :render="item => item.title"
                    :disabled="disabled"
                    @change="handleChange"
                    @selectChange="handleSelectChange"
                    @scroll="handleScroll"
                    />
                </div>
            </div>
            <h1 class="margin-top40">带搜索框</h1>
            <div class="margin-top20">
                <div class="transferBox">
                    <Transferfind></Transferfind>
                </div>
            </div>
            <h1 class="margin-top40">表格穿梭框</h1>
            <div class="margin-top20">
                <div class="transferBox">
                    <TransferfindT></TransferfindT>
                </div>
            </div>
            <h1 class="margin-top40">空状态</h1>
            <div class="margin-top20">
                <div class="transferBox">
                    <TransferfindTr></TransferfindTr>
                </div>
            </div>
        </div>
        <Changes :title1="title1" :title2="title2" :path1="path1" :path2="path2" :number="number"></Changes>
    </div>
</template>

<script>
import Changes from '@/components/changes.vue'
import Transferfind from '@/components/transferfind.vue'
import TransferfindT from '@/components/transferfindT.vue'
import TransferfindTr from '@/components/transferfindTr.vue'

export default {
    data(){
        const mockData = [];
        for (let i = 0; i < 20; i++) {
        mockData.push({
            key: i.toString(),
            title: `content${i + 1}`,
            description: `description of content${i + 1}`,
            disabled: i % 3 < 1,
        });
        }

        const oriTargetKeys = mockData.filter(item => +item.key % 3 > 1).map(item => item.key);
        return{
            title1 : '树',
            title2 : '折叠面板',
            path1 : '/Tree',
            path2 : '/Collapse',
            number : 15,
            mockData,
            targetKeys: oriTargetKeys,
            selectedKeys: ['1', '4'],
            disabled: false,
        }
    },
    components:{
        Changes,
        Transferfind,
        TransferfindT,
        TransferfindTr
    },
    methods: {
        handleChange(nextTargetKeys, direction, moveKeys) {
            this.targetKeys = nextTargetKeys;

            console.log('targetKeys: ', nextTargetKeys);
            console.log('direction: ', direction);
            console.log('moveKeys: ', moveKeys);
        },
        handleSelectChange(sourceSelectedKeys, targetSelectedKeys) {
            this.selectedKeys = [...sourceSelectedKeys, ...targetSelectedKeys];

            console.log('sourceSelectedKeys: ', sourceSelectedKeys);
            console.log('targetSelectedKeys: ', targetSelectedKeys);
        },
        handleScroll(direction, e) {
            console.log('direction:', direction);
            console.log('target:', e.target);
        },
        handleDisable(disabled) {
            this.disabled = disabled;
        },
  },
}
</script>

<style>
.transferBox{
    border: 1px solid #DDDDDD;
    padding: 20px;
    width: 700px;
}
</style>
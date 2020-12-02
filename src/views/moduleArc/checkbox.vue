<template>
    <div class="rightBox">
        <div class="container">
            <h1>多选框</h1>
            <div class="intrduce">
                <p>多选框用于在一组可选项中进行多项选择。</p>
            </div>
            <h1 class="margin-top40">何时使用</h1>
            <div class="intrduce ">
                <p>◆在一组可选项中进行多项选择时；</p>
                <p>◆单独使用可以表示两种状态之间的切换，和 ‘开关’ 类似。区别在于切换 ‘开关’ 会直接触发状态改变，而多选框一般用于状态标记，需要和提交操作配合。</p>
            </div>
            <h1 class="margin-top40">多选框分类</h1>
            <div class="intrduce">
                <p>多选框有三种类型：基础多选框、多选框组、树型多选框。</p>
            </div>
            <div class="intrduce">
                <p>基础多选框 : 多选框+文字。</p>
            </div>
            <div class="margin-top20">
                <div class="Box checkBox1">
                    <div>
                        <a-checkbox default-checked>选中效果</a-checkbox>
                        <a-checkbox :default-checked="false">未选中效果</a-checkbox>
                        <a-checkbox default-checked disabled>禁止选择效果</a-checkbox>
                        <a-checkbox :default-checked="false" disabled>禁止选择效果</a-checkbox>
                    </div>
                    
                </div>
            </div>
            <div class="intrduce margin-top40">
                <p>多选框组 : N个基础多选框组。用于对一组可以彼此独立选择的选项进行操作。</p>
            </div>
            <div class="margin-top20">
                <div class="Box checkBox2">
                    <div>
                        <div><a-checkbox-group :options="plainOptions" :default-value="['选中效果']"/></div>
                        <div><a-checkbox-group :options="plainOptionsD" disabled :default-value="['禁止选中效果']"/></div>
                    </div>
                   
                </div>
            </div>
            <div class="intrduce margin-top40">
                <p>树型多选框 : 多选框+树型控件。</p>
            </div>
            <div class="margin-top20">
                <div class="Box checkBox3">
                    <a-tree
                        v-model="checkedKeys"
                        checkable
                        :expanded-keys="expandedKeys"
                        :auto-expand-parent="autoExpandParent"
                        :selected-keys="selectedKeys"
                        :tree-data="treeData"
                        @expand="onExpand"
                        @select="onSelect"
                    />
                </div>
            </div>
        </div>
        <Changes :title1="title1" :title2="title2" :path1="path1" :path2="path2" :number="number"></Changes>
    </div>
</template>

<script>
import Changes from '@/components/changes.vue'

const plainOptions = ['选中效果', '未选中效果', '未选中效果 '];
const plainOptionsD = ['禁止选择效果', '禁止未选择效果', '禁止未选中效果 '];

const treeData = [
  {
    title: '树形控件一级',
    key: '0-0',
    children: [
      {
        title: '树形控件二级',
        key: '0-0-0',
        children: [
            { 
            title: '树形控件三级', 
            key: '0-0-0-0',
            children:[
                { title: '树形控件四级', key: '0-0-0-0-0' },
                { title: '树形控件四级', key: '0-0-0-0-1' },
                { title: '树形控件四级', key: '0-0-0-0-2' },
            ]
            },
        ],
      },
      {
        title: '树形控件二级',
        key: '0-0-1',
      },
    ],
  },
  {
    title: '树形控件一级',
    key: '0-1',
    children: [
      { title: '树形控件二级', key: '0-1-0' },
      { title: '树形控件二级', key: '0-1-1' },
      { title: '树形控件二级', key: '0-1-2' },
    ],
  },
  {
    title: '树形控件一级',
    key: '0-2',
  },
];

export default {
    data(){
        return{
            title1 : '步骤条',
            title2 : '单选框',
            path1 : '/Steps',
            path2 : '/RadioButton',
            number : 8,
            plainOptions,
            plainOptionsD,
            expandedKeys: ['0-0-0-0'],
            autoExpandParent: true,
            checkedKeys: ['0-0-0-0-1','0-0-0-0-2'],
            selectedKeys: [],
            treeData,

        }
    },
    components:{
        Changes
    },
    watch: {
        // checkedKeys(val) {
        // console.log('onCheck', val);
        // },
    },
    methods: {
        onExpand(expandedKeys) {
        // if not set autoExpandParent to false, if children expanded, parent can not collapse.
        // or, you can remove all expanded children keys.
        this.expandedKeys = expandedKeys;
        this.autoExpandParent = false;
        },
        onCheck(checkedKeys) {
        this.checkedKeys = checkedKeys;
        },
        onSelect(selectedKeys, info) {
        this.selectedKeys = selectedKeys;
        },
        
    },
}
</script>

<style lang="less">
.checkBox1{
    width: 506px;
    height: 115px;
    justify-content: center;
}
.checkBox2{
    width: 500px;
    height: 150px;
    justify-content: center;
    padding: 0 15px;

    div{
        margin: 5px 5px;
    }
}
.checkBox3{
    width: 289px;
    padding: 10px 30px;
}

</style>
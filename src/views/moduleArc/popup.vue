<template>
    <div class="rightBox">
        <div class="container">
            <h1>弹窗</h1>
            <div class="intrduce">
                <p>模态/强制弹窗.让用户聚焦到某一个任务、消息、视图…弹出区域而不能做别的事情，直到用户完成了当前的任务。比如警告框、新建任务列表等。</p>
                <p>大小:最大宽80%,最小高80%。</p>
            </div>
            <h1 class="margin-top40">何时使用</h1>
            <div class="intrduce ">
                <p>选择器:条件筛选、信息确认…</p>
                <p>展示栏</p>
                <p>辅助操作:只能点击关闭和按钮(确认、取消)关闭.。</p>
            </div>
            <h1 class="margin-top40">弹窗样式</h1>
            <div class="intrduce margin-top40">
                <p><b>基本弹窗样式 : </b> </p>
            </div>
            <div class="margin-top20">
                <div class="popBox1">
                    <div>
                        <a-button type="primary" @click="showModal">
                        Open Modal
                        </a-button>
                        <a-modal v-model="visible" title="弹窗标题" @ok="handleOk">
                        <p>挂开关机发布迟迟不一发错人被访问人员不日一个大夫人无法去海边 缺乏还不如富强浮球开关风起接洽免加油快速搭建换发会计师副本副科级阿萨德和夫人啊奥科吉粉红色把六合彩 阿萨德合法而浪费苍父亲依然高峰期利润爱人与亲人不卡号VUI和va还不错V在</p>
                        </a-modal>
                    </div>
                </div>
            </div>
            
            <div class="intrduce margin-top40">
                <p><b>表单弹窗样式 :  </b> </p>
            </div>
            <div class="margin-top20 ">
                <div class="popBox1">
                    <Popupone></Popupone>
                </div>
            </div>
            <div class="intrduce margin-top40">
                <p><b>表格弹窗样式 :  </b> </p>
            </div>
            <div class="margin-top20 ">
                <div class="popBox1">
                    <PopupTwo></PopupTwo>
                </div>
            </div>
            
            <div class="intrduce margin-top40">
                <p><b>标题式弹窗样式 : </b> </p>
            </div>
            <div class="margin-top20 ">
                <div class="popBox1">
                    <PopupThree></PopupThree>
                </div>
            </div>
            
        </div>
        <Changes :title1="title1" :title2="title2" :path1="path1" :path2="path2" :number="number"></Changes>
    </div>
</template>

<script>
import Changes from '@/components/changes.vue'
import Popupone from '@/components/popupone.vue'
import PopupTwo from '@/components/popupTwo.vue'
import PopupThree from '@/components/popupThree.vue'

export default {
    data(){
        return{
            title1 : '图表',
            title2 : '文字提醒',
            path1 : '/Chart',
            path2 : '/Tooltip',
            number : 28,
            visible: false,
        }
    },
    components:{
        Changes,
        Popupone,
        PopupTwo,
        PopupThree
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
.popBox1{
    border: 1px solid #dddddd;
    padding: 20px 10px;
    width: 200px;
}
</style>
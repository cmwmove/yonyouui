<template>
    <div class="rightBox">
        <div class="container">
            <h1>下拉菜单</h1>
            <div class="intrduce">
                <p>向下弹出的列表。一般指让用户从预先设置好的列表中选择一项或者多项的控件。</p>
            </div>
            <h1 class="margin-top40">何时使用</h1>
            <div class="intrduce ">
                <p>当页面上的操作命令过多时，用此组件可以收纳操作元素。点击或移入触点，会出现一个下拉菜单。可在列表中进行选择，并执行相应的命令。</p>
            </div>
            <h1 class="margin-top40">下拉菜单交互</h1>
            <div class="intrduce ">
                <p>◆触发下拉菜单方式有两种：鼠标点击和悬浮。
                <p>◆如果是单项选择的下拉菜单，用户选择了下拉列表中的选项，则下拉列表关闭，已选项目显示于选择框内。</p>
                <p>◆下拉选项我们建议超过10条后，出现滚动条。</p>
                <p>◆下拉选项的宽度跟下拉框保持一致，下拉选项字段值超过宽度值时，出现横向滚动条</p>
            </div>
            <h1 class="margin-top40">下拉菜单分类</h1>
            <div class="intrduce">
                <p>基本下拉菜单 : 文字+向下箭头</p>
            </div>
            <div class="margin-top20">

            </div>
            <div class="intrduce margin-top40">
                <p>表单下拉菜单 :</p>
            </div>
            <div class="margin-top20">

            </div>
            <h1 class="margin-top40">交互流程</h1>
            <div class="margin-top20">
                
            </div>
            <h1 class="margin-top40">实例页面</h1>
            <div class="margin-top20">
                
            </div>
        </div>
        <Changes :title1="title1" :title2="title2" :path1="path1" :path2="path2" :number="number"></Changes>
    </div>
</template>

<script>
import Changes from '@/components/changes.vue'
export default {
    data(){
        return{
            title1 : '面包屑',
            title2 : '分页',
            path1 : '/Breadcrumb',
            path2 : '/Pagination',
            number : 5
        }
    },
    components:{
        Changes
    },
}
</script>

<style>

</style>
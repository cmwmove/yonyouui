<template>
    <div class="rightBox">
        <div class="container">
            <h1>空状态</h1>
            <div class="intrduce">
                <p>空状态时的展示占位图。</p>
            </div>

            <h1 class="margin-top40">何时使用</h1>
            <div class="intrduce ">
                <p>◆ 当目前没有数据时，用于显示的用户提示。</p>

                <p>◆ 初始化场景时的引导创建流程。</p>
            </div>

            <h1 class="margin-top40">基本样式</h1>
            <div class="intrduce margin-top20">
            </div>
            <div class="margin-top20">
                <!-- <div class="emptyBox">
                    <a-empty />
                </div> -->
                <img width="945" src="../../assets/img/4-29-1.png">
            </div>
            <h1 class="margin-top40">装饰插画</h1>
            <div class="margin-top20">
                <img width="945" src="../../assets/img/4-29-2.png">
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
            title1 : '描述列表',
            title2 : '气泡提醒',
            path1 : '/Descriptions',
            path2 : '/Popconfirm',
            number : 19
        }
    },
    components:{
        Changes
    },
}
</script>

<style>
.emptyBox{
    border: 1px solid #dddddd;
    padding: 10px 20px;
    width: 500px;
}
</style>
<template>
    <div class="rightBox">
        <div class="container">
            <h1>加载中</h1>
            <div class="intrduce">
                <p>用于页面和区块的加载中状态。</p>
            </div>
            <h1 class="margin-top40">何时使用</h1>
            <div class="intrduce ">
                <p>页面局部处于等待异步数据或正在渲染过程时，合适的加载动效会有效缓解用户的焦虑</p>
            </div>
            <h1 class="margin-top40">加载中样式</h1>
            <div class="intrduce margin-top40">
                <p><b>基本加载中样式 :</b> </p>
            </div>
            <div class="margin-top20">
                <!-- <a-spin></a-spin> -->
                <img width="100" src="../../assets/img/Interwind-1.5s-200px.gif">
            </div>
            <div class="intrduce margin-top40">
                <p><b>大小加载中样式 : </b> </p>
            </div>
            <div class="margin-top20 ">
                <!-- <a-spin size="small"></a-spin> -->
                <img width="50" src="../../assets/img/Interwind-1.5s-100px.gif">
            </div>
            <div class="margin-top20 ">
                <!-- <a-spin></a-spin> -->
                <img width="100" src="../../assets/img/Interwind-1.5s-200px.gif">
            </div>
            <div class="margin-top20 ">
                <!-- <a-spin size="large"></a-spin> -->
                <img width="200" src="../../assets/img/Interwind-1.5s-400px.gif">
            </div>
            <div class="intrduce margin-top40">
                <p><b>文字加载中样式 :</b> </p>
            </div>
            <div class="margin-top20">
                <img width="100" src="../../assets/img/Interwind-1.5s-200px.gif">
                <!-- <a-spin tip="加载中"></a-spin> -->
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
            title1 : '抽屉',
            title2 : '通知提醒',
            path1 : '/Drawer',
            path2 : '/Notification',
            number : 24,
        }
    },
    components:{
        Changes
    },
}
</script>

<style>

</style>
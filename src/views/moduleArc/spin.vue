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
                <a-spin></a-spin>
            </div>
            <div class="intrduce margin-top40">
                <p><b>大小加载中样式 : </b> </p>
            </div>
            <div class="margin-top20 ">
                <a-spin size="small"></a-spin>
            </div>
            <div class="margin-top20 ">
                <a-spin></a-spin>
            </div>
            <div class="margin-top20 ">
                <a-spin size="large"></a-spin>
            </div>
            <div class="intrduce margin-top40">
                <p><b>文字加载中样式 :</b> </p>
            </div>
            <div class="margin-top20">
                <a-spin tip="加载中"></a-spin>
            </div>
            <!-- <h1 class="margin-top40">应用加载中样式 :</h1>
            <div class="margin-top20" style="position: relative;width: 1050px;">
                <div class="loading">
                    <img width="100" src="image/Interwind-1.5s-200px.gif">
                    <p>加载中...</p>
                </div>
                <img width="1050" src="image/4-17-1.png">
            </div> -->
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
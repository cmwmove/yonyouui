<template>
    <div class="rightBox">
        <div class="container">
            <h1>图表</h1>
            <div class="intrduce">
                <p>数据可视化展示的组件。</p>
            </div>
            <h1 class="margin-top40">何时使用</h1>
            <div class="intrduce ">
                <p>数据量具像化时候展示。</p>
            </div>
            <h1 class="margin-top40">图表样式</h1>
            <div class="intrduce margin-top40">
                <p><b>环状样式 :</b> </p>
            </div>
            <div class="margin-top20">
                <img width="509" src="../../assets/img/4-18-1.png">
            </div>
            <div class="margin-top20">
                <img width="509" src="../../assets/img/4-18-2.png">
            </div>
            <div class="margin-top20">
                <img width="509" src="../../assets/img/4-18-3.png">
            </div>
            <div class="margin-top20">
                <img width="509" src="../../assets/img/4-18-4.png">
            </div>
            <div class="margin-top20">
                <img width="509" src="../../assets/img/4-18-5.png">
            </div>
            <div class="intrduce margin-top40">
                <p><b>饼图样式 :  </b> </p>
            </div>
            <div class="margin-top20 ">
                <img width="509" src="../../assets/img/4-18-6.png">
            </div>
            <div class="intrduce margin-top40">
                <p><b>折线样式 : </b> </p>
            </div>
            <div class="margin-top20 ">
                <img width="863" src="../../assets/img/4-18-7.png">
            </div>
            <div class="margin-top20 ">
                <img width="863" src="../../assets/img/4-18-8.png">
            </div>
            <div class="margin-top20 ">
                <img width="863" src="../../assets/img/4-18-9.png">
            </div>
            <div class="intrduce margin-top40">
                <p><b>柱状图样式 :</b> </p>
            </div>
            <div class="margin-top20 ">
                <img width="863" src="../../assets/img/4-18-10.png">
            </div>
            <div class="margin-top20 ">
                <img width="863" src="../../assets/img/4-18-11.png">
            </div>
            <div class="margin-top20 ">
                <img width="863" src="../../assets/img/4-18-12.png">
            </div>
            <h1 class="margin-top40">条形图样式 : </h1>
            <div class="margin-top20">
                <img width="863" src="../../assets/img/4-18-13.png">
            </div>
            <div class="margin-top20">
                <img width="863" src="../../assets/img/4-18-14.png">
            </div>
            <div class="margin-top20">
                <img width="863" src="../../assets/img/4-18-15.png">
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
            title1 : '弹框',
            title2 : '警告提示',
            path1 : '/Tabs',
            path2 : '/Popup',
            number : 27,
        }
    },
    components:{
        Changes
    },
}
</script>

<style>

</style>
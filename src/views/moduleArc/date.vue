<template>
    <div class="rightBox">
        <div class="container">
            <h1>日期选择</h1>
            <div class="intrduce">
                <p>输入或选择日期的控件。</p>
            </div>
            <h1 class="margin-top40">何时使用</h1>
            <div class="intrduce ">
                <p>当用户需要输入一个日期，可以点击标准输入框，弹出日期面板进行选择。</p>
            </div>
            <h1 class="margin-top40">日期选择尺寸</h1>
            <div class="intrduce">
                <p>标准开关与组合开关的尺寸一致，区别为有无图标或文字。日期图标大小为16px*16px，文字为12px。</p>
            </div>
            <div class="margin-top20">
                <!-- <div class="dateBox"> -->
                    <div class="datebox">
                        <span class="dataspan">标准日期选择</span>
                        <div>
                            <a-date-picker />
                        </div>
                        <div class="margin-top40">
                            <a-date-picker :default-value="moment('2015-06-06', dateFormat)" disabled />
                        </div>
                    </div>
                    <div class="datebox">
                        <span class="dataspan">组合日期选择</span>
                        <div><a-range-picker /></div>
                        <div class="margin-top40">
                            <a-range-picker :default-value="[moment('2015-06-06', dateFormat), moment('2015-06-06', dateFormat)]" disabled />
                        </div>
                    </div>
                <!-- </div> -->
            </div>
        </div>
        <Changes :title1="title1" :title2="title2" :path1="path1" :path2="path2" :number="number"></Changes>
    </div>
</template>

<script>
import Changes from '@/components/changes.vue'
import moment from 'moment';
export default {
    data(){
        this.dateFormat = 'YYYY-MM-DD';
        return{
            title1 : '选择框',
            title2 : '表单',
            path1 : '/Chooser',
            path2 : '/Form',
            number : 11
        }
    },
    components:{
        Changes
    },
    methods: {
        moment,
    },
}
</script>

<style lang="less">
// .dateBox{
    // width: 500px;
    // height: 800px;

    .datebox{
        position: relative;
        // display: flex;
        // justify-content: center;
        // align-items: center;
        width: 500px;
        height: 250px;
        border: 1px solid #DDDDDD;
        padding: 90px 70px;
        margin-bottom: 20px;

        .dataspan{
            position: absolute;
            top: 30px;
            left: 20px;
        }
    }
// }
</style>
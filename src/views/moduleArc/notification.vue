<template>
    <div class="rightBox">
        <div class="container">
            <h1>通知提醒</h1>
            <div class="intrduce">
                <p>全局展示通知提醒信息。</p>
            </div>
            <h1 class="margin-top40">何时使用</h1>
            <div class="intrduce ">
                <p>在系统四个角显示通知提醒信息。经常用于以下情况：</p>
                <p>较为复杂的通知内容。</p>
                <p>带有交互的通知，给出用户下一步的行动点。</p>
                <p>系统主动推送</p>
            </div>
            <h1 class="margin-top40">通知提醒样式</h1>
            <div class="intrduce margin-top40">
                <p><b>基本通知样式 : 右侧弹出right</b> </p>
            </div>
            <div class="margin-top20">
                <div class="notBoxO">
                    <a-button type="primary" @click="openNotification">
                        通知提醒
                    </a-button>
                </div>
            </div>
            <div class="intrduce margin-top40">
                <p><b>图标通知样式 : </b> </p>
            </div>
            <div class="margin-top20 ">
                <div class="notBoxO">
                    <a-button type="primary" @click="openNotificationS">
                        图标通知提醒
                    </a-button>
                </div>
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
            title1 : '加载中',
            title2 : '页签',
            path1 : '/Spin',
            path2 : '/Tabs',
            number : 25,
        }
    },
    components:{
        Changes
    },
    methods: {
        openNotification() {
            this.$notification.open({
                message: '新消息提醒',
                description:
                '期间就放那的合法阿范德萨防火及阿法拉风好大框架仿好浪费法律的说法爱好法律的说法爱的发的发电量发电房开机啊换地方地方',
                onClick: () => {
                console.log('Notification Clicked!');
                },
            });
        },
        openNotificationS() {
            this.$notification.open({
                message: '新消息提醒',
                description:
                '期间就放那的合法阿范德萨防火及阿法拉风好大框架仿好浪费法律的说法爱好法律的说法爱的发的发电量发电房开机啊换地方地方',
                icon: <a-icon type="question-circle" style="color: #108ee9" />,
            });
        },
    },
}
</script>

<style>
.notBoxO{
    border: 1px solid #dddddd;
    padding: 20px;
    width: 175px;
}
</style>
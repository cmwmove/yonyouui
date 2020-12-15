<template>
    <div class="rightBox">
        <div class="container">
            <h1>导航菜单</h1>
                <div class="intrduce">
                    <p>导航功能操作是系统重要组成部分。通常在导航右上角显示，由文字+icon组成。</p>
                    <p>导航功能操作设计风格遵循以下四点：</p>
                    <p>◆位置显眼： 导航功能按钮放在用户熟悉的位置，即导航的右上角。</p>
                    <p>◆交互方式： 一般采用统一的交互方式点击弹出或鼠标滑动弹出。</p>
                    <p>◆人性化： 通过增加消息提醒、系统换肤、工作台切换、个性化设置等操作，让用户使用起来更方便更舒心。</p>
                    <p>◆方便快捷： 用户能快速对系统功能进行修改操作。</p>
                </div>

                <h1 class="margin-top40">功能操作罗列</h1>
                <div class="intrduce ">
                    <p>工作台样式+用户设置样式</p>
                </div>
                <div class="margin-top40">
                    <img width="769" src="../../assets/img/5-4-1.png">
                </div>

                <div class="intrduce margin-top20">
                    <p>消息通知提醒待办样式</p>
                </div>
                <div class="margin-top20">
                    <img width="1050" src="../../assets/img/5-4-2.png">
                </div>

                <div class="intrduce margin-top20">
                    <p>系统设置样式</p>
                </div>
                <div class="margin-top20">
                    <img width="759" src="../../assets/img/5-4-3.png">
                </div>

                <h1 class="margin-top40">页面效果</h1>
                <div class="intrduce ">
                    <p>页面样式二</p>
                </div>
                <div class="margin-top40">
                    <img width="1050" src="../../assets/img/5-4-4.png">
                </div>

                <div class="intrduce margin-top20">
                    <p>页面样式三</p>
                </div>
                <div class="margin-top20">
                    <img width="1050" src="../../assets/img/5-4-5.png">
                </div>
        </div>
        <Changes :title1="title1" :title2="title2" :path1="path1" :path2="path2"></Changes>
    </div>
</template>

<script>
import Changes from '@/components/changes.vue'
export default {
    data(){
        return{
            title1 : '菜单',
            title2 : '门户选项卡',
            path1 : '/Menu',
            path2 : '/PortalTabs'
        }
    },
    components:{
        Changes
    },
}
</script>

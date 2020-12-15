<template>
    <div class="rightBox">
        <div class="container">
            <h1>登录页</h1>
                <div class="intrduce ">
                    <p>登录页为用户进入系统的入口页面。主要承载内容有logo、标题、数据相关背景图、输入框、按钮。</p>
                    <p>登录页设计风格遵循以下四点：</p>
                    <p>◆简洁： 给用户提供一条清晰的路径，能让他们快速找到想访问的内容。用户不被无关内容所误导。</p>
                    <p>◆独一无二： 登录页面和系统中的其他页面不同。在建立一个特定模板的基础上，让它独具特色，吸引眼球。</p>
                    <p>◆不误导用户： 登录页是系统的第一印象,尽量不要加无关的内容误导客户。</p>
                    <p>◆愉悦： 赋予适度的情感,能让人感觉舒适。</p>
                </div>

                <h1 class="margin-top40">登录页样式</h1>
                <div class="intrduce margin-top20">
                    <p><b>登录页样式一</b></p>
                    <p>左右结构的形式。将配图与登录内容，区分开。更直观的定位到主要内容¨。左侧的banner区，方便在项目应用时随时替换。不影响布局，大大提高实施效率。</p>
                </div>
                <div class="margin-top20">
                    <img width="976" src="../../assets/img/5-1-1.png">
                </div>

                <div class="intrduce margin-top20">
                    <p><b>登录页样式二</b></p>
                    <p>板式布局采用传统布局。为突出目标以及场景风格的渲染。背景色以科技蓝为主。中间浮层加插画配合。使得整个页面给人以轻松、愉悦的感觉。</p>
                </div>
                <div class="margin-top20">
                    <img width="976" src="../../assets/img/5-1-2.png">
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
            title1 : '布局',
            title2 : '门户首页',
            path1 : '/Layout',
            path2 : '/PortalIndex'
        }
    },
    components:{
        Changes
    },
}
</script>


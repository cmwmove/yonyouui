<template>
    <div class="rightBox">
        <div class="container">
            <h1>选项卡</h1>
                <div class="intrduce">
                    <p>用于容器内部主功能切换。卡片式的页签，提供可关闭的样式，常用于容器顶部。</p>
                    <p>选项卡交互内容以下几点：</p>
                    <p>◆选项卡名称显示全不做隐藏处理</p>
                    <p>◆鼠标经过出现关闭按钮。</p>
                    <p>◆工作台首页没有关闭按钮。</p>
                    <p>◆选项卡置于导航下方。</p>
                </div>

                <h1 class="margin-top40">选项卡样式</h1>
                <div class="margin-top40">
                    <img width="1050" src="../../assets/img/5-5-1.png">
                </div>

                <h1 class="margin-top40">场景页面</h1>
                <div class="margin-top40">
                    <img width="1050" src="../../assets/img/5-5-2.png">
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
            title1 : '功能展开',
            title2 : '政务客服',
            path1 : '/Function',
            path2 : '/CustomerService'
        }
    },
    components:{
        Changes
    },
}
</script>

<template>
    <div class="rightBox">
        <div class="container">
            <h1>门户首页</h1>
                <div class="intrduce">
                    <p>门户首页为用户登录后的页面。主要承载内容有快捷功能、角色相关消息、数据相关图表等内容为主。</p>
                    <p>门户首页设计风格以简洁、大气为主。根据公司产品主要用户角色为政府部门相关工作人员，进了有针对性的设计。从视觉感官上，将一些图表、卡片、按钮等相关组件进行锐角化处理。形成一种正直、正式、商务的视觉感受。</p>
                </div>

                <h1 class="margin-top40">门户样式</h1>
                <div class="intrduce ">
                    <p><b>门户样式————基础版：</b>适用于大多数产品及项目设计。2.0基础版本，在原有1.0版本上进行样式、布局、交互、功能等一系列的优化，兼容性更强，用户体验更好。</p>
                </div>
                <div class="margin-top40">
                    <img width="1050" src="../../assets/img/5-2-1.png">
                </div>

                <div class="intrduce margin-top40">
                    <p><b>门户样式二————暗夜模式：</b>更商务、更炫酷、更护眼。适用于喜欢炫黑风格的客户。</p>
                </div>
                <div class="margin-top20">
                    <img width="1050" src="../../assets/img/5-2-2.png">
                </div>

                <div class="intrduce margin-top40">
                    <p><b>门户样式三————无选项卡样式：</b>适用于不需要进行选项卡切换的产品及项目。</p>
                </div>
                <div class="margin-top20">
                    <img width="1050" src="../../assets/img/5-2-3.png">
                </div>

                <div class="intrduce margin-top40">
                    <p><b>门户样式四————客户定制版：</b>适用于客户有特殊个性化需求的产品及项目。</p>
                </div>
                <div class="margin-top20">
                    <img width="1050" src="../../assets/img/5-2-4.png">
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
            title1 : '登录页',
            title2 : '菜单',
            path1 : '/LoginPage',
            path2 : '/Menu'
        }
    },
    components:{
        Changes
    },
}
</script>

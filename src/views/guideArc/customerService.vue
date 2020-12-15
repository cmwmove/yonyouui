<template>
    <div class="rightBox">
        <div class="container">
            <h1>政务客服</h1>
                <div class="intrduce">
                    <p>政务2.0新增客服功能。</p>
                    <p>增加客服功能的优点：</p>
                    <p>◆改善用户体验。给客户提供帮助服务,让客户觉得使用产品的同时,也享受到了优质的售后保障,这种服务会更打动客户。</p>
                    <p>◆提升口碑。好的产品设计会提升产品的口碑。</p>
                    <p>◆让产品更具感情。赋有感情的系统更吸引客户。</p>
                </div>

                <h1 class="margin-top40">政务客服样式</h1>
                <div class="margin-top40">
                    <img width="808" src="../../assets/img/5-6-1.png">
                </div>

                <h1 class="margin-top40">场景页面</h1>
                <div class="intrduce margin-top20">
                    <p>页面一-未点击状态</p>
                </div>
                <div class="margin-top40">
                    <img width="1050" src="../../assets/img/5-6-2.png">
                </div>

                <div class="intrduce margin-top20">
                    <p>页面二-点击后状态</p>
                </div>
                <div class="margin-top40">
                    <img width="1050" src="../../assets/img/5-6-3.png">
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
            title1 : '门户选项卡',
            title2 : '模块',
            path1 : '/PortalTabs',
            path2 : '/Modular'
        }
    },
    components:{
        Changes
    },
}
</script>

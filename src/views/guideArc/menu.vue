<template>
    <div class="rightBox">
        <div class="container">
            <h1>导航菜单</h1>
                <div class="intrduce">
                    <p>导航菜单是系统主要内容列表或特征工作列表。通常由一组链接或icon组成并在视觉上与其他内容有显著差异。
                    <p>导航菜单设计风格遵循以下四点：</p>
                    <p>◆清晰可见： 导航菜单放在用户熟悉的位置。让菜单链接看起来有互动感。</p>
                    <p>◆告诉用户位置： 能让用户知道“我去哪”“我在哪”。</p>
                    <p>◆易操作性： 通过清晰的层级关系让用户容易操作。</p>
                    <p>◆层级深度： 层级不能太深,一般不超过4级。</p>
                </div>

                <h1 class="margin-top40">导航菜单样式</h1>
                <div class="intrduce ">
                    <p><b>菜单样式一-顶部导航菜单：</b>末级节点最多显示二十个字,文字大小16、14px。</p>
                </div>
                <div class="margin-top40">
                    <img width="1050" src="../../assets/img/5-3-1.png">
                </div>
                <div class="margin-top20">
                    <img width="1050" src="../../assets/img/5-3-3.png">
                </div>
                <div class="intrduce margin-top20">
                    <p><b>菜单样式二-左侧导航菜单：</b>末级节点最多显示二十个字,文字大小16、14px。</p>
                </div>
                <div class="margin-top20">
                    <img width="1050" src="../../assets/img/5-3-7.png">
                    <p class="margin-top20"><img width="1050" src="image/5-3-2.png"></p>
                    <p class="margin-top20">最近访问菜单</p>
                    <p class="margin-top20">
                    <img width="1050" src="../../assets/img/5-3-8.png">
                    </p>
                    <p class="margin-top20">搜索菜单结果</p>
                    <p class="margin-top20">
                    <img width="1050" src="../../assets/img/5-3-6.png">
                    </p>
                </div>
                <div class="intrduce margin-top40">
                    <p><b>菜单左侧固定样式一</b></p>
                </div>
                <div class="margin-top20">
                    <img width="1050" src="../../assets/img/5-3-4.png">
                </div>
                <div class="intrduce margin-top40">
                    <p><b>菜单左侧固定样式二</b></p>
                </div>
                <div class="margin-top20">
                    <img width="1050" src="../../assets/img/5-3-5.png">
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
            title1 : '门户首页',
            title2 : '功能展开',
            path1 : '/LoginPage',
            path2 : '/Function'
        }
    },
    components:{
        Changes
    },
}
</script>

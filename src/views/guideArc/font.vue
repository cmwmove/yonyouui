<template>
    <div class="rightBox">
        <div class="container">
             <h1>字体</h1>
                <div class="intrduce">
                    <p>字体是界面设计中重要的构成要素之一，它能辅助信息的传递，是文字的外在表现形式；字体还可以通过其独有的艺术魅力，表达情感体验，并塑造品牌形象。</p>
                    <p>我们的用户通过文本来理解内容和完成工作，科学的字体系统将大大提升用户的阅读体验及工作效率。所以，我们将从三个角度出发去定义系统字体构成和设计原则。</p>
                </div>
                <h1 class="margin-top40">字体的选择</h1>
                <div class="intrduce">
                    <p>由于第一版的设计为了方式字体版权的侵权等问题，我们选择了系统默认的字体。这样的选择的弊端是不同系统的默认字体的不同，导致系统文字的差异打，品牌的不一致性不足。经过了一段时间筛选和查找。发现了阿里巴巴提供的一款免费商用的字体：《普惠体》。中文普惠体的字体视觉效果，介于传统黑体字与艺术体结合的感觉产生。整体字庄重不失美观，清晰不失稳重。</p>
                    <p>所以如果在可配置字体的情况下，我们原则上建议必须选择《普惠体》作为我们公司级产品的标准字体。</p>
                    <p class="margin-top20"><a href="../../assets/download/AlibabaPuHui.zip" download><button class="button-d">点击下载阿里巴巴普惠体</button></a></p>
                </div>
                <h1 class="margin-top40">主体字大小</h1>
                <div class="intrduce">
                    <p>我们基于电脑显示器阅读距离（40～50 cm）以及最佳阅读角度（0.3）所以主字体 12 或者14，可以保证在多数常用显示器上的用户阅读效率最佳。</p>
                    <p>目前主流的两款分辨率的尺寸是1366x768和1920x1080两种尺寸。两种尺寸由于显示的空间差距较大，以及显示实际尺寸的大小限制。</p>
                    <p>1366x768的最佳主体字的显示效果是12px字号大小。可以展示更多的信息，且空间视觉不会显的拥挤。</p>
                    <p>1920x1080的最佳主题字的显示效果是14px字号大小。可以在有效的空间内让字显示的更清晰。聚焦的效果也会更好。</p>
                    <p>所以，我们建议，在开发过程中，可以相应式的判断在不同分辨率下，改变主题字的大小，以达到最佳的阅读效果。</p>
                </div>

                <div class="margin-top20">
                    <img width="600" src="../../assets/img/3-2-1.png">
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
            title1 : '颜色',
            title2 : '图标',
            path1 : '/Color',
            path2 : '/IconDesign'
        }
    },
    components:{
        Changes
    },
}
</script>
<style>
.button-d {
    background-color: #0066ff; /* Green */
    border: none;
    color: white;
    padding: 0px 16px;
    text-align: center;
    text-decoration: none;
    line-height: 32px;
    display: inline-block;
    font-size: 14px;
    border-radius: 4px;
}
</style>

<template>
    <div class="rightBox">
        <div class="container">
            <h1>模块</h1>
                <div class="intrduce">
                    <p>模块化设计是将设计分解成小的模块，然后独立设计它，最后在将它们组合成更大的系统，</p>
                    <p>就像小朋友玩的积木一样，由一些简单的零件组成小的模块，然后在组合成各种模型样式。同理在系统UI设计中，我们同样可以将文字、颜色、图标、图片等看成一个元素，那么由这些元素组合可以成为一个小的模块，最后将这些模块组合在一起就形成了各种界面样式。</p>
                    <p>模块化设计的四大优势：</p>
                    <p>◆保持输出一致性:便于复用；</p>
                    <p>◆提高设计效率:当界面复用率比较高时，便于快速应用；</p>
                    <p>◆适用性强便于维:如果页面上出现问题，就可以找出相关模块进行检查并拔除，直到恢复正常；</p>
                    <p>◆便于协作:开发做好之后封装成模块，别人在自己的页面中直接加载应用就行。</p>
                </div>

                <h1 class="margin-top40">模块样式罗列</h1>
                <div class="intrduce margin-top20">
                    <p><b>常用功能模块样式:</b>常用功能模块采用图标+标题文字+内容文字+背景图片组成。功能模块大小:330*150px。图标大小:32*32px;标题文字大小:18px;内容文字大小:12px;背景图为圆角6px的圆角矩形，2.0版本圆角更锐利。更显正直、商务。背景圆角矩形颜色采用颜色#0066FF(蓝);#33cc99(绿);#FF6633(橙);#0099FF(浅蓝)。</p>
                </div>
                <div class="margin-top40">
                    <img width="652" src="../../assets/img/5-7-1.png">
                </div>
                <div class="intrduce margin-top20">
                    <p><b>自定义模块样式:</b>自定义模块样式是客户根据需求在首页工作台上自行添加的功能模块。自定义模块分内容区和标题区(标题+更多按钮)两部分。标题栏高度45px;标题文字大小:14px;标题文字颜色#0066FF;</p>
                </div>
                <div class="margin-top40">
                    <img width="1050" src="../../assets/img/5-7-2.png">
                </div>

                <h1 class="margin-top40">模块堆积页面</h1>
                <div class="margin-top40">
                    <img width="1050" src="../../assets/img/5-7-3.png">
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
            title1 : '政务客服',
            title2 : '',
            path1 : '/CustomerService',
            path2 : ''
        }
    },
    components:{
        Changes
    },
}
</script>

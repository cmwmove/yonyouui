<template>
    <div class="rightBox">
        <div class="container">
            <h1>颜色</h1>
                <div class="intrduce">
                    <p>我们将色彩体系分成两个层面：产品级色彩体系和个性化彩体系。</p>
                    <p>产品级色彩体系主要定义了产品设计中的基础颜色和与之相搭配的辅助色，主要用于数据可视化和某种特定状态使用。</p>
                    <p></p>个性化色彩体系则是项目设计过程中，由于不同客户产生的个性化需求使用。使用后整体的产品的主题颜色发生改变。但状态颜色固定不发生改变。</p>
                </div>
                <h1 class="margin-top40">色彩使用Web安全色的原因</h1>
                <div class="intrduce">
                    <p>由于不同的平台（Mac、PC等）有不同的调色板，不同的浏览器也有自己的调色板。这就意味着对于一幅图，显示在Mac上的Web浏览器中的图像，与它在PC上相同浏览器中显示的效果可能差别很大。选择特定的颜色时，浏览器会尽量使用本身所用的调色板中最接近的颜色。如果浏览器中没有所选的颜色，就会通过抖动或者混合自身的颜色来尝试重新产生该颜色。</p>
                    <p class="margin-top20">为了解决Web调色板的问题，人们一致通过了一组在所有浏览器中都类似的Web安全颜色。</p>
                    <p>这些颜色使用了一种颜色模型，在该模型中，可以用相应的16制进制值00、33、66、99、CC和FF来表达三原色（RGB）中的每一种。这种基本的Web调色板将作为所有的Web浏览器和平台的标准，它包括了这些16进制值的组合结果。这就意味着，我们潜在的输出结果包括6种红色调、6种绿色调、6种蓝色调。6*6*6的结果就给出了216种特定的颜色，这些颜色就可以安全的应用于所有的Web中，而不需要担心颜色在不同应用程序之间的变化。</p>
                </div>
                <h1 class="margin-top40">色彩的选用</h1>
                <div class="intrduce">
                    <p>选择定了Web安全色后，就是怎样从216种固定的颜色中选择合适的颜色作为产品级和个性化级的颜色。设计师通过对自然场景的抽象捕捉，通过大量的观察，捕捉不同色彩在自然光下的变化规律，借助美术中素描的思路，形成了特有的 12 色。又对 12 个颜色进行了验证，在平衡性、可读性、美感性以及可用性得出的。</p>
                </div>
                <h1 class="margin-top40">基础色</h1>
                <div class="intrduce">
                    <p>基础共计 12个颜色，9个主题色和3个功能色。这些颜色基本可以满足产品设计中对于颜色的需求。</p>
                </div>
                <div class="margin-top20">
                    <img width="906" src="../../assets/img/3-1-1.png">
                </div>
                <h1 class="margin-top40">品牌色的应用</h1>
                <div class="intrduce">
                    <p>品牌色是体现产品特性和传播理念最直观的视觉元素之一。我们把品牌色取自主题色的极客蓝，色值为 #0066FF，应用场景包括：关键行动点，操作状态、重要信息高亮，图形化等场景。</p>
                </div>
                <div class="margin-top40">
                    <img width="312" src="../../assets/img/3-1-2.png">
                </div>
                <h1 class="margin-top40">功能色</h1>
                <div class="intrduce">
                    <p>功能色代表了明确的信息以及状态，比如成功、出错、失败、提醒、链接等。功能色的选取需要遵守用户对色彩的基本认知。同产品体系下，功能色必须保持一致，不要有自定义干扰用户的认知体验。</p>
                </div>
                <div class="margin-top40">
                    <img width="312" src="../../assets/img/3-1-3.png">
                </div>
                <h1 class="margin-top40">中性色</h1>
                <div class="intrduce">
                    <p>中性色主要被大量的应用在界面的文字部分，背景、边框、分割线、等场景中。</p>
                </div>
                <div class="margin-top40">
                    <img width="894" src="../../assets/img/3-1-4.png">
                </div>
                <h1 class="margin-top40">颜色的使用原则</h1>
                <div class="intrduce">
                    <p>在产品设计中，对于色彩的使用原则是克制的。色彩在使用时更多的是基于信息传递、操作引导和交互反馈等目的。在不破坏操作效率，影响信息的清晰传达的这些原则之上，理性的选择颜色。当然在配图插画以及展示性页面中可以根据实际情况适当选择。</p>
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
            title1 : '按钮命名',
            title2 : '字体',
            path1 : '/ButtonName',
            path2 : '/Font'
        }
    },
    components:{
        Changes
    },
}
</script>



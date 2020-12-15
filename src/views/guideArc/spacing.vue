<template>
    <div class="rightBox">
        <div class="container">
            <h1>间距</h1>
                <div class="intrduce">
                    <p>如果信息之间关联性越高，它们之间的距离就应该越接近，也越像一个视觉单元；相反，关联性越低，则距离就应该越远，也越像多个视觉单元。间距的根本目的是实现组织性，让用户对页面结构和信息层次一目了然。</p>
                </div>
                <h1 class="margin-top40">纵向间距的使用</h1>
                <div class="intrduce">
                    <p>通过『小号间距』、『中号间距』、『大号间距』这三种规格来划分信息层次。</p>
                </div>
                <div class="margin-top20">
                    <img width="671" src="../../assets/img/2-1-1.png">
                </div>
                <h2 class="margin-top40">纵向间距实例</h2>
                <div class="intrduce">
                    <p>这三种间距分别为：8px（小号间距）、16px（中号间距）、24px（大号间距）。</p>
                </div>
                <h2 class="margin-top40">其他情况</h2>
                <div class="intrduce">
                    <p>在这三种规格不适用的情况下，可以通过加减『基础间距』的倍数，或者增加元素来拉开信息层次。</p>
                </div>
                <div class="margin-top20">
                    <img width="671" src="../../assets/img/2-1-2.png">
                </div>
                <h2 class="margin-top40">增加元素示例</h2>
                <div class="intrduce">
                    <p>例通过增加『分割线』来拉开层次。</p>
                </div>
                <div class="line"></div>
                <h1 class="margin-top40">横向间距的使用</h1>
                <div class="intrduce">
                    <p>为了适用不同尺寸的屏幕，在横向采用栅格布局来排布组件，从而保证布局的灵活性。</p>
                </div>
                <div class="margin-top40">
                    <img width="741" src="../../assets/img/2-1-3.png">
                    <p class="center-text margin-top20">组合排布示例</p>
                </div>
                <div class="intrduce margin-top40">
                    <p>在一个组件内部，元素的横向间距也应该有所不同。</p>
                </div>
                <div class="margin-top40">
                    <img width="741" src="../../assets/img/2-1-4.png">
                </div>
        </div>
        <Changes :title1="title1" :title2="title2" :path1="path1" :path2="path2" ></Changes>
    </div>
</template>

<script>
import Changes from '@/components/changes.vue'
export default {
    data(){
        return{
            title1 : '设计原则',
            title2 : '对齐',
            path1 : '/DesignTenet',
            path2 : '/Align'
        }
    },
    components:{
        Changes
    },
}
</script>

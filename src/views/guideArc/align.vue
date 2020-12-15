<template>
    <div class="rightBox">
        <div class="container">
            <h1>对齐</h1>
                <div class="intrduce">
                    <p>『格式塔学派』中的连续律（Law of Continuity）所描述的，在知觉过程中人们往往倾向于使知觉对象的直线继续成为直线，使曲线继续成为曲线。在界面设计中，将元素进行对齐，既符合用户的认知特性，也能引导视觉流向，让用户更流畅地接收信息。</p>
                    <p>格式塔学派 ：是心理学重要流派之一，兴起于 20 世纪初的德国，又称为完形心理学；主张人脑的运作原理是整体的，『整体不同于其部件的总和』。</p>
                </div>

                <h1 class="margin-top40">文案类对齐</h1>
                <div class="intrduce">
                    <p>如果页面的字段或段落较短、较散时，需要确定一个统一的视觉起点。</p>
                </div>
                <div class="margin-top20">
                    <img width="846" src="../../assets/img/2-2-1.png">
                </div>

                <h1 class="margin-top40">表单类对齐</h1>
                <div class="intrduce">
                    <p>冒号对齐（右对齐）能让内容锁定在一定范围内，让用户眼球顺着冒号的视觉流，就能找到所有填写项，从而提高填写效率。</p>
                </div>
                <div class="margin-top40">
                    <img width="846" src="../../assets/img/2-2-2.png">
                </div>


                <h1 class="margin-top40">数字类对齐</h1>
                <div class="intrduce">
                    <p>为了快速对比数值大小，建议所有数值取相同有效位数，并且右对齐。</p>
                </div>
                <div class="margin-top20">
                    <img width="846" src="../../assets/img/2-2-3.png">
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
            title1 : '间距',
            title2 : '对比',
            path1 : '/Spacing',
            path2 : '/Contrast'
        }
    },
    components:{
        Changes
    },
}
</script>

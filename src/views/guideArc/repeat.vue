<template>
    <div class="rightBox">
        <div class="container">
            <h1>重复</h1>
                <div class="intrduce">
                    <p>相同的元素在整个界面中不断重复，不仅可以有效降低用户的学习成本，也可以帮助用户识别出这些元素之间的关联性。</p>
                </div>
                <h1 class="margin-top40">重复元素</h1>
                <div class="intrduce">
                    <p>重复元素可以是一条粗线、一种线框，某种相同的颜色、设计要素、设计风格，某种格式、空间关系等。</p>
                </div>
                <div class="margin-top20">
                    <img width="827" src="../../assets/img/2-4-1.png">
                </div>
                <div class="margin-top20">
                    <img width="827" src="../../assets/img/2-4-2.png">
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
            title1 : '对比',
            title2 : '直观',
            path1 : '/Contrast',
            path2 : '/Spacing'
        }
    },
    components:{
        Changes
    },
}
</script>
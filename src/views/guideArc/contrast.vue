<template>
    <div class="rightBox">
        <div class="container">
            <h1>对比</h1>
                <div class="intrduce">
                    <p>对比是增加视觉效果最有效方法之一，同时也能在不同元素之间建立一种有组织的层次结构，让用户快速识别关键信息。要实现有效的对比，对比就必须强烈。不强烈也就没有了对比。不要平平淡淡。</p>
                </div>
                <h1 class="margin-top40">主次关系对比</h1>
                <div class="intrduce">
                    <p>为了让用户能在操作上（类似表单、弹出框等场景）快速做出判断， 来突出其中一项相对更重要或者更高频的操作。</p>
                    <p>注意：突出的方法，不局限于强化重点项，也可以是弱化其他项。</p>
                </div>
                <div class="margin-top20">
                    <img width="839" src="../../assets/img/2-3-1.png">
                </div>
                <div class="intrduce margin-top40">
                    <p>在一些需要用户慎重决策的场景中，系统应该保持中立，不能替用户或者诱导用户做出判断。</p>
                </div>
                <div class="margin-top20">
                    <img width="839" src="../../assets/img/2-3-2.png">
                </div>
        </div>
        <Changes :title1="title1" :title2="title2" :path1="path1" :path2="path2""></Changes>
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
<template>
    <div class="rightBox">
        <div class="container">
            <h1>及时反馈</h1>
                <div class="intrduce">
                    <p>『及时反馈』的重要性体现在交互之后立即给出反馈。就像『牛顿第三定律』所描述作用力和反作用一样，用户进行了操作或者内部数据发生了变化，系统就应该立即有一个对应的反馈，同时输入量级越大、重要性越高，那么反馈量级越大、重要性越高。</p>
                    <p>虽然反馈太多（准确的说，错误的反馈太多）是一个问题，但是反馈太少甚至没有反馈的系统，则让人感觉迟钝和笨拙，用户体验更差。</p>
                    <p class="margin-top20">牛顿第三定律 ：当两个物体互相作用时，彼此施加于对方的力，其大小相等、方向相反。</p>
                </div>
                <h1 class="margin-top40">查询模式</h1>
                <div class="intrduce">
                    <p>自动完成：用户输入时，下拉列表会随着输入的关键词显示匹配项。根据查询结果分类的多少，可以分为『确定类目』、『不确定类目』两种类型。</p>
                </div>
                <div class="margin-top20">
                    <img width="609" src="../../assets/img/2-8-1.png">
                </div>
                <div class="margin-top40">
                    <img width="609" src="../../assets/img/2-8-2.png">
                </div>
                <div class="margin-top40">
                    <img width="609" src="../../assets/img/2-8-3.png">
                </div>
                <h1 class="margin-top40">反馈模式</h1>
                <div class="intrduce">
                    <p>进度指示：当一个操作需要一定时间完成时，就需要即时告知进度，保持与用户的沟通。常见的进度指示：『按钮加载』、『表格加载』、『富列表加载』、『页面加载』。可根据操作的量级和重要性，展示不同类型的进度指示。</p>
                </div>
                <div class="margin-top20">
                    <img width="609" src="../../assets/img/2-8-4.png">
                </div>
                <div class="margin-top40">
                    <img width="609" src="../../assets/img/2-8-5.png">
                </div>
                <div class="margin-top40">
                    <img width="609" src="../../assets/img/2-8-6.png">
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
            title1 : '过渡动画',
            title2 : '按钮命名',
            path1 : '/TransitionOn',
            path2 : '/Color'
        }
    },
    components:{
        Changes
    },
}
</script>
<template>
    <div class="rightBox">
        <div class="container">
            <h1>弹出</h1>
                <div class="intrduce">
                    <p>可以在一个页面解决的问题，就不要去其它页面解决，因为任何页面刷新和跳转都会引起变化盲视（Change Blindness），导致用户心流（Flow）被打断。频繁的页面刷新和跳转，就像在看戏时，演员说完一行台词就安排一次谢幕一样。</p>
                    <p>变化盲视 ：指视觉场景中的某些变化并未被观察者注意到的心理现象。产生这种现象的原因包括场景中的障碍物，眼球运动、地点的变化，或者是缺乏注意力等。——摘自《维基百科》
                        心流：也有别名以化境 (Zone) 表示，亦有人翻译为神驰状态，定义是一种将个人精神力完全投注在某种活动上的感觉；心流产生时同时会有高度的兴奋及充实感。——摘自《维基百科》</p>
                </div>
                <h1 class="margin-top40">覆盖层</h1>
                <div class="intrduce">
                    <p>二次确认覆盖层：避免滥用 Modal 进行二次确认，应该勇敢的让用户去尝试，给用户机会『撤销』即可。</p>
                </div>
                <div class="margin-top20">
                    <img width="609" src="../../assets/img/2-6-1.png">
                </div>
                <div class=" margin-top40">
                    <img width="609" src="../../assets/img/2-6-2.png">
                </div>
                <div class=" margin-top40">
                    <img width="609" src="../../assets/img/2-6-3.png">
                </div>
                <div class=" margin-top40">
                    <img width="609" src="../../assets/img/2-6-4.png">
                </div>
                <div style="border-bottom: solid 1px #D8D8D8;" class="margin-top40"></div>
                <h1 class="margin-top40">嵌入层</h1>
                <p>列表嵌入层：在列表中，显示某条列表项的详情信息，保持上下文不中断。</p>
                <div class="margin-top20">
                    <img width="609" src="../../assets/img/2-6-5.png">
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
            title1 : '直观',
            title2 : '过渡动画',
            path1 : '/Spacing',
            path2 : '/TransitionOn'
        }
    },
    components:{
        Changes
    },
}
</script>
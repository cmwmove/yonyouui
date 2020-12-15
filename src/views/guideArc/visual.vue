<template>
    <div class="rightBox">
        <div class="container">
            <h1>直观</h1>
                <div class="intrduce">
                    <p>Alan Cooper （交互设计之父）说过：『需要在哪里输出，就要允许在哪里输入』。这就是直接操作的原理。比如：不要为了编辑内容而打开另一个页面，应该直接在上下文中实现编辑。</p>
                </div>
                <h1 class="margin-top40">内页编辑</h1>
                <div class="intrduce">
                    <p>单字段行内编辑</p>
                    <p>当『易读性』远比『易编辑性』重要时，可以使用『单击编辑』。</p>
                </div>
                <div class="margin-top20">
                    <img width="889" src="../../assets/img/2-5-1.png">
                </div>
                <div class="intrduce margin-top40">
                    <p>状态一：普通的浏览模式，不区分可编辑行和不可编辑行；</p>
                    <p>状态二：鼠标悬停时，『指针』变为『手型』，编辑区域底色变黄，出现『Tooltips』提示单击编辑；</p>
                    <p>状态三：鼠标点击后，出现『输入框』、『确定』、『取消』表单元素，同时光标定位在『输入框』中。</p>
                </div>

                <div style="border-bottom: solid 1px #D8D8D8;" class="margin-top40"></div>

                <div class="intrduce margin-top40">
                    <p>当『易读性』为主，同时又要突出操作行的『易编辑性』时，可使用『文字链/图标编辑』。</p>
                </div>
                <div class="margin-top20">
                    <img width="839" src="../../assets/img/2-5-2.png">
                </div>
                <div class="intrduce margin-top40">
                    <p>状态一：在可编辑行附近出现文字链/图标；</p>
                    <p>状态二：鼠标点击『编辑』后，出现『输入框』、『确定』、『取消』表单元素，同时光标定位在『输入框』中。</p>
                </div>

                <div style="border-bottom: solid 1px #D8D8D8;" class="margin-top40"></div>

                <div class="intrduce margin-top40">
                    <p>在『多字段行内编辑』的情况下，显示的内容和编辑时所需的字段会存在比较大的差异，所以更需要设计一些过度效果，来缓解、消除这种视觉影响。</p>
                </div>
                <div class="margin-top20">
                    <img width="839" src="../../assets/img/2-5-3.png">
                </div>
                <div class="intrduce margin-top40">
                    <p>编辑模式在不破坏整体性的前提下，可扩大空间，以便放下『输入框』等表单元素；其中，在 Table 中进行编辑模式切换时，需要保证每列的不跳动。</p>
                </div>
        </div>
        <Changes :title1="title1" :title2="title2" :path1="path1" :path2="path2" :number="number"></Changes>
    </div>
</template>

<script>
import Changes from '@/components/changes.vue'
export default {
    data(){
        return{
            title1 : '重复',
            title2 : '弹出',
            path1 : '/Repeat',
            path2 : '/Eject'
        }
    },
    components:{
        Changes
    },
}
</script>
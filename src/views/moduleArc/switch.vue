<template>
    <div class="rightBox">
        <div class="container">
            <h1>开关</h1>
            <div class="intrduce">
                <p>开关选择器，作为界面中可直接操作的元件，提供两个互斥选项供用户选择。开关不同于其他复杂控件，其操作执行直观，用户选择一个选项后，系统立即执行操作。</p>
                <p>开关最重要的作用就是立即打开或关闭某个功能，并向用户清晰的展示开关状态。</p>
            </div>
            <h1 class="margin-top40">何时使用</h1>
            <div class="intrduce ">
                <p>需要表示开关状态/两种状态（如开/关、是/否、启动/禁用）之间的切换时；</p>
                <p>和 checkbox的区别是，切换 switch 会直接触发状态改变，而 checkbox 一般用于状态标记，需要和提交操作配合。</p>
            </div>
            <h1 class="margin-top40">开关类型</h1>
            <div class="intrduce">
                <p>开关一般根据有无文字，分为2种类型：标准开关、组合开关。</p>
                <p>◆标准开关：由标签+开关按钮组成，默认值为开或者关。</p>
                <p>◆组合开关：由标签+文字/图标和开关组合按钮组成。</p>
            </div>
            <div class="margin-top20">
                <div class="switchBox Box">
                    <span class="titleSpan">1.标准开关</span>
                    <div class="swbox">
                        <span>样式1：</span>
                        <a-switch :default-checked="false" style="margin: 0 50px 0 20px;"/>
                        <a-switch default-checked />
                    </div>
                </div>
                <div class="switchBox Box">
                    <span class="titleSpan">2.组合开关</span>
                    <div>
                        <div class="swbox">
                            <span>样式1：</span>
                            <a-switch checked-children="开" un-checked-children="关" :default-checked="false" style="margin: 0 50px 0 20px;"/>
                            <a-switch checked-children="开" un-checked-children="关" default-checked />
                        </div>
                    </div>
                </div>
                <div class="switchBox Box">
                    <span class="titleSpan">3.禁用状态</span>
                    <div class="swbox">
                        <a-switch checked-children="开" disabled un-checked-children="关" :default-checked="false" style="margin: 0 50px 0 70px;"/>
                        <a-switch checked-children="开" disabled un-checked-children="关" default-checked />
                        <!-- <a-switch :default-checked="false" disabled/> -->
                        <!-- <a-switch default-checked disabled/> -->
                    </div>
                </div>
            </div>
            <h1 class="margin-top40">开关交互</h1>
            <div class="intrduce">
                <p>开关状态一般分为开状态、关状态、禁用状态。启用和停用是一种特殊状态，启用对应开，停用对应关，这里不单独作为一种状态列出。</p>
                <p>◆开状态：默认选中值，颜色高亮，一般用作积极的响应。</p>
                <p>◆关状态：即关闭状态，按钮置灰，一般用作与积极操作互斥的响应。</p>
                <p>◆禁用状态：开关的不可编辑状态，一般采用开状态加40%透明度的样式。</p>
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
            title1 : '输入框',
            title2 : '树',
            path1 : '/InputBox',
            path2 : '/Tree',
            number : 13
        }
    },
    components:{
        Changes
    },
}
</script>

<style lang="less">
.switchBox{
    width: 310px;
    height: 180px;
    margin-top: 20px;
    padding: 10px 0 0 20px;
}
.swbox{
    width: 274px;
    margin: 20px 0 20px 0;
}
.switchBox2{
    width: 600px;
    height: 440px;
    border: 1px solid #DDDDDD;
    padding: 40px 30px;

    .switchP{
        font-weight: 600;
        font-size: 14px;
        // margin-bottom: 35px;
    }
}
</style>
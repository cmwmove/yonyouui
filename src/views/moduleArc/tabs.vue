<template>
    <div class="rightBox">
        <div class="container">
            <h1>页签(标签页/标签式导航/选项卡Tabs)</h1>
            <div class="intrduce">
                <p>提供平级的区域将大块内容进行聚合，标准页签常常用于容器内部主功能切换;交互原则:标签导航的个数建议遵循 7±2 规则，理想情况是≤5。</p>
            </div>
            <h1 class="margin-top40">何时使用</h1>
            <div class="intrduce ">
                <p>卡片式的页签，提供可关闭的样式，常用于容器顶部。</p>
                <p>标准线条式页签，用于容器内部的主功能切换，这是最常用的 Tabs。</p>
                <p>RadioButton 可作为更次级的页签来使用。</p>
            </div>
            <h1 class="margin-top40">页签样式</h1>
            <div class="intrduce margin-top40">
                <p><b>基本页签样式 :</b> </p>
            </div>
            <div class="margin-top20">
                <!-- <div class="tabsBox"> -->
                    <div class="tabsBox">
                        <a-tabs default-active-key="1">
                            <a-tab-pane key="1" tab="页面当前效果">
                                Content of Tab Pane 1
                            </a-tab-pane>
                            <a-tab-pane key="2" tab="页签样式一" force-render>
                                Content of Tab Pane 2
                            </a-tab-pane>
                            <a-tab-pane key="3" tab="页签样式一">
                                Content of Tab Pane 3
                            </a-tab-pane>
                            <a-tab-pane key="4" tab="页签样式一">
                                Content of Tab Pane 4
                            </a-tab-pane>
                        </a-tabs>
                    </div>
                    <div class="tabsBox">
                        <div class="fontW">图标样式：</div>
                        <a-tabs default-active-key="2">
                            <a-tab-pane key="1">
                            <span slot="tab">
                                <i class="iconfont iconshouye"></i>
                                页面当前效果
                            </span>
                            Tab 1
                            </a-tab-pane>
                            <a-tab-pane key="2">
                            <span slot="tab">
                                <i class="iconfont iconxingxing"></i>
                                页签样式一
                            </span>
                            Tab 2
                            </a-tab-pane>
                        </a-tabs>
                    </div>
                    <div class="tabsBox">
                        <div class="fontW">不可选样式：</div>
                        <a-tabs default-active-key="1">
                            <a-tab-pane key="1" tab="页面当前效果">
                                Content of Tab Pane 1
                            </a-tab-pane>
                            <a-tab-pane key="2" tab="页签样式一" disabled>
                                Content of Tab Pane 2
                            </a-tab-pane>
                            <a-tab-pane key="3" tab="页签样式一">
                                Content of Tab Pane 3
                            </a-tab-pane>
                            <a-tab-pane key="4" tab="页签样式一">
                                Content of Tab Pane 4
                            </a-tab-pane>
                        </a-tabs>
                    </div>
                    <div class="tabsBox2">
                        <div class="fontW">滑动样式：</div>
                        <a-tabs default-active-key="1">
                            <a-tab-pane key="1" tab="页面当前效果">
                                Content of Tab Pane 1
                            </a-tab-pane>
                            <a-tab-pane key="2" tab="页签样式一" disabled>
                                Content of Tab Pane 2
                            </a-tab-pane>
                            <a-tab-pane key="3" tab="页签样式一">
                                Content of Tab Pane 3
                            </a-tab-pane>
                            <a-tab-pane key="4" tab="页签样式一">
                                Content of Tab Pane 4
                            </a-tab-pane>
                        </a-tabs>
                    </div>
                    <div class="tabsBox3">
                        <div class="fontW">大小样式：<span class="spantitle">大的放在顶部，小的放在弹窗、卡片等狭小空间</span></div>
                        <div class="spantitle">标准</div>
                        <a-tabs default-active-key="1">
                            <a-tab-pane key="1" tab="页面当前效果">
                                 
                            </a-tab-pane>
                            <a-tab-pane key="2" tab="页签样式一" force-render>
                                 
                            </a-tab-pane>
                            <a-tab-pane key="3" tab="页签样式一">
                                 
                            </a-tab-pane>
                            <a-tab-pane key="4" tab="页签样式一">
                                 
                            </a-tab-pane>
                        </a-tabs>
                        <div class="spantitle">大</div>
                        <a-tabs default-active-key="1" size="large">
                            <a-tab-pane key="1" tab="页面当前效果">
                                 
                            </a-tab-pane>
                            <a-tab-pane key="2" tab="页签样式一" force-render>
                                 
                            </a-tab-pane>
                            <a-tab-pane key="3" tab="页签样式一">
                                 
                            </a-tab-pane>
                            <a-tab-pane key="4" tab="页签样式一">
                                 
                            </a-tab-pane>
                        </a-tabs>
                        <div class="spantitle">小</div>
                        <a-tabs default-active-key="1" size="small">
                            <a-tab-pane key="1" tab="页面当前效果">
                                
                            </a-tab-pane>
                            <a-tab-pane key="2" tab="页签样式一" force-render>
                                
                            </a-tab-pane>
                            <a-tab-pane key="3" tab="页签样式一">
                                
                            </a-tab-pane>
                            <a-tab-pane key="4" tab="页签样式一">
                                
                            </a-tab-pane>
                        </a-tabs>
                    </div>
                    <div class="tabsBox3">
                        <div class="fontW">位置样式：</div>
                        <div class="spantitle">上</div>
                        <div style="width: 500px">
                            <a-tabs
                            default-active-key="1"
                            tab-position=top
                            >
                            <a-tab-pane v-for="i in 4" :key="i" :tab="`页签样式${i}`">  </a-tab-pane>
                            </a-tabs>
                        </div>
                        <div class="spantitle">下</div>
                        <div style="width: 500px">
                            <a-tabs
                            default-active-key="1"
                            tab-position=bottom
                            >
                            <a-tab-pane v-for="i in 4" :key="i" :tab="`页签样式${i}`">  </a-tab-pane>
                            </a-tabs>
                        </div>
                        <div class="spantitle">左</div>
                        <div style="width: 250px">
                            <a-tabs
                            default-active-key="1"
                            tab-position=left
                            >
                            <a-tab-pane v-for="i in 4" :key="i" :tab="`页签样式${i}`">  </a-tab-pane>
                            </a-tabs>
                        </div>
                        <div class="spantitle">右</div>
                        <div style="width: 500px">
                            <a-tabs
                            default-active-key="1"
                            tab-position=right
                            >
                            <a-tab-pane v-for="i in 4" :key="i" :tab="`页签样式${i}`">  </a-tab-pane>
                            </a-tabs>
                        </div>
                    </div>
                <!-- </div> -->
            </div>
            <div class="intrduce margin-top40">
                <p><b>自定义页签样式 : </b> </p>
            </div>
            <div class="margin-top20 ">
                <div class="tabsBox3">
                    <div class="card-container">
                        <a-tabs type="card">
                            <a-tab-pane key="1" tab="页面当前效果">
                                <p>Content of Tab Pane 1</p>
                            </a-tab-pane>
                            <a-tab-pane key="2" tab="页签样式一">
                                <p>Content of Tab Pane 2</p>
                            </a-tab-pane>
                            <a-tab-pane key="3" tab="页签样式一">
                                <p>Content of Tab Pane 3</p>
                            </a-tab-pane>
                        </a-tabs>
                    </div>
                    
                </div>
            </div>
            <div class="intrduce margin-top40">
                <p><b>卡片式页签样式 :</b> </p>
            </div>
            <div class="margin-top20 ">
                <div class="tabsBox3">
                    <a-tabs type="card">
                        <a-tab-pane key="1" tab="页面当前效果">
                        <!-- Content of Tab Pane 1 -->
                        </a-tab-pane>
                        <a-tab-pane key="2" tab="页签样式一">
                        <!-- Content of Tab Pane 2 -->
                        </a-tab-pane>
                        <a-tab-pane key="3" tab="页签样式一">
                        <!-- Content of Tab Pane 3 -->
                        </a-tab-pane>
                    </a-tabs>
                     <a-tabs type="editable-card">
                        <a-tab-pane key="1" tab="页面当前效果">
                        <!-- Content of Tab Pane 1 -->
                        </a-tab-pane>
                        <a-tab-pane key="2" tab="页签样式一">
                        <!-- Content of Tab Pane 2 -->
                        </a-tab-pane>
                        <a-tab-pane key="3" tab="页签样式一">
                        <!-- Content of Tab Pane 3 -->
                        </a-tab-pane>
                    </a-tabs>
                    <div style="margin:20px 0 10px 0;">关闭样式</div>
                    <div>
                        <Tabsone></Tabsone>
                    </div>
                    
                </div>
            </div>
        </div>
        <Changes :title1="title1" :title2="title2" :path1="path1" :path2="path2" :number="number"></Changes>
    </div>
</template>

<script>
import Changes from '@/components/changes.vue'
import Tabsone from '@/components/tabsone.vue'

export default {
    data(){
        return{
            title1 : '通知提醒',
            title2 : '图表',
            path1 : '/Notification',
            path2 : '/Chart',
            number : 26,
        }
    },
    components:{
        Changes,
        Tabsone
    },
}
</script>

<style>
.tabsBox{
    border: 1px solid #dddddd;
    padding: 20px 30px 20px 15px;
    width: 480px;
    margin-top: 20px;
}
.tabsBox2{
    border: 1px solid #dddddd;
    padding: 20px 44px 20px 15px;
    width: 480px;
    margin-top: 20px;
}
.tabsBox3{
    border: 1px solid #dddddd;
    padding: 20px 30px 20px 15px;
    width: 540px;
    margin-top: 20px;
}
.fontW{
    font-weight: 600;
    margin-bottom: 15px;
}
.spantitle{
    font-size: 14px;
    font-weight: 500;
    margin: 20px 0;
}


</style>
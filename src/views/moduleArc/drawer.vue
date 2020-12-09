<template>
    <div class="rightBox">
        <div class="container">
            <h1>抽屉</h1>
            <div class="intrduce">
                <p>屏幕边缘滑出的浮层面板。</p>
            </div>
            <h1 class="margin-top40">何时使用</h1>
            <div class="intrduce ">
                <p>抽屉从父窗体边缘滑入，覆盖住部分父窗体内容。用户在抽屉内操作时不必离开当前任务，操作完成后，可以平滑地回到到原任务。</p>
                <p>1 . 当需要一个附加的面板来控制父窗体内容，这个面板在需要时呼出。比如，控制界面展示样式，往界面中添加内容。</p>
                <p>2 . 当需要在当前任务流中插入临时任务，创建或预览附加内容。比如展示协议条款，创建子对象。</p>
            </div>
            <h1 class="margin-top40">抽屉样式</h1>
            <div class="intrduce margin-top40">
                <p><b>基本抽屉样式 : 右侧弹出</b> </p>
            </div>
            <div class="margin-top20">
                <div class="drawerBox">
                    <div>
                        <a-button type="primary" @click="showDrawer">
                        Open
                        </a-button>
                        <a-drawer
                        title="弹窗标题"
                        placement="right"
                        :closable="true"
                        :visible="visible"
                        :after-visible-change="afterVisibleChange"
                        @close="onClose" 
                        >
                        <p>发吧就开始阿萨德玻璃钢阀辅导班尽快发货阿双方和借款方感受过咖啡馆阿卡莎录入奥孔古十六日了巴方将阿克苏给分了很赶阿法狗比例提高昂扬发过来的把控改不了安理会法术暴击奥卡福回家吧按客户菲律宾进口国哈人尬u好烦bare胡椒粉呢爱国热交换反抗前面号格式符号爱国法律解释龙湖区别按法律发送到</p>
                        </a-drawer>
                    </div>
                </div>
            </div>
            <div class="intrduce margin-top40">
                <p><b>自定义抽屉样式 :  </b> </p>
            </div>
            <div class="margin-top20 ">
                <div class="drawerBox">
                    <Draweront></Draweront>
                </div>
            </div>
            <div class="intrduce margin-top40">
                <p><b>表单抽屉样式 :  </b> </p>
            </div>
            <div class="margin-top20 ">
                <div class="drawerBox">
                    <DrawerTwo></DrawerTwo>
                </div>
            </div>
            <div class="intrduce margin-top40">
                <p><b>详细信息抽屉样式 :  </b> </p>
            </div>
            <div class="margin-top20 ">
                <div class="drawerBox">
                    <Drawerthree></Drawerthree>
                </div>
            </div>
            <div class="intrduce margin-top40">
                <p><b>多层抽屉样式 :  </b> </p>
            </div>
            <div class="margin-top20 ">
                <div class="drawerBox">
                    <Drawerfour></Drawerfour>
                </div>
            </div>
        </div>
        <Changes :title1="title1" :title2="title2" :path1="path1" :path2="path2" :number="number"></Changes>
    </div>
</template>

<script>
import Changes from '@/components/changes.vue'
import Draweront from '@/components/draweront.vue'
import DrawerTwo from '@/components/drawerTwo.vue'
import Drawerthree from '@/components/drawerthree.vue'
import Drawerfour from '@/components/drawerfour.vue'

export default {
    data(){
        return{
            title1 : '警告提示',
            title2 : '加载中',
            path1 : '/Alert',
            path2 : '/Spin',
            number : 23,
            visible: false,
        }
    },
    components:{
        Changes,
        Draweront,
        DrawerTwo,
        Drawerthree,
        Drawerfour
    },
    methods: {
        afterVisibleChange(val) {
            console.log('visible', val);
        },
        showDrawer() {
            this.visible = true;
        },
        onClose() {
            this.visible = false;
        },
    },
}
</script>

<style>
.drawerBox{
    width: 360px;
    padding: 10px 20px;
    border: 1px solid #dddddd;
}
</style>
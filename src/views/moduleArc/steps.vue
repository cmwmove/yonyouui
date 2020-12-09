<template>
    <div class="rightBox">
        <div class="container">
    <h1>步骤条</h1>
    <div class="intrduce">
        <p>引导用户按照流程完成任务的导航条。</p>
    </div>
    <h1 class="margin-top40">何时使用</h1>
    <div class="intrduce">
        <p>当任务复杂或者存在先后关系时，将其分解成一系列步骤，从而简化任务。</p>
    </div>
    <h1 class="margin-top40">横向步骤条</h1>
    <div class="intrduce ">
        <p>基本版</p>
    </div>
    <div class="margin-top40">
        <div class="BoxS basicsBox">
            <a-steps :current="2">
                <a-step>
                    <template slot="title">已完成步骤</template>
                    <span slot="description">说明性文字，字号12字体，字体颜色#888888，文字建议不要过长</span>
                </a-step>
                <a-step>
                    <template slot="title">步骤名称可以使用十个字</template>
                    <span slot="description">语雀是一款优雅高效地在线文档编程与协同工具，让每个企业轻松拥有文档中心阿里...</span>
                </a-step>
                <a-step>
                    <template slot="title">当前步骤效果</template>
                    <span slot="description">全新一代数据可视化解决方案，致力于提供一套简单方便...</span>
                </a-step>
                <a-step title="未完成步骤效果" description="" />
                <a-step title="结束" description="" />
            </a-steps>
        </div>
    </div>
    <div class="intrduce margin-top40">
        <p>迷你版</p>
    </div>
    <div class="margin-top20">
        <div class="BoxS miniBox">
            <a-steps :current="2" size="small">
                <a-step title="已完成步骤" />
                <a-step title="步骤名称可以使用十个字" />
                <a-step title="当前步骤效果" />
                <a-step title="未完成步骤效果" description="" />
                <a-step title="结束" description="" />
            </a-steps>
        </div>
    </div>
    <div class="intrduce margin-top40">
        <p>带图标的步骤条</p>
        <p class="margin-top20">（1）前后节点无严格的前后顺序</p>
    </div>
    <div class="margin-top20">
        <div class="BoxS miniBox">
            <a-steps>
                <a-step status="finish" title="图标加文字">
                    <!-- <i class="iconfont iconzuzhiqunzu"></i> -->
                    <!-- <span class="icon iconfont">&#xea78;</span> -->
                    <a-icon slot="icon" type="cluster" />
                </a-step>
                <a-step status="finish" title="非步骤可跳过无箭头效果">
                    <!-- <a-icon slot="icon" type="solution" /> -->
                    <icon-font type="iconzuzhiqunzu" />
                </a-step>
                <a-step status="process" title="当前页面效果">
                    <!-- <a-icon slot="icon" type="loading" /> -->
                </a-step>
                <a-step status="wait" title="未完成步骤效果">
                    <a-icon slot="icon" type="export" />
                </a-step>
                <a-step status="wait" title="结束">
                    <a-icon slot="icon" type="history" />
                    <!-- <i class="iconfont iconbangzhu1"></i> -->

                </a-step>
            </a-steps>
        </div>
    </div>
    <div class="intrduce margin-top40">
        <p>（2）节点有前后顺序，但是不是流程录入的</p>
    </div>
    <div class="margin-top20">
        <div class="BoxS orderBox">
            <a-steps v-model="current" type="navigation" :style="stepStyle">
                <a-step status="finish" title="工作流程辅助">
                    <a-icon slot="icon" type="cluster" />
                </a-step>
                <a-step status="finish" title="非步骤时选用">
                    <a-icon slot="icon" type="file-image" />
                </a-step>
                <a-step status="process" title="表达工作流程">
                     <a-icon slot="icon" type="file-image" />
                </a-step>
                <a-step status="wait" title="辅助展示流程">
                     <a-icon slot="icon" type="file-image" />
                </a-step>
                <a-step status="wait" title="按钮功能节点">
                     <a-icon slot="icon" type="file-image" />
                </a-step>
            </a-steps>
        </div>
    </div>
    <div class="intrduce margin-top40">
        <p>（3）节点有严格的前后关系的</p>
    </div>
    <div class="margin-top20">
        <div class="BoxS frontBox">
            <a-steps :current="currents" @change="onChange">
                <a-step title="开始" description="02-15 09:12:34" />
                <a-step title="未审核" description="赵倩02-15 09:12:34" />
                <a-step title="审核中" description="赵倩02-15 09:12:34" />
                <a-step title="已经审核" description="赵倩 同意  02-15 09:12:34" />
                <a-step title="结束" description="" />
            </a-steps>
        </div>
    </div>
    <div class="intrduce margin-top40">
        <p>（4）带有提示信息的</p>
    </div>
    <div class="margin-top20">
        
    </div>
    <div class="intrduce margin-top40">
        <p>超出一屏的步骤条</p>
        <p class="margin-top20">每点击一下左/右箭头，向左/右滚动一个步骤的距离</p>
    </div>
    <div class="margin-top20">
        <div class="miniBox BoxS"></div>
    </div>
    <h1 class="margin-top40">竖向步骤条</h1>
    <div class="margin-top40">
        <div class="disFle">
            <div>
                <p>基本版</p>
                <div class="Box upRightBox"></div>
            </div>
            <div>
                <p>迷你版(不返回上一步查看)</p>
                <div class="Box upRightBox"></div>
            </div>
            <div>
                <p>(可返回上一步查看)</p>
                <div class="Box upRightBox"></div>
            </div>
            
        </div>
    </div>
    <div class="intrduce margin-top40">
        <p>带有图标的步骤条</p>
        <div class="disFles">
            <div>
                <p>(1)前后节点无严格的前后顺序</p>
                <div class="Box upRightBoxs"></div>
            </div>
            <div>
                <p>节点有前后顺序，但是不是流程录入的</p>
                <div class="Box upRightBoxs"></div>
            </div>
            <div>
                <p>前后节点严格的前后顺序</p>
                <div class="Box upRightBoxs"></div>
            </div>
            
        </div>
    </div>
    <div class="margin-top40">
        
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
            title1 : '分页',
            title2 : '多选框',
            path1 : '/Pagination',
            path2 : '/Icon',
            number : 7,
            current: 0,
            currents: 0,
            stepStyle: {
                // marginBottom: '20px',
                boxShadow: '0px -1px 0 0 #e8e8e8 inset',
            },
        }
    },
    components:{
        Changes
    },
    methods: {
    onChange(currents) {
    //   console.log('onChange:', currents);
      this.currents = currents;
    },
  },
}
</script>

<style>
.basicsBox{
    width: 1040px;
    height: 155px;
    padding: 17px 20px;
}
.miniBox{
    width: 1040px;
    height: 62px;
    padding: 0px 20px;
    align-items: center
}
.orderBox{
    width: 1040px;
    height: 90px;
    align-items: center;
    padding: 0px 20px;
}
.frontBox{
    width: 1040px;
    height: 90px;
    padding: 0px 20px;
    align-items: center;
}
.disFle{
    display: flex;
    width: 860px;
    justify-content: space-between;
}
.upRightBox{
    width: 250px;
    height: 500px;
}
.disFles{
    display: flex;
    width: 940px;
    justify-content: space-between;
}
.upRightBoxs{
    width: 270px;
    height: 500px;
}
</style>
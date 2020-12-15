<template>
    <div class="rightBox">
        <div class="container">
            <h1>折叠面板</h1>
            <div class="intrduce">
                <p>可以折叠/展开的内容区域。</p>
            </div>
            <h1 class="margin-top40">何时使用</h1>
            <div class="intrduce">
                <p>◆ 对复杂区域进行分组和隐藏，保持页面的整洁。</p>
                <p>◆『手风琴』是一种特殊的折叠面板，默认整个内容区域展开，可部分内容收起。</p>
            </div>
            <h1 class="margin-top40">基本样式</h1>
            <div class="intrduce ">
                <p>横向面板</p>
            </div>
            <div class="margin-top40">
                <div class="collBox">
                    <div class="zedieborder">
                        <div class="collapseone" @click="closeClick" v-bind:class="{borderBo:borders}">
                            <span>折叠面板</span>
                            <i class="iconfont iconxia" v-bind:class="{trans:isTrans}"></i>
                        </div>
                        <div class="closeBox" v-show="closeContent">
                            <div class="closeBox-content">
                                项目名称：<a-input placeholder="选择参照内容" style="width:220px;"></a-input>
                            </div>
                            <div class="closeBox-content">
                                项目编号：<a-input placeholder="选择参照内容" style="width:220px;"></a-input>
                            </div>
                        </div>
                    </div>
                    <div class="zedieborder">
                        <div class="collapseone margin-top20" @click="closeClick2"  v-bind:class="{borderBo:borders2}">
                            <span>折叠面板</span>
                            <i class="iconfont iconxia" v-bind:class="{trans:isTrans2}"></i>
                        </div>
                        <div class="closeBox" v-show="closeContent2">
                            <div class="closeBox-content">
                                项目名称：<a-input placeholder="选择参照内容" style="width:220px;"></a-input>
                            </div>
                            <div class="closeBox-content">
                                项目编号：<a-input placeholder="选择参照内容" style="width:220px;"></a-input>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div class="intrduce margin-top40">
                <p>竖向面板</p>
            </div>
            <div class="margin-top20">
                <div class="collaBoxTW">
                    <div class="leftColl" v-show="isLeft">
                        <Treefind></Treefind><!-- :class="{'disblock':isBlock,'disnone':isNone}" -->
                    </div>
                    <div class="collButton" @click="leftClick">
                        <i class="iconfont leftbox" :class="{'iconshushouqi':isShouqi,'iconshuzhankai':isZhankai}"></i>
                    </div>
                </div>
            </div>
        </div>
        <Changes :title1="title1" :title2="title2" :path1="path1" :path2="path2" :number="number"></Changes>
    </div>
</template>

<script>
import Changes from '@/components/changes.vue'
import Treefind from '@/components/treefind.vue'

export default {
    data(){
        return{
            title1 : '穿梭框',
            title2 : '卡片',
            path1 : '/Transfer',
            path2 : '/Card',
            number : 16,
            closeContent: true,
            isTrans: false,
            borders: true,
            borders2: false,
            closeContent2: false,
            isTrans2: true,
            isLeft: true,
            // isBlock: true,
            // isNone: false,
            isShouqi: true,
            isZhankai: false
        }
    },
    components:{
        Changes,
        Treefind
    },
    methods:{
        closeClick(){
            this.closeContent = !this.closeContent;
            this.isTrans = !this.isTrans;
            this.borders = !this.borders;
        },
        closeClick2(){
            this.closeContent2 = !this.closeContent2;
            this.isTrans2 = !this.isTrans2;
            this.borders2 = !this.borders2;
        },
        leftClick(){
            this.isLeft = !this.isLeft;
            // this.isBlock = !this.isBlock;
            // this.isNone = !this.isNone;
            this.isShouqi = !this.isShouqi;
            this.isZhankai = !this.isZhankai
        }
    }
}
</script>

<style lang="less">
.collBox{
    border: 1px solid #dddddd;
    padding:20px 15px;
    width: 900px;
}

</style>
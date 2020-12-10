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
                    <div>
                        <div class="collapseone" @click="closeClick">
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
                    <div>
                        <div class="collapseone margin-top20" @click="closeClick2">
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
        },
        closeClick2(){
            this.closeContent2 = !this.closeContent2;
            this.isTrans2 = !this.isTrans2;
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
    padding:20px 20px;
    width: 800px;
    // height: 240px;

    .closeBox{
        display: flex;
        justify-content: space-around;
        padding: 16px 40px;
        height: 70px;
        width: 750px;
        border: 1px solid #dddddd;
        border-top: none;
        border-radius: 4px;


        .closeBox-content{
        
        }
    }
}
.collapseone{
    height: 40px;
    width: 750px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 16px;
    box-shadow: 0px 0px 5px #dddddd;
    border-left: 2px solid #cc0000;
    padding: 0 15px;
    border-radius: 4px;
}

.trans{
    transform: rotate(180deg);
}
.iconfont{
    transition: 0.5s;
}

.collaBoxTW{
    border: 1px solid #dddddd;
    // padding:40px 20px;
    width: 800px;
    height: 350px;
    display: flex;
    align-items: center;

    .leftColl{
        height: 350px;
        width: 300px;
        padding: 15px 16px;
        border-right: 1px solid #DDDDDD;
    }
}

.collButton{
    // width: 21px;
    text-align: center;
    // height: 50px;
    // padding: 13px 0;
    // background-color: #c5c3c0;
    position: relative;
    height: 60px;
    border-left: 20px solid #c5c3c0;
    border-bottom: 15px solid transparent;
    border-top: 15px solid transparent;
}

.leftbox{
    position: absolute;
    left: -18px;
    top: 4px;
}

// .disblock{
//     display: block;
//     transition: 3s;
// }
// .disnone{
//     display: none;
//     transition: 3s;
// }
</style>
<template>
<!-- 按钮界面 -->
    <div class="rightBox container">
        <div class="Content">
            <!-- <div class="Title">按钮</div> -->
            <h1>按钮</h1>
            <div class="Details">按钮用于开始一个即时操作。用户通过点击按钮唤起某事件或对某事件作出判断。</div>
        </div>
        <div class="Content">
            <!-- <div class="Title">何时使用</div> -->
            <h1>何时使用</h1>
            <div class="Details">标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。通常且不限于用于对弹框、表单、表格、卡片、工具栏、操作栏等控件的操作。</div>
        </div>

        <!-- 按钮类型框 -->
        <div class="Content">
            <!-- <div class="Title">按钮类型</div> -->
            <h1>按钮类型</h1>
            <div class="Details">按钮有七种类型：主按钮、次按钮、辅助按钮、下拉按钮、图标按钮、开关按钮和链接按钮。主按钮在同一个操作区域最多出现一次。</div>
            <div style="width:916px;">
                <div class="buttonBoxFirst">
                    <div class="buttonBoxS Box">
                        <div class="buttonBox-Title">1.主按钮</div>
                        <div class="buttonBox-Button"><a-button type="primary">新增</a-button></div>
                    </div>
                    <div class="buttonBoxS Box">
                        <div class="buttonBox-Title">2.次按钮</div>
                        <div class="buttonBox-Button"><a-button type="primary" ghost>按钮</a-button></div>
                    </div>
                    <div class="buttonBoxS Box">
                        <div class="buttonBox-Title">3.辅助按钮</div>
                        <div class="buttonBox-Button"><a-button>按钮</a-button></div>
                    </div>
                    <div class="buttonBoxS Box">
                        <div class="buttonBox-Title">4.下拉按钮</div>
                        <div class="buttonBox-Button">
                            <a-dropdown>
                                <a-menu slot="overlay">
                                    <a-menu-item key="1">1st item</a-menu-item>
                                    <a-menu-item key="2">2nd item</a-menu-item>
                                    <a-menu-item key="3">3rd item</a-menu-item>
                                </a-menu>
                                <a-button>下拉按钮<a-icon type="down" /></a-button>
                            </a-dropdown>
                        </div>
                    </div>
                </div>

                <div class="buttonBoxFirst">
                    <div class="buttonBoxL Box">
                        <div class="buttonBox-Title">5.图标按钮</div>
                        <div class="buttonBoxL-Button">
                            <i class="iconfont iconrili"></i>
                            <a-button><i class="iconfont iconshezhi" /></a-button>
                            <a-button><i class="iconfont iconshezhi" />图标按钮</a-button>
                        </div>
                    </div>
                    <div class="buttonBoxM Box">
                        <div class="buttonBox-Title">6.开关按钮</div>
                        <div class="buttonBox-Button">
                            <a-button-group>
                                <a-button>按钮</a-button>
                                <a-button>按钮</a-button>
                                <a-button>按钮</a-button>
                            </a-button-group>
                        </div>
                    </div>
                    <div class="buttonBoxS Box">
                        <div class="buttonBox-Title">7.链接按钮</div>
                        <div class="buttonBox-Button">
                            <a-button type="link">链接</a-button>
                        </div>
                    </div>
                </div>

                <div class="buttonBoxFirst">
                    <div class="buttonBoxL Box">
                        <div class="buttonBox-Title">禁用按钮</div>
                        <div class="buttonBoxdis-Button">
                            <a-button disabled>按钮</a-button>
                            <a-button disabled><i class="iconfont iconshezhi" /></a-button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- 不同尺寸按钮 -->
        <div class="Content">
            <!-- <div class="Title">不同尺寸按钮</div> -->
            <h1>不同尺寸按钮</h1>
            <div class="Details">按钮有大，中，小三种尺寸。</div>
            <div class="sizeButtonBox">
                <div class="sizeButtonBox-size">
                    <div class="sizeButtonBox-sizeButton">
                        <div>
                            <div class="sizeButtonBox-sizeTitle">大按钮</div>
                            <div class="sizeBox"><a-button type="primary" size="large">按钮</a-button></div>
                            <div class="sizeBox"><a-button type="primary" size="large" ghost>按钮</a-button></div>
                            <div class="sizeBox"><a-button size="large">按钮</a-button></div>
                        </div>
                    </div>
                    
                </div>
                <div class="sizeButtonBox-size">
                    
                    <div class="sizeButtonBox-sizeButton">
                        <div>
                            <div class="sizeButtonBox-sizeTitle">标准按钮</div>
                            <div class="sizeBox"><a-button type="primary">标准按钮</a-button></div>
                            <div class="sizeBox"><a-button type="primary" ghost>标准按钮</a-button></div>
                            <div class="sizeBox"><a-button>标准按钮</a-button></div>
                        </div>
                        <div>
                            <div class="sizeButtonBox-sizeTitle"></div>
                            <div class="sizeBox"><a-button type="primary">按钮</a-button></div>
                            <div class="sizeBox"> <a-button type="primary" ghost>按钮</a-button></div>
                            <div class="sizeBox"><a-button>按钮</a-button></div>
                        </div>
                    </div>
                    
                </div>
                <div class="sizeButtonBox-size">
                    
                    <div class="sizeButtonBox-sizeButton">
                        <div>
                            <div class="sizeButtonBox-sizeTitle">小按钮</div>
                            <div class="sizeBox"><a-button type="primary" size="small">小按钮</a-button></div>
                            <div class="sizeBox"><a-button type="primary" size="small" ghost>小按钮</a-button></div>
                            <div class="sizeBox"><a-button size="small">小按钮</a-button></div>
                        </div>
                        <div>
                            <div class="sizeButtonBox-sizeTitle"></div>
                            <div class="sizeBox"><a-button type="primary" size="small">按钮</a-button></div>
                            <div class="sizeBox"><a-button type="primary" size="small" ghost>按钮</a-button></div>
                            <div class="sizeBox"><a-button size="small">按钮</a-button></div>
                        </div>
                     </div>
                </div>
            </div>
        </div>

        <!-- 按钮组合 -->
        <div class="Content">
            <h1>按钮组合</h1>
            <!-- <div class="Title">按钮组合</div> -->
            <div class="Details">按钮组合使用时，推荐使用 1 个主操作 + n 个次操作。按钮采用功能性分组形式展现。3 个以上操作时把更多操作放到 下拉按钮中组合使用。在按钮组合时，4个为一组，每组之间的间隔为16px</div>
            <div class="groupButtonBox">
                <img src="../../assets/img/button1.png">
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
            title1 : '文字',
            title2 : '图标',
            path1 : '/Letter',
            path2 : '/Icon',
            number : 2
        }
    },
    components:{
        Changes
    },
    methods:{
        leftClick(){
             this.$router.push(this.path);
             console.log(1)
        },
        rightClick(){
             this.$router.push(this.change2);
             console.log(2)
        }
    }
}
</script>

<style lang="less">



// .Box{
//     position: relative;
//     display: flex;
//     align-items: center;
//     border: 1px solid #DDDDDD;
// }

.buttonBoxFirst{
    margin-top: 20px;
    display: flex;
    justify-content: space-between;

    .buttonBoxS{
        width: 214px;
        height: 190px;
        justify-content: center;
    }

    .buttonBox-Title{
        position: absolute;
        left: 14px;
        top: 9px;
        font-size: 14px;
    }

    .buttonBox-Button{
        display: flex;
        justify-content: center;
    }

    .buttonBoxL-Button{
        display: flex;
        width: 340px;
        justify-content: space-around;
    }

    .buttonBoxdis-Button{
        display: flex;
        width: 280px;
        justify-content: space-around;
    }

    .buttonBoxL{
        width: 374px;
        height: 190px;
    }

    .buttonBoxM{
        width: 288px;
        height: 190px;
        justify-content: center;
    }
}

.sizeButtonBox{
    margin-top: 17px;
    padding: 53px 38px;
    border: 1px solid #DDDDDD;
    width: 917px;
    height: 450px;

    .sizeButtonBox-sizeTitle{
        display: inline-block;
        font-size: 14px;
        width: 82px;
    }

    .sizeButtonBox-size{
        margin-bottom: 30px;
    }
    
    .sizeBox{
        display: inline-block;
        width: 197px;
        margin-bottom: 30px;
    }
}

.groupButtonBox{
    margin-top: 22px;
    border: 1px solid #DDDDDD;
    width: 917px;
    height: 146px;
    display: flex;
    justify-content: center;
    align-items: center;

    img{
        width: 860px;
        height: 63px;
    }
}
    

</style>
<template>
    <div class="rightBox">
        <div class="container">
            <h1>单选框</h1>
            <div class="intrduce">
                <p>只能选中一项命令。是图形用户界面上的一种控件。它容许用户在一组选项中选择其中一个。</p>
                <p>在它的旁边则通常有一个文字的标签。它的用途除了描述之外，还可用于选择该选择：当用户按下标签，所应的选择钮就会被选上。</p>
            </div>
            <h1 class="margin-top40">何时使用</h1>
            <div class="intrduce ">
                <p>用于在多个备选项中选中单个状态。</p>
                <p>Radio 所有选项默认可见，方便用户在比较中选择，因此选项不宜过多。建议不超过5个，选项大于等于5个可采用下拉。</p>
            </div>
            <h1 class="margin-top40">单选框类型</h1>
            <div class="intrduce">
                <p>输入框一般根据样式划分，分为2种类型：标准单选框、按钮式单选框。</p>
                <p>◆标准单选框：由radio组成的单选组，可不设默认值，由用户去选择。或设定一个初始默认值。</p>
                <p>◆按钮式单选框：由多个按钮组成的单选组，样式与标准有所区别，建议不超过5个。</p>
            </div>
            <div class="margin-top20">
                <div class="disFle">
                    <div class="Box styleBox">
                        <span class="BoxSpan">1.按钮式单选框</span>
                        <div>标签：
                            <a-radio-group name="radioGroup" :default-value="1">
                                <a-radio :value="1">选项1</a-radio>
                                <a-radio :value="2">选项2</a-radio>
                            </a-radio-group>
                        </div>
                        
                    </div>
                    <!-- <div class="styleBox Box">
                        <span  class="BoxSpan">2.按钮单选框</span>
                        <div>
                            <div>样式1：
                                <a-radio-group v-model="value">
                                    <a-radio-button value="a">按钮</a-radio-button>
                                    <a-radio-button value="b">按钮</a-radio-button>
                                    <a-radio-button value="c">按钮</a-radio-button>
                                </a-radio-group>
                            </div>
                            <div class="margin-top20">样式2：
                                <a-radio-group default-value="a" button-style="solid">
                                    <a-radio-button value="a">按钮</a-radio-button>
                                    <a-radio-button value="b">按钮</a-radio-button>
                                    <a-radio-button value="c">按钮</a-radio-button>
                                </a-radio-group>
                            </div>
                        </div>
                        
                    </div> -->
                </div>
            </div>
            <!-- <h1 class="margin-top40">单选框尺寸</h1>
            <div class="intrduce">
            </div>
            <div class="margin-top20">
                <div class="Box sizeBox">
                    <div>
                        <div>
                            <div class="divspan">大尺寸：</div> 
                            <a-radio-group default-value="a" size="large">
                                <a-radio-button value="a">按钮</a-radio-button>
                                <a-radio-button value="b">按钮</a-radio-button>
                                <a-radio-button value="c">按钮</a-radio-button>
                            </a-radio-group>
                            <div class="margin-right20"></div>
                            <a-radio-group default-value="a" size="large" button-style="solid">
                                <a-radio-button value="a">按钮</a-radio-button>
                                <a-radio-button value="b">按钮</a-radio-button>
                                <a-radio-button value="c">按钮</a-radio-button>
                            </a-radio-group>
                        </div>
                        <div :style="{ marginTop: '16px' }">
                            <div class="divspan">标准尺寸：</div> 
                            <a-radio-group default-value="a">
                                <a-radio-button value="a">按钮</a-radio-button>
                                <a-radio-button value="b">按钮</a-radio-button>
                                <a-radio-button value="c">按钮</a-radio-button>
                            </a-radio-group>
                            <div class="margin-right20"></div>
                            <a-radio-group default-value="a" button-style="solid">
                                <a-radio-button value="a">按钮</a-radio-button>
                                <a-radio-button value="b">按钮</a-radio-button>
                                <a-radio-button value="c">按钮</a-radio-button>
                            </a-radio-group>
                        </div>
                        <div :style="{ marginTop: '16px' }">
                            <div class="divspan">小尺寸：</div>
                            <a-radio-group default-value="a" size="small">
                                <a-radio-button value="a">按钮</a-radio-button>
                                <a-radio-button value="b">按钮</a-radio-button>
                                <a-radio-button value="c">按钮</a-radio-button>
                            </a-radio-group>
                            <div class="margin-right20"></div>
                            <a-radio-group default-value="a" size="small" button-style="solid">
                                <a-radio-button value="a">按钮</a-radio-button>
                                <a-radio-button value="b">按钮</a-radio-button>
                                <a-radio-button value="c">按钮</a-radio-button>
                            </a-radio-group>
                        </div>
                    </div>
                </div>
            </div> -->
            <h1 class="margin-top40">单选框状态</h1>
            <div class="intrduce">
                <p>单选框状态一般分为空状态、激活状态、禁用状态。</p>
                <p>◆空状态：页面加载进入后，单选框没有设定默认值，未经过任何操作。</p>
                <p>◆激活状态：鼠标单击某个单选项后，单选框的选中状态。</p>
                <p>◆禁用状态：单选框的不可编辑状态，一般采用置灰效果。</p>
            </div>
            <div class="margin-top20">
                <div class="styBox">
                    <div class="stydiv"><div class="divspan">空状态：</div><a-radio>未选中效果</a-radio></div>
                    <div class="stydiv"><div class="divspan">激活状态：</div><a-radio checked>选中效果</a-radio></div>
                    <div class="stydiv"><div class="divspan">禁用状态：</div><a-radio checked disabled>禁止选择效果</a-radio><a-radio disabled>禁止选择效果</a-radio></div>
                </div>
                
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
            title1 : '多选框',
            title2 : '选择器',
            path1 : '/Checkbox',
            path2 : '/Chooser',
            number : 9,
            value : 'a',
        }
    },
    components:{
        Changes
    },
}
</script>

<style lang="less">
.styleBox{
    width: 300px;
    height: 200px;
    margin-right: 40px;
    padding: 10px;
    justify-content: center;

    .BoxSpan{
        position: absolute;
        top: 5px;
        left: 10px;
    }
}
.sizeBox{
    width: 700px;
    padding: 10px 70px;
    div{
        margin: 10px 0px;
    }
}
.styBox{
    padding: 10px 40px;
    border: 1px solid #DDDDDD;
    width: 500px;

    .stydiv{
        margin: 20px 0px;
    }
}

</style>
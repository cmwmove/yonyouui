<template>
    <div class="rightBox">
        <div class="container">
            <h1 class="title">下拉菜单</h1>
            <div class="intrduce">
                <p>向下弹出的列表。一般指让用户从预先设置好的列表中选择一项或者多项的控件。</p>
            </div>
            <h1 class="margin-top40">何时使用</h1>
            <div class="intrduce ">
                <p>当页面上的操作命令过多时，用此组件可以收纳操作元素。点击或移入触点，会出现一个下拉菜单。可在列表中进行选择，并执行相应的命令。</p>
            </div>
            <h1 class="margin-top40">下拉菜单交互</h1>
            <div class="intrduce ">
                <p>◆触发下拉菜单方式有两种：鼠标点击和悬浮。
                <p>◆如果是单项选择的下拉菜单，用户选择了下拉列表中的选项，则下拉列表关闭，已选项目显示于选择框内。</p>
                <p>◆下拉选项我们建议超过10条后，出现滚动条。</p>
                <p>◆下拉选项的宽度跟下拉框保持一致，下拉选项字段值超过宽度值时，出现横向滚动条</p>
            </div>
            <h1 class="margin-top40">下拉菜单分类</h1>
            <div class="intrduce">
                <p>基本下拉菜单 : 文字+向下箭头</p>
            </div>
            <div class="margin-top20">
                <div class="dropBox">
                    <a-dropdown>
                        <a class="ant-dropdown-link" @click="e => e.preventDefault()">更多</a>
                        <a-menu slot="overlay">
                            <a-menu-item key="0"><a href="">列</a></a-menu-item>
                            <a-menu-item key="1"><a href="">导出</a></a-menu-item>
                            <a-menu-item key="2" disabled>刷新(禁止选择)</a-menu-item>
                            <a-menu-item key="3">全屏(鼠标经过)</a-menu-item>
                            <a-menu-item key="4">设置</a-menu-item>
                        </a-menu>
                    </a-dropdown>
                </div>
            </div>
            <div class="intrduce margin-top40">
                <p>表单下拉菜单 :</p>
            </div>
            <div class="margin-top20 boxdisplay">
                <div class="formDrop">
                    <span>表单下拉菜单：</span>
                    <div class="DropBox">
                        <span>下拉选择：</span>
                        <a-select placeholder="选择内容" style="width: 220px">
                            <icon-font slot="suffixIcon" type="iconxiajiantou" />
                            <a-select-option value="1">选项卡一</a-select-option>
                            <a-select-option value="2">已选择选项卡</a-select-option>
                            <a-select-option value="3" disabled>禁止选择</a-select-option>
                            <a-select-option value="4">鼠标经过</a-select-option>
                            <a-select-option value="5">正常文字</a-select-option>
                        </a-select>
                    </div>
                </div>
                <!-- 下拉搜索 -->
                <div class="formDrop">
                    <span>下拉搜索</span>
                    <div class="DropBox">
                        <span>下拉选择：</span>
                        <a-select show-search placeholder="选择内容" option-filter-prop="children" style="width: 220px" :filter-option="filterOption" >
                            <icon-font slot="suffixIcon" type="iconxiajiantou" />
                            <a-select-option value="2">a1</a-select-option>
                            <a-select-option value="3">a2</a-select-option>
                            <a-select-option value="4">b1</a-select-option>
                            <a-select-option value="5">b2(鼠标经过)</a-select-option>
                            <a-select-option value="6">b3</a-select-option>
                        </a-select>
                    </div>
                </div>
                <!-- <div class="formDrop">
                    <p>下拉多选：从已有条目中选择</p>
                    <span>下拉多选样式一 居右显示，从当前所选内容到所选内容第一项依次显示，超出输入框范围隐藏所选项。</span>
                    <div class="DropBox">
                        <span>下拉选择：</span>
                        <a-select mode="multiple" placeholder="选择内容" :default-value="['a1', 'b2',]" style="width: 200px" >
                            <a-select-option v-for="i in 25" :key="(i + 9).toString(36) + i">
                                {{msg[i]}}
                            </a-select-option>
                        </a-select>
                    </div>
                </div> -->
                <!-- <div class="formDrop">
                    <span>下拉多选样式二 下拉选项我们建议超过10条后，出现滚动条。</span>
                    <div class="DropBox">
                        <span>下拉选择：</span>
                        <a-select mode="multiple" placeholder="选择内容" :default-value="[]" style="width: 200px" >
                            <a-select-option v-for="i in 25" :key="(i + 9).toString(36) + i">
                                {{msg[i]}}
                            </a-select-option>
                        </a-select>
                    </div>
                </div> -->
                <div class="formDrop">
                    <p>下拉多选：从已有条目中选择</p>
                    <span>下拉多选样式 居右显示，倒序显示即从当前多选内容到所选内容第一项依次显示，超出输入框范围隐藏所选项。</span>
                    <div class="DropBox">
                        <span>下拉选择：</span>
                        <a-select mode="multiple" placeholder="选择内容" :default-value="['a1',]" style="width: 200px" >
                            <a-select-option v-for="i in 25" :key="(i + 9).toString(36) + i">
                                {{(i + 9).toString(36) + i}}
                            </a-select-option>
                        </a-select>
                    </div>
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
            title1 : '面包屑',
            title2 : '分页',
            path1 : '/Breadcrumb',
            path2 : '/Pagination',
            number : 5,
            msg:[
                '',
                '上一项',
                '下一项',
                '当前项'
            ]
        }
    },
    components:{
        Changes
    },
    methods:{
        filterOption(input, option) {
            return (
                option.componentOptions.children[0].text.toLowerCase().indexOf(input.toLowerCase()) >= 0
            );
        },
    }
}
</script>

<style>
.dropBox{
    border: 1px solid #DDDDDD;
    width: 273px;
    height: 99px;
    padding: 22px 39px;
}
.boxdisplay{
    /* display: flex; */
}
.formDrop{
    display: inline-block;
    margin-right: 40px;
}
.DropBox{
    border: 1px solid #DDDDDD;
    width: 424px;
    height: 107px;
    padding: 27px 42px;
    margin-top: 10px;
    margin-bottom: 26px;
}
</style>
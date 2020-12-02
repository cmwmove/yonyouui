<template>
    <div class="rightBox">
        <div class="container">
            <h1>选择器</h1>
            <div class="intrduce">
                <p>下拉选择器。作为表单的扩展。</p>
            </div>
            <h1 class="margin-top40">何时使用</h1>
            <div class="intrduce ">
                <p>弹出一个下拉菜单给用户选择操作，用于代替原生的选择器，或者需要一个更优雅的多选器时。</p>
                <p>当选项少时（少于 5 项），建议直接将选项平铺，使用 Radio 是更好的选择。</p>
            </div>
            <h1 class="margin-top40">选择器类型</h1>
            <div class="intrduce">
                <p>选择器一般根据业务需求，分为2种类型：标准下拉选择器、地区选择器。</p>
                <p>◆标准下拉选择器：由标签+下拉框组成，详情见下拉框。</p>
                <p>◆ 连级选择：由下拉框衍生的横向选择器，一般常用地域选择，分为省份、区县、街道，按顺序选择。</p>
            </div>
            <div class="margin-top20">
                <div class="disFle">
                    <div class="BoxS choBox1">
                        <span class="choSpan">1.标准下拉框选择</span>
                        <div>
                            <span>下拉选择：</span>
                            <a-select placeholder="选择内容" style="width: 220px">
                                <a-select-option value="1">选项卡一</a-select-option>
                                <a-select-option value="2">已选择选项卡</a-select-option>
                                <a-select-option value="3" disabled>禁止选择</a-select-option>
                                <a-select-option value="4">鼠标经过</a-select-option>
                                <a-select-option value="5">正常文字</a-select-option>
                            </a-select>
                        </div>
                    </div>
                    <div class="choBox2">
                        <span class="choSpan">2.地区选择器</span>
                        <div>
                            <span>连级选择：</span>
                            <a-cascader :options="options" change-on-select />
                        </div>
                    </div>
                </div>
            </div>
            <!-- <h1 class="margin-top40">选择器尺寸</h1>
            <div class="intrduce">
                <p>标准下拉选择器的尺寸见下拉框组件说明。连级选择的表单与基础表单的尺寸一致，区别为下拉展开后的内容区域不同。图标大小为16px*16px，文字为14px。</p>
            </div>
            <div class="margin-top20">
                <img width="873" src="image/4-10-2.png">
            </div> -->
        </div>
        <Changes :title1="title1" :title2="title2" :path1="path1" :path2="path2" :number="number"></Changes>
    </div>
</template>

<script>
import Changes from '@/components/changes.vue'
export default {
    data(){
        return{
            title1 : '单选框',
            title2 : '日期',
            path1 : '/RadioButton',
            path2 : '/Date',
            number : 10,
            options: [
                {
                value: '吉林',
                label: '吉林',
                children: [
                    {
                    value: '呼和浩特',
                    label: '呼和浩特',
                    children: [
                        {
                        value: '南岗区',
                        label: '南岗区',
                        },
                        {
                        value: '道里区',
                        label: '南岗区',
                        },
                        {
                        value: '海外区',
                        label: '南岗区',
                        },
                        {
                        value: '太平区',
                        label: '南岗区',
                        },
                    ],
                    },
                    {
                    value: '大庆',
                    label: '大庆',
                    children: [
                        {
                        value: '南岗区',
                        label: '南岗区',
                        },
                        {
                        value: '道里区',
                        label: '南岗区',
                        },
                        {
                        value: '海外区',
                        label: '南岗区',
                        },
                        {
                        value: '太平区',
                        label: '南岗区',
                        },
                    ],
                    },
                ],
                },
                {
                value: '黑龙江省',
                label: '黑龙江省',
                children: [
                    {
                    value: '呼和浩特',
                    label: '呼和浩特',
                    children: [
                        {
                        value: '呼和浩特',
                        label: '呼和浩特',
                        children: [
                            {
                            value: '南岗区',
                            label: '南岗区',
                            },
                            {
                            value: '道里区',
                            label: '南岗区',
                            },
                            {
                            value: '海外区',
                            label: '南岗区',
                            },
                            {
                            value: '太平区',
                            label: '南岗区',
                            },
                        ],
                        },
                    ],
                    },
                ],
                },
            ],
        }
    },
    components:{
        Changes
    },
}
</script>

<style lang="less">
.choBox1{
    width: 350px;
    height: 140px;
    padding: 60px 10px;
    margin-right: 50px;
}
.choSpan{
    position: absolute;
    top: 5px;
    left: 10px;
}
.choBox2{
    width: 400px;
    height: 140px;
    padding: 60px 57px;
    position: relative;
    display: flex;
    border: 1px solid #DDDDDD;
}
</style>
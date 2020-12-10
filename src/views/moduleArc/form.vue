<template>
    <div class="rightBox">
        <div class="container">
            <h1>表单</h1>
            <div class="intrduce">
                <p>表单在网页中主要负责数据采集功能，可以收集用户的信息和反馈意见，是网站管理者与浏览者之间沟通的桥梁。</p>
            </div>
            <h1 class="margin-top40">何时使用</h1>
            <div class="intrduce ">
                <p>◆用于创建一个实体或收集信息，需要对输入的数据类型进行校验时。必填项表单前面需要加*标红来强调重要性。</p>
                <p>◆例如：收集学生信息，需要录入相关属性；填报报销单，需要录入基本信息、行程等；项目填报申请，需要录入相关项目情况等等。</p>
            </div>
            <h1 class="margin-top40">表单类型</h1>
            <div class="intrduce">
                <p>表单一般以这两个类型为主：标签+输入框、标签+输入框+修饰图标。</p>
                <p>表单一定会包含表单域，表单域可以是输入控件，标准表单域，标签，下拉菜单，文本域等。我们在这里讲列举常规的输入控件，并把所有表单域细分在规范中其他区域进行说明。</p>
            </div>
            <div class="margin-top20">
                <div class="disFle">
                    <div class="Box formBox1">
                        <span class="formSpan">1.标签+文本框</span>
                        <div>
                            标准表单：<a-input placeholder="请输入" style="width: 220px" />
                            <!-- <a-input placeholder="图标" style="width: 220px"><a-icon type="step-forward" /></a-input> -->
                        </div>
                    </div>
                    <div class="Box formBox1">
                        <span class="formSpan">2.标签+文本框+修饰图标</span>
                        <div>
                            搜索：<a-input-search placeholder="搜索内容" style="width: 220px" />
                            <div class="margin-top20">
                                <span>密码：</span><span><a-input-password placeholder="请输入密码" style="width: 220px"/></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <h1 class="margin-top40">表单尺寸</h1>
            <div class="intrduce">
                <p>表单有大、标准和小两种尺寸。标签文字最多不超过8个字（不算标点符号）。单独表单的响应式大小固定宽度均为340px，即最大标签+文本框，下高度预留出20px报错。每一组表单间左右最小的间距不能小于等于20px。</p>
                <p>◆大尺寸表单：设置高度为38px，宽度为220px，标签和内容文字为16px。参照内容距左8px。</p>
                <p>◆标准尺寸表单：设置高度为32px，宽度为220px，标签和内容文字为14px。参照内容距左8px。</p>
                <p>◆小尺寸表单：设置高度为22px，宽度为220px，标签和内容文字为12px。参照内容距左8px。</p>
            </div>
            <div class="margin-top20">
                <div class="formBox2">
                    <div class="margin"><div class="name">大表单：</div><a-input placeholder="请输入" size='large' style="width: 220px" /></div>
                    <!-- <div class="margin"><div class="name">禁用大表单：</div><a-input placeholder="请输入" size='large' style="width: 220px" disabled/></div> -->
                    <div class="margin"><div class="name">每行最多不超8字执行样式：</div><a-input placeholder="选择参照内容" size='large' style="width: 220px" /></div>
                </div>
                <div class="formBox2">
                    <div class="margin"><div class="name">标准表单：</div><a-input placeholder="选择参照内容" style="width: 220px" /></div>
                    <!-- <div class="margin"><div class="name">禁用标准表单：</div><a-input placeholder="选择参照内容" style="width: 220px" disabled/></div> -->
                    <div class="margin"><div class="name">每行最多不超8字执行样式：</div><a-input placeholder="选择参照内容" style="width: 220px" /></div>
                </div>
                <div class="formBox2">
                    <div class="margin"><div class="name">小表单：</div><a-input placeholder="选择参照内容" size='small' style="width: 220px" /></div>
                    <!-- <div class="margin"><div class="name">禁用小表单：</div><a-input placeholder="选择参照内容" size='small' style="width: 220px" disabled/></div> -->
                    <div class="margin"><div class="name">每行最多不超8字执行样式：</div><a-input placeholder="选择参照内容" size='small' style="width: 220px" /></div>
                </div>
            </div>
            <h1 class="margin-top40">排列方式</h1>
            <div class="intrduce">
                <p>我们为表单提供了以下两种排列方式：</p>
                <p>◆水平排列：标签和表单控件水平排列（默认）。</p>
                <p>◆垂直排列：标签和表单控件上下垂直排列。标题与文本框的间距为8px，其他规范与水平排列的相同。通常建议在弹窗区域或固定较小区域且标题文字较多使用此排列方式。</p>
            </div>
            <div class="margin-top20">
                <div class="disFle">
                    <div class="formBox3 Box">
                        <span class="formSpan">1.水平排序</span>
                        <div>
                            <div>标准表单：<a-input placeholder="选择参照内容" style="width: 220px" /></div>
                            <div class="margin-top20">标准表单：<a-input placeholder="选择参照内容" style="width: 220px" /></div>
                        </div>
                    </div>
                    <div class="formBox3 Box">
                        <span class="formSpan">2.垂直排序</span>
                        <div>
                            <div>
                                <a-form-item label="标题最多不超过文本框宽高">
                                    <a-input placeholder="请输入"  style="width: 220px" />
                                </a-form-item>
                            </div>
                            <div>
                                <a-form-item label="标题最多不超过文本框宽高" has-feedback>
                                    <a-input allow-clear default-value="填写内容可删除" />
                                </a-form-item>
                            </div>
                        </div>
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
            title1 : '日期',
            title2 : '输入框',
            path1 : '/Date',
            path2 : '/InputBox',
            number : 12,
        }
    },
    components:{
        Changes
    },
}
</script>

<style lang="less">
.formBox1{
    justify-content: center;
    width: 450px;
    height: 200px;
    margin-right: 20px;
}
.formSpan{
    position: absolute;
    top: 10px;
    left: 10px;
}
.formBox2{
    width: 400px;
    // height: 300px;
    border: 1px solid #DDDDDD;
    padding: 10px 20px 30px 20px;
    margin-bottom: 20px;

    .formbox2-1{
        display: flex;
        align-items: center;
        justify-content: space-between;

        div{
            text-align: center;
        }
    }
}
.formBox3{
    width: 450px;
    height: 245px;
    justify-content: center;
    padding-top: 20px;
    margin-right: 20px;
}
.name{
    display: inline-block;
    width: 110px;
    text-align: right;
    margin-right: 10px;
}
.margin{
    display: flex;
    align-items: center;
    margin-top: 25px;
}
</style>
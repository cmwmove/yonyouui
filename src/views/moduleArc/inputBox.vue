<template>
    <div class="rightBox">
        <div class="container">
            <h1>输入框</h1>
            <div class="intrduce">
                <p>通过鼠标或键盘输入内容，是最基础的表单域的包装。</p>
                <p>在网页中的作用类似于程序的文本框，它作为获取用户输入数据的一种方式。</p>
            </div>
            <h1 class="margin-top40">何时使用</h1>
            <div class="intrduce ">
                <p>需要用户输入表单域内容时。</p>
                <p>在输入框中单击鼠标会出现插入点光标，我们可以直接在输入框中输入文字或文本信息。</p>
            </div>
            <h1 class="margin-top40">输入框类型</h1>
            <div class="intrduce">
                <p>输入框一般根据功能划分，大致分5种类型：标准输入框、组合输入框、搜索框、密码框、文本域。</p>
            </div>
            <div class="margin-top20">
                <div class="disFle inputBox1">
                    <div class="Box inputBox1-1">
                        <span class="titleSpan">1.标准输入框</span>
                        <div>
                            <a-input placeholder="选择参考内容" />
                        </div>
                    </div>
                    <div class="Box inputBox1-2">
                        <span class="titleSpan">2.组合输入框</span>
                        <div>
                            <div style="margin-left:55px;">
                                <span>下拉选择：</span>
                                <!-- <icon-font slot="suffixIcon" type="iconAPIshuru" /> -->
                                
                                <a-select placeholder="选择内容" style="width: 220px">
                                    <!-- <i class="iconfont iconAPIshuru"></i> -->
                                    <icon-font slot="suffixIcon" type="iconxiajiantou" />
                                    <a-select-option value="1">选项卡一</a-select-option>
                                    <a-select-option value="2">已选择选项卡</a-select-option>
                                    <a-select-option value="3" disabled>禁止选择</a-select-option>
                                    <a-select-option value="4">鼠标经过</a-select-option>
                                    <a-select-option value="5">正常文字</a-select-option>
                                </a-select>
                            </div>
                            <div class="margin-top20">
                                <span>点击弹出参照选项：</span>
                                <a-date-picker style="width:220px">
                                    <icon-font slot="suffixIcon" type="iconzhongdianxiangmu" />
                                </a-date-picker>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div class="disFle inputBox1">
                    <div class="Box inputBox1-1">
                        <span class="titleSpan">3.搜索框</span>
                        <div>
                            <!-- <a-input-search placeholder="搜索内容" style="width: 220px"/> -->
                            <a-input-search placeholder="搜索内容" style="width: 220px">
                                <icon-font slot="suffixIcon" type="iconrili" />
                                <!-- <i class="iconfont iconrili"></i> -->
                            </a-input-search><i class="iconfont iconrili"></i>
                        </div>
                    </div>
                    <div class="Box inputBox1-1">
                        <span class="titleSpan">4.密码框</span>
                        <div>
                            <span>密码：</span>
                            <!-- <a-input-password placeholder="输入密码" style="width:220px;"/> -->
                            <a-input-password placeholder="输入密码" style="width:220px;"><icon-font slot="suffixIcon" type="iconchakan" /></a-input-password>
                        </div>
                    </div>
                    <div class="Box inputBox1-1">
                        <span class="titleSpan">5.文本域</span>
                        <div>
                            <a-textarea placeholder="填写大段文字使用" :rows="4" style="width:220px;"/>
                        </div>
                    </div>
                </div>
                <div class="disFle inputBox1">
                    <div class="Box inputBox1-1">
                        <span class="titleSpan">6.禁用输入框</span>
                        <div>
                            <a-input placeholder="文字内容" disabled/>
                        </div>
                    </div>
                    <div class="Box inputBox1-1">
                        <span class="titleSpan">7.只读输入框</span>
                        <div>
                            <a-input class="readinput" value="只读内容" readOnly/>
                        </div>
                    </div>
                    <div class="Box inputBox1-1">
                        <span class="titleSpan">8.数字放大状态</span>
                        <div class="numberform">
                             <!-- <a-tooltip>
                                <template slot="title">
                                {{bignumber}}
                                </template>
                                <a-input placeholder="文字内容" style="width:220px;" v-model="bignumber" @focus="bigNumber" @blur="blurNumber"/>
                            </a-tooltip> -->

                            <div class="disnon" v-show="eightnumber">
                                <div class="three"></div>
                                <div class="nonenumber">
                                    <p>{{bignumber}}</p>
                                </div>
                            </div>
                            <a-input placeholder="文字内容" style="width:220px;" v-model="bignumber" @focus="bigNumber" @blur="blurNumber"/>


                            <!-- <a-popover>
                                <template slot="content">
                                    <p>{{this.names}}</p>
                                </template>
                                <a-input v-model="names" placeholder="文字内容" style="width:220px;"/>
                            </a-popover> -->
                        </div>
                    </div>
                </div>
                <div class="disFle inputBox1">
                    <div class="Box inputBox1-1">
                        <span class="titleSpan">9.报错状态</span>
                        <div>
                            <a-form-model ref="ruleForm" :model="form" :rules="rules" >
                                 <a-form-model-item ref="name" label="单位名称" prop="name">
                                    <a-input
                                        placeholder="输入正确内容"
                                        v-model="form.name"
                                        @blur="
                                        () => {
                                            $refs.name.onFieldBlur();
                                        }
                                        " />
                                </a-form-model-item>
                            </a-form-model>
                        </div>
                    </div>
                    <div class="Box inputBox1-1">
                        <span class="titleSpan">10.必填项</span>
                        <div>
                            <a-form-model ref="ruleForm" :model="form" :rules="rules" >
                                <a-form-model-item label="单位名称" prop="desc">
                                    <a-input v-model="form.desc" type="text" />
                                </a-form-model-item>
                            </a-form-model>
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
            title1 : '表单',
            title2 : '开关',
            path1 : '/Form',
            path2 : '/Switch',
            number : 4,
            names : '',
            eightnumber :false,
            form: {
                name: '',
                region: undefined,
                date1: undefined,
                delivery: false,
                type: [],
                resource: '',
                desc: '',
            },
            bignumber:'',
            rules: {
                name: [
                { required: true, message: 'Please input Activity name', trigger: 'blur' },
                { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
                ],
                region: [{ required: true, message: 'Please select Activity zone', trigger: 'change' }],
                date1: [{ required: true, message: 'Please pick a date', trigger: 'change' }],
                type: [
                {
                    type: 'array',
                    required: true,
                    message: 'Please select at least one activity type',
                    trigger: 'change',
                },
                ],
                resource: [
                { required: true, message: 'Please select activity resource', trigger: 'change' },
                ],
                desc: [{ required: true, message: 'Please input activity form', trigger: 'blur' }],
            },
        }
    },
    components:{
        Changes
    },
    methods: {
        onSubmit() {
            this.$refs.ruleForm.validate(valid => {
                if (valid) {
                alert('submit!');
                } else {
                console.log('error submit!!');
                return false;
                }
            });
        },
        resetForm() {
            this.$refs.ruleForm.resetFields();
        },
        bigNumber() {
            this.eightnumber = true;
        },
        blurNumber() {
            this.eightnumber = false;
        }
    },
}
</script>

<style lang="less">
.inputBox1{
    width: 1050px;
    height: 190px;
    padding-top: 20px;

    .inputBox1-1{
        width: 330px;
        height: 170px;
        margin-right: 20px;
        padding-left: 30px;
        padding-top: 20px;
    }
    .inputBox1-2{
        width: 680px;
        height: 170px;
        padding-left: 30px;
        padding-top: 20px;
    }
}

</style>
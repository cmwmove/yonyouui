<template>
    <div>
        <div>
            <a-button type="primary" @click="showModal">
            表单弹窗
            </a-button>
            <a-modal v-model="visible" title="弹窗标题" @ok="handleOk" style="width:700px;">
                <a-form :form="form" layout="vertical"  hide-required-mark>
                    <a-row :gutter="16">
                        <a-col :span="8">
                            <a-form-item label="地区">
                                <a-cascader :options="options" change-on-select />
                            </a-form-item>
                        </a-col>
                        <a-col :span="8">
                            <a-form-item label="姓名">
                            <a-input
                                v-decorator="[
                                'name',
                                {
                                    rules: [{ required: true, message: 'Please enter user name' }],
                                },
                                ]"
                                placeholder="填写内容"
                            />
                            </a-form-item>
                        </a-col>
                        <a-col :span="8">
                            <a-form-item label="手机号">
                            <a-input
                                v-decorator="[
                                'name',
                                {
                                    rules: [{ required: true, message: 'Please enter user name' }],
                                },
                                ]"
                                placeholder="填写内容"
                            />
                            </a-form-item>
                        </a-col>
                    </a-row>
                    <a-row :gutter="16">
                        <a-col :span="8">
                            <a-form-item label="开始日期">
                            <a-date-picker
                                v-decorator="[
                                'dateTime',
                                {
                                    rules: [{ required: true, message: 'Please choose the dateTime' }],
                                },
                                ]"
                                style="width: 100%"
                                placeholder="选择参照内容"
                                :get-popup-container="trigger => trigger.parentNode"
                            />
                            </a-form-item>
                        </a-col>
                        <a-col :span="8">
                            <a-form-item label="结束日期">
                            <a-date-picker
                                v-decorator="[
                                'dateTime',
                                {
                                    rules: [{ required: true, message: 'Please choose the dateTime' }],
                                },
                                ]"
                                style="width: 100%"
                                placeholder="选择参照内容"
                                :get-popup-container="trigger => trigger.parentNode"
                            />
                            </a-form-item>
                        </a-col>
                        <a-col :span="8">
                            <a-form-item label="到期日期">
                            <a-date-picker
                                v-decorator="[
                                'dateTime',
                                {
                                    rules: [{ required: true, message: 'Please choose the dateTime' }],
                                },
                                ]"
                                style="width: 100%"
                                placeholder="选择参照内容"
                                :get-popup-container="trigger => trigger.parentNode"
                            />
                            </a-form-item>
                        </a-col>
                    </a-row>
                    <a-row :gutter="16">
                        <a-col :span="24">
                            <a-form-item label="具体描述">
                            <a-textarea
                                v-decorator="[
                                'description',
                                {
                                    rules: [{ required: true, message: 'Please enter url description' }],
                                },
                                ]"
                                :rows="4"
                                placeholder="填写大段文字用"
                            />
                            </a-form-item>
                        </a-col>
                    </a-row>
                </a-form>
            </a-modal>
        </div>
    </div>
</template>

<script>
export default {
     data() {
        return {
            form: this.$form.createForm(this),
            visible: false,
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
        };
    },
    methods: {
        showModal() {
            this.visible = true;
        },
        handleOk(e) {
            this.visible = false;
        },
    },
}
</script>

<style>

</style>
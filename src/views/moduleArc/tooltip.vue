<template>
    <div class="rightBox">
        <div class="container">
            <h1>文字提示</h1>
            <div class="intrduce">
                <p>简单的文字提示气泡框</p>
            </div>
            <h1 class="margin-top40">何时使用</h1>
            <div class="intrduce ">
                <p>鼠标移入则显示提示，移出消失，气泡浮层不承载负责文本和操作。</p>
                <p>可用来代替系统默认的『title』 提示，提供一个 『按钮/文字/操作』的文案解释。</p>
            </div>

            <h1 class="margin-top40">基本</h1>
            <div class="intrduce margin-top20">
                <p><b>简单的用法。 </b></p>
            </div>
            <div class="intrduce margin-top40">
                <p>1. 链接文字提示</p>
            </div>
            <div class="margin-top20">
                <div class="tllBox1">
                    <a-tooltip>
                        <template slot="title">
                        请点击查看
                        </template>
                        <a-button type="link">通知公告发文内容</a-button>
                    </a-tooltip>
                </div>
            </div>
            <div class="intrduce margin-top40">
                <p>2. 图标文字提示</p>
            </div>
            <div class="margin-top20 ">
                <div class="tllBox2">
                    <div class="shouye">
                        <a-tooltip>
                            <template slot="title">
                            首页
                            </template>
                            <i class="iconfont icongongzuotai"></i>
                        </a-tooltip>
                    </div>
                    <div class="margin-top20">
                        <a-form-model-item>
                            <span class="xing">*</span>表单必填项与提示
                            <a-tooltip>
                                <template slot="title">
                                自2019年四月起政务UI中后台产品正式发布
                                </template>
                                <i class="iconfont iconbangzhu1"></i>
                            </a-tooltip>：
                            <a-input style="width:200px;"/>
                        </a-form-model-item>
                    </div>
                </div>
            </div>
            <div class="intrduce margin-top40">
                <p>3. 超出区域文字提示</p>
            </div>
            <div class="margin-top20 ">
                <div class="tllBox3">
                    <div class="ToodisFle">
                        <a-tooltip>
                            <template slot="title">
                            单行文字数量超过七字鼠标经过显示全名
                            </template>
                            <div class="more">单行文字数量超过七字鼠标经过显示全名</div>
                        </a-tooltip>
                        ：<a-input style="width:200px;" placeholder="选择参考内容"/>
                    </div>
                        

                    <!-- <div class="ToodisFle margin-top40">
                        <div class="moreS">连级选择：</div>
                        <a-cascader style="width:200px;" :options="options" change-on-select />
                    </div> -->
                    
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
            title1 : '弹框',
            title2 : '警告提示',
            path1 : '/Popup',
            path2 : '/Alert',
            number : 29,
            // options: [
            //     {
            //     value: '吉林',
            //     label: '吉林',
            //     children: [
            //         {
            //         value: '呼和浩特',
            //         label: '呼和浩特',
            //         children: [
            //             {
            //             value: '南岗区',
            //             label: '南岗区',
            //             },
            //             {
            //             value: '道里区',
            //             label: '南岗区道外区道外区道外区道外区',
            //             },
            //             {
            //             value: '海外区',
            //             label: '南岗区',
            //             },
            //             {
            //             value: '太平区',
            //             label: '南岗区',
            //             },
            //         ],
            //         },
            //         {
            //         value: '大庆',
            //         label: '大庆',
            //         children: [
            //             {
            //             value: '南岗区',
            //             label: '南岗区',
            //             },
            //             {
            //             value: '道里区',
            //             label: '南岗区',
            //             },
            //             {
            //             value: '海外区',
            //             label: '南岗区',
            //             },
            //             {
            //             value: '太平区',
            //             label: '南岗区',
            //             },
            //         ],
            //         },
            //     ],
            //     },
            //     {
            //     value: '黑龙江省',
            //     label: '黑龙江省',
            //     children: [
            //         {
            //         value: '呼和浩特',
            //         label: '呼和浩特',
            //         children: [
            //                 {
            //                 value: '南岗区',
            //                 label: '南岗区',
            //                 },
            //                 {
            //                 value: '道里区',
            //                 label: '南岗区',
            //                 },
            //                 {
            //                 value: '海外区',
            //                 label: '南岗区',
            //                 },
            //                 {
            //                 value: '太平区',
            //                 label: '南岗区',
            //                 },
            //             ],
            //         },
            //     ],
            //     },
            // ],
        }
    },
    components:{
        Changes
    },
}
</script>

<style>
.tllBox1{
    border: 1px solid #dddddd;
    padding: 30px 30px;
    width: 200px;
}
.tllBox2{
    border: 1px solid #dddddd;
    padding: 30px 30px 0 30px;
    width: 450px;
    /* display: flex; */
}
.tllBox3{
    border: 1px solid #dddddd;
    padding: 30px 30px;
    width: 450px;

}
.more{
    width: 100px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    /* display: inline-block; */
}
.moreS{
    width: 114px;
    text-align: right;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    /* display: inline-block; */
}
.ToodisFle{
    display: flex;
    align-items: center;
    /* margin-bottom: 50px; */
}
.shouye{
    margin-right: 18px;
    padding-top: 7px;
}

.xing{
    color: red;
    
}
</style>
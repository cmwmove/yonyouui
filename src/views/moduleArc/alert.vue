<template>
    <div class="rightBox">
        <div class="container">
            <h1>警告提示</h1>
            <div class="intrduce">
                <p>警告提示，展现需要关注的信息。</p>
            </div>
            <h1 class="margin-top40">何时使用</h1>
            <div class="intrduce ">
                <p>当某个页面需要向用户显示警告的信息时。</p>
                <p>非浮层的静态展现形式，始终展现，不会自动消失，用户可以点击关闭。</p>
            </div>
            <h1 class="margin-top40">警告提示样式</h1>
            <div class="intrduce margin-top40">
                <p><b>可关闭警告提示样式 :</b> </p>
            </div>
            <div class="margin-top20">
                <div class="alertBox">
                    <a-alert message="Success Text" type="success" closable/>
                    <div class="margin-top20"><a-alert message="Info Text" type="info" closable/></div>
                    <div class="margin-top20"><a-alert message="Warning Text" type="warning" closable/></div>
                    <div class="margin-top20"><a-alert message="Error Text" type="error" closable/></div>
                </div>
            </div>
            <div class="intrduce margin-top40">
                <p><b>辅助性警告提示样式 : </b> </p>
            </div>
            <div class="margin-top20 ">
                <div class="alertBox">
                        <a-alert message="新消息提醒" type="success" closable>
                        <p slot="description">马克风寒发发卡对焊法兰框架和弗兰克的说法</p>
                        </a-alert>
                        <div class="margin-top20">
                            <a-alert message="新消息提醒"
                            description="马克风寒发发卡对焊法兰框架和弗兰克的说法"
                            type="info" closable
                            />
                        </div>
                        <div class="margin-top20">
                            <a-alert
                            message="新消息提醒"
                            description="马克风寒发发卡对焊法兰框架和弗兰克的说法"
                            type="warning" closable
                            />
                        </div>
                        <div class="margin-top20">
                            <a-alert
                            message="新消息提醒"
                            description="马克风寒发发卡对焊法兰框架和弗兰克的说法"
                            type="error" closable
                            />
                        </div>
                </div>
            </div>
            <div class="intrduce margin-top40">
                <p><b>icon警告提示样式 :</b> </p>
            </div>
            <div class="margin-top20 ">
                <div class="alertBox">
                    <a-alert message="新消息提醒" type="info" show-icon closable/>
                    <div class="margin-top20"><a-alert message="修改信息成功" type="success" show-icon closable /></div>
                    <div class="margin-top20"><a-alert message="警告信息提示" type="warning" show-icon closable /></div>
                    <div class="margin-top20"><a-alert message="操作出现错误" type="error" show-icon closable /></div>
                    <div class="margin-top20">
                        <a-alert
                        message="新消息提醒"
                        description="马克风寒发发卡对焊法兰框架和弗兰克的说法"
                        type="info"
                        show-icon closable
                        />
                    </div>
                    <div class="margin-top20">
                        <a-alert
                        message="新消息提醒"
                        description="马克风寒发发卡对焊法兰框架和弗兰克的说法"
                        type="success"
                        show-icon closable
                        />
                    </div>
                    <div class="margin-top20">
                        <a-alert
                        message="新消息提醒"
                        description="马克风寒发发卡对焊法兰框架和弗兰克的说法"
                        type="warning"
                        show-icon closable
                        />
                    </div>
                    <div class="margin-top20">
                        <a-alert
                        message="新消息提醒"
                        description="马克风寒发发卡对焊法兰框架和弗兰克的说法"
                        type="error"
                        show-icon closable
                        />
                    </div>
                    
                </div>
            </div>
            <div class="intrduce margin-top40">
                <p><b>顶部警告提示样式 :</b> </p>
            </div>
            <div class="margin-top20 ">
                <div class="alertBox"></div>
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
            title1 : '标签',
            title2 : '抽屉',
            path1 : '/Tag',
            path2 : '/Drawer',
            number : 22,
        }
    },
    components:{
        Changes
    },
     
}
</script>

<style>
.alertBox{
    border: 1px solid #dddddd;
    padding: 30px 40px 30px 15px;
    width: 530px;
}
</style>
<template>
    <div class="rightBox">
        <div class="container">
            <h1>卡片</h1>
            <div class="intrduce">
                <p>通用卡片容器。</p>
            </div>

            <h1 class="margin-top40">何时使用</h1>
            <div class="intrduce ">
                <p>最基础的卡片容器，可承载文字、列表、图片、段落，常用于后台概览页面。</p>
            </div>

            <h1 class="margin-top40">典型卡片</h1>
            <div class="intrduce margin-top40">
                <p>包含标题、内容、操作区域。 </p>
            </div>
            <div class="margin-top20">
                <div class="box cardBoxO">
                    <a-card title="标题" style="width: 300px">
                        <a slot="extra" href="#">更多</a>
                        <p>干什么办法点发掘击科技部出版人</p>
                        <p>发十点半放假后都领刚人蔡少才那</p>
                        <p>发大是投入和沃个风都很高特而去</p>
                        <p>发给库发货了咖妃了发后付款规划</p>
                        <p>罚款家乐福很开放咖个卡后方可阿</p>
                    </a-card>
                </div>
            </div>
            
            <h1 class="margin-top40">简洁卡片</h1>
            <div class="intrduce margin-top40">
                <p>包含内容区域。一般应用于列表页面。</p>
            </div>
            <div class="margin-top20 ">
                <div class="cardBoxT box">
                    <a-card style="width: 300px">
                        <p>干什么办法点发掘合肥击科技版人</p>
                        <p>发十点半放假后都不敢领刚人才那</p>
                        <p>发大是投入和沃个干热风都很高去</p>
                        <p>发给库发货了咖妃了卡事发款规划</p>
                        <p>罚款家乐福很开放咖啡换个卡后方</p>
                    </a-card>
                </div>
            </div>

            <h1 class="margin-top40">图标卡片</h1>
            <div class="intrduce margin-top40">
                <p>包含图标+内容区域。</p>
            </div>
            <div class="margin-top20 ">
                <div class="cardBoxTh box">
                    <div class="iconbox">
                        <a-card hoverable style="width: 300px">
                            <a-card-meta title="文字描述">
                                <div class="cardicon" slot="avatar"><i class="iconfont iconzidingyi"></i></div>
                            </a-card-meta>
                        </a-card>
                    </div>
                    <div class="iconbox">
                        <a-card hoverable style="width: 300px">
                            <template slot="actions" class="ant-card-actions">
                                <span><a-icon key="delete" type="delete" /><div class="card-iconT">删除</div></span>
                                <span><a-icon key="edit" type="edit" /><div class="card-iconT">修改</div></span>
                            </template>
                            <a-card-meta title="文字描述">
                                <div class="cardicon" slot="avatar"><i class="iconfont iconzidingyi"></i></div>
                            </a-card-meta>
                        </a-card>
                    </div>
                    <div class="iconbox">
                        <a-card hoverable style="width: 300px">
                            <template slot="actions" class="ant-card-actions">
                                <!-- <a-icon key="setting" type="setting" />
                                <a-icon key="edit" type="edit" />
                                <a-icon key="ellipsis" type="ellipsis" /> -->
                                <span><a-icon key="delete" type="delete" /><div class="card-iconT">删除</div></span>
                                <span><a-icon key="edit" type="edit" /><div class="card-iconT">修改</div></span>
                            </template>
                            <a-card-meta title="文字描述" description="文字描述文字描述文字描述">
                                <div class="cardicon" slot="avatar"><i class="iconfont iconzidingyi"></i></div>
                            </a-card-meta>
                        </a-card>
                    </div>
                </div>
            </div>
            
            <h1 class="margin-top40">带页签的卡片</h1>
            <div class="intrduce margin-top40">
                <p>包含内容区域。</p>
            </div>
            <div class="margin-top20 ">
                <div class="cardBoxF box">
                     <a-card
                        style="width:100%"
                        :tab-list="tabListNoTitle"
                        :active-tab-key="noTitleKey"
                        @tabChange="key => onTabChange(key, 'noTitleKey')"
                        >
                        <div v-if="noTitleKey === 'article'">
                            内容一
                        </div>
                        <div v-else-if="noTitleKey === 'app'">
                            内容二
                        </div>
                        <div v-else-if="noTitleKey === 'project'">
                            内容三
                        </div>
                        <div v-else="noTitleKey === 'fours'">
                            内容四
                        </div>
                        <a slot="tabBarExtraContent" href="#">更多</a>
                        </a-card>
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
            title1 : '折叠面板',
            title2 : '描述列表',
            path1 : '/Collapse',
            path2 : '/Descriptions',
            number : 17,
            tabListNoTitle: [
                {
                key: 'article',
                tab: '页签一',
                },
                {
                key: 'app',
                tab: '页签二',
                },
                {
                key: 'project',
                tab: '页签三',
                },
                {
                key: 'fours',
                tab: '页签四',
                },
            ],
            key: 'tab1',
            noTitleKey: 'app',
        }
    },
    components:{
        Changes
    },
    methods: {
        onTabChange(key, type) {
            console.log(key, type);
            this[type] = key;
        },
    },
}
</script>

<style lang="less">

.box{
    border: 1px solid #dddddd;
    padding: 20px 20px;
}
.cardBoxO{
    width: 350px;
}
.cardBoxT{
    width: 340px;
    
}
.cardBoxTh{
    width: 1000px;
    display: flex;
    justify-content: space-between;
    padding: 10px 30px 20px 10px;
}
.cardBoxF{
    width: 670px;
}

</style>
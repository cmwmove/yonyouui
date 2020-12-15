<template>
    <div class="rightBox">
        <div class="container">
            <h1>分页</h1>
            <div class="intrduce">
                <p>当有大量内容需要展现时进行分页加载处理，分页器可以让用户清楚的知道自己所要浏览的内容有多少、已经浏览了多少、还剩余多少。采用分页的形式分隔长列表，每次只加载一个页面。分页控件横向居右显示。</p>
            </div>
            <h1 class="margin-top40">使用场景</h1>
            <div class="intrduce ">
                <p>◆当加载/渲染所有数据将花费很多时间；</p>
                <p>◆可切换页码浏览数据。</p>
            </div>
            <h1 class="margin-top40">分页类型</h1>
            <div class="intrduce ">
                <p>分页有两种类型：基础分页和更多分页。</p>
            </div>

            <!-- 基础分页 -->
            <div class="intrduce margin-top40">
                <p>基础分页 : 上一页、下一页、首页、尾页、显示具体页。</p>
            </div>
            <div class="margin-top20">
                <div class="pagBox">
                     
                    <div class="pagBoxUp">
                        <div>标准尺寸:</div>
                        
                        <div class="pags">
                            <ul class="ant-pagination">
                                <li class="allleft pagleft" @click="pageleftClick">
                                    <a class="all"><i class="iconfont iconxiangzuo"></i></a>
                                </li>
                                <li class="alllefts"><a-pagination v-model="current" :total="50" show-less-items /></li>
                                <li class="allleft pagright" @click="pagerightClick">
                                    <a class="all" ><i class="iconfont iconxiangyou"></i></a>
                                </li>
                            </ul>
                        </div>
                        <div class="pags">
                            <ul class="ant-pagination">
                                <li class="allleftdis pagleft">
                                    <a class="all"><i class="iconfont iconxiangzuo"></i></a>
                                </li>
                                <li class="alllefts"><a-pagination :total="50" disabled show-less-items /></li>
                                <li class="allleftdis pagright">
                                    <a class="all" ><i class="iconfont iconxiangyou"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <!-- 小尺寸 -->
                    <div class="pagBoxUp">
                        <div>小尺寸:适用于弹出、侧拉等展示页码较少空间有限的组件或页面上</div>
                        <!-- 小尺寸分页 -->
                        <div class="pagsmall">
                            <ul class="ant-pagination">
                                <li class="allleft pagleft" @click="samllpageleftClick">
                                    <a class="all"><i class="iconfont iconxiangzuo"></i></a>
                                </li>
                                <li class="alllefts"><a-pagination size="small" v-model="currents" :total="50" show-less-items /></li>
                                <li class="allleft pagright" @click="samllpagerightClick">
                                    <a class="all" ><i class="iconfont iconxiangyou"></i></a>
                                </li>
                            </ul>
                        </div>
                        <!-- 小尺寸禁止分页 -->
                        <div class="pagsmall">
                            <ul class="ant-pagination">
                                <li class="allleftdis pagleft">
                                    <a class="all"><i class="iconfont iconxiangzuo"></i></a>
                                </li>
                                <li class="alllefts"><a-pagination v-model="currents" size="small" :total="50" disabled show-less-items /></li>
                                <li class="allleftdis pagright">
                                    <a class="all" ><i class="iconfont iconxiangyou"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 迷你分页 -->
            <div class="intrduce margin-top40">
                <p>迷你分页 : 上一页、下一页、显示总页数和当前页。迷你版适用于弹出、侧拉等展示页码较少空间有限的组件或页面上。</p>
            </div>
            <div class="margin-top20">
                <div class="miniBox Box">
                    <div>
                        <div class="margin-bottom18"><a-pagination simple :default-current="2" :total="50"/></div>
                    </div>
                </div>
            </div>

            <!-- 最大页码分页 -->
            <div class="intrduce margin-top40">
                <p>最大页码分页 : 上一页、下一页、显示总页数和当前页。默认情况下，当总页数超过 6 页时，折叠多余的页码按钮,用省略号即3个点展示。最大页码按钮数可自行设置。鼠标点击省略号或左右箭头进行上下翻页。</p>
            </div>
            <div class="margin-top20">
                <div class="maxBox">
                    <div class="pags">
                        <ul class="ant-pagination">
                            <li class="pagsnumber">
                                <span>每页</span>
                                <a-input-number class="paginput" id="inputNumber" v-model="value" :min="1" :max="100" />
                                <span>条</span>
                            </li>
                            <li class="allleft pagleft" @click="pageAleftClick">
                                <a class="all"><i class="iconfont iconxiangzuo"></i></a>
                            </li>
                            <li class="alllefts"><a-pagination v-model="currentall" :total="500" /></li>
                            <li class="allleft pagright" @click="pageArightClick">
                                <a class="all" ><i class="iconfont iconxiangyou"></i></a>
                            </li>
                        </ul>
                    </div>
                    <div class="pags">
                        <ul class="ant-pagination">
                            <li class="pagsnumber">
                                <span>每页</span>
                                <a-input-number class="paginputBas" id="inputNumber" v-model="value" :min="1" :max="100" />
                                <span>条</span>
                            </li>
                            <li class="allleftdis pagleft" @click="pageAleftClick">
                                <a class="all"><i class="iconfont iconxiangzuo"></i></a>
                            </li>
                            <li class="alllefts pagright"><a-pagination v-model="currentall" :total="500" disabled/></li>
                            <li class="allleftdis" @click="pageArightClick">
                                <a class="all" ><i class="iconfont iconxiangyou"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <!-- 更多分页 -->
            <div class="intrduce margin-top40">
                <p>更多分页 : 上一页、下一页、首页、尾页、具体显示5页，显示数据总量，设置每页显示数据量，快速跳转到某页。</p>
            </div>
            <div class="margin-top20">
                <div class="moreBox">
                    <div class="pags">
                        <ul class="ant-pagination">
                            <li class="pagsnumber">
                                <span>每页</span>
                                <a-input-number class="paginput" id="inputNumber" v-model="value" :min="1" :max="100" />
                                <span>条</span>
                            </li>
                            <li class="allleft pagleft" @click="pageAleftClick">
                                <a class="all"><i class="iconfont iconxiangzuo"></i></a>
                            </li>
                            <li class="alllefts"><a-pagination v-model="currentall" :total="500" /></li>
                            <li class="allleft pagright" @click="pageArightClick">
                                <a class="all" ><i class="iconfont iconxiangyou"></i></a>
                            </li>
                            <li class="pagsnumber">
                                <a-input-number class="paginput" id="inputNumber" v-model="value" :min="1" :max="100" />
                                <a-button>确定</a-button>
                            </li>
                        </ul>
                    </div>
                    <div class="pags">
                        <ul class="ant-pagination">
                            <li class="pagsnumber">
                                <span>每页</span>
                                <a-input-number class="paginputBas" id="inputNumber" v-model="value" :min="1" :max="100" />
                                <span>条</span>
                            </li>
                            <li class="allleftdis pagleft">
                                <a class="all"><i class="iconfont iconxiangzuo"></i></a>
                            </li>
                            <li class="alllefts"><a-pagination v-model="currentall" :total="500" disabled/></li>
                            <li class="allleftdis pagright">
                                <a class="all" ><i class="iconfont iconxiangyou"></i></a>
                            </li>
                            <li class="pagsnumber">
                                <a-input-number class="paginputBas" id="inputNumber" v-model="value" :min="1" :max="100" />
                                <a-button class="buttonBas">确定</a-button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <Changes :title1="title1" :title2="title2" :path1="path1" :path2="path2" :number="number"></Changes>
    </div>
</template>

<script>
import Changes from '@/components/changes.vue'
// import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN';
export default {
    data(){
        return{
            title1 : '下拉菜单',
            title2 : '步骤条',
            path1 : '/Dropdown',
            path2 : '/Steps',
            number : 6,
            current : 2,
            currents : 1,
            currentall : 2,
            pageSize: 10,
            value:1
            // locale:zhCN,
        }
    },
    components:{
        Changes
    },
    methods:{
        pageleftClick(){
            this.current = 1;
        },
        pagerightClick(){
            this.current = 5;
        },
        samllpageleftClick(){
            this.currents = 1;
        },
        samllpagerightClick(){
            this.currents = 5;
        },
        pageAleftClick(){
            this.currentall = 1;
        },
        pageArightClick(){
            this.currentall = 50;
        },
    }
}
</script>

<style lang="less">
.pagBox{
    height: 290px;
    width: 727px;
    padding-left: 18px;
    padding-top: 20px;
    border: 1px solid #DDDDDD;
}
.miniBox{
    height: 96px;
    width: 725px;
    padding-left: 10px;
}
.maxBox{
    height: 116px;
    width: 725px;
    padding-left: 16px;
    padding-top: 4px;
    border: 1px solid #DDDDDD;
}
.moreBox{
    width: 725px;
    border: 1px solid #DDDDDD;
    padding: 4px 16px;
}
.margin-bottom18{
    margin-bottom: 18px;
}




</style>
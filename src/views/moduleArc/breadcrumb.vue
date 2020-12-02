<template>
    <div class="rightBox">
        <div class="container">
            <h1>面包屑</h1>
            <div class="intrduce">
                <p>显示当前页面在系统层级结构中的位置，并能向上返回</p>
            </div>
            <h1 class="margin-top40">何时使用</h1>
            <div class="intrduce ">
                <p>◆当系统拥有超过两级以上的层级结构时；</p>
                <p>◆当需要告知用户『你在哪里』时；</p>
                <p>◆当需要向上导航的功能时。</p>
            </div>
            <h1 class="margin-top40">面包屑样式</h1>
            <div class="intrduce">
                <p>默认样式 : 文字+分隔符</p>
            </div>
            <div class="margin-top20">
                <div class="styleBox Box">
                    <a-space>
                        <a-breadcrumb>
                            <a-breadcrumb-item><a href="">首页</a></a-breadcrumb-item>
                            <a-breadcrumb-item>
                                <a href="">层级标题</a>
                            </a-breadcrumb-item>
                            <a-breadcrumb-item>
                                <a href="">层级标题</a>
                            </a-breadcrumb-item>
                            <a-breadcrumb-item>页面当前标题</a-breadcrumb-item>
                        </a-breadcrumb>
                    </a-space>
                </div>
            </div>
            <div class="intrduce margin-top40">
                <p>带图标面包屑 : 文字+分隔符+图标</p>
            </div>
            <div class="margin-top20">
                <div class="styleBox Box">
                     <a-breadcrumb>
                            <a-breadcrumb-item><a href="">
                                <i class="iconfont iconshouye"></i>首页</a>
                            </a-breadcrumb-item>
                            <a-breadcrumb-item>
                                <a href=""><i class="iconfont icongeren"></i>层级标题</a>
                            </a-breadcrumb-item>
                            <a-breadcrumb-item>
                                <a href=""><i class="iconfont icondanju"></i>层级标题</a>
                            </a-breadcrumb-item>
                            <a-breadcrumb-item>页面当前标题</a-breadcrumb-item>
                        </a-breadcrumb>
                </div>
            </div>
            <div class="intrduce margin-top40">
                <p>带下拉菜单面包屑 : 文字+分隔符+下拉菜单</p>
            </div>
            <div class="margin-top20">
                <div class="styleBox Box">
                    <a-breadcrumb>
                        <a-breadcrumb-item><a href="">首页</a></a-breadcrumb-item>
                        <a-breadcrumb-item><a href="">层级标题</a></a-breadcrumb-item>
                        <a-breadcrumb-item>
                            <a href="">层级标题</a>
                            <a-menu slot="overlay">
                                <a-menu-item><a target="_blank">层级子标题</a></a-menu-item>
                                <a-menu-item><a target="_blank">层级子标题</a></a-menu-item>
                                <a-menu-item><a target="_blank">层级子标题</a></a-menu-item>
                            </a-menu>
                        </a-breadcrumb-item>
                        <a-breadcrumb-item>页面当前标题</a-breadcrumb-item>
                    </a-breadcrumb>
                </div>
            </div>
            
        </div>
        <Changes :title1="title1" :title2="title2" :path1="path1" :path2="path2" :number="number"></Changes>
    </div>
</template>

<script>
import Changes from '@/components/changes.vue'
export default {
//     created () {
//     document.title = '面包屑'
//   },
//   mounted() {
//     axios.get('***').then((d)=>{
//    document.title = '面包屑('+ d.Name + ')'
//     })
//   },
    data(){
        return{
            title1 : '图标',
            title2 : '下拉菜单',
            path1 : '/Icon',
            path2 : '/Dropdown',
            number : 4
        }
    },
    components:{
        Changes
    },
}
</script>

<style>

.styleBox{
    width: 400px;
    height: 180px;
    justify-content: center;
}
/* .styleupBox{
    width: 900px;
    height: 250px;
} */
</style>
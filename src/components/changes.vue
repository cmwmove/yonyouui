<template>
    <div>
        <!-- 下侧跳转按钮 -->

        <ul class="change">
            <!-- <div class="changeLeft" @click="leftClick">
                <i class="iconfont iconzuo"></i>文字
            </div>
            <div class="changeRight"  @click="rightClick">
                图标<i class="iconfont iconyou"></i>
            </div> -->
            <li class="changeLi" @click="leftClick"> <span><i class="iconfont iconzuo" ></i>{{title1}}</span> </li>
            <li class="changeLi" @click="rightClick"><span>{{title2}} <i class="iconfont iconyou"></i></span> </li>
            <!-- <li>图标<i class="iconfont iconyou"></i></li> -->
        </ul>
    </div>
</template>

<script>
export default {
    name:'change',
    props:[
        'title1',
        'title2',
        'path1',
        'path2'
    ],
    methods:{
        leftClick(){
            this.$router.push(this.path1)
        },
        rightClick(){
            this.$router.push(this.path2)
        }
    }
}
</script>

<style>
.changeLi :hover{
        color: #0066ff;
        /* background-color: #0066ff; */
    }
</style>
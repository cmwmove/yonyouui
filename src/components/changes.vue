<template>
    <div>
        <!-- 下侧跳转按钮 -->

        <ul class="change">
            <li class="changeLi" @click="leftClick"> <span><i class="iconfont iconzuo" ></i>{{title1}}</span> </li>
            <li class="changeLi" @click="rightClick"><span>{{title2}} <i class="iconfont iconyou"></i></span> </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'change',
    data(){
        return{
            numbers:""
        }
    },
    props:[
        'title1',
        'title2',
        'path1',
        'path2',
        'number',
    ],
    methods:{
        leftClick(){
            this.$router.push(this.path1)
            // this.numbers = this.number - 1
            // console.log(this.numbers)
            // this.$emit('child-event',this.numbers)
        },
        rightClick(){
            this.$router.push(this.path2)
            // // this.numbers = this.number + 1
            // console.log(this.numbers)
            // this.$emit('child-event',this.numbers)
        }
    }
}
</script>

<style>
.changeLi :hover{
    color: #0066ff;
}
</style>
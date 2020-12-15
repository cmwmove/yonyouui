<template>
    <div class="header-top">
        <div class="header-right">
            <img src="../assets/img/logo@2x.png" alt="">
        </div>
        <ul class="header-left">
            <li class="headerLeft-title"  v-for="(item,index) in items" v-on:click="addClass(index)" @click="$router.push({ path: item.path })" v-bind:class="{ active:index==current}">{{item.title}}</li>
        </ul>

    </div>
</template>

<script>
export default {
    data() {
        return {
            current:0,
            current2:"",
            items:[
                {title:'规范1.0',path:'/Standard'},
                {title:'规范2.0',path:'/Letter'},
            ],
        };
    },
     methods:{
        addClass:function(index){
            this.current=index;
        }
    }
}
</script>

<style lang="less">
.header-top{
    height: 60px;
    padding: 0 30px 0 40px;
    font-family: AlibabaPuHuiTi-Regular, AlibabaPuHuiTi;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #DDDDDD;
    position: fixed;
    top: 0;
    width: 100%;
    background-color: #fff;
    z-index: 10;

    .header-right{

        img{
            width: 193px;
            height: 36px;
        }
    }
    .header-left{
        display: flex;
        margin: 0;
        li{
            cursor: pointer;
        }
        .headerLeft-title{
            padding: 0 21px;
            height: 60px;
            margin: 0 10px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 16px;  
        }
        .headerLeft-titleR{
            padding: 0 21px;
            height: 60px;
            margin: 0 10px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 16px;

            .anticon{
                margin-left: 10px;
            }
            .ant-dropdown-link{
                font-size: 16px;
            }
        }
        #headerLeft-color{
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .colorBox{
            height: 24px;
            width: 24px;
            border-radius: 4px;
            border: 4px solid #F0F2F5;
            margin: 0 10px;
            background-color: #CC0000;
        }
        .active{
            border-bottom: 2px solid #CC0000;
            color:  #CC0000;
        }

    }
    
}
</style>
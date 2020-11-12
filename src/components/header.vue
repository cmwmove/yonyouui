<template>
    <div class="header-top">
        <div class="header-right">
            <img src="../assets/img/logo@2x.png" alt="">
        </div>
        <!-- <ul class="header-left">
            <li id="headerLeft-title" class="active">指南</li>
            <li id="headerLeft-title">组件</li>
            <li id="headerLeft-title">资源</li>
            <li id="headerLeft-title">财政<a-icon type="down" /></li>
            <li id="headerLeft-title">规范2.0<a-icon type="down" /></li>
            <li id="headerLeft-color"><div class="colorBox"></div></li>
        </ul> -->
        <ul class="header-left">
            <li class="headerLeft-title"  v-for="(item,index) in items" v-on:click="addClass(index)" @click="$router.push({ path: item.path })" v-bind:class="{ active:index==current}">{{item.title}}</li>
            <li class="headerLeft-titleR">财政<a-icon type="down" /></li>
            <li class="headerLeft-titleR">
                <a-dropdown :trigger="['click']">
                    <a class="ant-dropdown-link" @click="e => e.preventDefault()">规范2.0<a-icon type="down" /></a>
                    <a-menu slot="overlay">
                        <a-menu-item key="0">
                            <a>规范1.0</a>
                        </a-menu-item>
                        <a-menu-item key="1">
                            <a>规范2.0</a>
                        </a-menu-item>
                    </a-menu>
                </a-dropdown>
            </li>
            <li id="headerLeft-color"><div class="colorBox"></div></li>
        </ul>

    </div>
</template>

<script>
export default {
    data() {
        return {
            current:1,
            current2:"",
            items:[
                {title:'指南',path:'/'},
                {title:'组件',path:'/ModulePage'},
                {title:'资源',path:'/ModulePage'},
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
    height: 76px;
    padding: 0 30px 0 40px;
    font-family: AlibabaPuHuiTi-Regular, AlibabaPuHuiTi;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #DDDDDD;

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
            // width: 76px;
            padding: 0 21px;
            height: 76px;
            margin: 0 10px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 22px;  
        }
        .headerLeft-titleR{
            padding: 0 21px;
            height: 76px;
            margin: 0 10px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 22px;

            .anticon{
                margin-left: 10px;
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
            // border: 1px solid #DDDDDD;
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
<template>
    <div class="mLeftNav">
        <!-- <a-menu mode="inline" :default-selected-keys="['1']" :open-keys="openKeys" style="width: 273px;height:1133px;" @openChange="onOpenChange"> -->
        <a-menu mode="inline" :open-keys="openKeys" :selectedKeys="[$route.path]" style="width: 273px;height:1133px;">
            <a-sub-menu key="sub1">
                <span slot="title"><span>组件</span></span>
                <!-- <a-menu-item key="1" @click="letterClick">文字</a-menu-item>
                <a-menu-item key="2" @click="moButtonClick">按钮</a-menu-item>
                <a-menu-item key="3" @click="iconClick">图标</a-menu-item>
                <a-menu-item key="4" @click="breadcrumbClick">面包屑</a-menu-item>
                <a-menu-item key="5" @click="dropdownClick">下拉菜单</a-menu-item>
                <a-menu-item key="6" @click="pageHeaderClick">分页</a-menu-item>
                <a-menu-item key="7" @click="stepsClick">步骤条</a-menu-item> -->
                <a-menu-item :key="'/Letter'"><router-link to="Letter">文字</router-link></a-menu-item>
                <a-menu-item :key="'/MoButton'"><router-link to="MoButton">按钮</router-link></a-menu-item>
                <a-menu-item :key="'/Icon'"><router-link to="Icon">图标</router-link></a-menu-item>
                <a-menu-item :key="'/Breadcrumb'"><router-link to="Breadcrumb">面包屑</router-link></a-menu-item>
                <a-menu-item :key="'/Dropdown'"><router-link to="Dropdown">下拉菜单</router-link></a-menu-item>
                <a-menu-item :key="'/Pagination'"><router-link to="Pagination">分页</router-link></a-menu-item>
                <a-menu-item :key="'/Steps'"><router-link to="Steps">步骤条</router-link></a-menu-item>
                <a-menu-item key="8">多选框</a-menu-item>
                <a-menu-item key="9">单选框</a-menu-item>
                <a-menu-item key="10">选择器</a-menu-item>
                <a-menu-item key="11">日期</a-menu-item>
                <a-menu-item key="12">表单</a-menu-item>
                <a-menu-item key="13">输入框</a-menu-item>
                <a-menu-item key="14">开关</a-menu-item>
                <a-menu-item key="15">树</a-menu-item>
                <a-menu-item key="16">穿梭框</a-menu-item>
                <a-menu-item key="17">折叠面板</a-menu-item>
                <a-menu-item key="18">卡片</a-menu-item>
                <a-menu-item key="19">描述列表</a-menu-item>
                <a-menu-item key="20">缺省图</a-menu-item>
                <a-menu-item key="21">气泡提醒</a-menu-item>
                <a-menu-item key="22">标签</a-menu-item>
                <a-menu-item key="23">警告提示</a-menu-item>
                <a-menu-item key="24">抽屉</a-menu-item>
                <a-menu-item key="25">加载中</a-menu-item>
                <a-menu-item key="26">通知提醒</a-menu-item>
                <a-menu-item key="27">页签</a-menu-item>
                <a-menu-item key="28">图标</a-menu-item>
                <a-menu-item key="29">弹框</a-menu-item>
                <a-menu-item key="30">文字提示</a-menu-item>
            </a-sub-menu>
        </a-menu>
    </div>
</template>

<script>
export default {
    data() {
        return {
            rootSubmenuKeys: ['sub1'],
            openKeys: ['sub1'],
            // Navnumber : 1
        };
    },
    // props:[
    //     'number'
    // ],
    methods: {
        onOpenChange(openKeys) {
            const latestOpenKey = openKeys.find(key => this.openKeys.indexOf(key) === -1);
            if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
                this.openKeys = openKeys;
            } else {
                this.openKeys = latestOpenKey ? [latestOpenKey] : [];
            }
        },
        // letterClick(){
        //     this.$router.push('/Letter');
        // },
        // moButtonClick(){
        //     this.$router.push('/MoButton');
        // },
        // iconClick(){
        //     this.$router.push('/Icon')
        // },
        // breadcrumbClick(){
        //     this.$router.push('/Breadcrumb')
        // },
        // dropdownClick(){
        //     this.$router.push('/Dropdown')
        // },
        // pageHeaderClick(){
        //     this.$router.push('/Pagination')
        // },
        // stepsClick(){
        //     this.$router.push('/Steps')
        // }
    },
}
</script>

<style>

.mLeftNav{
    display: inline-block;
    font-size: 18px;
}
</style>
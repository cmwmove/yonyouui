<template>
    <div class="mLeftNav">
        <a-menu mode="inline" :open-keys="openKeys" :selectedKeys="[$route.path]" style="width: 273px;height:1133px;">
            <a-sub-menu key="sub1">
                <span slot="title"><span>组件</span></span>
                <a-menu-item :key="'/Letter'"><router-link to="Letter">文字</router-link></a-menu-item>
                <a-menu-item :key="'/MoButton'"><router-link to="MoButton">按钮</router-link></a-menu-item>
                <a-menu-item :key="'/Icon'"><router-link to="Icon">图标</router-link></a-menu-item>
                <a-menu-item :key="'/Breadcrumb'"><router-link to="Breadcrumb">面包屑</router-link></a-menu-item>
                <a-menu-item :key="'/Dropdown'"><router-link to="Dropdown">下拉菜单</router-link></a-menu-item>
                <a-menu-item :key="'/Pagination'"><router-link to="Pagination">分页</router-link></a-menu-item>
                <a-menu-item :key="'/Steps'"><router-link to="Steps">步骤条</router-link></a-menu-item>
                <a-menu-item key="/Checkbox"><router-link to="Checkbox">多选框</router-link></a-menu-item>
                <a-menu-item key="/RadioButton"><router-link to="RadioButton">单选框</router-link></a-menu-item>
                <a-menu-item key="/Chooser"><router-link to="Chooser">选择器</router-link></a-menu-item>
                <a-menu-item key="/Date"><router-link to="Date">日期</router-link></a-menu-item>
                <a-menu-item key="/Form"><router-link to="Form">表单</router-link></a-menu-item>
                <a-menu-item key="/InputBox"><router-link to="InputBox">输入框</router-link></a-menu-item>
                <a-menu-item key="/Switch"><router-link to="Switch">开关</router-link></a-menu-item>
                <a-menu-item key="/Tree"><router-link to="Tree">树</router-link></a-menu-item>
                <a-menu-item key="/Transfer"><router-link to="Transfer">穿梭框</router-link></a-menu-item>
                <a-menu-item key="/Collapse"><router-link to="Collapse">折叠面板</router-link></a-menu-item>
                <a-menu-item key="/Card"><router-link to="Card">卡片</router-link></a-menu-item>
                <a-menu-item key="/Descriptions"><router-link to="Descriptions">描述列表</router-link></a-menu-item>
                <a-menu-item key="/Empty"><router-link to="Empty">缺省图</router-link></a-menu-item>
                <a-menu-item key="/Popconfirm"><router-link to="Popconfirm">气泡提醒</router-link></a-menu-item>
                <a-menu-item key="/Tag"><router-link to="Tag">标签</router-link></a-menu-item>
                <a-menu-item key="/Alert"><router-link to="Alert">警告提示</router-link></a-menu-item>
                <a-menu-item key="/Drawer"><router-link to="Drawer">抽屉</router-link></a-menu-item>
                <a-menu-item key="/Spin"><router-link to="Spin">加载中</router-link></a-menu-item>
                <a-menu-item key="/Notification"><router-link to="Notification">通知提醒</router-link></a-menu-item>
                <a-menu-item key="/Tabs"><router-link to="Tabs">页签</router-link></a-menu-item>
                <!-- <a-menu-item key="/Chart"><router-link to="Chart">图表</router-link></a-menu-item> -->
                <a-menu-item key="/Popup"><router-link to="Popup">弹框</router-link></a-menu-item>
                <a-menu-item key="/Tooltip"><router-link to="Tooltip">文字提示</router-link></a-menu-item>
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
    height: 90%;
    overflow-y: auto;
    position: fixed;
    left: 0;
    top: 56px;
}
</style>
<template>
    <div class="mLeftNav">
        <a-menu mode="inline" :open-keys="openKeys" style="width: 273px;height:1133px;" @openChange="onOpenChange">
            <a-sub-menu key="sub1">
                <span slot="title"><span>组件</span></span>
                <a-menu-item key="1">按钮</a-menu-item>
                <a-menu-item key="2">按钮</a-menu-item>
                <a-menu-item key="3">设计原则</a-menu-item>
                <a-menu-item key="4">间距</a-menu-item>
                <a-menu-item key="5">对齐</a-menu-item>
                <a-menu-item key="6">对比</a-menu-item>
                <a-menu-item key="7">重复</a-menu-item>
                <a-menu-item key="8">直观</a-menu-item>
                <a-menu-item key="9">弹出</a-menu-item>
                <a-menu-item key="10">过渡动画</a-menu-item>
                <a-menu-item key="11">及时反馈</a-menu-item>
                <a-menu-item key="12">颜色</a-menu-item>
                <a-menu-item key="13">字体</a-menu-item>
                <a-menu-item key="14">图标</a-menu-item>
                <a-menu-item key="15">布局</a-menu-item>
                <a-menu-item key="16">登录页</a-menu-item>
                <a-menu-item key="17">门户首页</a-menu-item>
                <a-menu-item key="18">菜单</a-menu-item>
                <a-menu-item key="19">功能展开</a-menu-item>
                <a-menu-item key="20">门户选项卡</a-menu-item>
                <a-menu-item key="21">政务客服</a-menu-item>
                <a-menu-item key="22">模块</a-menu-item>
            </a-sub-menu>
        </a-menu>
    </div>
</template>

<script>
export default {
    data() {
        return {
        rootSubmenuKeys: ['sub1', 'sub2', 'sub4'],
        openKeys: ['sub1'],
        };
    },
    methods: {
        onOpenChange(openKeys) {
        const latestOpenKey = openKeys.find(key => this.openKeys.indexOf(key) === -1);
        if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            this.openKeys = openKeys;
        } else {
            this.openKeys = latestOpenKey ? [latestOpenKey] : [];
        }
        },
    },
}
</script>

<style>

</style>
<template>
    <div class="gLeftNav">
        <a-menu mode="inline"  :open-keys="openKeys" :selectedKeys="[$route.path]" style="width: 273px;padding-bottom:100px;" @openChange="onOpenChange">
            <a-sub-menu key="sub1">
                <span slot="title"><span>产品设计规范简介</span></span>
                <a-menu-item key="/Introduce"><router-link to="Introduce">介绍</router-link></a-menu-item>
                <a-menu-item key="/DesignValue"><router-link to="DesignValue">设计价值观</router-link></a-menu-item>
                <a-menu-item key="/DesignTenet"><router-link to="DesignTenet">设计原则</router-link></a-menu-item>
            </a-sub-menu>
            <a-sub-menu key="sub2">
                <span slot="title"><span>交互设计原则</span></span>
                <a-menu-item key="/Spacing"><router-link to="Spacing">间距</router-link></a-menu-item>
                <a-menu-item key="/Align"><router-link to="Align">对齐</router-link></a-menu-item>
                <a-menu-item key="/Contrast"><router-link to="Contrast">对比</router-link></a-menu-item>
                <a-menu-item key="/Repeat"><router-link to="Repeat"></router-link>重复</a-menu-item>
                <a-menu-item key="/Visual"><router-link to="Visual"></router-link>直观</a-menu-item>
                <a-menu-item key="/Eject"><router-link to="Eject"></router-link>弹出</a-menu-item>
                <a-menu-item key="/TransitionOn"><router-link to="TransitionOn"></router-link>过渡动画</a-menu-item>
                <a-menu-item key="/ReactionOn"><router-link to="ReactionOn"></router-link>及时反馈</a-menu-item>
                <a-menu-item key="/ButtonName"><router-link to="ButtonName"></router-link>按钮命名</a-menu-item>
            </a-sub-menu>
            <a-sub-menu key="sub3">
                <span slot="title"><span>视觉设计原则</span></span>
                <a-menu-item key="/Color"><router-link to="Color"></router-link>颜色</a-menu-item>
                <a-menu-item key="/Font"><router-link to="Font"></router-link>字体</a-menu-item>
                <a-menu-item key="/IconDesign"><router-link to="IconDesign"></router-link>图标</a-menu-item>
                <a-menu-item key="/Layout"><router-link to="Layout"></router-link>布局</a-menu-item>
            </a-sub-menu>
            <a-sub-menu key="sub4">
                <span slot="title"><span>门户</span></span>
                <a-menu-item key="/LoginPage"><router-link to="LoginPage"></router-link>登录页</a-menu-item>
                <a-menu-item key="/PortalIndex"><router-link to="PortalIndex"></router-link>门户首页</a-menu-item>
                <a-menu-item key="/Menu"><router-link to="Menu"></router-link>菜单</a-menu-item>
                <a-menu-item key="/Function"><router-link to="Function"></router-link>功能展开</a-menu-item>
                <a-menu-item key="/PortalTabs"><router-link to="PortalTabs"></router-link>门户选项卡</a-menu-item>
                <a-menu-item key="/CustomerService"><router-link to="CustomerService"></router-link>政务客服</a-menu-item>
                <a-menu-item key="/Modular"><router-link to="Modular"></router-link>模块</a-menu-item>
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

.gLeftNav{
    /* border-bottom: 1px solid #DDDDDD;
    display: inline-block; */
    display: inline-block;
    font-size: 18px;
    height: 90%;
    overflow-y: auto;
    position: fixed;
    left: 0;
    top: 56px;
}
</style>
<template>
    <div class="rightBox">
        面包屑
        <Changes :title1="title1" :title2="title2" :path1="path1" :path2="path2"></Changes>
    </div>
</template>

<script>
import Changes from '@/components/changes.vue'
export default {
    data(){
        return{
            title1 : '图标',
            title2 : '下拉菜单',
            path1 : '/Icon',
            path2 : '/Dropdown'
        }
    },
    components:{
        Changes
    },
}
</script>

<style>

</style>
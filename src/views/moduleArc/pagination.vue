<template>
    <div class="rightBox">
        分页
        <Changes :title1="title1" :title2="title2" :path1="path1" :path2="path2"></Changes>
    </div>
</template>

<script>
import Changes from '@/components/changes.vue'
export default {
    data(){
        return{
            title1 : '下拉菜单',
            title2 : '步骤条',
            path1 : '/Dropdown',
            path2 : '/Steps'
        }
    },
    components:{
        Changes
    },
}
</script>

<style>

</style>
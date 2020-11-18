<template>
    <div class="rightBox">
        下拉菜单
        <Changes :title1="title1" :title2="title2" :path1="path1" :path2="path2"></Changes>
    </div>
</template>

<script>
import Changes from '@/components/changes.vue'
export default {
    data(){
        return{
            title1 : '面包屑',
            title2 : '分页',
            path1 : '/Breadcrumb',
            path2 : '/Pagination'
        }
    },
    components:{
        Changes
    },
}
</script>

<style>

</style>
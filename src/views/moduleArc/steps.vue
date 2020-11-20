<template>
    <div class="rightBox">
        步骤条
        <Changes :title1="title1" :title2="title2" :path1="path1" :path2="path2" :number="number"></Changes>
    </div>
</template>

<script>
import Changes from '@/components/changes.vue'
export default {
    data(){
        return{
            title1 : '分页',
            title2 : '多选框',
            path1 : '/Pagination',
            path2 : '/Icon',
            number : 7
        }
    },
    components:{
        Changes
    },
}
</script>

<style>

</style>
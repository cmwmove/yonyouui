<template>
    <div class="rightBox">
        <div class="container">

            <h1>描述列表</h1>
            <div class="intrduce">
                <p>成组展示多个只读字段。</p>
            </div>

            <h1 class="margin-top40">何时使用</h1>
            <div class="intrduce ">
                <p>常见于详情页的信息展示。</p>
            </div>

            <h1 class="margin-top40">基本</h1>
            <div class="intrduce margin-top20">
                <p>简单的展示</p>
            </div>
            <div class="margin-top20">
                <div class="desBoxO">
                     <a-descriptions>
                        <a-descriptions-item label="系统名称">
                            系统管理一
                        </a-descriptions-item>
                        <a-descriptions-item label="部门名称">
                            总体调研部
                        </a-descriptions-item>
                        <a-descriptions-item label="项目编码">
                            0000012
                        </a-descriptions-item>
                        <a-descriptions-item label="发表时间">
                            2019-8-18
                        </a-descriptions-item>
                        <a-descriptions-item label="下属单位名称">
                            123
                        </a-descriptions-item>
                        <a-descriptions-item label="项目类别">
                            财政
                        </a-descriptions-item>
                        <a-descriptions-item label="结束时间">
                            2019-8-18
                        </a-descriptions-item>
                        <a-descriptions-item label="人员数量">
                            3214
                        </a-descriptions-item>
                        <a-descriptions-item label="总金额">
                            2,342,987,00
                        </a-descriptions-item>
                        <a-descriptions-item label="说明">
                            尚然居很有较三国性福安市电前景肯定会发货发了收到货
                        </a-descriptions-item>
                    </a-descriptions>
                </div>
            </div>

            <h1 class="margin-top40">带边框的</h1>
            <div class="intrduce margin-top40">
                <p>带边框和背景颜色列表。</p>
            </div>
            <div class="margin-top20 ">
                <div class="desBoxO">
                    <a-descriptions bordered>
                        <a-descriptions-item label="系统名称">
                            系统管理学系统
                        </a-descriptions-item>
                        <a-descriptions-item label="部门名称">
                            总体调研部
                        </a-descriptions-item>
                        <a-descriptions-item label="项目编码">
                            0090909090
                        </a-descriptions-item>
                        <a-descriptions-item label="发表时间">
                            2019-08-18
                        </a-descriptions-item>
                        <a-descriptions-item label="人员数量">
                            2345
                        </a-descriptions-item>
                        <a-descriptions-item label="项目类别">
                            财政
                        </a-descriptions-item>
                        <a-descriptions-item label="表单文字" :span="3">
                            分开哈百度闪付喊吧发生分别从个人爱词霸分页
                        </a-descriptions-item>
                        <!-- <a-descriptions-item label="Negotiated Amount">
                        $80.00
                        </a-descriptions-item> -->
                        <!-- <a-descriptions-item label="Discount">
                        $20.00
                        </a-descriptions-item> -->
                        <!-- <a-descriptions-item label="Official Receipts">
                        $60.00
                        </a-descriptions-item> -->
                        <!-- <a-descriptions-item label="Config Info">
                        Data disk type: MongoDB
                        <br />
                        Database version: 3.4
                        <br />
                        Package: dds.mongo.mid
                        <br />
                        Storage space: 10 GB
                        <br />
                        Replication factor: 3
                        <br />
                        Region: East China 1<br />
                        </a-descriptions-item> -->
                    </a-descriptions>
                </div>
            </div>

            
        </div>
        <Changes :title1="title1" :title2="title2" :path1="path1" :path2="path2" :number="number"></Changes>
    </div>
</template>

<script>
import Changes from '@/components/changes.vue'
export default {
    data(){
        return{
            title1 : '卡片',
            title2 : '缺省图',
            path1 : '/Card',
            path2 : '/Empty',
            number : 18
        }
    },
    components:{
        Changes
    },
}
</script>

<style>
.desBoxO{
    border: 1px solid #dddddd;
    width: 900px;
    /* height: 130px; */
    padding: 20px;
}
</style>
<template>
    <div class="rightBox">
        <div class="container">
            <h1>巧用过渡</h1>
                <div class="intrduce">
                    <p>人脑灰质（Gray Matter）会对动态的事物（eg：移动、形变、色变等）保持敏感。在界面中，适当的加入一些过渡效果，能让界面保持生动，同时也能增强用户和界面的沟通。</p>
                    <p>◆ Adding: 新加入的信息元素应被告知如何使用，从页面转变的信息元素需被重新识别。</p>
                    <p>◆ Receding: 与当前页无关的信息元素应采用适当方式移除。</p>
                    <p>◆ Normal: 指那些从转场开始到结束都没有发生变化的信息元素。</p>
                </div>
                <h1 class="margin-top40">在视图变化时保持上下文</h1>
                <div class="intrduce margin-top20">
                <p>在视图变化时保持上下文</p>
            </div>
                <div class="margin-top20 motion-video-min">
                    <video src="../../assets/img/hrhc.mp4" type="video/mp4" controls="controls" loop style="width: 100%"></video>
                </div>
                <div class="intrduce margin-top20">
                    <p>传送带：可极大地扩展虚拟空间。</p>
                </div>
                <div class="margin-top20 motion-video-min">
                    <video src="../../assets/img/csd.mp4" type="video/mp4" controls="controls" loop style="width: 100%"></video>
                </div>
                <div class="intrduce margin-top20">
                    <p>折叠窗口：在视图切换时，有助于保持上下文，同时也能拓展虚拟空间。</p>
                </div>
                <div class="margin-top20 motion-video-min">
                    <video src="../../assets/img/zd.mp4" type="video/mp4" controls="controls" loop style="width: 100%"></video>
                </div>
                <h1 class="margin-top40">解释刚刚发生了什么</h1>
                <div class="intrduce margin-top20">
                <p>对象增加：在列表/表格中，新增了一个对象。</p>
            </div>
                <div class="margin-top20 motion-video-min">
                    <video src="../../assets/img/dxzj.mp4" type="video/mp4" controls="controls" loop style="width: 100%"></video>
                </div>
                <div class="intrduce margin-top20">
                <p>对象删除：在列表/表格中，删除了一个对象。</p>
            </div>
                <div class="margin-top20 motion-video-min">
                    <video src="../../assets/img/dxsc.mp4" type="video/mp4" controls="controls" loop style="width: 100%"></video>
                </div>
                <div class="intrduce margin-top20">
                    <p>对象更改：在列表/表格中，更改了一个对象。</p>
                </div>
                <div class="margin-top20 motion-video-min">
                    <video src="../../assets/img/dxgg.mp4" type="video/mp4" controls="controls" loop style="width: 100%"></video>
                </div>
                <div class="intrduce margin-top20">
                    <p>对象呼出：点击页面中元素，呼出一个新对象。</p>
                </div>
                <div class="margin-top20 motion-video-min">
                    <video src="../../assets/img/dxhc.mp4" type="video/mp4" controls="controls" loop style="width: 100%"></video>
                </div>
                <h1 class="margin-top40">改善感知性能</h1>
                <div class="intrduce margin-top20">
                    <p>当无法有效提升『实际性能』时，可以考虑适当转移用户的注意力，来缩短某项操作的感知时间，改善感知性能。</p>
                </div>
        </div>
        <Changes :title1="title1" :title2="title2" :path1="path1" :path2="path2"></Changes>
    </div>
</template>

<script>
import Changes from '@/components/changes.vue'
export default {
    data(){
        return{
            title1 : '弹出',
            title2 : '过渡动画',
            path1 : '/Eject',
            path2 : '/ReactionOn'
        }
    },
    components:{
        Changes
    },
}
</script>
<style>
.motion-video-min {
    width: 600px;
    padding: 0 0 70px 20px;
}
</style>
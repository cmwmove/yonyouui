<template>
    <div class="rightBox">
        <div class="container">
            <h1>标签</h1>
            <div class="intrduce">
                <p>进行标记和分类的小标签。</p>
            </div>
            <h1 class="margin-top40">何时使用</h1>
            <div class="intrduce ">
                <p>用于标记事物的属性和维度。进行分类。</p>
            </div>
            <h1 class="margin-top40">标签样式</h1>
            <div class="intrduce margin-top40">
                <p><b>基本标签样式 :</b> </p>
            </div>
            <div class="margin-top20">
                <div class="tagBox">
                    <div>
                        <a-tag>标签1</a-tag>
                        <a-tag><a href="https://github.com/vueComponent/ant-design">标签1</a></a-tag>
                        <a-tag closable @close="log">标签1</a-tag>
                    </div>
                </div>
            </div>
            <div class="intrduce margin-top40">
                <p><b>动态添加/删除样式 : </b> </p>
            </div>
            <div class="margin-top20 ">
                <div class="tagBox">
                    <div>
                        <template v-for="(tag, index) in tags">
                        <a-tooltip v-if="tag.length > 20" :key="tag" :title="tag">
                            <a-tag :key="tag" :closable="index !== 0" @close="() => handleClose(tag)">
                            {{ `${tag.slice(0, 20)}...` }}
                            </a-tag>
                        </a-tooltip>
                        <a-tag v-else :key="tag" :closable="index !== 0" @close="() => handleClose(tag)">
                            {{ tag }}
                        </a-tag>
                        </template>
                        <a-input
                        v-if="inputVisible"
                        ref="input"
                        type="text"
                        size="small"
                        :style="{ width: '78px' }"
                        :value="inputValue"
                        @change="handleInputChange"
                        @blur="handleInputConfirm"
                        @keyup.enter="handleInputConfirm"
                        />
                        <a-tag v-else style="background: #fff; borderStyle: dashed;" @click="showInput">
                        <a-icon type="plus-circle" /> 新标签
                        </a-tag>
                    </div>
                </div>
            </div>
            <div class="intrduce margin-top40">
                <p><b>多彩标签样式 :  </b> </p>
            </div>
            <div class="margin-top20">
                <div class="tagBox">
                    <h4 style="margin-bottom: 16px">
                    Presets:
                    </h4>
                    <div>
                    <a-tag class="tagBlueOne">
                        标签1
                    </a-tag>
                    <a-tag class="tagBlueTwo">
                        标签1
                    </a-tag>
                    <a-tag class="tagorange">
                        标签1
                    </a-tag>
                    <a-tag class="tagred">
                        标签1
                    </a-tag>
                    <a-tag class="taggreen">
                        标签1
                    </a-tag>
                    </div>
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
            title1 : '气泡提醒',
            title2 : '警告提示',
            path1 : '/Popconfirm',
            path2 : '/Alert',
            number : 21,
            tags: ['标签1', '标签2', '标签3'],
            inputVisible: false,
            inputValue: '',
        }
    },
    components:{
        Changes
    },
    methods: {
        log(e) {
            console.log(e);
        },
        handleClose(removedTag) {
            const tags = this.tags.filter(tag => tag !== removedTag);
            console.log(tags);
            this.tags = tags;
        },

        showInput() {
            this.inputVisible = true;
            this.$nextTick(function() {
                this.$refs.input.focus();
            });
        },

        handleInputChange(e) {
            this.inputValue = e.target.value;
        },

        handleInputConfirm() {
            const inputValue = this.inputValue;
            let tags = this.tags;
            if (inputValue && tags.indexOf(inputValue) === -1) {
                tags = [...tags, inputValue];
            }
            console.log(tags);
            Object.assign(this, {
                tags,
                inputVisible: false,
                inputValue: '',
            });
        },
    },
}
</script>

<style>
.tagBox{
    border: 1px solid #dddddd;
    padding: 20px 20px;
    width: 500px;
    /* height: 250px; */
}
</style>
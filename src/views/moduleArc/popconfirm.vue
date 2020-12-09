<template>
    <div class="rightBox">
        <div class="container">
            <h1>气泡提醒</h1>
            <div class="intrduce">
                <p>点击元素，弹出气泡式的确认框。</p>
            </div>
            <h1 class="margin-top40">何时使用</h1>
            <div class="intrduce ">
                <p>当目标元素有进一步的描述和相关操作时，可以收纳到卡片中，根据用户的操作行为进行展现。</p>
                <p>用户可以对浮层上的元素进行操作，因此它可以承载更复杂的内容，比如链接或按钮等。</p>
            </div>
            <h1 class="margin-top40">气泡提醒样式</h1>
            <div class="intrduce margin-top40">
                <p><b>基本气泡样式 :</b> </p>
            </div>
            <div class="margin-top20">
                <div class="popBoxO">
                    <a-popconfirm
                        title="是否确定删除?"
                        @confirm="confirm"
                        @cancel="cancel"
                    >
                        <a-icon slot="icon" />
                        <a href="#">删除</a>
                    </a-popconfirm>
                </div>
            </div>
            <div class="intrduce margin-top40">
                <p><b>icon气泡样式 : </b> </p>
            </div>
            <div class="margin-top20 ">
                <div class="popBoxO">
                    <a-popconfirm
                        title="是否确定删除?"
                        @confirm="confirm"
                        @cancel="cancel"
                    >
                        <a-icon slot="icon" type="question-circle-o" style="color: red" />
                        <a href="#">删除</a>
                    </a-popconfirm>
                </div>
            </div>
            <div class="intrduce margin-top40">
                <p><b>不同方向气泡样式 : </b> </p>
            </div>
            <div class="margin-top20">
                <div class="popBoxT">
                    <div id="components-a-popconfirm-demo-placement">
                        <div :style="{ marginLeft: `${buttonWidth}px`, whiteSpace: 'nowrap' }">
                        <a-popconfirm placement="topLeft" ok-text="Yes" cancel-text="No" @confirm="confirm">
                            <a-icon slot="icon" />
                            <template slot="title">
                            <p>{{ text }}</p>
                            </template>
                            <a-button>上左</a-button>
                        </a-popconfirm>
                        <a-popconfirm placement="top" ok-text="Yes" cancel-text="No" @confirm="confirm">
                            <a-icon slot="icon" />
                            <template slot="title">
                            <p>{{ text }}</p>
                            </template>
                            <a-button>上</a-button>
                        </a-popconfirm>
                        <a-popconfirm placement="topRight" ok-text="Yes" cancel-text="No" @confirm="confirm">
                            <a-icon slot="icon" />
                            <template slot="title">
                            <p>{{ text }}</p>
                            </template>
                            <a-button>上右</a-button>
                        </a-popconfirm>
                        </div>
                        <div :style="{ width: `${buttonWidth}px`, float: 'left' }">
                        <a-popconfirm placement="leftTop" ok-text="Yes" cancel-text="No" @confirm="confirm">
                            <a-icon slot="icon" />
                            <template slot="title">
                            <p>{{ text }}</p>
                            </template>
                            <a-button>左上</a-button>
                        </a-popconfirm>
                        <a-popconfirm placement="left" ok-text="Yes" cancel-text="No" @confirm="confirm">
                            <a-icon slot="icon" />
                            <template slot="title">
                            <p>{{ text }}</p>
                            </template>
                            <a-button>左</a-button>
                        </a-popconfirm>
                        <a-popconfirm placement="leftBottom" ok-text="Yes" cancel-text="No" @confirm="confirm">
                            <a-icon slot="icon" />
                            <template slot="title">
                            <p>{{ text }}</p>
                            </template>
                            <a-button>左下</a-button>
                        </a-popconfirm>
                        </div>
                        <div :style="{ width: `${buttonWidth}px`, marginLeft: `${buttonWidth * 4 + 24}px` }">
                        <a-popconfirm placement="rightTop" ok-text="Yes" cancel-text="No" @confirm="confirm">
                            <a-icon slot="icon" />
                            <template slot="title">
                            <p>{{ text }}</p>
                            </template>
                            <a-button>右上</a-button>
                        </a-popconfirm>
                        <a-popconfirm placement="right" ok-text="Yes" cancel-text="No" @confirm="confirm">
                            <a-icon slot="icon" />
                            <template slot="title">
                            <p>{{ text }}</p>
                            </template>
                            <a-button>右</a-button>
                        </a-popconfirm>
                        <a-popconfirm placement="rightBottom" ok-text="Yes" cancel-text="No" @confirm="confirm">
                            <a-icon slot="icon" />
                            <template slot="title">
                            <p>{{ text }}</p>
                            </template>
                            <a-button>右下</a-button>
                        </a-popconfirm>
                        </div>
                        <div :style="{ marginLeft: `${buttonWidth}px`, clear: 'both', whiteSpace: 'nowrap' }">
                        <a-popconfirm placement="bottomLeft" ok-text="Yes" cancel-text="No" @confirm="confirm">
                            <a-icon slot="icon" />
                            <template slot="title">
                            <p>{{ text }}</p>
                            </template>
                            <a-button>下左</a-button>
                        </a-popconfirm>
                        <a-popconfirm placement="bottom" ok-text="Yes" cancel-text="No" @confirm="confirm">
                            <a-icon slot="icon" />
                            <template slot="title">
                            <p>{{ text }}</p>
                            </template>
                            <a-button>下</a-button>
                        </a-popconfirm>
                        <a-popconfirm placement="bottomRight" ok-text="Yes" cancel-text="No" @confirm="confirm">
                            <a-icon slot="icon" />
                            <template slot="title">
                            <p>{{ text }}</p>
                            </template>
                            <a-button>下右</a-button>
                        </a-popconfirm>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Changes :title1="title1" :title2="title2" :path1="path1" :path2="path2" :number="number"></Changes>
    </div>
</template>

<script>
import Changes from '@/components/changes.vue'
import { message } from 'ant-design-vue';

export default {
    data(){
        return{
            title1 : '缺省图',
            title2 : '标签',
            path1 : '/Empty',
            path2 : '/Tag',
            number : 20,
            buttonWidth: 70,
            text: '是否确定删除?',
        }
    },
    components:{
        Changes
    },
    methods: {
    confirm(e) {
    //   console.log(e);
      this.$message.success('Click on Yes');
    },
    cancel(e) {
    //   console.log(e);
      this.$message.error('Click on No');
    },
  },
}
</script>

<style>
.popBoxO{
    border: 1px solid #dddddd;
    /* width: 271px;
    padding: 124px 0 20px 120px; */
    width: 160px;
    padding: 10px 64px;
}
#components-a-popconfirm-demo-placement .ant-btn {
  width: 70px;
  text-align: center;
  padding: 0;
  margin-right: 8px;
  margin-bottom: 8px;
}

.popBoxT{
    border: 1px solid #dddddd;
    width: 510px;
    padding: 40px 64px;
}
</style>
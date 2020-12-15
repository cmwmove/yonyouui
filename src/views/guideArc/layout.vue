<template>
    <div class="rightBox">
        <div class="container">
             <h1>布局</h1>
                <div class="intrduce">
                    <p>◆ 空间布局是体系化视觉设计的起点，和传统的平面设计的不同之处在于，UI 界面的布局空间要基于『动态、体系化』的角度出发展开。</p>
                    <p>◆ 页面空间规定:页面展示区.不小于页面大小的<b style="color: #ff0000;">2/3</b>。</p>
                    <p class="margin-top20">
                        我们遵从<span class="red">“F型布局”</span>B端框架布局方法,F式布局是可用性较强，且适用范围较广的一种。</p>
                     <p>F式布局的设计基础是用户扫视内容的时候，实现的运动轨迹和字母F相似，而布局匹配这种这种阅读方式可以让用户更快（Fast）地获取信息，因此得名为F式布局</p>
                    <p>用户普遍视觉流程是:</p>
                    <p>   1.从页面左上角开始</p>
                    <p>   2.浏览坐上部分(导航/搜索框….)</p>
                    <p>    3.然后视觉向下移,从左往右</p>
                </div>
                <div class="margin-top20">
                    <img width="566" src="../../assets/img/3-4-1.png">
                </div>
                <div class="intrduce margin-top20">
                    <p>我们浏览内容的方式被训练为从左上角开始水平浏览，回到左侧向下扫视找到兴趣点，继续横向浏览</p>
                </div>
                <div class="margin-top20">
                    <img width="683" src="../../assets/img/3-4-2.png">
                </div>
                <div class="intrduce margin-top20">
                    <p>NNGroup 的眼动跟踪研究证明了这一点，红色的部分是用户感兴趣的区域，黄色的区域次之，不感兴趣的则为蓝色的区域，灰色的区域是用户直接忽略不作停留的部分。</p>
                    <p>显然，用户的浏览过程并不全是分为三个部分，但是它的模式是沿用下来的,“F型布局”更加富有层次感，更容易为用户浏览和获取信息。</p>
                    <p>对于世界范围内绝大多数的国家和地区而言，F式布局是非常符合阅读习惯的。更易于“解决问题”的B端产品核心.</p>
                    <p class="margin-top40">在中后台视觉体系中定义布局系统，我们建议从 5 个方面出发：</p>
                    <p>1. 统一的画板尺寸</p>
                    <p>2. 适配方案</p>
                    <p>3. 网格单位</p>
                    <p>4. 栅格</p>
                    <p>5. 常用模度</p>
                </div>
                <h1 class="margin-top40">1.统一的画板尺寸</h1>
                <div class="margin-top20">
                    <img width="561" src="../../assets/img/3-4-3.png">
                </div>
                <div class="intrduce margin-top20">
                    <p>统一的画板尺寸为 1440 . 据统计，目前PC端用户屏幕分辨率占比排名前三的是1920*1080、1366*768、1440*900，以1440来设计的话，向上适配或者向下适配误差会比较小.一般在整体区域左上角放置产品LOGO及产品名称，系统顶部栏高度<span class="red">50</span>，侧边栏宽度<span class="red">200+8n</span></p>
                </div>
                <h1 class="margin-top40">2.适配方案</h1>
                <div class="margin-top20">
                    <img width="559" src="../../assets/img/3-4-4.png">
                </div>
                <div class="intrduce margin-top20">
                    <p>在设计过程中，设计师还需要建立适配的概念，根据具体情况判断系统是否需要进行适配，以及哪些区块需要考虑动态布局。据统计，使用中台系统的用户的主流分辨率主要为 1920、1440 和 1366，个别系统还存在 1280 的显示设备.</p>
                    <p class="margin-top40">用友政务后台产品设计功能型页面的尺寸统一为1440*900，按照栅格系统原则向上或向下适配； 展示型页面以1440*900为主，三种较为典型的适配方案：</p>
                    <p class="margin-top40">一、左右布局的适配方案</p>
                    <p>常被用于左右布局的设计方案中，常见的做法是将左边的导航栏固定，对右边的工作区域进行动态缩放..</p>
                </div>
                <div class="margin-top20">
                    <img width="817" src="../../assets/img/3-4-5.png">
                </div>
                <div class="intrduce margin-top40">
                <p>二、上下布局的适配方案</p>
                <p>常被用于上下布局的设计方案中，做法是对两边留白区域进行最小值的定义，当留白区域到达限定值之后再对中间的主内容区域进行动态缩放</p>
            </div>
                <div class="margin-top20">
                    <img width="816" src="../../assets/img/3-4-6.png">
                </div>
                <div class="intrduce margin-top40">
                    <p>三、全布局的适配方案</p>
                    <p>常被用于全布局的设计方案中，做法是留出最大工作区域,导航形式做动态处理,交互时为点击显隐,为提高页面友好性,增加超级面包屑控件,再大业务导航需求也可以满足.</p>
                </div>
                <div class="margin-top20">
                    <img width="818" src="../../assets/img/3-4-7.png">
                </div>
                <h1 class="margin-top40">3.网格单位</h1>
                <div class="margin-top20">
                    <img width="534" src="../../assets/img/3-4-8.png">
                </div>
                <div class="intrduce margin-top40">
                    <p>通过网格体系来实现视觉体系的秩序。网格的基数为 8，不仅符合偶数的思路同时能够匹配多数主流的显示设备。通过建立网格的思考方式，还能帮助设计者快速实现布局空间的设计决策同时也能简化设计到开发的沟通损耗</p>
                </div>
                <h1 class="margin-top40">4.关于栅格</h1>
                <div class="intrduce margin-top40">
                    <p>采用 12 栅格体系。栅格系统的使用是为了解决自适应和响应式问题，从而更好地进行产品设计和产品开发。 响应式栅格采用12列栅格体系实现，以满足2，3，4，5，6分比布局等多种情况。固定宽度Column，将间隔Gutter进行动态缩放。需要栅格化处理的内容的总宽度=11列（1列=1宽度Column+1间隔Gutter）+1宽度Column=12宽度Column+11间隔Gutter</p>
                </div>
                <div class="margin-top20">
                    <img width="683" src="../../assets/img/3-4-9.png">
                </div>
                <div class="intrduce margin-top40">
                    <p>对开发者而言栅格是实现动态布局的手段，而设计师对于栅格的理解源自平面设计中的栅格。在具体落地中视角的不同就容易造成偏差，最终影响还原度，继而增加沟通成本</p>
                    <p>
                        通过 4 点来实现设计过程中和工程师的沟通：</p>

                    <p>   1. 清晰的定义动态布局范围</p>
                    <p>   2. 尽量保持偶数思维</p>

                    <p>   3. 关键数据的交付（Gutter、Column）</p>

                    <p>   4. 区块的定义要从Gutter开始到 column 结束
                    </p>
                </div>
                <h1 class="margin-top40">5.常用模度</h1>
                <div class="intrduce margin-top40">
                    <p>用友中后台涵盖了大量的不同类型和量级的产品，为了帮助不同设计能力的设计者们在界面布局上的一致性和韵律感，统一设计到开发的布局语言，减少还原损耗，我们提出了 UI 模度的概念。在大量的实践中，我们提取了一组可以用于 UI 布局空间决策的数组，他们都保持了 8 倍数的原则、具备动态的韵律感。经过验证，可以在一定程度上帮助我们更快更好的实现布局空间上的设计决策。</p>
                    <p>模块和结构之间要以8px为基准，布局间相对间距可采用8px以及8的倍数，但一些小组件(按钮、间隔、输入框 )可以以4为基准。栅格布局是为了辅助设计，灵活运用，不要被它所局限。
                    </p>
                </div>
                <div class="margin-top20">
                    <img width="796" src="../../assets/img/3-4-10.png">
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
            title1 : '图标',
            title2 : '登录页',
            path1 : '/IconDesign',
            path2 : '/LoginPage'
        }
    },
    components:{
        Changes
    },
}
</script>


<template>
    <div class="rightBox">
        <div class="container">
            <h1>树形控件</h1>
            <div class="intrduce">
                <p>多层次的结构列表。</p>
            </div>
            <h1 class="margin-top40">何时使用</h1>
            <div class="intrduce">
                <p>文件夹、组织架构、生物分类、国家地区等等，世间万物的大多数结构都是树形结构。使用 『树控件』 可以完整展现其中的层级关系，并具有展开收起选择等交互功能。</p>
                <p>最简单的用法，展示可勾选，可选中，禁用，默认展开等功能。</p>
            </div>
            <h1 class="margin-top40">基本树</h1>
            <div class="intrduce ">
                <p>最简单的用法，展示可勾选，可选中，禁用，默认展开等功能。</p>
            </div>
            <div class="margin-top40">
                <div class="disFle">
                    <div>
                        <div class="treeBox1">
                            <a-tree
                                checkable
                                :tree-data="treeData"
                                :default-expanded-keys="['0-0-0-0']"
                                :default-checked-keys="['0-0-0-0-1', '0-0-0-0-2','0-1']"
                                :replace-fields="replaceFields"
                            />
                        </div>
                        <div class="boxTitle">带多选的树</div>
                    </div>
                    <div>
                        <div class="treeBox1">
                            <a-tree
                                :tree-data="treeDataS"
                                :default-expanded-keys="['0-0-0-0']"
                            >
                                <span slot="title0010" style="color: #1890ff">sss</span>
                            </a-tree>
                        </div>
                        <div class="boxTitle">不带多选的树</div>
                    </div>
                </div>
            </div>
            <h1 class="margin-top40">可拖动的树</h1>
            <div class="intrduce">
                <p>将节点拖拽到其他节点内部或前后。</p>
                <p>同级节点之间拖拽：将需要调节的节点用鼠标拖动到目标位置，位置处出现蓝色虚线，松开鼠标即可。</p>
                <p>父子节点之间拖拽：将需要调节的节点用鼠标拖动到目标位置，位置处出现浅蓝色背景且前方出现或隐藏父节点箭头图标，松开鼠标即可。</p>
            </div>
            <div class="margin-top20">
                <div class="disFle">
                    <div>
                        <div class="treeBox1">
                            <a-tree
                            class="draggable-tree"
                            :default-expanded-keys="expandedKeys"
                            draggable
                            :tree-data="gData"
                            @dragenter="onDragEnter"
                            @drop="onDrop"
                        />
                        </div>
                        <div class="boxTitle">节点之间拖拽</div>
                    </div>
                    <!-- <div>
                        <div class="treeBox1"></div>
                        <div class="boxTitle">父子节点之间拖拽</div>
                    </div> -->
                </div>
            </div>
            <h1 class="margin-top40">自定义图标的树</h1>
            <div class="intrduce">
                <p>可以针对不同的节点定制图标。</p>
            </div>
            <div class="margin-top20">
                <div class="Box treeBox1">
                    <a-directory-tree multiple default-expand-all @select="onSelect" @expand="onExpand">
                        <a-tree-node key="0-2" title="树形控件一级">
                            <a-tree-node key="0-2-0" title="树形控件二级">
                                <a-tree-node key="0-2-0-0" title="树形控件三级">
                                    <a-tree-node key="0-2-0-0-0" title="树形控件四级" is-leaf />
                                    <a-tree-node key="0-2-0-0-1" title="树形控件四级" is-leaf />
                                    <a-tree-node key="0-2-0-0-2" title="树形控件四级" is-leaf />
                                </a-tree-node>
                            </a-tree-node>
                        </a-tree-node>
                        <a-tree-node key="0-0" title="树形控件一级">
                        <a-tree-node key="0-0-0" title="树形控件二级" is-leaf />
                        <a-tree-node key="0-0-1" title="树形控件二级" is-leaf />
                        </a-tree-node>
                        <a-tree-node key="0-1" title="树形控件一级">
                        </a-tree-node>
                    </a-directory-tree>
                </div>
            </div>
            <h1 class="margin-top40">带搜索的树</h1>
            <div class="margin-top20">
                <div class="treeBox2">
                    <Treefind></Treefind>
                </div>
            </div>
            <h1 class="margin-top40">带标记状态的树</h1>
            <div class="intrduce">
                <p>可以对树的节点进行状态标记。</p>
                <p>比如：已审批或已提交的节点，后面有对勾标识。</p>
            </div>
            <div class="margin-top20">
                <div class="treeBox2">
                    <div>
                        <!-- <div class="treeBox1"> -->
                        <a-tree
                            :tree-data="treeDataS"
                            :default-expanded-keys="['0-0-0-0']"
                        >
                            <span slot="title0010" style="color: #1890ff">sss</span>
                        </a-tree>
                        <!-- </div> -->
                    </div>
                </div>
            </div>
        </div>
        <Changes :title1="title1" :title2="title2" :path1="path1" :path2="path2" :number="number"></Changes>
    </div>
</template>

<script>
import Changes from '@/components/changes.vue'
import Treefind from '@/components/treefind.vue'

// 带多选的树
const treeData = [
  {
    name: '树形控件一级',
    key: '0-0',
    child: [
      {
        name: '树形控件二级',
        key: '0-0-0',
        child: [
          { 
            name: '树形控件三级', 
            key: '0-0-0-0',
            child:[
                {
                    name: '树形控件四级',
                    key: '0-0-0-0-0',
                },
                {
                    name: '树形控件四级',
                    key: '0-0-0-0-1',
                },
                {
                    name: '树形控件四级',
                    key: '0-0-0-0-2',
                },
            ]
        },
        ],
      },
        {
            name: '树形控件二级',
            key: '0-0-1',
        }
    ],
  },
  {
      name: '树形控件一级',
      key: '0-1',
      disabled: true,
      child:[
          {
              name: '树形控件二级',
              key: '0-1-0',
          },
          {
              name: '树形控件二级',
              key: '0-1-1',
          },
          {
              name: '树形控件二级',
              key: '0-1-2',
          },
      ]
  },
  {
      name: "树形控件一级",
      key: '0-2',
      disabled: true,
  }
];
// 不带多选的树
const treeDataS = [
  {
    title: '树形控件一级',
    key: '0-0',
    children: [
      {
        title: '树形控件二级',
        key: '0-0-0',
        // disabled: true,
        children: [
          { 
            title: '树形控件三级',
            key: '0-0-0-0', 
            children:[
                {
                    title:'树形控件四级',
                    key: '0-0-0-0-0',
                },
                {
                    title:'树形控件四级',
                    key: '0-0-0-0-1',
                },
                {
                    title:'树形控件四级',
                    key: '0-0-0-0-2',
                },
            ]
        },
        {
            title: '树形控件二级',
            key: '0-0-1',
        }
        ],
      },
    ],
  },
  {
    title: '树形控件一级',
    key: '0-1',
    disabled: true,
    children: [
        {
            title: '树形控件二级',
            key: '0-1-0'
        },
        {
            title: '树形控件二级',
            key: '0-1-1'
        },
    ]
  },
  {
    title: '树形控件一级',
    key: '0-2',
    disabled: true,
  }
];

// 拖拽的树
const x = 3;
const y = 2;
const z = 1;
const gData = [];

const generateData = (_level, _preKey, _tns) => {
  const preKey = _preKey || '0';
  const tns = _tns || gData;

  const children = [];
  for (let i = 0; i < x; i++) {
    const key = `${preKey}-${i}`;
    tns.push({ title: key, key });
    if (i < y) {
      children.push(key);
    }
  }
  if (_level < 0) {
    return tns;
  }
  const level = _level - 1;
  children.forEach((key, index) => {
    tns[index].children = [];
    return generateData(level, key, tns[index].children);
  });
};
generateData(z);

export default {
    data(){
        return{
            title1 : '开关',
            title2 : '穿梭框',
            path1 : '/Switch',
            path2 : '/Transfer',
            number : 14,
            treeData,
            replaceFields: {
                children: 'child',
                title: 'name',
            },
            treeDataS,
            gData,
            expandedKeys: ['0-0', '0-0-0', '0-0-0-0'],
        }
    },
    components:{
        Changes,
        Treefind
    },
    methods:{
        onDragEnter(info) {
            console.log(info);
            // expandedKeys 需要受控时设置
            // this.expandedKeys = info.expandedKeys
        },
        onDrop(info) {
            console.log(info);
            const dropKey = info.node.eventKey;
            const dragKey = info.dragNode.eventKey;
            const dropPos = info.node.pos.split('-');
            const dropPosition = info.dropPosition - Number(dropPos[dropPos.length - 1]);
            const loop = (data, key, callback) => {
                data.forEach((item, index, arr) => {
                if (item.key === key) {
                    return callback(item, index, arr);
                }
                if (item.children) {
                    return loop(item.children, key, callback);
                }
                });
            };
            const data = [...this.gData];

            // Find dragObject
            let dragObj;
            loop(data, dragKey, (item, index, arr) => {
                arr.splice(index, 1);
                dragObj = item;
            });
            if (!info.dropToGap) {
                // Drop on the content
                loop(data, dropKey, item => {
                item.children = item.children || [];
                // where to insert 示例添加到尾部，可以是随意位置
                item.children.push(dragObj);
                });
            } else if (
                (info.node.children || []).length > 0 && // Has children
                info.node.expanded && // Is expanded
                dropPosition === 1 // On the bottom gap
            ) {
                loop(data, dropKey, item => {
                item.children = item.children || [];
                // where to insert 示例添加到尾部，可以是随意位置
                item.children.unshift(dragObj);
                });
            } else {
                let ar;
                let i;
                loop(data, dropKey, (item, index, arr) => {
                ar = arr;
                i = index;
                });
                if (dropPosition === -1) {
                ar.splice(i, 0, dragObj);
                } else {
                ar.splice(i + 1, 0, dragObj);
                }
            }
            this.gData = data;
        },
        onSelect(keys, event) {
            console.log('Trigger Select', keys, event);
        },
        onExpand() {
            console.log('Trigger Expand');
        },
    },
}

</script>

<style>
.treeBox1{
    /* height: 300px; */
    padding: 20px;
    width: 227px;
    margin-right: 80px;
    border: 1px solid #DDDDDD;
}
.treeBox2{
    padding: 20px;
    width: 274px;
    margin-right: 80px;
    border: 1px solid #DDDDDD;
}
.boxTitle{
    text-align: center;
    width: 227px;
    margin-top: 20px;
}
</style>
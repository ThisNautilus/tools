import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 1.1 vuex状态管理
const store = new Vuex.Store({
    state: {
        userNum: '',
        flag: false, // 该标志用处：当归还工具时，如果归还成功，在使用者数组中剔除该工号，并返回true
        tools: [{
                id: 101,
                name: "扳手",
                model: "M5",
                count: 25,
                using: ['N331']
            },
            {
                id: 102,
                name: "手电钻",
                model: "S12",
                count: 3,
                using: []
            },
            {
                id: 103,
                name: "裁纸刀",
                model: "C15",
                count: 10,
                using: ['N230', 'N189']
            },
            {
                id: 104,
                name: "手电筒",
                model: "L500",
                count: 4,
                using: []
            },
            {
                id: 105,
                name: "卷尺",
                model: "J300",
                count: 5,
                using: ['N521']
            }
        ]
    },
    mutations: {
        decrement(state, id) {
            state.tools.forEach(tool => {
                if (tool.id == id && tool.count > 0 && state.userNum) {
                    tool.count--;
                    tool.using.push(state.userNum);
                }
            })
        },
        increment(state, id) {
            state.tools.forEach(tool => {
                if (tool.using.includes(state.userNum)) {
                    if (tool.id == id) {
                        tool.count++;
                        state.flag = true;
                        tool.using.forEach((num, index) => {
                            if (num == state.userNum) {
                                tool.using.splice(index, 1)
                            }
                        })
                    } else {
                        state.flag = false;
                    }
                }
            })
        },
        getUserNum(state, num) {
            state.userNum = num;
        },
        pushTool(state, newVal) {
            state.tools.push(newVal);
        }
    }
})

// 1.2 导出vuex
export default store
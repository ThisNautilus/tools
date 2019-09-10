import Vue from 'vue'
import Router from 'vue-router'
import ToolsIn from '../components/ToolsIn.vue'
import ToolsOut from '../components/ToolsOut.vue'
import Home from '../components/Home.vue'
import AddTools from '../components/AddTools.vue'
import Login from '../components/Login.vue'
import Reg from '../components/Reg.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
            path: '/in',
            name: 'toolsin',
            component: ToolsIn
        },
        {
            path: '/out',
            name: 'toolsout',
            component: ToolsOut
        },
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/add',
            name: 'addtools',
            component: AddTools
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/reg',
            name: 'reg',
            component: Reg
        }
    ]
})
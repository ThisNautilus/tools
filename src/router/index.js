import Vue from 'vue'
import Router from 'vue-router'
import ToolsIn from '../components/ToolsIn.vue'
import ToolsOut from '../components/ToolsOut.vue'
import Home from '../components/Home.vue'
import AddTools from '../components/AddTools.vue'
import Login from '../components/Login.vue'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [{
            path: '/in',
            name: 'toolsin',
            component: ToolsIn,
            meta: {
                title: "工具归还"
            }
        },
        {
            path: '/out',
            name: 'toolsout',
            component: ToolsOut,
            meta: {
                title: "工具借出"
            }
        },
        {
            path: '/home',
            name: 'home',
            component: Home,
            meta: {
                title: "首页"
            }
        },
        {
            path: '/add',
            name: 'addtools',
            component: AddTools,
            meta: {
                title: "添加工具"
            }
        },
        {
            path: '/login',
            name: 'login',
            component: Login,
            meta: {
                title: "登录"
            }
        }
    ]
});

router.beforeEach((to, from, next) => {
    document.title = to.meta.title;

    if (to.path != '/login') {
        if (!sessionStorage.getItem("loginMessage")) {
            // console.log("登录失败");
            return next('/login');
        }
        // else if (JSON.parse(sessionStorage.getItem("loginMessage")).user == 'admin' && JSON.parse(sessionStorage.getItem("loginMessage")).pw == "admin") {
        //     // console.log(JSON.parse(sessionStorage.getItem("loginMessage")))
        //     // console.log(JSON.parse(sessionStorage.getItem("loginMessage")).user)
        //     // console.log(JSON.parse(sessionStorage.getItem("loginMessage")).pw)
        //     return next('/home');
        // }
    }
    next();
});

export default router;
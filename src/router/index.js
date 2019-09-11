import Vue from 'vue'
import Router from 'vue-router'
import ToolsIn from '../components/ToolsIn.vue'
import ToolsOut from '../components/ToolsOut.vue'
import Home from '../components/Home.vue'
import AddTools from '../components/AddTools.vue'
import Login from '../components/Login.vue'
// import Reg from '../components/Reg.vue'

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
        },
        // {
        //     path: '/reg',
        //     name: 'reg',
        //     component: Reg,
        //     meta: {
        //         title: "注册"
        //     }
        // },
        {
            path: '/',
            redirect: '/login'
        }
    ]
});

router.beforeEach((to, from, next) => {
    document.title = to.meta.title;

    const nextRoute = ['home', 'out', 'in', 'add'];
    // const isLogin = store.state.isLogin;
    const isLogin = router.app.$options.store.state.isLogin;
    //跳转至上述4个页面 
    if (nextRoute.indexOf(to.name) >= 0) {
        //未登录 
        if (!isLogin) {
            router.push({ name: 'login' })
        }
    }
    //已登录的情况再去登录页，跳转至首页 
    if (to.name === 'login') {
        if (isLogin) {
            router.push({ name: 'home' });
        }
    }

    next();
});

export default router;
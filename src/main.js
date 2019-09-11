// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 1.3 vuex状态管理
import store from './store'

Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
    el: '#app',
    // 1.4 vuex状态管理
    store,
    router,
    components: { App },
    template: '<App/>'
})
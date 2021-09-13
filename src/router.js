import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default new VueRouter({
    routes: [{

        // 主页面
        path: '/main',
        component: () => import('./pages/main.vue')

    }, {

        // 默认路由
        path: "/*",
        redirect: 'main'

    }]
});

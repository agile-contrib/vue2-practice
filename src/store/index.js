/**
 * 全局变量
 * this.$store.state.XX
 */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

let userinfo = null;

try {
    userinfo = JSON.parse(localStorage.getItem('userinfo'));
} catch (e) {
    // todo
}

const state = {

    // 用户信息
    userinfo

};


/**
 * 弹框相关
 * ------------------
 */

// 记录当前打开的交易
state.dialogs = [];

// 记录请求
state.loadings = [];

//  打开弹框
state.openDialog = function (id, initdata, callback, noShade) {
    if (typeof callback == 'boolean') {
        noShade = callback;
        callback = undefined;
    }
    state.dialogs.push({
        id: id,
        data: initdata,
        callback: callback,
        shade: noShade || false
    });
};

//  关闭弹框
state.closeDialog = function (data) {
    // 从数组中删除即可关闭
    let will_close_dialog = state.dialogs.pop();

    // 如果有回调，回调
    if (typeof will_close_dialog.callback === "function") {
        will_close_dialog.callback(data);
    }
};

/**
 * 挂载到全局变量中
 */
const store = new Vuex.Store({
    state,
    getters: {

        // 判断用户是否登录
        isLogin: state => {
            return state.userinfo != null;
        },

        // 获取用户信息
        getUserinfo: state => {
            return state.userinfo;
        }

    },
    mutations: {

        // 保存用户信息
        setUserinfo: (state, userinfo) => {
            state.userinfo = userinfo;
            localStorage.setItem('userinfo', JSON.stringify(userinfo));
        }

    }
});

export default store;

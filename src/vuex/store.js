import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import { fetch } from "../utils/fetch.js";

const state = {
    userInfo:{},            // 用户信息
    token: null,            // 用户登录token
    showToast: false,       // 显示提示信息
    toastMsg: '',           // 提示信息
    showAppPopup: true,     // 显示app下载条幅
    hasNewMessage: true,    // 显示消息红点
    allCategories: [],      // 全部分类信息
    showTabIndex: 0,        // 选中的tab索引
    tabNavStyle:{},         // 标签滑块样式
    videoList: [],          // 视频列表
    videoStart: 0,          // 视频开始播放时间
}

const mutations = {
    SHOW_TOAST(state, status){
        state.showToast = status;
    },

    TOAST_MSG(state, str){
        state.toastMsg = str;
    },

    VIDEO_LIST(state, data){
        state.videoList = data;
        localStorage.setItem('videoList',JSON.stringify(data));
    },

    ALL_CATEGORIES(state, data){
        state.allCategories = data;
    },

    SIGN_IN(state, data){
        localStorage.token = data;
        state.token = data;
    },

    SIGN_OUT(state, data){
        localStorage.removeItem('token');
        state.token = null;
    },
}

const actions = {
    showToast({ commit }, status) {
        commit('SHOW_TOAST', status)
    },

    toastMsg({ commit }, str){
        commit('TOAST_MSG', str)
    },

    //获取所有分类信息
    getAllCategories({ commit }){
        fetch("tabnav").then(res => {
            commit('ALL_CATEGORIES', res.data)
        });
    },

    //获取所有分类信息
    getVideo({ commit }){
        fetch("video").then(res => {
            commit('VIDEO_LIST', res.data)
        });
    },
}

const getters = {
    videoList : state => state.videoList
}

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})
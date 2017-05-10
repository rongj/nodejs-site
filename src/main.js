'use strict'
import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './vuex/store'
import routerConfig from './routers'
import { sync } from 'vuex-router-sync'
import filters from './utils/filters'

import VueVideoPlayer from 'vue-video-player'
import VuePreview from 'vue-preview'
Vue.use(VueVideoPlayer)  //视频播放组件
Vue.use(VuePreview)  //图片预览组件组件

//图片预览组件
import imgPreview from './directives/imgPreview.js'
Vue.directive('imgPreview',imgPreview)


import App from './app.vue'


import './assets/scss/common.scss';

Vue.use(VueRouter);



// 实例化Vue的filter
Object.keys(filters).forEach(k => Vue.filter(k, filters[k]));

//实例化VueRouter
const router = new VueRouter({
    mode: 'hash',    //路由的模式
	routes: routerConfig
});
sync(store, router); // 注册store.state.route


// 处理刷新的时候vuex被清空但是用户已经登录的情况
if (window.localStorage.getItem('token')) {
    store.commit('SIGN_IN', window.localStorage.getItem('token'))
}

window.routeList = [];
router.beforeEach((to, from, next) => {
	if(routeList.length > 1 && to.name==routeList[routeList.length-2]['name']){
        router.app.effect='prev';
        routeList.splice(routeList.length-1,1);
        setTimeout(function(){
            next()
        },150);
    }else {
    	router.app.effect='next';
	    routeList.push({
			name : to.name,
			path : to.path,
			query : to.query,
			params : to.params,
			timer: +new Date
		});
		next();
    }

    var noeffects = []
	if((noeffects.indexOf(from.name)>-1 && noeffects.indexOf(to.name)>-1) || !from.name){
		router.app.effect='';
	}
	// 登录中间验证，页面需要登录而没有登录的情况直接跳转登录
    if (to.matched.some(record => record.meta.requireAuth)) {
        if (store.state.token) {
            next();
        } else {
            next({
                path: '/login',
                query: { redirect: to.fullPath }
            });
        }
    } else {
        next();
    }
});

router.afterEach( (to, from, next) => {
    document.title = to.meta.title || '掌上猫扑';

    // var iframe = document.createElement('iframe');
    // iframe.src = '/favicon.ico';
    // iframe.style.display = 'none';
    // iframe.onload = function () {
    //     setTimeout(function () {
    //         document.body.removeChild(iframe);
    //     }, 0);
    // };
    // document.body.appendChild(iframe);

});

// new Vue({
//     el: '#app',
//     router,
//     store,
//     ...App
// })

const app = new Vue({
    router,
    store,
    render: h => h(App)
})

return { app, router, store}
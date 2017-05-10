'use strict';

export default [
    { 
        path: '/test', 
        name: 'test',
        component: resolve => require(['./views/test.vue'], resolve),
        meta: { title:'测试' },
    },
    { 
        path: '/', 
        name: 'home',
        component: resolve => require(['./views/home.vue'], resolve),
        meta: { title:'掌上猫扑' },
    },
    { 
        path: '/feedback', 
        name: 'feedback',
        component: resolve => require(['./views/feedback.vue'], resolve),
        meta: { title:'意见反馈' },
    },
    { 
        path: '/post', 
        name: 'post',
        component: resolve => require(['./views/post.vue'], resolve),
        meta: { title:'发帖', requireAuth: true },
    },
    { 
        path: '/my', 
        name: 'my',
        component: resolve => require(['./views/my.vue'], resolve),
        meta: { title:'个人中心', requireAuth: true },
    },
    { 
        path: '/detail', 
        name: 'detail',
        component: resolve => require(['./views/detail.vue'], resolve),
        meta: { title:'文章详情页' },
    },
    { 
        path: '/videodetail/:id', 
        name: 'videodetail',
        component: resolve => require(['./views/videodetail.vue'], resolve),
        meta: { title:'视频详情页' },
    },
    { 
        path: '/login', 
        name: 'login',
        component: resolve => require(['./views/login.vue'], resolve),
        meta: { title:'登录' },
    },
];
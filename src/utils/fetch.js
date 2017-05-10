import axios from 'axios'
import qs from 'qs'
import * as _ from '../utils/tool'

// axios 配置
axios.defaults.timeout = 5000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
// axios.defaults.baseURL = 'localhost:8080/src/mocks/';
axios.defaults.baseURL = 'http://rapapi.org/mockjsdata/18016/';

//POST传参序列化
axios.interceptors.request.use(
    config => {
        if(config.method  === 'post'){
            config.data = qs.stringify(config.data);
        }
        // if(store.state.token){
        //     config.headers.Authorization = `token ${store.state.token}`;
        // }
        return config;
    },
    error =>{
        _.toast('请求方式错误！');
        return Promise.reject(error);
    }
);

//返回状态判断
axios.interceptors.response.use(
    res => {
        if(res.data.code == 1001){
            _.toast(res.data.msg);
        }
        return res;
    }, 
    error => {
        _.toast('请求超时！');
        return Promise.reject(error);
    }
);

export function fetch(url, params) {
    return new Promise((resolve, reject) => {
        axios.post(url, params)
            .then(response => {
                resolve(response.data);
            }, err => {
                reject(err);
            })
            .catch( error => {
               reject(error)
            })
    })
}
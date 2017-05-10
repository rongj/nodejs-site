"use strict"

/*
* 获取距离 保留2位小数
* @param {string} val 需要截取的文字
*/
exports.distance = (val) => {
    if(val>1000){
    	return (val/1000).toFixed(2)+'km'
    }else if(val==0){
    	return ''
    }else{
        return (val-0).toFixed(2)+'m'
    }
}

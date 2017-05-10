<template>
    <div>
        <img class="preview-img" :src="imgSrc" @load="loadImg" :style="aspectFillWidth ? {width:'100%',height:'auto'} : {width:'auto',height:'100%'}" @click="click">
    </div>
</template>

<script>
    export default {
        props: ['imgSrc'],
        data(){
            return{
                aspectFillWidth: false,  //宽度设置100% 高度切掉
            }
        },
        methods:{
            loadImg(e){
                let nw = e.path[0].naturalWidth, 
                    nh = e.path[0].naturalHeight, 
                    ow = e.path[1].offsetWidth, 
                    oh = e.path[1].offsetHeight;
                this.aspectFillWidth = nw/ow < nh/oh;
            },
            click(){
                this.$emit('click');
            }
        }
    }
</script>

<style lang="scss" scoped>
    div {
        width: 100%;
        height: 100%;
        overflow: hidden;
        position: relative;        
        img {
            height: 100%;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
        }
    }
</style>
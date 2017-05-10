<template>
    <div class="preview clearfix">
        <v-img v-for="(item,index) in imgs" :key="index" :imgSrc="item"  @click="imgPreview($event,index)"></v-img>
    </div>
</template>

<script>
    import img from "../components/img.vue";
    export default {
        props: ['imgs'],
        methods:{
            imgPreview(e,idx){
                const imgEls = document.querySelector(".preview").querySelectorAll('.preview-img');
                const nlist = [];
                console.log(imgEls);
                for (let i = 0; i < imgEls.length; i++) {
                    nlist.push({
                        src : imgEls[i].src,
                        w : imgEls[i].naturalWidth,
                        h : imgEls[i].naturalHeight
                    })
                }
                console.log(this);
                this.$preview.open(idx, nlist);
            }
        },
        components: {
            'v-img': img
        }
    }
</script>

<style lang="scss" scoped>
    .preview{
        > div{
            width: 32%;
            float: left;
            padding-top: 30%;
            margin: 0.3rem 0;
            &:nth-child(3n+2){
                margin: 0.3rem 2%;
            }
        }
    }
</style>
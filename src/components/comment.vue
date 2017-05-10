<template>
    <div class="comment-content">
        <p>{{text}}</p>
        <div class="wrap-imgs">
            <img-preview :imgs="imgs"></img-preview>
        </div>
        <div class="subcomment" v-if="showSubcomment">
            <div class="subcomment-item">
                <a :href="appLink">花花：</a>
                <span>你说的是什么</span>
            </div>
            <div class="subcomment-item">
                <a :href="appLink">花花：</a>
                <span>你说的是什么</span>
            </div>
            <a :href="appLink">查看100条评论</a>
        </div>
    </div>
</template>

<script>
    import imgPreview from './imgPreview.vue';
    export default {
        props: {
            text: {
                type: String,
                required: true
            },
            imgs: {
                type: Array,
            },
            showSubcomment:{
                type: Boolean,
                default: false
            },
            subcomment: {
                type: Array,
            },
            appLink:{
                type: String,
            }
        },
        components:{
            imgPreview
        }
    }
</script>

<style lang="scss" scoped>
    .comment-content{
        margin-left: 3rem;
        padding-bottom: 1.2rem;
        margin-right: -1.2rem;
        padding-right: 1.2rem;
        border-bottom: 1px solid #eaeaea;
        font-size: 1.5rem;
        p{
            margin-bottom: 0.6rem;
        }
    }
    .subcomment{
        color: #888;
        font-size: 1.3rem;
        line-height: 2;
        a{
            color: #81a0e2;
        }
    }
</style>
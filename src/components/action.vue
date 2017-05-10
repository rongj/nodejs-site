<template>
    <div class="video-actions">
        <span @click="praise"></span>
        <span>{{supporter}}</span>
        <span @click="trample"></span>
    </div>
</template>

<script>
    export default {
        props: {
            supporter: {
                type: Number,
                required: true
            }
        },

        methods:{
            praise(){
                this.$emit('praise');
            },
            trample(){
                this.$emit('trample');
            },
        }
    }
</script>

<style lang="scss" scoped>
    .video-actions{
        float: right;
        font-size: 1.2rem;
        color: #888;
        line-height: 2rem;
        span{
            display: inline-block;
            height: 2rem;
            vertical-align: middle;
        }
        span:first-child{
            width: 2rem;
            background: url('../assets/images/zan.png') no-repeat 50% 50% / auto 1.5rem;
            margin-right: 0.3rem;
        }
        span:last-child{
            width: 2rem;
            background: url('../assets/images/cai.png') no-repeat 50% 50% / auto 1.5rem;
            margin-left: 0.3rem;
        }
    }
</style>
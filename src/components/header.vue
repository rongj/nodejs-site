<template>
    <div class="phone-header clearfix">
        <router-link to="/" class="logo">
            <img src="../assets/images/logo.png">
        </router-link>
        <div class="header-btns">
            <span class="btn-message" @click="showMessage"><i v-show="hasNewMessage"></i></span>
            <router-link class="btn-feedback" to="feedback"></router-link>
            <router-link class="btn-post" to="post"></router-link>
            <router-link class="btn-my" to="my"></router-link>
        </div>
        <div class="message" v-show="show">
            <div class="mask"></div>
            <div class="message-wrap">
                <div class="message-top">
                    <span @click="hideMessage"></span>
                </div>
                <div class="message-bottom">
                    <h2>您的猫扑快讯已经到达</h2>
                    <a :href="messageLink">拆开看看</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    export default {
        props: {
            messageLink: {
                type: String,
            }
        },
        data(){
            return{
                show: false
            }
        },
        computed: {
            ...mapState(['hasNewMessage'])
        },
        methods:{
            showMessage(){
                this.show = true;
                this.$store.state.hasNewMessage = false;
            },
            hideMessage(){
                this.show = false;
            }
        }
    }
</script>

<style lang="scss" scoped>
    .phone-header{
        .logo{
            float: left;
            img{
                height: 2.6rem;
            }
        }
        .header-btns{
            float: right;
            margin-top: 0.7rem;
            > span,a{
                display: block;
                float: left;
                width: 3rem;
                height: 2.6rem;
            }
        }
    }
    .btn-message{
        position: relative;
        background: url(../assets/images/message.png) no-repeat 50% 50% / 60% auto;
        i{
            display: block;
            width: 0.5rem;
            height: 0.5rem;
            position: absolute;
            right: 0.4rem;
            top: 0.5rem;
            border-radius: 100%;
            background: #f00;
        }
    }
    .btn-feedback{
        background: url(../assets/images/feedback.png) no-repeat 50% 50% / 60% auto;
    }
    .btn-post{
        background: url(../assets/images/search.png) no-repeat 50% 50% / 60% auto;
    }
    .btn-my{
        background: url(../assets/images/search.png) no-repeat 50% 50% / 60% auto;
    }
    .message {
        z-index: 100;
        width: 100%;
        height: 100%;
        overflow: hidden;
        .message-wrap {
            position: fixed;
            width: 92%;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            border-radius: 6px;
            background: #fff;
            overflow: hidden;
            z-index: 102;
        }
        .mask {
            position: fixed;
            width: 100%;
            margin: 0 auto;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            z-index: 101;
            background: rgba(0,0,0,.3);
        }
    }
    .message-top{
        width: 100%;
        height: 10rem;
        background: #3d92f5 url('../assets/images/msg.png') no-repeat 50% 100% / auto 8.6rem;
        position: relative;
        span{
            display: block;
            width: 3rem;
            height: 3rem;
            background: url('../assets/images/close2.png') no-repeat 50% 50% / 40% auto;
            position: absolute;
            right: 0.4rem;
            top:0.4rem;
        }
    }
    .message-bottom{
        width: 100%;
        text-align: center;
        padding: 2rem 1rem 1rem;
        h2{
            font-size: 2rem;
            line-height: 1.5;
        }
        a{
            font-size: 1.6rem;
            color: #7e98c6;
        }
    }
</style>
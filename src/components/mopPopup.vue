<template>
    <div class="phone-footer mop-popup" v-if="showAppPopup">
        <div class="mop-info">
            <img src="../assets/images/logo2.png" alt="猫扑">
            <div>
                <h3>猫扑</h3>
                <h4>爱生活，上猫扑</h4>
            </div>
        </div>
        <span class="mop-close" @click="close"></span>
        <a class="mop-btn" :href="link">下载APP</a>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    export default {
        props: {
            link: {
                type: String,
                required: true
            }
        },
        computed: {
            ...mapState(['showAppPopup'])
        },
        methods:{
            close(){
                this.$store.state.showAppPopup = false;
            }
        }
    }
</script>

<style lang="scss" scoped>
    .mop-popup{
        padding: 0.5rem 0.5rem 0.5rem 1.2rem;
        overflow: hidden;
        border: none;
        .mop-info{
            float: left;
            overflow: hidden;
            img{
                float: left;
                height: 4rem;
                margin-right: 0.5rem;
            }
            div{
                float: left;
                h3{
                    font-size: 1.6rem;
                    color: #3e3e3e;
                    margin-top: 0.2rem;
                }
                h4{
                    font-size: 1.15rem;
                    color: #848484;
                }
            }
        }
        .mop-close{
            float: right;
            display: block;
            width: 3rem;
            height: 4rem;
            background: url('../assets/images/close.png') no-repeat 50% 50% / 40% auto;
        }
        .mop-btn{
            float: right;
            display: block;
            padding: 0 1.5rem;
            border-radius: 6px;
            height: 3.6rem;
            line-height: 3.6rem;
            margin-top: 0.2rem;
            background: #ffce50;
            color: #1d2230;
            font-size: 1.5rem;
        }
    }
</style>
<template>
    <div class="phone-wrap">
        <div class="phone-header clearfix">
            登录界面
        </div>
        <button @click="login" style="padding:1rem 0;">登录</button>
    </div>    
</template>
<script>
    export default {
        methods: {
            login(){
                this.$store.state.userInfo = Object.assign({},{userId:10});
                this.$store.commit('SIGN_IN', 10);
                let redirect = this.$route.query.redirect || '/';
                this.$router.replace({ path: redirect })
            }
        }
    }
</script>
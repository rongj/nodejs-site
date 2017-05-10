<template>
    <div class="phone-header header-back">
        <a class="back" @click="goBack"></a>
        <h2>{{title}}</h2>
    </div>
</template>

<script>
    export default {
        props: {
            title: {
                type: String,
                required: true
            }
        },

        methods:{
            goBack(){
                this.$router.back();
            }
        }
    }
</script>

<style lang="scss" scoped>
    .header-back{
        text-indent: 2rem;
        .back{
            position: absolute;
            left: 0.5rem;
            top: 0.5rem;
            display: block;
            width: 2.4rem;
            height: 3rem;
            background: url('../assets/images/vback.png') no-repeat 50% 50% / 1.7rem auto;
        }
        h2{
            font-size: 1.6rem;
            color: #666;
        }
    }
</style>
<template>
    <div class="toast">
        <div class="mask"></div>
        <div class="toast-wrap">
            <div class="text">
                {{toastMsg}}
            </div>
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    export default {
        computed: {
            ...mapState(['toastMsg'])
        }
    }
</script>

<style lang="scss" scoped>

.toast {
    z-index: 100;
    .toast-wrap {
        position: fixed;
        width: 14rem;
        padding: 1rem;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        border-radius: 4px;
        background: rgba(0,0,0,0.7);
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        z-index: 1002;
        .text {
            font-size: 1.4rem;
            color: #fff;
        }
    }
    .mask {
        position: fixed;
	    width: 100%;
	    margin: 0 auto;
	    top: 0;
	    left: 0;
	    bottom: 0;
	    right: 0;
	    z-index: 1001;
	    // background: rgba(0,0,0,.6);
    }
}
</style>
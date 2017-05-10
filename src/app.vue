<template>
    <div id="app">
        <!-- <transition :name="$router.app.effect"> -->
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        <!-- </transition> -->
        <mop-popup link="http://a.app.qq.com/o/simple.jsp?pkgname=com.mop.activity"></mop-popup>
        <v-toast v-show="showToast"></v-toast>
    </div>
</template>
<script>
    import mopPopup from "./components/mopPopup.vue";
    import toast from './components/toast.vue'
    import { mapState } from 'vuex';
    export default {
        computed:{
            ...mapState(['showToast'])
        },
        components: {
            'mop-popup': mopPopup,
            'v-toast': toast,
        } 
    }
</script>
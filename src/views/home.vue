<template>
    <div class="phone-wrap">
        <v-header messageLink="http://a.app.qq.com/o/simple.jsp?pkgname=com.mop.activity"></v-header>
        <tab-nav :tabtitles="allCategories" :currentTab="showTabIndex" @showAdd="showAddChannel"></tab-nav>
        <div class="phone-body">
            <!-- <div class="tabs-content" :style="'transform:translate3d('+swiperX+'px,0,0);-webkit-transform:translate3d('+swiperX+'px,0,0);margin-left: '+marginX+'px'" @touchstart="tabSwiperStart($event)" @touchmove="tabSwiperMove($event)" @touchend="tabSwiperEnd($event)"> -->
                <div class="tabs-panel" @touchstart="pullDownStart($event)" @touchmove="pullDownMove($event)" @touchend="pullDownEnd($event)" :style="'transform:translate3d(0,'+swiperY+'px,0);-webkit-transform:translate3d(0,'+swiperY+'px,0);'">
                    <div class="list-refresh">{{pullText}}</div>
                    <ul class="list-wrap" v-if="showTabIndex == 1">
                        <li class="item item-video" v-for="item in videoList" @click="goToVideoDetail(item.id)">
                            <div class="item-poster">
                                <v-img class="avator" imgSrc="http://i3.mopimg.cn/head/32049568/100x100?191"></v-img>
                                <h3>听说有人说我帅</h3>
                            </div>
                            <h2 class="item-title">iOS端微信公众平台赞赏功能关闭 或推进付费阅读提前到来</h2>
                            <div class="row-video">
                                <v-video>
                                    <video-player :ref="item.id"
                                        :options="Object.assign({},{ preload: false,sources:[{type:'video/mp4', src: item.url}], poster: item.videoThum })"
                                        @play="onPlayerPlay($event)"
                                        @timeupdate="onPlayerTimeupdate($event)"
                                        >
                                    </video-player>   
                                </v-video>
                                <div class="video-info">
                                    <span class="post-tag">看世界</span>
                                    <v-action :supporter="555"></v-action>
                                </div>
                                <div class="video-comment">
                                    <em>神</em>
                                    <a href="">我是一只大大鹏：</a>
                                    <span>这个poster 封面，怎么能如果我给就给我用的，我不给，他截取视频的首页。</span>
                                </div>
                                <div class="video-info">
                                    <div class="video-count">
                                        <span class="video-share">234</span>
                                        <span class="video-comments">98</span>
                                    </div>
                                    <v-action :supporter="555"></v-action>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <ul class="list-wrap" v-else>
                        <li class="item item-pic" @click="goToDetail()">
                            <h2>iOS端微信公众平台赞赏功能关闭 或推进付费阅读提前到来</h2>
                            <div class="single-pic">
                                <v-img imgSrc="http://i1.mopimg.cn/img/tt/2016-07/1352/20160729091734146.jpeg790x600.jpeg"></v-img>
                            </div>
                            <div class="item-info">
                                <span>51分钟前</span>
                                <span>大王叫我来巡山</span>
                                <span>365评论</span>
                            </div>
                        </li>
                        <li class="item item-pics" @click="goToDetail()">
                            <h2>iOS端微信公众平台赞赏功能关闭 或推进付费阅读提前到来</h2>
                            <div class="row-pics clearfix">
                                <v-img imgSrc="http://image.uczzd.cn/4800593775360924427.jpeg?id=0&height=200&width=266"></v-img>
                                <v-img imgSrc="http://image.uczzd.cn/4800593775360924427.jpeg?id=0&height=200&width=266"></v-img>
                                <v-img imgSrc="http://image.uczzd.cn/4800593775360924427.jpeg?id=0&height=200&width=266"></v-img>
                            </div>
                            <div class="item-info">
                                <span>51分钟前</span>
                                <span>大王叫我来巡山</span>
                                <span>365评论</span>
                            </div>
                        </li>
                        <li class="item item-pic" @click="goToDetail()">
                            <h2>iOS端微信公众平台赞赏功能关闭 或推进付费阅读提前到来</h2>
                            <div class="single-pic">
                                <v-img imgSrc="http://i1.mopimg.cn/img/tt/2016-07/1352/20160729091734146.jpeg790x600.jpeg"></v-img>
                            </div>
                            <div class="item-info">
                                <span>51分钟前</span>
                                <span>大王叫我来巡山</span>
                                <span>365评论</span>
                            </div>
                        </li>
                        <li class="item item-pics" @click="goToDetail()">
                            <h2>iOS端微信公众平台赞赏功能关闭 或推进付费阅读提前到来</h2>
                            <div class="row-pics clearfix">
                                <v-img imgSrc="http://image.uczzd.cn/4800593775360924427.jpeg?id=0&height=200&width=266"></v-img>
                                <v-img imgSrc="http://image.uczzd.cn/4800593775360924427.jpeg?id=0&height=200&width=266"></v-img>
                                <v-img imgSrc="http://image.uczzd.cn/4800593775360924427.jpeg?id=0&height=200&width=266"></v-img>
                            </div>
                            <div class="item-info">
                                <span>51分钟前</span>
                                <span>大王叫我来巡山</span>
                                <span>365评论</span>
                            </div>
                        </li>
                        <li class="item item-pic" @click="goToDetail()">
                            <h2>iOS端微信公众平台赞赏功能关闭 或推进付费阅读提前到来</h2>
                            <div class="single-pic">
                                <v-img imgSrc="http://i1.mopimg.cn/img/tt/2016-07/1352/20160729091734146.jpeg790x600.jpeg"></v-img>
                            </div>
                            <div class="item-info">
                                <span>51分钟前</span>
                                <span>大王叫我来巡山</span>
                                <span>365评论</span>
                            </div>
                        </li>
                        <li class="item item-pics" @click="goToDetail()">
                            <h2>iOS端微信公众平台赞赏功能关闭 或推进付费阅读提前到来</h2>
                            <div class="row-pics clearfix">
                                <v-img imgSrc="http://image.uczzd.cn/4800593775360924427.jpeg?id=0&height=200&width=266"></v-img>
                                <v-img imgSrc="http://image.uczzd.cn/4800593775360924427.jpeg?id=0&height=200&width=266"></v-img>
                                <v-img imgSrc="http://image.uczzd.cn/4800593775360924427.jpeg?id=0&height=200&width=266"></v-img>
                            </div>
                            <div class="item-info">
                                <span>51分钟前</span>
                                <span>大王叫我来巡山</span>
                                <span>365评论</span>
                            </div>
                        </li>
                    </ul>
                    <!-- <div class="list-loadingmore">加载中...</div> -->
                </div>
            <!-- </div> -->

        </div>
        <div class="add-channel" v-show="showChannel">
            <div class="channel-header">
                <h2>频道管理</h2>
                <span @click="hideAddChannel"></span>
            </div>
            <div class="channel-manage">
                <div class="channel-info">
                    <h3>我的频道</h3>
                    <span>点击取消订阅</span>
                </div>
                <div class="channel-list">
                    <ul class="clearfix">
                        <li class="active">推荐</li>
                        <li class="active">推荐</li>
                        <li class="active">推荐推荐</li>
                        <li class="active">推荐</li>
                        <li class="active">推荐</li>
                        <li class="active">推荐</li>
                        <li class="active">推荐</li>
                        <li class="active">推荐</li>
                    </ul>
                </div>
                <a href="" class="add">
                    <img src="../assets/images/ad_02.jpg" width="100%" alt="">
                </a>
                <div class="channel-info">
                    <h3>更多频道</h3>
                    <span>点击订阅频道</span>
                </div>
                <div class="channel-list">
                    <ul class="clearfix">
                        <li>推荐</li>
                        <li>推荐</li>
                        <li>推荐</li>
                        <li>推荐</li>
                        <li>推荐</li>
                        <li>推荐</li>
                        <li>推荐</li>
                        <li>推荐</li>
                        <li>推荐</li>
                        <li>推荐</li>
                    </ul>
                </div>
            </div>
        </div>
        <mop-popup link="http://a.app.qq.com/o/simple.jsp?pkgname=com.mop.activity"></mop-popup>
    </div>    
</template>
<script>
    import header from "../components/header.vue";
    import tabs from "../components/tabs.vue";
    import video from "../components/video.vue";
    import mopPopup from "../components/mopPopup.vue";
    import img from "../components/img.vue";
    import action from "../components/action.vue";


    import { fetch } from "../utils/fetch.js";

    import { mapState, mapGetters } from 'vuex';

    export default {
        data(){
            return{
                showChannel: false,
                // swiperX: 0,
                // marginX: 0,
                // swiperStartX: null,
                // swiperStartY: null,
                // pullY: 0,
                swiperY: 0,
                pullStartX: null,
                pullStartY: null,
                pullText: '下拉刷新',
                ispull: false,
                canpull: false,

                showMask: true,
                
            }
        },
        // beforeRouteEnter(to,from,next){
        //     next();
        //     if(from.name === 'detail'){
        //         this.$nextTick(()=> console.log(document.querySelector(".phone-body")) );

        //     }
        // },
        beforeRouteLeave(to,from,next){
            if(to.name === 'detail' || to.name === 'videodetail' || to.name === 'feedback'){
                sessionStorage.setItem('scrollTop'+this.$store.state.showTabIndex,document.querySelector(".phone-body").scrollTop);
            }
            next();
        },
        created(){
            this.$store.dispatch('getAllCategories');
            this.$store.dispatch('getVideo');
        },
        mounted(){
            this.fetchDemo();
            // this.$nextTick(()=>document.querySelector(".phone-body").scrollTop = sessionStorage.getItem('scrollTop'+this.$store.state.showTabIndex))
            // this.$nextTick( () => document.querySelector(".phone-body").scrollTop = 200+'px' );
        },
        computed:{
            ...mapState(['allCategories', 'showTabIndex', 'videoList']),
        },
        watch:{
            $route: function(to,from){
                if(to.name === 'home'){
                    let scrollTop = sessionStorage.getItem('scrollTop'+this.$store.state.showTabIndex);
                    if (scrollTop) {
                        this.$nextTick( () => 
                            document.querySelector(".phone-body").scrollTop = scrollTop
                        );
                    }
                }
            }
        },
        methods:{
            onPlayerPlay(player){
                if(this.lastPlayer && this.lastPlayer != player){
                    this.lastPlayer.pause();
                }
                if(this.lastPlayer != player){
                    this.lastPlayer = player;
                }
            },
            fetchDemo(){
                // fetch("tabnav").then(res => console.log(res));
            },
            onPlayerTimeupdate(player){
                if(player.el_.parentNode.parentNode.offsetTop - document.querySelector('.phone-body').scrollTop < -player.el_.offsetHeight/2){
                    player.pause();
                }
            },

            //滑动切换选项卡
            // tabSwiperStart(e){
            //     this.swiperStartX = e.touches[0].pageX;
            //     this.swiperStartY = e.touches[0].pageY;
            // },
            // tabSwiperMove(e){
            //     if(Math.abs(e.touches[0].pageX - this.swiperStartX)>Math.abs(e.touches[0].pageY - this.swiperStartY) && Math.abs(e.touches[0].pageY - this.swiperStartY)<20){
            //         this.marginX = e.touches[0].pageX - this.swiperStartX;
            //     }
            // },
            // tabSwiperEnd(e){
            //     let index = this.$store.state.showTabIndex;
            //     if(this.marginX < -60 && index<9){
            //         this.$store.state.showTabIndex = index + 1;
            //     }else if(this.marginX > 60 && index>0){
            //         this.$store.state.showTabIndex = index - 1;
            //     }

            //     this.scrollTab(this.$store.state.showTabIndex);
            //     this.marginX  = 0;
            // },

            // 下拉刷新
            pullDownStart(e){
                const scrollEle = document.querySelector(".phone-body");
                if(scrollEle.scrollTop <= 0 && !this.ispull){  
                    this.ispull = true;              
                    this.canpull = true;              
                    this.pullText = '下拉刷新';
                    this.pullStartX = e.touches[0].pageX;
                    this.pullStartY = e.touches[0].pageY;
                }
                return false;
            },
            pullDownMove(e){
                const scrollEle = document.querySelector(".phone-body");
                if(scrollEle.scrollTop <= 0 && this.canpull){    
                    let disY = e.touches[0].pageY - this.pullStartY;
                    let disX = e.touches[0].pageX - this.pullStartX;
                    if( disY > 0 && Math.abs(disX) < 20 && disY < 300){
                        e.preventDefault();
                        this.swiperY = disY;
                    }
                    if(this.swiperY > 60){
                        this.pullText = '松开开始刷新';
                    }
                }
            },
            pullDownEnd(e){
                if(this.canpull){
                    this.canpull = false;
                    if(this.swiperY > 60){
                        this.swiperY = 40;
                        this.pullText = '刷新中';
                        document.querySelector(".phone-body").addEventListener("scroll",false);
                        //重新获取数据
                        setTimeout(()=>{
                            this.pullText = '更新数据完成！';
                            this.ispull = false;
                            this.swiperY = 0;
                        },2000)
                    }else{
                        this.swiperY = 0;
                        this.ispull = false;
                    }
                }
            },


            //弹出频道管理添加历史记录
            stateHandle: function() {
                history.pushState('show-channel', '');
                this.hideAddChannel();
            },

            //显示频道管理
            showAddChannel(b){
                if(!this.showChannel) {
                    history.pushState('show-channel', '');
                    window.addEventListener('popstate', this.stateHandle);
                }
                this.showChannel = true;
            },

            //隐藏频道管理
            hideAddChannel(){
                if(this.showChannel) {
                    history.back();
                    window.removeEventListener('popstate', this.stateHandle);
                }else{
                    return;
                }
                this.showChannel = false;
            },

            //跳转到详情页
            goToDetail(){
                this.$router.push('/detail');
            },
            goToVideoDetail(id){
                this.$store.state.videoStart = this.$refs[id][0].player.currentTime();
                this.$router.push('/videodetail/'+id);
            },
        },
        components: {
            'v-header': header,
            'tab-nav' : tabs,
            'mop-popup': mopPopup,
            'v-img': img,
            'v-video': video,
            'v-action': action
        }

    }
</script>
<style lang="scss">
    // .tabs-wrap{        
    //     overflow: hidden;
    //     position: relative;
    //     .tabs-content{
    //         display: flex;
    //         display: inline-flex;
    //         width: 100%;
    //         height: 100%;
    //         transition: all 0.2s;
    //         flex-direction: row;
    //     }
    //     .tabs-panel{
    //         overflow-x: hidden;
    //         flex-shrink: 0;
    //         width: 100%;
    //     }
    // }

    .tabs-panel{
        position: relative;
        transition: all 0.3s;
        .list-refresh{
            position: absolute;
            width: 100%;
            height: 40px;
            background: #ffce50;
            text-align: center;
            line-height: 40px;
            top: -40px;
        }
        .list-loadingmore{
            height: 40px;
            text-align: center;
            line-height: 40px;
        }
    }

    .list-wrap .item{
        padding: 1rem  1.2rem;
        border-bottom: 1px solid #eaeaea;
    }
    .item-info{
        font-size: 1.1rem;
        color: #888;
        line-height: 1.8rem;
        span{
            white-space: nowrap;
            &:after{
                content: '·';
                font-size: 3rem;
                margin: 0 0.4rem;
                color: #c9c9c9;
                display: inline-block;
                vertical-align: -0.5rem;
            }
            &:last-child:after{
                display:none;
            }
        }
    }
    .list-wrap .item-pic{
        padding-right: 33.33%;
        min-height: 10rem;
        min-height: calc( (100vw / 37.5) * 8 + 2rem);
        position: relative;
        h2{
            font-size: 1.6rem;
            padding-right: 1rem;
            overflow : hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
        }
        .single-pic{
            position: absolute;
            top: 1rem;
            right: 1.2rem;
            width: 30%;
            padding-top: 21.5%;
            > div{
                position: absolute;
                top: 0;
                // height: 8rem;
                // height: calc( (100vw / 37.5) * 8 );
            }
        }
        .item-info{
            max-width: 66.66%;
            position: absolute;
            bottom: 1rem;
            left: 1.2rem;;
            line-height: 1.2rem;
        }
    }
    .list-wrap .item-pics{
        h2{
            font-size: 1.6rem;
            overflow : hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            margin-bottom: 0.6rem;
        }
        .row-pics{
            margin: 0.4rem 0;
            > div{
                width: 32%;
                float: left;
                padding-top: 25%;
                margin: 0.3rem 0;
                &:nth-child(3n+2){
                    margin: 0.3rem 2%;
                }
            }
        }
    }
    .item-poster{
        overflow: hidden;
        margin-bottom: 0.6rem;
        .avator{
            display: inline-block;
            width: 3rem;
            height: 3rem;
            overflow: hidden;
            position: relative;
            border-radius: 50%;
            vertical-align: middle;
        }
        h3{
            display: inline;
            vertical-align: middle;
            font-size: 1.3rem;
            color: #666;
        }
    }
    .list-wrap .item-video{
        .item-title{
            font-size: 1.6rem;
            overflow : hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            margin-bottom: 0.6rem;
        }
    }

    .video-comment{
        padding: 0.6rem 0.6rem 0;
        font-size: 1.3rem;
        em{
            background: #ffce50;
            padding: 0.1rem 0.4rem;
            border-radius: 3px;
        }
        a{
            color: #7d97c6;
        }
    }
    .post-tag{
        display: inline-block;
        padding: 0 1rem;
        height: 2rem;
        line-height: 2rem;
        background: #8acfe5;
        color: #fff;
        font-size: 1.2rem;
        border-radius: 3px;
    }
    .video-info{
        margin-top: 0.6rem;
        overflow: hidden;
        .post-tag{
            float: left;
        }
        .video-count{
            float: left;
            span{
                margin-right: 1.5rem;
                font-size: 1.2rem;
                color: #888;
                line-height: 2rem;
                padding-left: 2rem;
            }
            .video-share{
                background: url('../assets/images/share.png') no-repeat 0 40% / auto 1.5rem;
            }
            .video-comments{
                background: url('../assets/images/com.png') no-repeat 0 40% / auto 1.5rem;
            }
        }
    }

    .add-channel{
        position: absolute;
        z-index: 100;
        width: 100%;
        top: 4rem;
        bottom: 0;
        overflow: auto;
        background: #fff;
        .channel-header{
            overflow: hidden;
            padding: 0.5rem 1.2rem;
            height: 4rem;
            line-height: 3rem;
            border-bottom: 1px solid #eaeaea;
            h2{
                float: left;
                font-size: 1.4rem;
                color: #888;
            }
            span{
                float: right;
                display: block;
                width: 3rem;
                height: 3rem;
                margin-right: -0.4rem;
                background: url('../assets/images/close3.png') no-repeat 50% 50% / 50% auto;
            }
        }
    }
    .channel-info{
        padding: 0.5rem 1.2rem;
        overflow: hidden;
        line-height: 3rem;
        h3{
            float: left;
            color: #333;
            font-size: 1.6rem;
        }
        span{
            float: right;
            font-size: 1.2rem;
            color: #888;
        }
    }
    .channel-list{
        padding: 0 1.2rem 1.2rem;
        ul{
            
        }
        li{
            width: 24%;
            float: left;
            margin: 0.2rem 0.5%;
            height: 3.2rem;
            line-height: 3.2rem;
            line-height: calc(3.2rem - 2px);
            background: #fff;
            text-align: center;
            border-radius: 3px;
            border: 1px solid #d4d4d4;
            font-size: 1.4rem;
            &.active{
                background: #fecd50;
                border-color: #fecd50;
            }
        }
    }
</style>
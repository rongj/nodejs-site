<template>
    <div class="wrap-video">
        <!-- <video-player :ref="videoId"
            :options="Object.assign({},playerOptions,{ start:videoStart, sources:[{type:videoType, src: videoUrl}], poster: videoPoster })"
            @play="onPlayerPlay($event)">
        </video-player> -->
        <slot></slot>
        <div class="video-mask" v-if="showMask">
            <div class="video-btn-play"></div>
            <div class="video-info">
                <div class="video-play-info">
                    <span>{{playCount}}</span>
                    <span>{{danmuCount}}</span>
                </div>
                <div class="video-duration">{{duration}}</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            showMask: {
                type: Boolean,
                default: false
            },
            playCount: {
                type: Number,
                default: 0
            },
            danmuCount: {
                type: Number,
                default: 0
            },
            duration: {
                type: Number,
            },
            // videoId: {
            //     type: Number,
            //     default: 0
            // },
            // videoStart: {
            //     type: Number,
            // },
            // videoUrl: {
            //     type: String,
            // },
            // videoPoster: {
            //     type: String,
            // },
            // videoType: {
            //     type: String,
            //     default: 'video/mp4'
            // }
        },
        // computed: {
        //     player() {
        //         return this.$refs[this.videoId].player
        //     }
        // },
        // methods: {
        //     onPlayerPlay(player){
        //         this.$emit('onPlay',player);
        //     },
        // }
    }
</script>

<style lang="scss">
    .wrap-video{
        position: relative;
        overflow: hidden;
        padding-top: 56.25%;
        margin: 0.6rem 0;
        video{
            width: 100%;
            position: absolute;
            top:0;
            height: 100%;
        }
        .video-player{
            position: absolute;
            top:0;
            width: 100%;
            height: 100%;
            .video-js.vjs-custom-skin{
                height: 100%!important;
                .vjs-big-play-button{
                    width: 4rem;
                    height: 4rem!important;
                    border-radius: 50%!important;
                    line-height: 3.8rem!important;
                    font-size: 3rem;
                    margin-top: -2rem!important;
                    margin-left: -2rem!important;
                    background: rgba(0,0,0, 0.3);
                    z-index: 22;
                }
                .vjs-control-bar{
                    z-index: 22;
                }
            }
        }
        .video-mask{
            // display: none;
            position: absolute;
            top:0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0, 0.2);
        }
        .video-btn-play{
            display: none;
            width: 6rem;
            height: 6rem;
            position: absolute;
            left: 50%;
            top: 50%;
            margin-left: -3rem;
            margin-top: -3rem;
            background: url('../assets/images/play.png') no-repeat 50% 50% / 100% auto;
        }
        .video-info{
            position: absolute;
            width: 100%;
            line-height: 3rem;
            padding: 0 1rem;
            bottom: 0;
            overflow: hidden;
            color: #fff;
            font-size: 1.2rem;
            .video-play-info{
                float: left;
                span{
                    margin-right: 1rem;
                }
            }
            .video-duration{
                float: right;
            }
        }
    }
</style>
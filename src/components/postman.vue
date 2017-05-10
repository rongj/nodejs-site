<template>
    <div class="postman clearfix">
        <div class="postman-avator" :style="{'width': islz ? '2.8rem':'2.6rem','height': islz ? '2.8rem':'2.6rem'}">
            <img :src="avator" :alt="name">
        </div>
        <div class="postman-info">
            <div class="postman-identity">
                <h2>{{name}}</h2>
                <span class="lz" v-if="floor == 1">楼主</span>
                <span class="grade">{{grade}}</span>
                <span class="gender" :class="{'man':gender=='m','woman':gender=='w'}" v-if=" gender !== 'o' "></span>
            </div>
            <div class="post-time">
                <span v-if="floor !== 1">{{floor}}楼</span>
                <span>{{time}}</span>
            </div>
        </div>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        props: {
            islz: {
                type: Boolean,
                default: false
            },
            floor: {
                type: Number,
            },
            name: {
                type: String,
                required: true
            },
            avator: {
                type: String,
                required: true
            },
            grade: {
                type: String,
                required: true
            },
            gender: {
                type: String,
                default: 'o'
            },
            time: {
                type: String,
            },
        },

        methods:{

        }
    }
</script>

<style lang="scss" scoped>
    .postman{
        width: 100%;
        margin: 0.6rem 0;
        .postman-avator{
            float: left;
            overflow: hidden;
            border-radius: 100%;
            margin-top: 0.4rem;
            img{
                max-width: 100%;
            }
        }
        .postman-info{
            float: left;
            margin-left: 0.6rem;
        }
        .postman-identity{
            > *{
                display: inline-block;
                vertical-align: middle;
                line-height: 2rem;
                margin-right: 0.2rem;
            }
            h2{
                font-size: 1.5rem;
                color: #333;
                vertical-align: -1px;
            }
            .lz{
                background: #ffdddf;
                color: #f8757e;
                border: 1px solid #f7b8bd;
                font-size: 1.15rem;
                padding: 0 0.6rem;
                border-radius: 1rem;
                height: 1.6rem;
                line-height: 1.4rem;
            }
            .grade{
                background: #dae4ff;
                color: #9388f4;
                border: 1px solid #b4bcfb;
                font-size: 1.15rem;
                padding: 0 0.6rem;
                border-radius: 1rem;
                line-height: 1.4rem;
                height: 1.6rem;
            }
            .gender{
                width: 1.6rem;
                height: 1.6rem;
                border-radius: 50%;
                &.man{
                    background: #cee9f9;
                }
                &.woman{
                    background: #ffdddf;
                }
            }
        }
        .post-time{
            color: #888;
            font-size: 1.1rem;
            span{
                margin-right: 0.8rem;
            }
        }
    }
</style>
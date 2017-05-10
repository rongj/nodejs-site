<template>
    <div class="tabs-nav">
        <div class="tabs-nav-items">
            <span v-for="(item,index) in tabtitles" :class="{ active: currentTab === index }" @click="handleTab(item,index,$event)">{{item.name}}</span>
            <i class="tabs-line" :style="{'width':$store.state.tabNavStyle.width,'left':$store.state.tabNavStyle.left}"></i>
        </div>
        <div class="tabs-nav-more"></div>
        <div class="tabs-nav-add" @click="handleAdd"></div>
    </div>
</template>

<script>
    export default {
        props: {
            tabtitles: {
                type: Array,
                default: []
            },
            currentTab: {
                type: Number,
                default: 0
            }
        },
        watch:{
            tabtitles: function(){
                this.$nextTick(()=>{
                    this.scrollTab(this.currentTab);
                })
            },
            $route: function(to,from){
                if(to.name === 'home'){
                    document.querySelector('.tabs-nav-items').scrollLeft = this.$store.state.tabNavStyle.scrollLeft;
                }
            }
        },
        methods:{
            //选项卡
            handleTab(item,i,e){
                sessionStorage.setItem('scrollTop'+this.$store.state.showTabIndex, document.querySelector(".phone-body").scrollTop);

                let st = sessionStorage.getItem('scrollTop'+i);
                document.querySelector(".phone-body").scrollTop = st ? st : 0;
                this.$store.state.showTabIndex = i;
                this.scrollTab(i);
            },

            //通过索引选中选项卡
            scrollTab(i){
                const parEle = document.querySelector(".tabs-nav-items");
                const currEle = parEle.querySelectorAll("span")[i];
                const lineEle = document.querySelector(".tabs-line");
                lineEle.style.width = currEle.offsetWidth-24+'px';
                lineEle.style.left = currEle.offsetLeft+12+'px';
                let ow = currEle.offsetWidth/2+currEle.offsetLeft-parEle.offsetWidth/2;
                parEle.scrollLeft = ow > 0 ? ow : 0;

                this.$store.state.tabNavStyle = Object.assign({},{'width':lineEle.style.width,'left':lineEle.style.left, 'scrollLeft': parEle.scrollLeft})

                //内容区
                // const tabCon = document.querySelector(".tabs-content");
                // console.log(this.$store.state.showTabIndex);
                // if(bool){
                //     tabCon.style.transition = "all 0s";
                // }else{
                //     tabCon.style.transition = "all 0.3s";
                // }
                // this.swiperX = -parEle.offsetWidth*i; 
            },

            handleAdd(){
                this.$emit('showAdd');
            }
        }
    }
</script>

<style lang="scss">
    .tabs-nav-items::-webkit-scrollbar{
        display: none;
        height: 0;
    }
    .tabs-nav{
        background: #fff;
        height: 4rem;
        line-height: 4rem;
        position: relative;
        z-index: 1;
        margin-bottom: -1px;
        &:after{
            content: '';
            display: block;
            width: 100%;
            height: 1px;
            background: #eaeaea;
            position: absolute;
            left: 0;
            bottom: 1px;
            z-index: 1;
            transition: all 0.3s;
        }
        .tabs-nav-items{
            white-space: nowrap;
            overflow-y: hidden;
            overflow-x: auto;
            -webkit-overflow-scrolling : touch;
            padding-right: 3rem;
            transition: all 0.3s;
            position: relative;
            z-index: 2;
            span{
                display: inline-block;
                height: 4rem;
                padding: 0 1rem;
                color: #888888;
                font-size: 1.4rem;
                &.active{
                    color: #333;
                    // position: relative;
                    // &:after{
                        // content: '';
                        // display: block;
                        // width: 80%;
                        // height: 3px;
                        // background: #ffce50;
                        // position: absolute;
                        // z-index: 2;
                        // left: 10%;
                        // border-radius: 2px;
                        // bottom:0;
                    // }
                }
            }
            .tabs-line{
                display: block;
                width: 2.8rem;
                height: 3px;
                background: #ffce50;
                position: absolute;
                left: 10px;
                border-radius: 2px;
                bottom:0;
                transition: all 0.3s;
            }
        }
        .tabs-nav-add{
            position: absolute;
            right: 0;
            top: 0.5rem;
            width: 3rem;
            height: 3rem;
            background: #fff url(../assets/images/add_circle.png) no-repeat 50% 50% / 50% auto;
            z-index: 11;
        }
        .tabs-nav-more{
            position: absolute;
            right: 3rem;
            top: 0.5rem;
            width: 1.5rem;
            height: 3rem;
            z-index: 11;
            background: -webkit-linear-gradient(left,rgba(255,255,255,0),rgba(255,255,255,1));
        }
    }
</style>

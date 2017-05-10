<template>
    <div class="phone-wrap">
        <v-back title="猫扑"></v-back>
        <div class="phone-body">
        	<div class="wrap-detail">
				<v-postman name="虾酱是我师傅" avator="http://i3.mopimg.cn/head/32049568/100x100?191" grade="波斯猫" gender="m" :floor="1" time="昨天 15：00"></v-postman>
				<div class="post-text">
					<h2 class="post-title">跨越自己狠简单特别简单的一件事情只要想去做的话</h2>
				</div>
				<!-- <v-video 
				    :playCount="video.watchCount"
				    :danmuCount="video.danmuCount"
				    :duration="video.videoDuration"
				    :videoId="video.id"
				    :videoUrl="video.url"
				    :videoPoster="video.videoThum">
				</v-video> -->
				<v-video>
					<video-player :ref="video.id"
					    :options="Object.assign({},{ start: videoStart, sources:[{type:'video/mp4', src: video.url}], poster: video.videoThum })"
					    >
					</video-player> 
				</v-video>
				<div class="post-tag">看世界</div>
        	</div>
        	<div class="wrap-comments">
				<h2 class="comment-cate">热门回复</h2>
				<div class="comment-list">
					<div class="comment-item">
						<v-postman name="皮皮虾" avator="http://i3.mopimg.cn/head/32049568/100x100?191" grade="大猫" gender="w" :floor="4" time="昨天 15：00">
							<v-action :supporter="666"></v-action>
						</v-postman>
						<v-comment text="我之前看到的一个台灯，蛮好看的。我找找。哈哈哈哈，帝国时代赶上登高，按时发生过施工队。洒飞双方各电视电话" :imgs="['http://i1.mopimg.cn/img/tt/2016-07/1023/2016072909173540.jpeg790x600.jpeg', 'http://covteam.u.qiniudn.com/ka2.jpg', 'http://covteam.u.qiniudn.com/poster.png', 'http://s1.dwstatic.com/group1/M00/24/87/f709a5765c4522ca67fde9032550cda2.jpg','http://i1.mopimg.cn/img/tt/2016-07/1352/20160729091734146.jpeg790x600.jpeg']" appLink="http://a.app.qq.com/o/simple.jsp?pkgname=com.mop.activity" :showSubcomment="true"></v-comment>
					</div>
					<div class="comment-item">
						<v-postman name="黄飞鸿" avator="http://i3.mopimg.cn/head/32049568/100x100?191" grade="野猫" gender="o" :floor="3" time="昨天 15：00">
							<v-action :supporter="666"></v-action>
						</v-postman>
						<v-comment text="你还不能够知道，我都放了九张图了"></v-comment>
					</div>
				</div>

				<h2 class="comment-cate">最新回复</h2>
				<div class="comment-list">
					<div class="comment-item">
						<v-postman name="虾酱是我师傅22" avator="http://i3.mopimg.cn/head/32049568/100x100?191" grade="小猫" gender="m" :floor="2" time="昨天 15：00">
							<v-action :supporter="666"></v-action>
						</v-postman>
						<v-comment text="我之前看到的一个台灯，蛮好看的。我找找。哈哈哈哈，帝国时代赶上登高，按时发生过施工队。洒飞双方各电视电话" appLink="http://a.app.qq.com/o/simple.jsp?pkgname=com.mop.activity" :showSubcomment="true"></v-comment>
					</div>
					<div class="comment-item">
						<v-postman name="花花" avator="http://i3.mopimg.cn/head/32049568/100x100?191" grade="小猫" gender="w" :floor="11" time="昨天 15：00">
							<v-action :supporter="666"></v-action>
						</v-postman>
						<v-comment text="你还不能够知道，我都放了九张图了"></v-comment>
					</div>
				</div>
				
				<a href="" class="downapp">下载猫扑，查看更多评论</a>
        	</div>
        </div>
    </div>    
</template>
<script>
	import back from "../components/back.vue"
	import postman from "../components/postman.vue"
	import video from "../components/video.vue";
	import action from "../components/action.vue";
	import img from "../components/img.vue";
	import comment from "../components/comment.vue";

	import { mapState, mapGetters } from 'vuex';

	export default {
		data(){
			return {
				video: {}
			}
		},
		created(){
		},
		mounted(){
			const videoId = this.$route.params.id;
			const videoList = this.$store.state.videoList.length ? this.$store.state.videoList : JSON.parse(localStorage.videoList);
			this.video = videoList.filter(i =>  i.id == videoId)[0];
			this.$nextTick(()=>{
				if(this.$store.state.videoStart>0){
					this.$refs[videoId].player.play();
				}
			})
			// this.$refs[videoId].player.play();
		},
		computed:{
			// player() {
		        // return this.$refs.videoPlayer.player
		    // },
		    ...mapState(['videoStart'])
		},
		methods: {
			// pause(){
			// 	this.$refs.videoPlayer.player.pause();
			// },
			// onPlayerPlay(player){
			// 	// this.showMask = false;
			// 	player.play();
			// 	// console.log(player);
			// },
			// onPlayerPause(player) {
			// 	console.log('点了暂停',player);
			// 	// this.showMask = true;
			// 	// player.pause();
			// },
			// onPlayerLoadeddata(player){
			// 	// console.log('视频加载中...',player);
			// },
			// onPlayerCanplay(player){
			// 	// console.log('视频可以播放了...',player);
			// },
			// onPlayerCanplaythrough(player){
			// 	// console.log('测试...',player);
			// },
			// onPlayerTimeupdate(player){
			// 	// console.log('时间更新了',player);
			// },
			// onPlayerPlaying(player){
			// 	// console.log('正在播放',player);
			// },
			// onPlayerWaiting(player){
			// 	// console.log('视频缓冲',player);
			// },

			// playerStateChanged(playerCurrentState) {
			// 	// console.log('当前播放时间', playerCurrentState)
			// },

			// playerReadied(player) {
			// 	// console.log('视频准备好了...', player)
			// }
		},
		components: {
			'v-back': back,
			'v-img': img,
			'v-postman': postman,
			'v-video': video,
			'v-action': action,
			'v-comment': comment,
		}
	}
</script>
<style lang="scss">
	.wrap-detail{
		padding: 1rem 1.2rem;
		border-bottom: 1px solid #f0edeb;
	}
	.post-text{
		.post-title{
			font-size: 1.6rem;
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
	.wrap-comments{
		padding: 1rem 1.2rem;
		.comment-cate{
			font-size: 1.7rem;
			margin-top: 1.6rem;
		}
		.downapp{
			display: block;
			color: #898989;
			text-align: center;
			margin-top: 1.5rem;
			margin-bottom: 1rem;
		}
	}
	.comment-item{
		margin-top: 0.8rem;		
		&:last-child .comment-content{
			border-bottom: none;
		}
	}
	
</style>
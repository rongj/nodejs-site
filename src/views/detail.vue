<template>
    <div class="phone-wrap">
        <v-back title="帖子详情"></v-back>
        <div class="phone-body">
        	<div class="wrap-detail">
	        	<v-postman name="虾酱是我师傅" avator="http://i3.mopimg.cn/head/32049568/100x100?191" grade="波斯猫" gender="m" :floor="1" time="昨天 15：00"></v-postman>
	        	<div class="post-text">
	        		<h2 class="post-title">说走就走的拉萨里尔</h2>
	        		<div class="post-content" v-img-preview>
	        			<p>On education, we will expand exchange programs, and increase scholarships, like the one that brought my father to America, while encouraging more Americans to study in Muslim communities.On education, we will expand exchange programs, and increase scholarships, like the one that brought my father to America, while encouraging more Americans to study in Muslim communities.On education, we will expand exchange programs, and increase scholarships, like the one that brought my father to America, while encouraging more Americans to study in Muslim communities.</p>
	        			<img src="../assets/images/d_03.jpg" alt="">
	        			<img src="../assets/images/d_03.jpg" alt="">
	        		</div>
	        	</div>
	        	<div class="post-tag">看世界</div>
        	</div>
        	<div class="wrap-comments">
        		<div class="comment-list">
        			<div class="comment-item">
		        		<v-postman name="皮皮虾" avator="http://i3.mopimg.cn/head/32049568/100x100?191" grade="大猫" gender="w" :floor="4" time="昨天 15：00">
		        			<v-action :supporter="666"></v-action>
		        		</v-postman>
		        		<v-comment text="我之前看到的一个台灯，蛮好看的。我找找。哈哈哈哈，帝国时代赶上登高，按时发生过施工队。洒飞双方各电视电话"  :imgs="['http://i1.mopimg.cn/img/tt/2016-07/1023/2016072909173540.jpeg790x600.jpeg', 'http://covteam.u.qiniudn.com/ka2.jpg', 'http://covteam.u.qiniudn.com/poster.png', 'http://s1.dwstatic.com/group1/M00/24/87/f709a5765c4522ca67fde9032550cda2.jpg','http://i1.mopimg.cn/img/tt/2016-07/1352/20160729091734146.jpeg790x600.jpeg']" appLink="http://a.app.qq.com/o/simple.jsp?pkgname=com.mop.activity" :showSubcomment="true"></v-comment>
        			</div>
        			<div class="comment-item">
		        		<v-postman name="黄飞鸿" avator="http://i3.mopimg.cn/head/32049568/100x100?191" grade="野猫" gender="o" :floor="3" time="昨天 15：00">
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
	import comment from "../components/comment.vue";
	import img from "../components/img.vue";
	export default {
		methods:{
			test(){
				alert('点赞！')
			},
			test2(){
				alert('你踩了！')
			}
		},
		components: {
			'v-back': back,
			'v-img': img,
			'v-postman': postman,
			'v-video': video,
			'v-comment': comment,
			'v-action': action
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
	.post-content{
		margin: 0.6rem 0;
		p{
			color: #888888;
			text-align: justify;
		}
		img{
			width: 100%;
			margin: 0.6rem 0;
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
		.comment-content{
			margin-left: 3rem;
			padding-bottom: 1.2rem;
			margin-right: -1.2rem;
			padding-right: 1.2rem;
			border-bottom: 1px solid #eaeaea;
			font-size: 1.5rem;
			p{
				margin-bottom: 0.6rem;
			}
		}
		&:last-child .comment-content{
			border-bottom: none;
		}
	}
	.subcomment{
		color: #888;
		font-size: 1.3rem;
		line-height: 2;
		a{
			color: #81a0e2;
		}
	}
</style>
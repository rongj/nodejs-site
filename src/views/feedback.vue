<template>
    <div class="phone-wrap">
        <v-back title="意见反馈"></v-back>
        <div class="phone-body">
        	<div class="form-list">
        		<div class="form-item">
        			<h2 class="form-item-title required">遇到了哪些问题</h2>
        			<div class="form-item-content">
        				<ul class="check">
        					<li v-for="item in ['内容问题','展示问题','功能问题','其他']" class="check-item" :class="{'active':type.indexOf(item)>-1}" @click="handleType(item)">{{item}}</li>
        				</ul>
        			</div>
        		</div>
        		<div class="form-item">
        			<h2 class="form-item-title required">意见描述</h2>
        			<div class="form-item-content from-item-desc">
        				<textarea placeholder="请输入内容，我们十分重视您的意见，您的支持是我们的动力，您的宝贵意见是我们改进的方向" v-model="text"></textarea>
        				<div class="pic-upload clearfix">
        					<div class="pic-upload-list">
        						<div class="pic-upload-item" v-for="item in imgs">
        							<!-- <div><img :src="item" @load="test($event)"></div> -->
        							<v-img :imgSrc="item"></v-img>
        							<i @click="deleteImg(item)"></i>
        						</div>
	        					<div class="pic-upload-item pic-upload-add">
	        						<input type="file" accept="image/png,image/jpeg,image/gif" @change="postImg">
	        					</div>
        					</div>
        				</div>
        			</div>
        		</div>
        		<div class="form-item">
        			<h2 class="form-item-title">联系方式<span>(可选，方便我们与您取得联系或寄送礼物)</span></h2>
        			<div class="form-item-content">
        				<div class="input-list">
        					<div class="input-item">
        						<span>电话</span>
        						<input type="tel" maxlength="11" placeholder="请输入手机号码" v-model="phone">
        					</div>
        					<div class="input-item">
        						<span>邮箱</span>
        						<input type="email" placeholder="请输入联系邮箱" v-model="email">
        					</div>
        				</div>
        				<span class="btn-submit" @click="handleSubmit">提交</span>
        			</div>
        		</div>
        	</div>
        </div>
    </div>
</template>
<script>
	import back from "../components/back.vue"
	import * as _ from '../utils/tool'
	import img from '../components/img.vue'
	export default {
		data(){
			return {
				type: [],
				text: '',
				imgs: [],
				phone: null,
				email: '',
			}
		},
		methods:{
			//选择问题类型
			handleType(item){
				if(this.type.indexOf(item) > -1){
					this.type = this.type.filter(i=>i!=item)
				}else{
					this.type.push(item)
				}
			},

			//上传图片
			postImg(e){
				let _this = this;
				let imgfile = e.target.files[0] || e.dataTransfer.files[0];
				if(imgfile.size>2*1024*1024){
					_.toast('请选择小于2MB的图片进行上传！');
				}else{
					const reader  = new FileReader();
					if(imgfile){
						reader.readAsDataURL(imgfile);
					}
					reader.addEventListener("load", function () {
						if(_this.imgs.indexOf(reader.result)> -1){
							_.toast('图片已选择！');
						}else{
							_this.imgs.push(reader.result);
						}
					}, false);
				}
				e.target.value = '';
			},

			//删除图片
			deleteImg(item){
				this.imgs = this.imgs.filter(i => i!=item);
			},

			//提交意见反馈
			handleSubmit(){
				const reg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
				if(!reg.test(this.email)){
					_.toast("邮箱格式不正确");
				}
				console.log(Object.assign({},{type:this.type,text:this.text,imgs:this.imgs,phone:this.phone,email:this.email}));
			}
		},
		components: {
		    'v-back': back,
		    'v-img': img
		}
	}
</script>
<style lang="scss">
	.required:after{
		content: '*';
		color: #ea5458;
		font-size: 2rem;
		line-height: 1;
	    vertical-align: -4px;
	    margin-left: 0.2rem;
	}
	.form-list{
		padding: 1.2rem;
	}
	.form-item{
		margin-bottom: 1.5rem;
		.form-item-title{
			font-size: 1.6rem;
			color: #333;
			line-height: 2;
			span{
				font-size: 1.2rem;
				color: #888;
			}
		}
	}
	.check{
		overflow: hidden;
		.check-item{
			width: 33.33%;
			float: left;
			font-size: 1.4rem;
			color: #666;
			padding-left: 1.6rem;
			line-height: 2;
			background: url('../assets/images/unchecked.png') no-repeat 0 50% / auto 1.3rem;
			&.active{
				background: url('../assets/images/checked.png') no-repeat 0 50% / auto 1.3rem;
			}
		}
	}
	.from-item-desc{
		padding: 1rem;
		border: 1px solid #dedede;
		border-radius: 3px;
		textarea{
			outline: none;
			width: 100%;
			height: 7rem;
			font-size: 1.4rem;
			line-height: 1.5;
			border: none;
			resize: none;
		}
	}
	.pic-upload-list{
		.pic-upload-item{
			width: 21%;
			float: left;
			margin-right: 5%;
			margin-top: 0.6rem;
			margin-bottom: 0.6rem;
			padding-top: 21%;
			position: relative;
			border-radius: 3px;
			&:nth-child(4n){
				margin-right: 0;
			}
			div{
				position: absolute;
				left: 0;
				top: 0;
				z-index: 1;
				border-radius: 3px;
			}
			i{
				display: block;
				width: 1.4rem;
				height: 1.4rem;
				background: rgba(0,0,0, 0.5);
				border-radius: 50%;
				position: absolute;
				right: -0.7rem;
				top: -0.7rem;
				z-index: 2;
			}
		}
		.pic-upload-add{
			margin-right: 0;
			border:1px dashed #ccc;
			background: url('../assets/images/add.png') no-repeat 50% 50% / 30% auto;
			input{
				width: 100%;
				height: 100%;
				position: absolute;
				left:0;
				top:0;
				opacity: 0;
			}
		}
	}
	.input-list{
		.input-item{
			padding: 0.5rem 0;
			line-height: 3rem;
			display: flex;
			span{
				margin-right: 1rem;
				font-size: 1.3rem;
				color: #666;
			}
			input{
				flex: 1;
				border: 1px solid #dedede;
				outline: none;
				border-radius: 3px;
				text-indent: 1rem;
				line-height: 3rem;
				line-height: calc(3rem - 2px);
				font-size: 1.3rem;
			}
		}
	}
	.btn-submit{
		display: block;
		width: 100%;
		height: 4rem;
		line-height: 4rem;
		background: #fecd50;
		border-radius: 3px;
		color: #333;
		text-align: center;
		font-size: 1.6rem;
		margin-top: 1.5rem;
	}
</style>
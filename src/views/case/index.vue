<template>
	<div>
		<div class="banner">
			<img src="@/assets/web3/banner.jpg" alt="">
		</div>
		
		<div class="column">
<!-- 			<div class="title_column">
				<div class="title title_active" @mouseenter="changeActive($event)" @mouseleave="removeActive($event)">消消乐</div>
				<div class="title" @mouseenter="changeActive($event)" @mouseleave="removeActive($event)">小程序</div>
			</div> -->
			<div class="app">
<!-- 				<div class="app_box">
					<div class="app_img"><img src="@/assets/web3/sort1.jpg" alt=""></div>
					<div class="app_test">
						<div class="app_title">百度小程序</div>
						<div class="app_text">
							人与万物的开放生态，依托全域流量，通过百度AI开放式赋能，
							精准连接用户，无需下载安装便可享受指挥超前的使用体验。
						</div>
					</div>
				</div> -->
				<div class="app_box">
					<div class="app_img"><img src="@/assets/web3/ic_launcher.png" alt=""></div>
					<div class="app_test">
						<div class="app_title">小游戏</div>
						<div class="app_text">
							人与万物的开放生态，依托全域流量，
							精准连接用户，无需下载安装便可享受指挥超前的游戏体验。
						</div>
					</div>
				</div>
				
				<div class="app_box">
					<div class="app_img"><img src="@/assets/web3/sort2.jpg" alt=""></div>
					<div class="app_test">
						<div class="app_title">微信小程序</div>
						<div class="app_text">
							微信小程序是微信生态的优先选择，微信倾力打造的小程序体系，
							将是微信生态的未来主旋律。从现在抓住风口。
						</div>
					</div>
				</div>
			</div>
			
<!-- 			<div style="margin-top:100px;">
				<el-button type="primary">立即注册</el-button>
				<el-button>了解更多</el-button>
			</div> -->
		</div>
		
		<div class="sort">
			
			<div class="sort_title">小游戏</div>
			
			<div class="sort_box" style="margin-bottom:100px;">
				<div class="sort_img"><img src="@/assets/web3/works4.jpg" alt=""></div>
				<div class="sort_text" style="display: flex; align-items: center;">
					<div style="position: relative;">
						<div class="sort_explain" style="margin:0;">xiaoxiaole game</div>
						<div class="sort_titile">58消消乐</div>
						<div class="sort_explain">
							放开那村长！顺着藤蔓前往”来自星星”的云端之上~消灭各种障碍，收集足够多的金色豆荚，
							去拯救神秘的村长大大！轻松滑动手指即可操作,玩法简单易上手!。
						</div>
						<div class="sort_explain">
							无流量困扰，无需联网也能随时随地开心消消乐!游戏中设计大量Q萌有爱的小动物，
							炫目华丽的精美特效，清新亮丽的甜蜜画风，意料之外的刺激障碍，非常值得体验…
						</div>
						<div class="more" @click.stop="toGame">更多&#62;&#62;</div>
					</div>
				</div>
			</div>
			
			<div class="sort_title">微信小程序</div>
			<div class="sort_box">
				<div class="sort_img"><img src="@/assets/web3/works1.jpg" alt=""></div>
				<div class="sort_text" style="display: flex; align-items: center;">
					<div>
						<div class="sort_explain" style="margin:0;">Enterprise brand</div>
						<div class="sort_titile">企业品牌类</div>
						<div class="sort_explain">
							随着4G网络普及，各大小品牌都纷纷进驻移动互联网，
							而国内超过90%的推广公司都会通过移动端开发方式进行推广。
							手机网站就是能被随身携带和访问的微网站，能直接转发到微博和微信朋友圈，
							能直接在手机上观看并购买您的产品。
						</div>
						<div class="sort_explain">
							移动端网站能直接在微博、微信朋友圈推广，用户能方便快捷访问您前沿形象展示。
							用户群针对性强，绝对是时尚买家和商业精英群体、企业级等。
						</div>
					</div>
				</div>
			</div>
			
			<div class="sort_box">
				<div class="sort_img"><img src="@/assets/web3/works2.jpg" alt=""></div>
				<div class="sort_text" style="display: flex; align-items: center;">
					<div>
						<div class="sort_explain" style="margin:0;">News website</div>
						<div class="sort_titile">新闻资讯类</div>
						<div class="sort_explain">
							随着4G网络普及，各大小品牌都纷纷进驻移动互联网，
							而国内超过90%的推广公司都会通过移动端开发方式进行推广。
							手机网站就是能被随身携带和访问的微网站，能直接转发到微博和微信朋友圈，
							能直接在手机上观看并购买您的产品。
						</div>
						<div class="sort_explain">
							将传统论坛、新闻门户优化放置到手机网站上，用户能更方便快捷的了解您提供的新闻资讯。
							可以是社会新闻、娱乐新闻、房地产动态等数据可以对接您的传统网站数据库，
							网站更新的同时也更新。
						</div>
					</div>
				</div>
			</div>
			
			<div class="sort_box">
				<div class="sort_img"><img src="@/assets/web3/works3.jpg" alt=""></div>
				<div class="sort_text" style="display: flex; align-items: center;">
					<div>
						<div class="sort_explain" style="margin:0;">Fashion clothing</div>
						<div class="sort_titile">时尚服饰类</div>
						<div class="sort_explain">
							随着4G网络普及，各大小品牌都纷纷进驻移动互联网，
							而国内超过90%的推广公司都会通过移动端开发方式进行推广。
							手机网站就是能被随身携带和访问的微网站，能直接转发到微博和微信朋友圈，
							能直接在手机上观看并购买您的产品。
						</div>
						<div class="sort_explain">
							打造专业的手机微网站APP，更专业更具视觉设计感的移动端。
							更方便、更随身的新闻、产品介绍、品牌传播。含盖服装、化妆品、
							汽车、地产、珠宝、摄影设计作品展示、IT产业、新闻资讯、技术交流等。
						</div>
					</div>
				</div>
			</div>
			
		</div>
	</div>
</template>

<script>
export default{
	data() {
		return {
			
		}
	},
	methods:{
		changeActive($event) {
			$event.currentTarget.className = 'title title_active';
		},
		removeActive($event) {
			$event.currentTarget.className = 'title';
		},
		toGame(){
			this.$router.push({path:'/game'})
		}
	}
}
</script>

<style scoped>
	.banner{
		width:100%;
		min-width:1200px;
		height:300px;
	}
	
	.column{
		max-width: 1200px;
		min-width:1200px;
		width:60%;
		margin:0 auto;
		padding:100px 0;
		box-sizing: border-box;
	}
	.title_column{
		display:flex;
		align-items:center;
		justify-content:space-between;
		margin:auto;
		width:30%;
	}
	.title{
		font-size:16px;
		margin-bottom:80px;
		color:#666666;
		width:100px;
		height:46px;
		border-radius:5px;
		padding:0 8px;
		box-sizing:border-box;
		line-height:46px;
		cursor:pointer;
	}
	.title_active{
		background-color:#076CE0;
		color:#fff;
	}
	.app{
		display:flex;
		justify-content:space-between;
		flex-wrap:wrap;
	}
	.app_box{
		width:48%;
		height:300px;
		box-shadow: 0px 0px 10px 10px #F6F6F6;
		display:flex;
		justify-content:space-between;
		align-items:center;
		padding-left:20px;
		box-sizing:border-box;
	}
	.app_img{
		width:150px;
		height:140px;
		margin-right:40px;
	}
	.app_test{
		width:70%;
		text-align:left;
		padding-right:60px;
		box-sizing:border-box;
	}
	.app_title{
		color:#666666;
		font-size:18px;
		margin-bottom:10px;
	}
	.app_text{
		color:#999999;
		line-height:2;
		font-size:14px;
	}
	
	
	.sort{
		max-width: 1200px;
		min-width:1200px;
		width:60%;
		margin:0 auto;
	}
	.sort_title{
		font-size:30px;
		color:#333333;
	}
	.sort_box{
		display:flex;
		padding:100px 0;
		box-sizing:border-box;
		border-bottom:1px solid #EEEEEE;
	}
	.sort_img{
		width:274px;
		height:536px;
	}
	.sort_text{
		margin-left:100px;
		text-align:left;
		flex: 1;
	}
	.sort_explain{
		color:#999999;
		font-size:14px;
		line-height:3;
		margin-bottom:80px;
	}
	.sort_titile{
		color: #333333;
		font-size:22px;
		margin-bottom:80px;
	}
	.more{
		position:absolute;
		bottom:0;
		right:0;
		color:#009FE9;
		cursor:pointer;
	}
</style>

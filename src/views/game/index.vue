<template>
	<div>
		<div class="banner">
			<div class="banner1">
				<img src="@/assets/game/banner3.jpg" alt="">
			</div>
			<div class="home" @click="toHome">官方主页</div>
		</div>
		
		
		<div class="sort">
			
			<div class="sort_title">58消消乐</div>
			
			<div class="sort_box">
				<div class="sort_img"><img src="@/assets/game/img1.jpg" alt=""></div>
				<div class="sort_text" style="display: flex; align-items: center;">
					<div style="position: relative;">
						<div class="sort_explain" style="margin:0;">Xiaoxiaole game</div>
						<div class="sort_titile">消消乐</div>
						<div class="sort_explain">
							放开那村长！顺着藤蔓前往”来自星星”的云端之上~消灭各种障碍，收集足够多的金色豆荚，
							去拯救神秘的村长大大！轻松滑动手指即可操作,玩法简单易上手!。
						</div>
						<div class="sort_explain">
							无流量困扰，无需联网也能随时随地开心消消乐!游戏中设计大量Q萌有爱的小动物，
							炫目华丽的精美特效，清新亮丽的甜蜜画风，意料之外的刺激障碍，非常值得体验…
						</div>
					</div>
				</div>
			</div>
			
			<div class="sort_box">
				<div class="sort_img"><img src="@/assets/game/img2.jpg" alt=""></div>
				<div class="sort_text" style="display: flex; align-items: center;">
					<div>
						<div class="sort_explain" style="margin:0;">Xiaoxiaole game</div>
						<div class="sort_titile">流畅的游戏体验</div>
						<div class="sort_explain">
							游戏中消除的对象为小动物的头像，包括小浣熊、小狐狸、小青蛙和小鸡等动物头像。
							玩家通关移动动物头像位置凑够3个或3个以上即可消除
						</div>
						<div class="sort_explain">
							游戏中设置了体力上限30点，每次闯关需要消耗5点体力，当体力不足5点，玩家不能进入关卡。
							每个关卡通过后，玩家可以可以得到一定的星星数量，玩家获得3星可以返还5点精力，
							获得2星可以返还2点精力，获得1星不返还精力
						</div>
					</div>
				</div>
			</div>
			
			<div class="sort_box">
				<div class="sort_img"><img src="@/assets/game/img3.jpg" alt=""></div>
				<div class="sort_text" style="display: flex; align-items: center;">
					<div>
						<div class="sort_explain" style="margin:0;">Xiaoxiaole game</div>
						<div class="sort_titile">好友排行榜</div>
						<div class="sort_explain">
							玩家通过游戏同步社交网络账号的好友，玩家通关关卡后可以看到好友的分数排行
						</div>
						<div class="sort_explain">
							同时，当自己的关卡通过不了可以邀请好友帮助，同时玩家与好友之间可以相互赠送1点的精力瓶
							（每日上限20个）。玩家可以邀请好友帮自己通过关卡。
						</div>
					</div>
				</div>
			</div>
			
			<div class="sort_box">
				<div class="sort_img"><img src="@/assets/game/img4.jpg" alt=""></div>
				<div class="sort_text" style="display: flex; align-items: center;">
					<div>
						<div class="sort_explain" style="margin:0;">Xiaoxiaole game</div>
						<div class="sort_titile">益智关卡</div>
						<div class="sort_explain">
							把三个颜色相同的小动物连成一条直线，即可消除。达到指定的目标通关后。
							游戏的模板有四种分别是分数过关、指定消除、获得金豆荚、云朵关卡
						</div>
						<div class="sort_explain">

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
		toHome(){
			this.$router.push({path:'/case'});
		}
	}
}
</script>

<style>
	.banner{
		min-width:1200px;
		margin-bottom:100px;
		position:relative;
	}
	.home{
		position:absolute;
		top:80%;
		transform: translateY(-50%);
		left:24%;
		color:#fff;
		font-size:24px;
		font-family: "Times New Roman", Times, serif;
		font-weight:bold;
		cursor:pointer;
		padding:10px;
		box-sizing:border-box;
		border-radius:5px;
		border:1px solid #fff;
	}
	.banner1{
		width:100%;
		height:300px;
		color:#fff;
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
</style>

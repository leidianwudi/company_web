<template>
	<div>
		<div class="banner">
			<div class="banner1">
				<img src="@/assets/game/banner4.png" alt="">
			</div>
			<div class="home" @click="toHome">官方主页</div>
		</div>


		<div class="sort">

			<div class="sort_title">每日果园</div>

			<div class="sort_box">
				<div class="sort_img"><img src="@/assets/game/img6.jpg" alt=""></div>
				<div class="sort_text" style="display: flex; align-items: center;">
					<div style="position: relative;">
						<div class="sort_explain" style="margin:0;">Meiriguoyuan game</div>
						<div class="sort_titile">休闲体验</div>
						<div class="sort_explain">
							每日果园手游是一款休闲种树的小游戏！在每日果园游戏里您可以在闲暇时间种树浇水收获果子！
						</div>
						<div class="sort_explain">
							您可以体验种植的乐趣，在每日果园手游还可以看到小树苗一步步长大，体会成长的喜悦！
							操作简便、老少皆宜、不一样的体验，尽在每日果园！
						</div>
					</div>
				</div>
			</div>

			<div class="sort_box">
				<div class="sort_img"><img src="@/assets/game/img8.jpg" alt=""></div>
				<div class="sort_text" style="display: flex; align-items: center;">
					<div>
						<div class="sort_explain" style="margin:0;">Meiriguoyuan game</div>
						<div class="sort_titile">简单的游戏玩法</div>
						<div class="sort_explain">
							游戏拥有很多独特新颖的模拟经营类玩法，玩家种植的农产品越多获得的奖励也就越丰富；
							用户只需要挂机就可以获得水滴，然后以水滴获得收益!
						</div>
						<div class="sort_explain">
							游戏玩法相当轻松休闲，当然游戏本身也十分简单容易，玩家可以花费很少得时间轻松培育！
						</div>
					</div>
				</div>
			</div>

			<div class="sort_box">
				<div class="sort_img"><img src="@/assets/game/img7.jpg" alt=""></div>
				<div class="sort_text" style="display: flex; align-items: center;">
					<div>
						<div class="sort_explain" style="margin:0;">Meiriguoyuan game</div>
						<div class="sort_titile">游戏收益</div>
						<div class="sort_explain">
							游戏拥有大量新颖的红包和福利等你来拿，你只需要进行简单的挂机升级后就能获得大量的奖励；
						</div>
						<div class="sort_explain">
							简单有实用的赚钱方法可以满足每位用户的赚钱时间，让你在任何的时候都能来赚钱。
							通过推广或者邀请好友一起来参与还能获得更多的佣金奖励，让你在这里赚钱更加的简单。
							很多的用户都可以通过这里赚钱，获得一个稳定的收益哦!
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
		font-size:30px;
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
		min-width:1024px;
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

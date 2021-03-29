<template>
	<div class="">
		<div class="banner">
			<el-carousel trigger="click" height="600px" arrow="nerver">
			    <el-carousel-item>
					<div class="banner1">
						<img src="@/assets/indexImg/banner9.jpg" alt="">
						<div class="banner_test">
							<div class="banner_title">网站建设服务</div>
							<div class="banner_text">
								多年专业建站经验，您所有建站烦恼，我们用设计提示企业
								和产品，我们是团结的团队，是服务保障系统
							</div>
							<div class="banner_btn">
								<button @click="toCase">了解更多</button>
							</div>
						</div>
					</div>
				</el-carousel-item>

				<el-carousel-item>
					<div class="banner1">
						<img src="@/assets/indexImg/banner7.jpg" alt="">
						<div class="banner_test">
							<div class="banner_title">提供深度定制</div>
							<div class="banner_title">互联网应用服务</div>
							<div class="banner_text">
								互联网品牌传播、数字营销、会员管理、业务服务支撑
							</div>
							<div class="banner_sort">
								<div class="_box" style="width: auto">
									<div>网站建设</div>
								</div>
								<div class="_box" style="width: auto">
									<div>手机网站</div>
								</div>
								<div class="_box" style="width: auto">
									<div>小程序定制</div>
								</div>
								<div class="_box" style="width: auto">
									<div>公众号定制</div>
								</div>
							</div>
						</div>
					</div>
				</el-carousel-item>
			</el-carousel>
		</div>

		<div class="index">
			<div class="index_column">
				<div class="index_left_column">
					<div class="index_title" style="margin-bottom:10px;">PC  建站</div>
					<div class="index_tip">专注营销型、会SEO的网站</div>
					<div class="index_explain">
						<div>海量高颜值设计模板+自适应，支持全屏DIY</div>
						<div>更专业SEO优化、Sitemap支持、保证百度收录</div>
						<div>更有多语言、大数据，员工子账号等你来撩</div>
					</div>
<!-- 					<div>
						<el-button type="primary">立即注册</el-button>
						<el-button>了解更多</el-button>
					</div> -->
				</div>

				<div class="index_right_column sort_img1"></div>
			</div>

			<div class="index_column">
				<div class="index_right_column sort_img2"></div>

				<div class="index_left_column">
					<div class="index_title" style="margin-bottom:10px;">PC  商场</div>
					<div class="index_tip">助力商家轻松打造独立的营销型商城系统</div>
					<div class="index_explain">
						<div>一次搞定小程序商城+微商城+电脑商城</div>
						<div>多终端覆盖，1000+全行业模板不断更新，个性化装修，优秀设计器</div>
						<div>全方位管理商品，订单，会员，数据，多种营销功能引爆销量</div>
					</div>
<!-- 					<div>
						<el-button type="primary">立即注册</el-button>
						<el-button>了解更多</el-button>
					</div> -->
				</div>
			</div>

			<div class="index_column">
				<div class="index_left_column">
					<div class="index_title" style="margin-bottom:10px;">H5  营销游戏</div>
					<div class="index_tip">一键创建、管理h5营销互动小游戏</div>
					<div class="index_explain">
						<div>微信吸粉、门店引流，海量精品游戏轻松管理</div>
						<div>大转盘、抽奖、刮刮乐、答题、助力、砍价、投票、签到、节日等嗨翻天</div>
						<div>超大访问量承载、360安全合作、大数据精准统计，舍我其谁</div>
					</div>
<!-- 					<div>
						<el-button type="primary">立即注册</el-button>
						<el-button>了解更多</el-button>
					</div> -->
				</div>

				<div class="index_right_column sort_img3"></div>
			</div>

			<div class="index_column">
				<div class="index_right_column sort_img4"></div>

				<div class="index_left_column">
					<div class="index_title" style="margin-bottom:10px;">官网小程序</div>
					<div class="index_tip">简单、易用的企业展示到店版+预约版</div>
					<div class="index_explain">
						<div>智慧名片、附近的小程序、公众号关联，小程序营销传播功能应有尽有</div>
						<div>风格随心换、交互响应快、系统架构更安全，每一次打开都很快</div>
						<div>只需体验3分钟，你就会爱上这款小程序工具</div>
					</div>
<!-- 					<div>
						<el-button type="primary">立即注册</el-button>
						<el-button>了解更多</el-button>
					</div> -->
				</div>
			</div>
		</div>

		<div class="banner trade">
			<div class="trade_box">
				<div class="trade_test">全行业都可以用我们</div>
				<div class="trade_column">
					<div class="trade_img" style="width:39%;"><img src="@/assets/indexImg/banner1.jpg" alt=""></div>
					<div class="trade_img" style="width:37%;"><img src="@/assets/indexImg/banner2.jpg" alt=""></div>
					<div class="trade_img" style="width:22%;"><img src="@/assets/indexImg/banner3.jpg" alt=""></div>
				</div>

				<div class="trade_column">
					<div class="trade_img" style="width:22%;"><img src="@/assets/indexImg/banner4.jpg" alt=""></div>
					<div class="trade_img" style="width:37%;"><img src="@/assets/indexImg/banner5.jpg" alt=""></div>
					<div class="trade_img" style="width:39%;"><img src="@/assets/indexImg/banner6.jpg" alt=""></div>
				</div>

				<!-- <div class="serve"><button>更多行业可咨询我们的客服</button></div> -->
			</div>
		</div>
	</div>
</template>

<script>
  export default {
    data() {
      return {

      };
    },
    methods: {
		//跳转到案例中心
		toCase(){
			this.$router.push('/case');
		}
    }
  }
</script>

<style scoped>
	.banner{
		min-width:1200px;
		margin-bottom:100px;
	}
	.banner1{
		width:100%;
		height:600px;
		color:#fff;
	}
	.banner_test{
		width:600px;
		min-width:600px;
		position:absolute;
		top:24%;
		left:16%;
		display: flex;
		flex-direction: column;
		justify-content:flex-start;
		align-items: flex-start;
	}
	.banner_title{
		font-size:50px;
	}
	.banner_text{
		margin-top:40px;
		width:440px;
		text-align:left;
		font-size:25px;
	}
	.banner_btn{
		margin-top:40px;
	}
	.banner_btn>button{
		color:#3B87F8;
		background-color: #FFFFFF;
		padding:18px 40px;
		box-sizing:border-box;
		border-radius:10px;
		cursor:pointer;
    font-size: 20px;
	}
	.banner_sort{
		width:50%;
		font-size:20px;
		display:flex;
		margin-top:40px;
		justify-content:space-between;
	}
	._box{
		width:68px;
		height:68px;
		background: url(../../assets/indexImg/boder.jpg)no-repeat;
		box-sizing:border-box;
		display:flex;
		align-items: center;
		justify-content: center;
		line-height:1.8;
	}

	.index{
		max-width: 1200px;
		min-width:1200px;
		width:65%;
		margin:auto;
	}
	.index_column{
		width:100%;
		height:400px;
		display:flex;
		justify-content:space-between;
		margin-bottom:100px;
	}
	.index_left_column{
		width:40%;
		height:400px;
		display:flex;
		flex-direction: column;
		justify-content:center;
		align-items: flex-start;
	}
	.index_left_column>div{
		margin-bottom:40px;
		text-align:left;
	}
	.index_right_column{
		width:55%;
		height:400px;
	}
	.index_title{
		font-size:50px;
	}
	.index_tip{
		font-size:25px;
		color:#999999;
	}
	.index_explain{
		font-size:20px;
		color:#666666;
	}
	.index_explain>div{
		margin-bottom:10px;
	}
	.sort_img1{
		background: url(../../assets/indexImg/banner10.jpg)no-repeat;
	}
	.sort_img2{
		background: url(../../assets/indexImg/banner11.jpg)no-repeat;
	}
	.sort_img3{
		background: url(../../assets/indexImg/banner12.jpg)no-repeat;
	}
	.sort_img4{
		background: url(../../assets/indexImg/banner13.jpg)no-repeat;
	}



	.trade{
		width:100%;
		height:750px;
		background: url(../../assets/indexImg/banner8.jpg)no-repeat;
		background-size:100% 100%;
		display:flex;
		align-items:center;
		justify-content:center;
	}
	.trade_box{
		max-width:1200px;
		min-width:1200px;
		width:65%;
		margin:auto;
	}
	.trade_test{
		color:#fff;
		font-size:30px;
		font-weight:bold;
		margin-bottom:100px;
	}
	.trade_column{
		width:100%;
		display:flex;
		justify-content:space-between;
		margin-bottom:10px;
	}
	.trade_img{
		height:170px;
	}


	.serve{
		margin-top:60px;
	}
	.serve>button{
		background-color: #00A0E9;
		color:#fff;
		padding:16px 40px;
		box-sizing:border-box;
		border-radius:5px;
		cursor:pointer;
	}

  @media screen and (max-width: 1200px){
    .banner{
      width: 100%;
      height: 600px;
    }
    .banner_text{
      width: 100%;
      font-size:25px;
    }
    .banner_sort{
      font-size:25px;
    }
    .banner_btn>button{
      font-size: 25px;
    }
    .index{
      width:100%;
      margin:auto;
    }
    .index_column{
      width:100%;
    }
    .index_title{
      font-size:40px;
    }
    .index_tip{
      font-size:30px;
    }
    .index_explain{
      font-size:25px;
    }
    .index_left_column{
      margin: 0 20px;
    }
    .index_right_column{
      margin: 0 20px;
    }
    .trade {
      width: 100%;
    }
  }
</style>


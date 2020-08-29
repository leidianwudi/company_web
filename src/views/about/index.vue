<template>
	<div>
		<div class="banner">
			<img src="@/assets/web5/banner.jpg" alt="">
		</div>
		
		<div class="column">
			<div class="title">关于我们</div>
			<div class="test">
				我们的定位是一家主要从事零售科技服务的企业。
				目前旗下拥有：营销官网、营销四合一商城、互动游戏、H5、企业邮箱、公众号助手、行业小程序、
				外包等全面帮助商家经营移动社交电商和全渠道新零售的SaaS软件产品，面向品牌商的商城系统，
				包含分销、推广员、拼团、砍价、秒杀、优惠券、会员积分等营销插件，
				商城打通12种语言+国内外支付接口。希望可以帮助每一位重视产品和服务的商家成功，
				并致力于成为商家服务领域里被信任的引领者。
			</div>
			<div class="test">
				未来，我们将打造一个完整的互联网营销闭环，为企业提供互联网营销工具、
				广告分发渠道、用户引导转化工具的全方位互联网营销解决方案。
				产品更新和安全维护支持，为新零售商家服务，我们为营销而生！
			</div>
			<div class="test">
				联系电话：13665051855
			</div>
			<div class="test">
				公司地址：福建省福州市鼓楼区，环球广场A区27楼 A座2705。
			</div>
		</div>
		
		<div class="sort">
			<div class="sort_column">
				<div class="left_column">
					<div class="sort_title" style="margin-bottom:10px;">企业文化</div>
					<div>
						<div>愿景</div>
						<div class="sort_explain">帮助商家打造互联网营销闭环</div>
					</div>
					
					<div>
						<div>使命</div>
						<div class="sort_explain">用科技成就10000家有文化的品牌，用智慧服务全球海内外千万商家。</div>
					</div>
					
					<div>
						<div>价值观</div>
						<div class="sort_explain">正直：尊重平等，积极乐观，待人以诚。</div>
						<div class="sort_explain">务实：崇尚实干，开放包容，实事求是，专注。</div>
						<div class="sort_explain">持续改进：热衷分享，敢于试错，乐于进取，拥抱变化。</div>
						<div class="sort_explain">坦诚合作：对事不对人，互信互助，团结友爱。</div>
					</div>
					
					<div>
						<div>经营理念</div>
						<div class="sort_explain">拒绝脸谱化，与客户一同成长，不断完善产品和服务，助力客户企业不断发展。</div>
					</div>
					
					<div>
						<div>管理理念</div>
						<div class="sort_explain">充分尊重和信任员工，建立互信合作的团队，达到个人和公司的双赢。</div>
					</div>

				</div>
				
				<div class="right_column sort_img"></div>
			</div>
		</div>
		
		<div class="column">
			<div class="title">安全解决方案</div>
			<div class="func">
				安全是互联网商业的基础
			</div>
			<div class="func">
				公司安全研发团队联合360团队、安全狗团队，强强联合，打造SAAAS防护检测到优化抵御为一体的安全壁垒
			</div>
			
			<div class="pc">
				<div class="app">
					<div class="shopping_img"><img src="@/assets/web5/gain1.jpg" alt=""></div>
					<div class="shopping_test">方案灵活</div>
					<div class="explain">用户可以根据自身情况</div>
					<div class="explain" style="margin-top:5px;">选择安全产品</div>
				</div>
				
				<div class="app">
					<div class="shopping_img"><img src="@/assets/web5/gain2.jpg" alt=""></div>
					<div class="shopping_test">兼容性强</div>
					<div class="explain">支持私有云、混合云的架构</div>
					<div class="explain" style="margin-top:5px;">多种选择</div>
				</div>
				
				<div class="app">
					<div class="shopping_img"><img src="@/assets/web5/gain3.jpg" alt=""></div>
					<div class="shopping_test">部署简单</div>
					<div class="explain">部署简单方便，不影响现有业务</div>
					<div class="explain" style="margin-top:5px;">无需改动代码</div>
				</div>
				
				<div class="app">
					<div class="shopping_img"><img src="@/assets/web5/gain4.jpg" alt=""></div>
					<div class="shopping_test">持续更新</div>
					<div class="explain">功能丰富且不断进行</div>
					<div class="explain" style="margin-top:5px;">更新和改进</div>
				</div>
			</div>
		</div>
		
	</div>
</template>

<script>
</script>

<style scoped>
	.banner{
		width:100%;
		min-width:1200px;
		height:300px;
	}
	
	
	.column{
		min-width:1200px;
		max-width:1200px;
		width:60%;
		margin:0 auto;
		padding:100px 0;
		box-sizing: border-box;
	}
	.title{
		font-size:30px;
		margin-bottom:30px;
		color:#333333;
	}
	.test{
		color:#666666;
		font-size:14px;
		text-align:left;
		line-height:2.3;
		text-indent:2em;
	}
	
	
	
	
	
	.sort{
		max-width:1200px;
		min-width:1200px;
		width:60%;
		margin:auto;
	}
	.sort_column{
		width:100%;
		height:400px;
		display:flex;
		justify-content:space-between;
		margin-bottom:100px;
	}
	.left_column{
		width:40%;
		height:400px;
		display:flex;
		flex-direction: column;
		justify-content:center;
		align-items: flex-start;
	}
	.left_column>div{
		margin-bottom:30px;
		text-align:left;
	}
	.right_column{
		width:50%;
		height:400px;
	}
	.sort_title{
		font-size:20px;
	}
	.sort_explain{
		font-size:14px;
	}
	.sort_explain>div{
		margin-bottom:10px;
	}
	.sort_img{
		background: url(../../assets/web5/about.jpg)no-repeat;
	}
	
	
	.func{
		text-align:center;
		color:#666666;
		font-size:14px;
	}
	
	.pc{
		display:flex;
		justify-content:space-between;
		flex-wrap:wrap;
		margin-top:100px;
	}
	.app{
		width:25%;
		margin-bottom:50px;
	}
	
	.shopping_box{
		padding:0 80px;
		box-sizing:border-box;
	}
	.shopping_img>img{
		width:auto;
		height:auto;
	}
	.shopping_test{
		margin-top:20px;
	}
	.explain{
		margin-top:10px;
		color:#888888;
		font-size:14px;
	}
</style>

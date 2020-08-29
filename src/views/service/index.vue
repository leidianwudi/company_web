<template>
	<div>
		<div class="banner">
			<img src="@/assets/web4/banner.jpg" alt="">
		</div>
		
		<div class="column support">
			<div class="support_box support_img1">
				<div class="support_title">功能更新</div>
				<div class="support_text">每日更新每周发布</div>
			</div>
			
			<div class="support_box support_img2">
				<div class="support_title">第三方发布</div>
				<div class="support_text">联合一站云技术团队潜心研发</div>
			</div>
			
			<div class="support_box support_img3">
				<div class="support_title">技术干货</div>
				<div class="support_text">网络技术教程干货</div>
			</div>
			
			<div class="support_box support_img4">
				<div class="support_title">公司通知</div>
				<div class="support_text">官方通知公告</div>
			</div>
		</div>
		
		<div class="column">
			<div class="news">
				<div class="news_title">网站优化的4个错误做法</div>
				<div class="news_test">
					随着互联网时代的快速飞进，怎么建立网站对于一些人来说已经不是什么难事，
					而另一件比较头疼的事情，是做优化，很多人在网站建立初期，
					会为了得到更多的网站流量，而去做网站优化。但是由于操之过急，急求成效，就…
				</div>
				<div>
					<el-tag type="info" class="tag">功能更新</el-tag>
				</div>
			</div>
			
			<div class="news">
				<div class="news_title">做网站推广，什么样的思路才是正确的？</div>
				<div class="news_test">
					网站推广相信大家已经很熟悉了。是网络营销中非常重要的一部分，
					但是做网站推广想要做好，有正确的推广思路是很重要的，
					这样才能够发挥出网站推广的作用。那么怎么做网站推广？
					什么样的思路才是正确的呢…
				</div>
				<div>
					<el-tag type="info" class="tag">功能更新</el-tag>
				</div>
			</div>
			
			<div class="news">
				<div class="news_title">建设网站时一定要写好标题</div>
				<div class="news_test">
					网站标题是自己建网站的一部分，很多时候用户都是根据网站标题来决定是否进入网站的，
					因此做好网站标题的优化工作非常重要。网站标题优化考验的是优化人员的编辑能力，
					主要注意的方面包括这几个1．网站标题关键词…
				</div>
				<div>
					<el-tag type="info" class="tag">第三方发布</el-tag>
				</div>
			</div>
			
			<div class="news">
				<div class="news_title">如何让更多人访问你的企业网站</div>
				<div class="news_test">
					网站建设怎么才能吸引网友来浏览自己的站点呢？
					大家把网站搭建起来自然是希望来访问的人越多越好，
					而实际上一个站点做起来了之后，真正进入到自己站点里面来访问的网友的数量可以说是寥寥无几。
					原因就在于你的这个…
				</div>
				<div>
					<el-tag type="info" class="tag">第三方发布</el-tag>
				</div>
			</div>
			
			<div class="news">
				<div class="news_title">怎样做才能够得到更好的进行公司品牌网站建设呢？</div>
				<div class="news_test">
					现在公司品牌网站建设越来越多，能够给大家提供更好的设计服务，并且具有非常创新的思维理念，可以满足…
				</div>
				<div>
					<el-tag type="info" class="tag">功能更新</el-tag>
					<el-tag type="info" class="tag">新闻</el-tag>
				</div>
			</div>
			
			<div class="news">
				<div class="news_title">商城网站建设是企业发展的基础与关键</div>
				<div class="news_test">
					商城网站建设是企业发展的基础与关键，也是品牌创立与发展的基石，
					好的产品能让企业有更好的发展路子，但是如果没有好的商城网站建设…
				</div>
				<div>
					<el-tag type="info" class="tag">功能更新</el-tag>
					<el-tag type="info" class="tag">新闻</el-tag>
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
		max-width: 1200px;
		min-width:1200px;
		width:60%;
		margin:0 auto;
		padding:100px 0;
		box-sizing: border-box;
		text-align:left;
	}
	.support{
		display:flex;
		justify-content:space-between;
		color:#fff;
	}
	.support_box{
		width:260px;
		height:120px;
		display:flex;
		align-items:center;
		flex-direction: column;
		justify-content: center;
		cursor: pointer;
	}
	.support_img1{
		background: url(../../assets/web4/sort1.jpg);
	}
	.support_img2{
		background: url(../../assets/web4/sort2.jpg);
	}
	.support_img3{
		background: url(../../assets/web4/sort3.jpg);
	}
	.support_img4{
		background: url(../../assets/web4/sort4.jpg);
	}
	.support_title{
		font-size:26px;
		font-weight:bold;
	}
	.support_text{
		margin-top:10px;
		font-size:14px;
	}
	.news{
		padding:20px 0;
		box-sizing:border-box;
		border-bottom:1px solid #F0F0F0;
	}
	.news_title{
		position:relative;
	}
	.news_title::after{
		content: '2019-06-26';
		display:inline-block;
		position:absolute;
		top:3px;
		right:10px;
	}
	.news_title:hover{
		color:#00A0E9;
		cursor:pointer;
	}
	.news_test{
		margin:20px 0;
		font-size:14px;
		color:#878787;
	}
	.tag{
		cursor:pointer;
		margin-right:10px;
	}
</style>

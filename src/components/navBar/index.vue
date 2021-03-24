<template>
	<div>
		<div class="head">
			<div class="company_name">福建福汇聚科技有限公司</div>
			<div class="nav_bar">
				<router-link to="/"  tag="span">首页</router-link>
				<router-link to="/product"  tag="span">产品中心</router-link>
				<router-link to=""  tag="span">案例中心</router-link>
				<router-link to=""  tag="span">服务支持</router-link>
				<router-link to=""  tag="span">关于我们</router-link>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style>
	.head{
		min-width:1200px;
		width:80%;
		margin:auto;
		height:1200px;
		display:flex;
		align-items:center;
		justify-content:space-between;

  }

	.company_name{
		color: #009FE9;
		font-size:40px;
		cursor:pointer;
	}
	.nav_bar{
		width:60%;
		display:flex;
	}
	.nav_bar>span{
		display:inline-block;
		width:20%;
		cursor:pointer;
	}

</style>

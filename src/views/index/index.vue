<template>
	<div class="">
		<div class="head">
			<div class="company_name">福建福汇聚科技有限公司</div>
			<div class="nav_bar">
				<router-link to="/home"  tag="span">首页</router-link>
				<router-link to="/product"  tag="span">产品中心</router-link>
				<router-link to="/case"  tag="span">案例中心</router-link>
				<router-link to="/service"  tag="span">服务支持</router-link>
				<router-link to="/about"  tag="span">关于我们</router-link>
			</div>
		</div>
		<router-view></router-view>
		<div class="footer">
			<div>©2020 - 福建福汇聚科技有限公司  版权所有</div>
		</div>
	</div>
</template>

<script>
  export default {
	components:{
	},
    data() {
      return {
		
      };
    },
    methods: {

    }
  }
</script>

<style scoped>	
	.head{
		max-width:1200px;
		min-width:1200px;
		width:80%;
		margin:auto;
		height:120px;
		display:flex;
		align-items:center;
		justify-content:space-between;
	}
	.company_name{
		color: #009FE9;
		font-size:32px;
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
	
	
	.footer{
		min-width:1200px;
		width:100%;
		height:60px;
		background-color:#333333;
		color:#8B939E;
		line-height:60px;
	}
</style>

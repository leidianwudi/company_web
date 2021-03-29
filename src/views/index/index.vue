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
			<!-- <div>©2020 - 福建福汇聚科技有限公司  版权所有</div> -->
			<div class="footer_column" style="margin-bottom:20px;">
				<div>公司名称：福建福汇聚科技有限公司</div>
				<div>地址：福建省福州市</div>
				<div>联系电话：13665051855</div>
			</div>

			<div class="footer_column">
				<div>
					KPPW2.2 Copyright © 2020 福建福汇聚科技有限公司.
					All rights reserved
				</div>
				<div style="color: #009FE9;">
					闽ICP备2020018107号-1
				</div>
			</div>
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
    font-size: 25px;
	}
  @media only screen and (max-width: 1200px){
    .head{
      height: 150px;
    }
    .company_name{
      font-size:40px;
      margin-left: 25px;
    }
    .nav_bar>span{
      font-size: 23px;
    }
    .footer{
      width: 100%;
    }
    .footer_column{
      font-size: 20px;
    }
    .footer{
      width:100%;
    }
    .footer_column{
      display:flex;
      justify-content:center;
    }
    .footer_column>div{
      margin-right:20px;
      font-size: 22px;
    }
  }

	.footer{
		min-width:1200px;
		width:100%;
		background-color:#333333;
		color:#8B939E;
		padding:20px 0;
		box-sizing:border-box;
	}
	.footer_column{
		display:flex;
		justify-content:center;
	}
	.footer_column>div{
		margin-right:20px;
	}
</style>

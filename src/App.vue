<template>
  <div id="app">
	<router-view></router-view>
  </div>
</template>

<style lang="stylus">
#app{
	font-family Avenir, Helvetica, Arial, sans-serif
	-webkit-font-smoothing antialiased
	-moz-osx-font-smoothing grayscale
	text-align center
	color #2c3e50
}
*{
	margin:0;
	padding:0;
}
img{
	width:100%;
	height:100%;
}
button{
	outline:none;
	border:none;
}
.active_navBar{
	color: #009FE9;
}
</style>

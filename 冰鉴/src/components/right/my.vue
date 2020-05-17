<template>
	<div id="app">
		<div class="tete">
			<h3>{{my.i}}</h3>
			<ul class="list">
				<li v-for="(item,index) in my.kao" :key="index">
					<a href="javaScript:;"></a>
					<span>{{item}}</span>
				</li>
			</ul>
			<div class="icon">
				<p v-for="(item,index) in my.txt" :key="index">
					<i>icon</i>
					<a class="hove" href="javaScript:;">{{item}}</a>
				</p>
			</div>
			<!-- 二维码 -->
			<div class="soad">
				<p>微信公众号：ice_kredit</p>
				<span>扫一扫关注我们</span>
				<img src="../../assets/img/Icekredit-QRcode-h.png" alt="">
			</div>
			<div class="Four-text-bottom">
				<div class="tt">
					<img src="../../assets/img/police.png" alt="" style="width: 20px; height: 20px;">
					<p class="size">{{my.ss}}</p>
				</div>

				<p class="top">{{my.ww}}</p>
			</div>
			
		</div>

	</div>
</template>

<script>
	import Bus from "../../assets/Bus.js"
	export default {
		data() {
			return {
				my:{
					i:"关于我们",
					kao: [
						"冰鉴简介", "团队管理", "新闻中心", "加入我们", "合作通道", "联系我们"
					],
					txt: ['+86-21-68592015', 'info@icekredit.com', '上海浦东新区商城路618号良友大厦4楼B207'],
					ss:"沪公网安备 31011502400399号",
					ww:"Copyright ©2015-2020 上海冰鉴信息科技有限公司 沪ICP备15035333号-1"
				}
				
			}
		},
		mounted() {
			Bus.$on("my",a=>{
				this.my = a
			})
		}
	}
</script>

<style scoped>
	#app {
		box-sizing: border-box;
		padding-top: 3.375rem;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100vw;
		/* height: 100vh; */
		background-color: #0d88d6;
	}

	.tete {
		box-sizing: border-box;
		padding: 0 2.9375rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
	}

	h3 {
		font-size: 2.125rem;
		font-weight: 400;
		color: #fff;
	}

	.list {
		box-sizing: border-box;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		margin-top: 2.5rem;
	}

	.list li {
		box-sizing: border-box;
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;
		width: 9.625rem;
		height: 10.8125rem;
		margin-right: 0.1875rem;
	}

	.list li:hover {
		border: 1px solid #fff;
		color: #fff;
	}

	.list li:hover span {
		color: #fff;
	}

	.list li span {
		margin-top: 20px;
		color: #A5E2FF;
		font-weight: 700;
	}

	.list li a {
		display: inline-block;
		width: 6.25rem;
		height: 6.25rem;
		background-image: url(../../assets/img/s6icb.png);
	}

	.list li:nth-child(1):hover a {
		background-position: 0px -100px;
	}

	.list li:nth-child(2) a {
		background-position: -100px 0px;
	}

	.list li:nth-child(2):hover a {
		background-position: -100px -100px;
	}

	.list li:nth-child(3) a {
		background-position: -200px 0px;
	}

	.list li:nth-child(3):hover a {
		background-position: -200px -100px;
	}

	.list li:nth-child(4) a {
		background-position: -300px 0px;
	}

	.list li:nth-child(4):hover a {
		background-position: -300px -100px;
	}

	.list li:nth-child(5) a {
		background-position: -400px 0px;
	}

	.list li:nth-child(5):hover a {
		background-position: -400px -100px;
	}

	.list li:nth-child(6) a {
		background-position: -500px 0px;
	}

	.list li:nth-child(6):hover a {
		background-position: -500px -100px;
	}

	.icon {
		display: flex;
		align-items: center;
		justify-content: space-around;
		width: 100%;
		margin-top: 20px;
		color: #A5E2FF;
		border-bottom: 1px solid #fff;
		border-top: 1px solid #fff;
	}
	.icon p{
		height: 3.25rem;
		line-height:3.25rem;;
	}
	.hove{
		color: #A5E2FF;
	}
	.hove:hover{
		color: #fff;
	}
	.Four-text-bottom{
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		 margin-top:40px;
		 color: #fff;
		 text-align: center;
		 height: 294px;
	}
	.Four-text-bottom .tt{
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 14px;
	}
	.Four-text-bottom .top{
		 margin-top:1.25rem;
	}
	.soad{display: none;}
	@media screen and (max-width:768px){
		h3{
			font-size: 1.5rem;
		}
		.list{
			display: flex;
			flex-wrap: wrap;
			margin-top: 0.5rem;
		}
		.list li{
			width: 50%;
			height: 130px;
			margin:0 0 0.625rem 0;
		}
		.icon{
			flex-direction: column;
			align-items:flex-start;
		}
		.icon p{
			height: 37px;
			line-height: 37px;
			font-size:14px;
		}
		/* .tete{
			height: 100vh;
		} */
		.soad{
			box-sizing: border-box;
			padding: 10px 0 20px 0;
			display: flex;
			flex-direction: column;
			justify-content: center;
			text-align: center;
			width: 100%;
			color: #A5E2FF;
			font-size: 13px;
			border-bottom: 1px solid #fff;
		}
		.soad img{
			width: 11.25rem;
			height: 11.25rem;
			margin: 0 auto;
		}
		.soad span{
			margin:10px 0;
		}
	}
</style>

<template>
	<div id="wrap">
		<div class="top">
			<img src="../assets/logo-top2c.png" style="width: 20%; height: 50%;margin-left: 0.625rem;" alt="">
			<i :class="[state?'iconfont icon-cha':'iconfont icon-sanheng']" style="font-size: 20px;color:#fff; margin-right:0.625rem;" @click="addClass"></i>
		</div>
		<transition name="v">
			<div class="top-nav" v-if="state">
				<p v-for="(item,index) in text" :key="index" :class="[0==index?'active':'']">
					<i :class="item.icon"></i>
					<span>{{item.txt}}</span>
				</p>
			</div>
		</transition>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				state:false,
				text:[
					{
						txt:"首页",
						icon:"iconfont icon-fangzi"
					},
					{
						txt:"核心优势",
						icon:"iconfont icon-hexin"
					},
					{
						txt:"冰鉴产品",
						icon:"iconfont icon-fangxing"
					},
					{
						txt:"关于我们",
						icon:"iconfont icon-wo"
					},
					{
						txt:"English",
						icon:""
					},
				]
			}
		},
		methods:{
			addClass(){
				this.state = !this.state
			}
		}
	}
</script>

<style scoped>
	#wrap{
		position: fixed;
		top:0;
		width: 100%;
		background-color: rgba(0,0,0,0.8);
		z-index: 111;
	}
	.top{
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		height: 3.125rem;
		border-bottom: 1px solid #ccc;
	}
	.top-nav{
		box-sizing: border-box;
		padding-left: 1.25rem;
		width: 100%;
		height: 12.8125rem;
	}
	.top-nav p{
		height: 2.5625rem;
		line-height: 2.5625rem;
		color: #fff;
		
	}
	.top-nav p.active{
		height: 2.5625rem;
		color: #00b4ed;
	}
	.top-nav p i{
		font-size: 18px;
	}
	.top-nav p span{
		margin-left: 0.625rem;
	}
	.v-enter{
		opacity: 0;
		height: 0px;
	}
	.v-enter-active{
		transition: all 2s;
	}
	.v-enter-to{
		opacity: 1;
		height: 205px;
	}
</style>

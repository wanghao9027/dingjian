<template>
	<div id="home">
		<Swrpa v-if="screenWidth>=765" :shu="num" @onSun="state"></Swrpa>
		<Top v-else></Top>
		
		<section class="floor-nav" id="floorNavList">
			<!-- 指示器 -->
			<ul class="nav-list">
				<transition-group tag="div" name="v">
					<li class="nav-list-item" :class="[num==index?'active':'']" v-for="(item,index) in 4" :key="index" @click="ss(index)"></li>
				</transition-group>
			</ul>
		</section>
		<!-- 内容区域 -->
		<sect :tite="num"></sect>

	</div>
</template>


<script>
	var TIMER = null
	import Swrpa from "../components/swrpa"
	import Top from "../components/headers.vue"
	import sect from "../components/right/rightBox.vue"
	export default {
		name: 'home',
		components: {
			Swrpa,
			sect,
			Top
		},
		data() {
			return {
				floorIndex: 1,
				screenWidth: document.documentElement.clientWidth, //屏幕宽度
				num:0
			}
		},
		mounted() {
			var _this = this;
			window.onresize = function() { // 定义窗口大小变更通知事件
				_this.screenWidth = document.documentElement.clientWidth; //窗口宽度
			};
		},
		methods:{
			ss(i){
				this.num = i
			},
			state(v){
				console.log(v)
				this.num = v
			}
		}
	}
</script>

<style scoped>
	.home{
		width: 100vw;
		height: 100vh;
	}
	h1 {
		text-align: center;
	}

	.floor-nav {
		position: absolute;
		top: 15.5rem;
		right: 3.125rem;
		z-index: 11111;
	}

	.floor-nav .nav-list {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 1.25rem;
	}
	.floor-nav .nav-list div{
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
		width: 100%;
	}

	.floor-nav .nav-list .nav-list-item {
		width: 0.625rem;
		height: 0.625rem;
		margin-top: 0.625rem;
		border-radius: 50%;
		background-color: rgba(0, 0, 0, .4);
		transition: all 2s;
	}

	.floor-nav .nav-list .nav-list-item.active,
	.floor-nav .nav-list .nav-list-item:hover {
		width: 15px;
		height: 15px;
		/* color: red; */
	}
	.floor-nav .nav-list .nav-list-item.active{
		background-color: #007AFF;
	}
	.v-enter,.v-leave-to{
		width: 1.25rem;
		height: 1.25rem;
		background-color: #007AFF;
	}
	.v-enter-active{
		transition:all 5s ease;
	}
	.v-leave-active{
		transition:all 0s;
	}
	.v-enter-to,.v-leave-active{
		width: 0.625rem;
		height: 0.625rem;
		background-color: rgba(0, 0, 0, .4);
	}
	    
</style>

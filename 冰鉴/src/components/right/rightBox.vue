<template>
	<div id="apps">
		<!-- <transition-group name="core"> -->
			<!-- 首页 -->
			<!-- <transition name="core"> -->
				<swrap v-if="tite==0"></swrap>
			<!-- </transition> -->
			
			<!-- 核心 -->
			
			<!-- <transition name="core"> -->
			<core v-if="tite==1"></core>
			<!-- </transition> -->
			
			<!-- 产品-->
			<product v-if="tite==2" key="2" :sas="tite"></product>
			<!-- 我们 -->
			<my v-if="tite==3" key="3"></my>
		<!-- </transition-group> -->
	</div>
	
</template>

<script>
	import swrap from "./swraps.vue"
	import my from "./my.vue"
	import core from "./core.vue"
	import product from "./product.vue"
	export default{
		props:['tite'],
		components:{
			swrap,
			my,
			core,
			product
		},
	}
</script>

<style scoped>
	#apps{
		/* width: 100vw; */
		height: 100vh;
	}
	/* #apps div{
		width: 100vw;
		height: 100vh;
	}
	.core-enter,.core-leave-to{
		opacity: 0;
		transform:translateY(-100%);
	}
	.core-enter-active,.core-leave-active{
		transition: all 0.8s ease-out;
	}
	.core-enter-to,.core-leave-active{
		opacity: 1;
		transform:translateY(0%);
	} */
</style>

<template>
	<div id="app">
		<transition name="v">
			<div class="tilte" v-if="sas==2">
				<h2 style="color: #586975;font-size: 2rem;font-weight: 400;">{{ice.h}}</h2>
				<p class="color" style="margin-top: 2.5rem;">{{ice.hi}}</p>
			</div>
		</transition>
		
		<transition name="v">
			<div class="icon" v-if="sas==2">
				<ul class="list">
					<li v-for="(item,index) in ice.img" :key="index">
						<!-- <img src="../../assets/img/3.jpg" alt=""> -->
						<img :src="item.icon" alt="">
						<a class="color" href="javeScript:;" style="margin-top: 1.25rem;">
							{{item.txt}}
						</a>
					</li>
				</ul>
				<span></span>
			</div>
		</transition>
		
	</div>
</template>

<script>
	import Bus from "../../assets/Bus.js"
	export default{
		props:['sas'],
		data(){
			return{
				ice:{
					h:"冰鉴产品",
					hi:"独立第三方的风控模型&解决方案。",
					img:[
						{
							icon:require('../../assets/img/3.jpg'),
							txt:"个人与企业风控产品"
						},
						{
							icon:require('../../assets/img/4.jpg'),
							txt:"银行与新金融风控产品"
						},{
							icon:require('../../assets/img/2.jpg'),
							txt:"模型与IT系统产品"
						},{
							icon:require('../../assets/img/1.jpg'),
							txt:"个人与企业风控产品"
						},{
							icon:require('../../assets/img/5.jpg'),
							txt:"中国与美国产品"
						}
					]
				}
				
			}
		},
		mounted() {
			Bus.$on("ice",a=>{
				this.ice = a
			})
		}
	}
</script>

<style scoped>
	.v-enter,.v-leave-to{
		display: none;
	} 
	.v-enter-active,.v-leave-active{
		transition: all 2s 5s;
	}
	.v-enter-to,.v-leave-active{
		display: block;
	}
	#app{
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100vw;
		height: 100vh;
		background-image:url(../../assets/img/bk-hp5.jpg);
		background-size:cover;
		
	}
	.tilte{
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	span{
		display: inline-block;
		width:3.125rem;
		height: 0.5rem;
		border-radius:1.25rem;
		background-color: #fff;
	}
	.color{
		font-size: 0.875rem;
		color: rgb(115, 134, 144);
	}
	img{
		width: 45%;
		height: 45%;
		display: block;
		transition: all 2s;
	}
	.icon{
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-top: 2.5rem;
		width: 80%;
	}
	.list{
		box-sizing: border-box;
		display: flex;
		width: 100%;
	}
	.list li{
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 9.75rem;
		height: 9.75rem;
		margin-right: 1rem;
	}
	.list li:hover img{
		width: 50%;
		height: 50%;
	}
	.list li:hover a{
		border-bottom: 1px solid #55A532;
	}
	@media screen and (max-width:768px){
		.list{
			justify-content: center;
		}
		.list li:nth-child(1){display: none;}
		.list li:nth-child(2){display: none;}	
		.list li:nth-child(3){display: none;}
	}
</style>

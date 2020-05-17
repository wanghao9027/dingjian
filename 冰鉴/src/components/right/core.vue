<template>
	<div id="app">
		<div class="conSecond">
			<div class="SecondLeft">
				<h2>{{core.h}}</h2>
				<p>{{core.hi}}：</p>
				<ul class="SecondLeft-ul">
					<li>{{core.ca}}</li>
					<li>{{core.ja}}</li>
					<li>{{core.gt}}</li>
					<li>{{core.zh}}</li>
					<li>{{core.zs}}</li>
				</ul>
			</div>
			<div class="SecondRight">
				<img :src="icm" alt="" style="width: 62px;height: 28px;">
				<div style=" width:100%;display: flex;">
					<p style="width: 2px;height: 100%;background: deepskyblue;"></p>
					<img src="../../assets/img/s201.png" alt="" v-show="imgShow">
					<img src="../../assets/img/s201-1.png" alt="" v-show="!imgShow">
				</div>
		
			</div>
		</div>
	</div>
	

</template>

<script>
	import Bus from "../../assets/Bus.js"
	export default {
		data(){
			return{
				imgShow:false,
				core:{
					h:"核心优势",
					hi:"冰鉴拥有硅谷优秀的机器学习建模算法，我们对机器学习和深度学习在金融科技领域的应用展开不断探索与追求。目前在机器学习方面的技术储备（指我司模型团队自主开发的核心算法的代码）包括:",
					ca:"随机森林，神经网络，支持向量机，决策树类的单个模型以及上述单个模型的bagging算法",
					ja:"适用于机器学习的cross validation算法",
					gt:"各种基础算法的stacking方法实现",
					zh:"决策树的gradient boosting machine 算法",
					zs:"基于SVM的半监督学习等。"
				},
				icm:require('../../assets/img/follow.gif'),
				sas:require('../../assets/img/s201.png'),
			}
		},
		mounted() {
			Bus.$on('core',a=>{
				this.core = a
			})
		}
	}
</script>

<style scoped>
	#app{
		/* width: 100vw; */
		height: 97vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.conSecond {
		width: 100%;
		height: 100%;
		background-size: 100% 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		box-sizing: border-box;
		padding: 50px 40px 50px 60px;
		background-color: rgb(242, 245, 248)
	}
	.SecondLeft {
		flex: 1;
	}

	.SecondLeft h2 {
		font-size: 32px;
		margin: 4.125rem 20px 40px 20px;
	}

	.SecondLeft p {
		width: 80%;
		font-size: 14px;
		color: #738690;
		line-height: 28px;
	}

	.SecondLeft-ul {
		font-size: 12px;
	}

	.SecondLeft-ul li {
		color: #738690;
		text-align: left;
		list-style-type: disc;
		margin-top: 10px;
		margin-left: 20px;
	}

	.SecondRight {
		flex: 1;
	}

	.SecondRight img {
		width: 100%;
		height: 90%;
	}
	@media screen and (max-width:768px){
		.conSecond{
			box-sizing: border-box;
			padding-top: 1.875rem;
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
			margin-top:1.875rem;
		}
		.SecondLeft{
			text-align: center;
		}
	}
</style>

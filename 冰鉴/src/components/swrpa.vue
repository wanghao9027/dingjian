<template>
	<header>
		<img src="../assets/logo-top2.png" alt="" v-if="shu==0">
		<img src="../assets/logo-top2c.png" alt="" v-if="shu!=0&&shu!=3">
		<img src="../assets/logo-top2.png" alt="" v-if="shu==3">
		<nav class="nav">
			<ul class="list">
				<li v-for="(item,index) in arr" :key="index" @click="staet(index)">
					<a href="JavaScript:;">
						<span v-if="shu==0">{{item.name}}<i :class="item.icon"></i></span>
						<span v-if="shu==3">{{item.name}}<i :class="item.icon"></i></span>
						<span class="absd" style="color: #333333;" :class="[shu==index?'ss':'']" v-if="shu!=0&&shu!=3">{{item.name}}<i
							 :class="item.icon"></i></span>

						<p class="block" :class="[shu==index?'active':'']" v-if="shu==0"></p>
						<p class="block backe" :class="[shu==index?'activess':'']" v-if="shu!=0&&shu!=3"></p>
						<p class="block" :class="[shu==index?'active':'']" v-if="shu==3"></p>
						<!-- 定位 -->
						<div class="list-li" v-if="item.tit.length">
							<p class="title" v-for="(items,index) in item.tit" :key="index">
								<a href="JavaScript:;">{{items}}</a>
							</p>
						</div>
					</a>

				</li>
				<li>
					<a href="JavaScript:;">
						<span v-if="shu==0" @click="changeLanguage()">{{$t('language.name')}}</span>
						<span v-if="shu==3" @click="changeLanguage()">{{$t('language.name')}}</span>
						<span class="absd" style="color: #333333;" :class="[shu==4?'ss':'']" v-if="shu!=0&&shu!=3" @click="changeLanguage()">{{$t('language.name')}}</span>

						<p class="block" :class="[shu==4?'active':'']" v-if="shu==0"></p>
						<p class="block backe" :class="[shu==4?'activess':'']" v-if="shu!=0&&shu!=3"></p>
						<p class="block" :class="[shu==4?'active':'']" v-if="shu==3"></p>
						<!-- <span>English</span>
						<p class="block"></p> -->
					</a>

				</li>
			</ul>

		</nav>
	</header>
</template>

<script>
	import Bus from "../assets/Bus.js"
	export default {
		props: ['shu'],
		data() {
			return {
				arr: [{
						name: "首页",
						tit: [],
						icon: ""
					},
					{
						name: "核心优势",
						tit: [],
						icon: ""
					},
					{
						name: "冰鉴产品",
						tit: ["个人", "银行", "标准", "模型", "中国"],
						icon: "el-icon-caret-bottom"
					},
					{
						name: "关于我们",
						tit: ["冰鉴", "管理", "新闻", "加入", "合作", "联系"],
						icon: "el-icon-caret-bottom"
					}
				],
				home:{},
				home1:{},
				core:{},
				ice:{},
				my:{}
			}
		},

		methods: {
			staet(i) {
				this.$emit("onSun", i)
			},
			changeLanguage() {
				this.$i18n.locale == 'zh' ? this.$i18n.locale = 'en' : this.$i18n.locale = 'zh' //设置中英文模式
				// console.log('ddd', this.$i18n)
				// console.log('ddds', this.$t('arr'))
				// console.log('ds', this.$i18n.locale)
				localStorage.setItem('languageSet', this.$i18n.locale) //将用户设置存储到localStorage以便用户下次打开时使用此设置
				//数组中的数据
				this.arr = this.$t('arr')
				//原型上的locale方法
				if (this.$i18n.locale == 'zh') {
					console.log("zh",this.$i18n.messages.zh)
					//所有的数据
					let datas = this.$i18n.messages.zh
					this.arr = datas.arr
					this.core = datas.core
					this.ice = datas.ice
					this.home = datas.home
					this.my = datas.my
					// this.home = datas.home1
				} else {
					this.$i18n.locale == 'en'
					//所有的数据
					console.log("en",this.$i18n.messages.zh)
					let datas = this.$i18n.messages.en
					this.arr = datas.arr
					this.home = datas.home
					this.core = datas.core
					this.ice = datas.ice
					this.my = datas.my
					// this.home = datas.home1
					console.log('arr==>',this.ice)
				}
				Bus.$emit("set",this.home)
				Bus.$emit("core",this.core)
				Bus.$emit("ice",this.ice)
				Bus.$emit("my",this.my)
			},

			remind() {
				this.$toast(this.$t('user.loginUsername'))
			}
		}
	}
</script>

<style lang="scss" scoped="scoped">
	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 4.9375rem;
		z-index: 11;

		.nav {
			height: 4.9375rem;

			.list {
				box-sizing: border-box;
				padding: 0.0625rem;
				height: 100%;
				display: flex;
				justify-content: space-between;
				align-items: center;

				li {
					height: 100%;
					margin-right: 1.625rem;
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;

					a {
						position: relative;
						width: 100%;
						height: 100%;
						box-sizing: border-box;
						display: block;
						display: flex;
						flex-direction: column;
						justify-content: center;
						align-items: center;
						color: #FFFFFF;

						span.ss {
							color: #007AFF !important;
						}

						.block {
							width: 0%;
							height: 0.125rem;
							margin-top: 0.1875rem;
							opacity: 0;
							border-bottom: 4px solid #fff;
							transition: width 2s;

							&.active {
								width: 110%;
								opacity: 1;
							}

							&.activess {
								border-bottom: 4px solid #007AFF;
								width: 110%;
								opacity: 1;
							}

						}

						.list-li {
							position: absolute;
							left: -3.875rem;
							top: 3.3125rem;
							width: 14.125rem;
							background-color: rgba(0, 0, 0, .5);
							display: none;

							.title {
								width: 14.125rem;
								height: 3.875rem;

								a {
									display: inline-block;
									width: 100%;
									height: 100%;
									text-align: center;
									line-height: 3.875rem;
									color: #fff;
								}

								a:hover {
									background-color: #0E98EF;
								}

							}
						}
					}

					a:hover .block {
						width: 110%;
						opacity: 1;
					}

					a:hover span.absd {
						color: #007AFF;
					}

					a:hover .backe {
						border-bottom: 4px solid #007AFF;
						width: 110%;
						opacity: 1;
					}

					a:hover .list-li {
						display: block;
					}
				}

			}
		}

	}
</style>

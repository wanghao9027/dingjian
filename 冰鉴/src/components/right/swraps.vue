<template>
	<div id="wrap">
		<swiper class="swiper" :options="swiperOption" ref="mySwiper">
			<!-- slides -->
			<swiper-slide class="li">
				<div class="back">
					<div class="anstion">
						<h1>{{home.top}}</h1>
						<div class="title">
							{{home.txt}}。
						</div>
						<p>
							{{home.ix}}
						</p>
					</div>
				</div>
			</swiper-slide>
			<swiper-slide class="li">
				<div class="back">
					<div class="anstion">
						<h1>{{home.home1.top}}</h1>
						<div class="title">
							{{home.home1.txt}}
						</div>
						<p>
							{{home.home1.ix}}
						</p>
					</div>
				</div>
			</swiper-slide>
			<swiper-slide class="list-li">
				<div class="backs">
					<div class="anstions">
						<div class="active">
							<h1>AI Lab</h1>
							<div class="title" style="color:rgba(255, 255, 255, 0.7);">
							{{home.q}}
							</div>
						</div>
						<img style="width:50%;height: 50%;" src="../../assets/img/home_3_pic.png" alt="">

					</div>
				</div>
			</swiper-slide>
			<swiper-slide class="li">
				<div class="back">
					<div class="anstion">
						<h1>{{home.to}}</h1>
						<div class="title">{{home.txts}}</div>
						<p>
							{{home.ix}}
						</p>
					</div>
				</div>
			</swiper-slide>
			<swiper-slide class="li">
				<div class="back">
					<div class="anstion">
						<h1>{{home.title}}</h1>
						<div class="title">
							{{home.tst}}。
						</div>
						<p>
							{{home.ix}}
						</p>
					</div>
				</div>
			</swiper-slide>

			<div class="swiper-pagination" slot="pagination">

			</div>
			<div class="swiper-button-prev" slot="button-prev">

			</div>
			<div class="swiper-button-next" slot="button-next">

			</div>
		</swiper>
	</div>
</template>

<script>
	import Bus from "../../assets/Bus.js"
	export default {

		data() {
			return {
				Width: document.documentElement.clientWidth, //屏幕宽度
				swiperOption: {
					// spaceBetween: 30, //板块间距
					loop: true, //无缝轮播
					centeredSlides: true,
					autoplay: { //自动轮播
						delay: 3000,
						disableOnInteraction: false,
					},
					pagination: {
						el: '.swiper-pagination',
						clickable: true,
					},
					navigation: {
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev',
					}
				},
				home:{
					top:"冰鉴科技完成3.35亿元Pre C轮融资",
					txt:"本轮融资由上海国际集团旗下的国和投资领投，云启资本等其他老股东继续跟投。本轮融资金额超过冰鉴之前3.15亿元的融资总和.",
					ix:"查看详情",
					home1:{
						top:"冰鉴科技2020校园招聘开始啦！",
						txt:"我们将在南京大学、西安交大、电子科技大学举办校园宣讲会，也欢迎线上简历投递！有AI有梦想，有你有未来。我们在这里，等你一起鉴证未来！",
						ix:"查看详情"
					},
					q:"引进大量毕业于卡内基梅隆大学、斯坦福大学、哥伦比亚大学、普渡大学、加州大学伯克利分校等知名院校的博士，从事深度学习、自然语言处理、知识图谱、语音识别、计算机视觉等技术研究，在人才培养、学术研究、成果转化、商业应用等方面进行深度探索。同时，加强与国内外科研院校合作，共同助推中国人工智能技术取得突破性的发展",
					to:"冰鉴科技亮相人工智能国际顶级峰会IJCAI",
					txts:"作为人工智能领域最重要和最顶级的人工智能学术会议，2019IJCAI在澳门隆重举行。适逢IJCAI50周年与中国人工智能发展40周年，今年的IJCAI备受瞩目，超过3000名AI学者与业界领袖云集中国澳门，共同探讨人工智能的现状和未来。冰鉴科技创始人、董事长兼CEO顾凌云博士受邀发表演讲，分享了冰鉴科技在AI领域的探索与实践",	
					title:"冰鉴科技荣登世界人工智能大会“中国AI商业落地初创企业100强”",
					tst:"近日，由国家发改委、科技部、工信部、网信办、中国科学院、中国工程院和上海市人民政府共同主办的2019世界人工智能大会在上海召开。经过激烈角逐，人工智能风控专家——冰鉴科技脱颖而出，登上中国AI商业落地初创企业百强榜"
				}
			}
		},
		computed: {
			swiper() {
				return this.$refs.mySwiper.$swiper
			}
		},
		watch: {
			'screenWidth': function(val) { //监听屏幕宽度变化
				var oIframe = document.getElementById(divId);
				oIframe.style.width = (Number(val) - 120) + 'px'; //'120'是页面布局调整，可去除

			}
		},
		mounted() {
			let _this = this;
			window.onresize = function() { // 定义窗口大小变更通知事件
				_this.Width = document.documentElement.clientWidth; //窗口宽度
			};

			//鼠标覆盖停止自动切换
			this.swiper.el.onmouseover = function() {
				this.swiper.autoplay.stop();
			}
			//鼠标离开开始自动切换
			this.swiper.el.onmouseout = function() {
				this.swiper.autoplay.start();
			},
			Bus.$on('set',a=>{
				this.home = a
			})
			// Bus.$on('set1',c=>{
			// 	console.log(c)
			// 	this.home1 = c
			// })
		}
	}
</script>

<style scoped lang="scss">
	@keyframes tata {
		0% {
			background-size:100% 100%;
		}

		100% {
			background-size: 120% 120%;
		}
	}

	@keyframes tatas {
		0% {
			opacity: 0;
		}

		100% {
			opacity: 1;
		}
	}

	#wrap {
		width: 100%;
		height: 100vh;

		.swiper {
			width: 100%;

			.swiper-slide-active {
				.back {
					animation: tata 3s ease;
					.anstion {
						animation: tatas 3s ease-in-out;
					}
				}

				.backs {
					.anstions {
						animation: tatas 3s ease-in-out !important;
					}
				}
			}

			.li {
				width: 100%;
				height: 100vh;

				.back {
					width: 100%;
					height: 100%;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					flex-wrap: wrap;
					color: #FFFFFF;

					.anstion {
						display: flex;
						flex-direction: column;
						justify-content: center;
						align-items: center;
						flex-wrap: wrap;
						width: 80%;
						text-align: center;

						.title {
							width: 80%;
							margin-top: 1.25rem;
							color: rgba(255, 255, 255, 0.7);
						}

						p {
							width: 12.5rem;
							height: 3.75rem;
							margin-top: 1.25rem;
							line-height: 3.75rem;
							font-size: 1.25rem;
							font-weight: 500;
							border: 1px solid #fff;
							border-top-left-radius: 2em;
							border-top-right-radius: 2em;
							border-bottom-left-radius: 2em;
							border-bottom-right-radius: 2em;
							cursor: pointer
						}

						p:hover {
							color: #0088DE;
							background-color: #fff;
						}
					}

				}

				.back:nth-child(1) {
					background-image: url(../../assets/img/icekredit-banner-01.jpg);
					background-repeat: no-repeat;
					background-size: cover;
					background-position-x: center;
				}

				&:nth-child(3) {
					.back {
						background-image: url(../../assets/img/campus2018.jpg);
						background-repeat: no-repeat;
						background-size: cover;
						background-position-x: center;
						.title {
							margin-top: 1.25rem;
						}

						p {
							width: 12.5rem;
							height: 3.75rem;
							margin-top: 1.25rem;
							line-height: 3.75rem;
							font-size: 1.25rem;
							font-weight: 500;
							border: 1px solid #fff;
							border-top-left-radius: 2em;
							border-top-right-radius: 2em;
							border-bottom-left-radius: 2em;
							border-bottom-right-radius: 2em;
							cursor: pointer
						}

						p:hover {
							color: #0088DE;
							background-color: #fff;
						}
					}
				}

				&:nth-child(5) {
					.back {
						background-image: url(../../assets/img/bg4.jpg);
						background-repeat: no-repeat;
						background-size: cover;
					}
				}

				&:nth-child(6) {
					.back {
						background-image: url(../../assets/img/beijing.jpg);
						background-repeat: no-repeat;
						background-size: cover;
					}
				}

			}

			.list-li {
				width: 100%;
				height: 100vh;

				.backs {
					display: flex;
					justify-content: center;
					align-items: center;
					width: 100%;
					height: 100%;
					color: #FFFFFF;
					background-color: #007AFF;
					.anstions {
						width: 73%;
						margin: 0 auto;
						display: flex;
						justify-content: space-around;
						align-items: center;
						@media screen and (min-width:586px) and (max-width:778px){
							flex-direction: column-reverse;
							justify-content: center;
						}
						.active {
							width: 40%;
							@media screen and (min-width:586px) and (max-width:778px){
								width: 100%;
								text-align:center;
								
							}
							.title{
								// font-size: 1.25rem;
								@media screen and (min-width:586px) and (max-width:778px){
									font-size: 0.875rem;
								}
								
							}
						}
						
					}
				}
			}

		}
	}
</style>

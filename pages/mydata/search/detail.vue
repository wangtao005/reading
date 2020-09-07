<template>
	<view class="wrapper">
		<view v-if="isHistory" class="history-box">
			<view v-if="historyList.length > 0">
				<view class="history-title">
					<text>搜索历史</text>
					<text class="uni-icon uni-icon-trash" @click="clearSearch"></text>
				</view>
				<view class="history-content">
					<view class="history-item" v-for="(item, index) in historyList" :key="index">
						{{ item.name }}
					</view>
				</view>
			</view>
			<view v-else class="no-data">您还没有历史记录</view>
		</view>
		<view v-else class="history-box">
			<view v-if="bookData.length > 0" class="history-list-box">
				<view class="history-list-item" v-for="(item, index) in bookData" :key="index" @click="listTap(item)">

					<view class="view_ime">
						<image class="img-view" :src="item.bookImgUrl"></image>
					</view>

					<view class="view_data">
						<rich-text :nodes="item.colorBookName" class="text_name"></rich-text>
						<rich-text :nodes="item.bookUrl" class="hidden_text"></rich-text>
						<rich-text :nodes="item.bookChapter" class="text_ch"></rich-text>
						<rich-text :nodes="item.newbookUrl" class="hidden_text"></rich-text>
						<view>
							<text class="text_au">{{ item.bookAuthor}}</text>
							<text class="text_up">{{ item.bookUpdate}}</text>
						</view>
					</view>
				</view>
			</view>
			<view v-else class="no-data">没有搜索到相关内容</view>
		</view>
	</view>
</template>
<!-- 搜索列表 -->
<script>
	import utilMap from '@/components/amap-wx/js/util.js';
	import urlData from './urlData.js';
	import util from './util.js';
	import {
		getBookInfo_big,
		getBookInfo_biqu
	} from './searchHtml.js'
	import {
		getStrInfo,
		getObjectInfo
	} from '../search/bookBaseInfo.js'
	export default {
		data() {
			return {
				historyList: [],
				isHistory: true,
				list: [],
				flng: true,
				timer: null,
				bookData: []
			};
		},
		onLoad() {
			// 本示例用的是高德 sdk ，请根据具体需求换成自己的服务器接口。
			this.amapPlugin = utilMap.mapInit();
			this.historyList = uni.getStorageSync('search:history');
		},
		methods: {
			/**
			 * 列表点击
			 */
			listTap(item) {
				let info = getStrInfo(item);
				uni.navigateTo({
					url: '/pages/mydata/search/resume' + info
				})

				item = JSON.parse(JSON.stringify(item));
				// 如果当前是历史搜索页面 ，那么点击不储存,直接 跳转
				if (this.history) {
					return;
				} else {
					this.isHistory = true;

					// 去做一些相关搜索功能 ，这里直接返回到上一个页面
					// 点击列表存储搜索数据
					utilMap.setHistory(item);
					uni.navigateBack();
				}
			},
			/**
			 * 清理历史搜索数据
			 */
			clearSearch() {
				uni.showModal({
					title: '提示',
					content: '是否清理全部搜索历史？该操作不可逆。',
					success: res => {
						if (res.confirm) {
							this.historyList = utilMap.removeHistory();
						}
					}
				});
			},
			/**
			 * 关键字搜索
			 */
			getInputtips(val) {
				let _this = this;
				this.bookData = [];
				let urls = urlData.resourceUrlList;
				for (let index in urls) {
					let data = {};
					let urldata = urls[index];
					let url = urldata.url; //搜索地址
					let name = urldata.name; //网站名称
					let code = urldata.code; //网站编号
					let homeUrl = urldata.homeUrl; //网站地址
					let keyword = urldata.key; //关键字名称
					data[keyword] = val;
					uni.request({
						url: url,
						data: data,
						success: (e) => {
							let str = e.data;
							if (code == 1) {
								var mydata = getBookInfo_biqu(str, homeUrl, code);
								for (var i = 0 ;i<mydata.length;i++) {
									var colorBookName = util.serachNmme(val , mydata[i].bookName);
									mydata[i].colorBookName = colorBookName;
								}
								_this.bookData = [..._this.bookData, ...mydata];
							} else if (code == 2) {
								var mydata = getBookInfo_big(str, code);
								for (var i = 0 ;i<mydata.length;i++) {
									var colorBookName = util.serachNmme(val ,mydata[i].bookName);
									mydata[i].colorBookName = colorBookName;
								}
								_this.bookData = [..._this.bookData, ...mydata]; //拷贝数据
							}
						}
					});
				}

				this.amapPlugin.getInputtips({
					keywords: val,
					city: '北京',
					success: data => {
						let dataObj = data.tips;
						// 处理返回数据文字高亮
						dataObj.map(item => {
							return utilMap.dataHandle(item, val);
						});
						//成功回调
						_this.historyList = dataObj;
					},
					fail: info => {
						//失败回调
						console.log(info);
					}
				});
			}
		},
		/**
		 * 当 searchInput 输入时触发
		 */
		onNavigationBarSearchInputChanged(e) {
			let text = e.text;
			if (!text) {
				this.isHistory = true;
				this.historyList = [];
				this.historyList = uni.getStorageSync('search:history');

				return;
			} else {
				this.isHistory = false;
				this.getInputtips(text);
			}
		},
		/**
		 * 点击软键盘搜索按键触发
		 */
		onNavigationBarSearchInputConfirmed(e) {
			let text = e.text;
			if (!text) {
				this.isHistory = true;
				this.historyList = [];
				this.historyList = uni.getStorageSync('search:history');
				uni.showModal({
					title: '提示',
					content: '请输入内容。',
					success: res => {
						if (res.confirm) {}
					}
				});
				return;
			} else {
				uni.showModal({
					title: '提示',
					content: `您输入的内容为"${text}",如果点击确定,将记录到历史搜索,并返回.如果取消不做操作`,
					success: res => {
						if (res.confirm) {
							utilMap.setHistory(text);
							uni.navigateBack();
						}
					}
				});
			}
		},
		/**
		 *  点击导航栏 buttons 时触发
		 */
		onNavigationBarButtonTap(e) {
			 
		} 
	};
</script>

<style>
	.history-title {
		display: flex;
		justify-content: space-between;
		padding: 20rpx 30rpx;
		padding-bottom: 0;
		font-size: 34rpx;
		color: #333;
	}

	.history-title .uni-icon {
		font-size: 40rpx;
	}

	.history-content {
		display: flex;
		flex-wrap: wrap;
		padding: 15rpx;
	}

	.history-item {
		padding: 4rpx 35rpx;
		border: 1px #f1f1f1 solid;
		background: #fff;
		border-radius: 50rpx;
		margin: 12rpx 10rpx;
		color: #999;
	}

	.history-list-box {
		/* margin: 10rpx 0; */
	}

	.history-list-item {
		padding: 30rpx 0;
		margin-left: 30rpx;
		border-bottom: 1px #EEEEEE solid;
		font-size: 28rpx;
	}

	.no-data {
		text-align: center;
		color: #999;
		margin: 100rpx;
	}

	.hidden_text {
		display: none;
	}

	.view_ime {
		width: 120rpx;
		height: 150rpx;
		background-color: #007AFF;
		float: left;
	}

	.img-view {
		width: 135rpx;
		height: 170rpx;
		float: left;
		background-image: url(../../../static/bookImg/nocover.jpg);
		background-size: 135rpx 170rpx;
		;
	}

	.view_data {
		margin-left: 160rpx;
	}

	.text_au {
		width: 260rpx;
		display: inline-block;
		margin-right: 10rpx;
	}

	.text_ch {
		display: inline-block;
		margin-top: 30rpx;
	}

	.text_name {
		font-size: 30rpx;
		font-weight: bold;
	}
</style>

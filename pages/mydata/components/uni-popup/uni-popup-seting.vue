<template>
	<view class="uni-popup-share">
		<!-- <view class="uni-share-title"><text class="uni-share-title-text">{{title}}</text></view> -->
		<view class="uni-share-content">
			<view class="uni-share-content-box">
				<!-- <view class="uni-share-content-item"  style="display: none" v-for="(item,index) in colorList" :key="index" @click.stop="select(item,index)">
					<view class="uni-share-view" :style="{backgroundColor: item.color}"></view>
					<text class="uni-share-text">{{item.text}}</text>
				</view> -->


			<!-- 	<view style="flex-direction: row;">
					<view class="uni-share-content-item" style="width:50rpx;margin-left: 20rpx;">
						<view class="uni-share-view-b" style="padding-top: 13rpx;padding-left: 15rpx;">
							<image class="uni-share-view-b" style="width: 50rpx;height: 50rpx;" src="/static/myicon/lightSm.png"></image>
						</view>
					</view>
					<view class="uni-share-content-item" :style="{width:windowWidth}">
						<view :style="{width:windowWidth}">
							<slider :value="sliderValue" @change="sliderChange" min="0" max="100" activeColor="#FFCC33" backgroundColor="#000000"
							 block-color="#8A6DE9" block-size="18" show-value />
						</view>
					</view>
					<view class="uni-share-content-item" style="width:60rpx;">
						<view class="uni-share-view-b" style="padding-top: 5rpx;">
							<image class="uni-share-view-b" style="width: 65rpx;height: 65rpx;" src="/static/myicon/lightBig.png"></image>
						</view>
					</view>
					<view class="uni-share-content-item"  style="width: 80px;" >
						<view class="uni-share-view" style="width: 40px;align-items: center;" @click="setBrightSys">
							<text class="uni-share-text">系统</text>
						</view>
					</view>
				</view> -->
				<view class="setA">
					<view class="uni-share-content-item">
						<view class="uni-share-view" style="align-items: center;">
							<image class="uni-share-view-b" src="/static/myicon/sim.png"></image>
						</view>
					</view>
					<view class="uni-share-content-item">
						<text class="uni-share-view-b" style="padding-top: 15rpx;">14</text>
					</view>
					<view class="uni-share-content-item">
						<view class="uni-share-view" style="align-items: center;">
							<image mode="aspectFit" class="uni-share-view-b" src="/static/myicon/big.png"></image>
						</view>
					</view>
					<view class="uni-share-content-item">
						<view class="uni-share-view" style="align-items: center;width: 40px;">
							<text class="uni-share-text">默认</text>
						</view>
					</view>
				</view>



				<view style="flex-direction: row;">
					<view class="uni-share-content-item">
						<view class="uni-share-view-b">
							<image class="uni-share-view-b" src="/static/myicon/list.png"></image>
						</view>
						<text class="uni-share-text">目录</text>
					</view>
					<view class="uni-share-content-item">
						<view class="uni-share-view-b">
							<image class="uni-share-view-b" src="/static/myicon/up.png"></image>
						</view>
						<text class="uni-share-text">上一章</text>
					</view>
					<view class="uni-share-content-item">
						<view class="uni-share-view-b">
							<image class="uni-share-view-b" src="/static/myicon/down.png"></image>
						</view>
						<text class="uni-share-text">下一章</text>
					</view>
					<view class="uni-share-content-item">
						<view class="uni-share-view-b">
							<image class="uni-share-view-b" src="/static/myicon/setBlank.png"></image>
						</view>
						<text class="uni-share-text">设置</text>
					</view>
				</view>
			</view>
		</view>
		<!-- 	<view class="uni-share-button-box">
			<button class="uni-share-button" @click="close">取消</button>
		</view> -->
	</view>
</template>

<script>
	export default {
		name: 'UniPopupShare',
		props: {
			// title: {
			// 	// type: String,
			// 	// default: '背景颜色'
			// }
		},
		inject: ['popup'],
		data() {
			return {
				windowWidth: "",
				sliderValue:25,
				colorList: [{
					'color': 'rgb(238, 250, 238)',
					'text': '淡绿',
				}, {
					'color': 'rgb(204, 232, 207)',
					'text': '草绿'

				}, {
					'color': 'rgb(233, 250, 255)',
					'text': '淡蓝'
				}, {
					'color': 'rgb(255, 255, 237)',
					'text': '明黄'

				}, {
					'color': 'rgb(245, 245, 220)',
					'text': '米色'
				}, {
					'color': 'rgb(210, 180, 140)',
					'text': '茶色',
				}, {
					'color': 'rgb(239, 239, 239)',
					'text': '深灰'
				}, {
					'color': '',
					'text': '原背景色'
				}]
			}
		},
		created() {
			this.windowWidth = (uni.getSystemInfoSync().windowWidth) * 0.6.toString() + "px";
		},
		methods: {
			/**
			 * 选择内容
			 */
			select(item, index) {
				this.$emit('select', {
					item,
					index
				}, () => {
					this.popup.close()
				})
			},
			/**
			 * 关闭窗口
			 */
			close() {
				this.popup.close()
			},
		// setBrightSys() {//屏幕亮度调节
		// 	var _this = this;
		// 	uni.getScreenBrightness({
		// 		success: function(res) {
		// 			_this.sliderValue =  parseInt(res.value*25);
					
		// 			console.log('success'+_this.sliderValue);
		// 			console.log('success'+res.value);
					
		// 			uni.setScreenBrightness({
		// 			    value: 0.5,
		// 			    success: function () {
		// 			        console.log('success');
		// 			    }
		// 			});
		// 		}
		// 	});
		// }
		}
	}
</script>
<style lang="scss" scoped>
	.uni-popup-share {
		background-color: #fff;
	}

	.uni-share-title {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		align-items: center;
		justify-content: center;
		height: 40px;
	}

	.uni-share-title-text {
		font-size: 14px;
		color: #666;
	}

	.uni-share-content {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		justify-content: center;
		padding-top: 10px;
	}

	.uni-share-content-box {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		flex-wrap: wrap;
		width: 360px;
	}

	.uni-share-content-item {
		width: 90px;
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: column;
		justify-content: center;
		padding: 10px 0;
		align-items: center;
	}

	.uni-share-content-item_a {
		width: 90px;
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: column;
		justify-content: center;
		padding: 7px 0;
		align-items: center;
	}

	.uni-share-content-item:active {
		background-color: #f5f5f5;
	}

	.uni-share-view {
		width: 60px;
		height: 30px;
		border-color: #3B4144;
		border-width: 1rpx;
		border-radius: 5px;
	}

	.uni-share-view-b {
		width: 35px;
		height: 35px;
	}

	.uni-share-text {
		margin-top: 5px;
		font-size: 14px;
		color: #3B4144;
	}

	.uni-share-button-box {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		padding: 10px 15px;
	}

	.uni-share-button {
		flex: 1;
		border-radius: 50px;
		color: #666;
		font-size: 16px;
	}

	.uni-share-button::after {
		border-radius: 50px;
	}

	.setA {
		flex-direction: row;
		// border-width: 1rpx;
		// border-radius: 5px;
		align-items: center;
		justify-content: center;
	}
</style>

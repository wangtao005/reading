<template>
	<view class="uni-popup-share">
		<!-- <view class="uni-share-title"><text class="uni-share-title-text">{{title}}</text></view> -->
		<view class="uni-share-content">
			<view class="uni-share-content-box">
				<view>
					<view style="flex-direction: row;">
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
						<view class="uni-share-content-item" style="width: 80px;">
							<view class="uni-share-view" style="width: 40px;align-items: center;padding-top: 5rpx;" @click="setBrightSys">
								<text class="uni-share-text">系统</text>
							</view>
						</view>
					</view>

					<view class="setA">
						<view class="uni-share-content-item" @click="menuSelect('bookSize_sim','')">
							<view class="uni-share-view" style="align-items: center;">
								<image class="uni-share-view-b" src="/static/myicon/sim.png"></image>
							</view>
						</view>
						<view class="uni-share-content-item">
							<text class="uni-share-view-b" style="padding-top: 15rpx;">{{fontSize}}</text>
						</view>
						<view class="uni-share-content-item" @click="menuSelect('bookSize_big','')">
							<view class="uni-share-view" style="align-items: center;">
								<image mode="aspectFit" class="uni-share-view-b" src="/static/myicon/big.png"></image>
							</view>
						</view>
						<view class="uni-share-content-item" @click="menuSelect('bookSize_default','')">
							<view class="uni-share-view" style="align-items: center;width: 40px;padding-top: 5rpx;">
								<text class="uni-share-text">默认</text>
							</view>
						</view>
					</view>
				</view>

				<view style="flex-direction: row;">
					<view class="uni-share-content-item" @click="menuSelect('bookList','')">
						<view class="uni-share-view-b">
							<image class="uni-share-view-b" src="/static/myicon/list.png"></image>
						</view>
						<text class="uni-share-text">目录</text>
					</view>
					<view class="uni-share-content-item" @click="menuSelect('up','')">
						<view class="uni-share-view-b">
							<image class="uni-share-view-b" src="/static/myicon/up.png"></image>
						</view>
						<text class="uni-share-text">上一章</text>
					</view>
					<view class="uni-share-content-item" @click="menuSelect('down','')">
						<view class="uni-share-view-b">
							<image class="uni-share-view-b" src="/static/myicon/down.png"></image>
						</view>
						<text class="uni-share-text">下一章</text>
					</view>
					<view class="uni-share-content-item" @click="menuSelect('set','')">
						<view class="uni-share-view-b">
							<image class="uni-share-view-b" src="/static/myicon/bgColor.png"></image>
						</view>
						<text class="uni-share-text">背景色</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'UniPopupShare',
		props: {},
		inject: ['popup'],
		data() {
			return {
				windowWidth: "",
				sliderValue: 25,
				fontSize: 20,
			}
		},
		created() {
			this.windowWidth = (uni.getSystemInfoSync().windowWidth) * 0.6.toString() + "px";
			let mySize = uni.getStorageSync("fontSize");
			this.fontSize = mySize != '' ? mySize : 20;
		},
		methods: {
			menuSelect(type, value) { //类别,值,fontSize_sim,fontSize_big,bookSize_default    目录:bookList  上一章:up 下一章:down,设置set
				if (type === 'bookSize_sim') {
					if (this.fontSize - 1 >= 12) {
						this.fontSize = this.fontSize - 1;
					}
				} else if (type === 'bookSize_big') {
					this.fontSize = this.fontSize + 1;
				} else if (type === 'bookSize_default') {
					this.fontSize = 20;
				}
				value = this.fontSize;
				uni.setStorageSync("fontSize", value);
				this.$emit('menuSelect', {
					type,
					value
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

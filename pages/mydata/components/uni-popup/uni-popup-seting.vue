<template>
	<view class="uni-popup-share">
		<view class="uni-share-title"><text class="uni-share-title-text">{{title}}</text></view>
		<view class="uni-share-content">
			<view class="uni-share-content-box">
				<view class="uni-share-content-item"  style="display: none" v-for="(item,index) in colorList" :key="index" @click.stop="select(item,index)">
					<view class="uni-share-view" :style="{backgroundColor: item.color}"></view>
					<text class="uni-share-text">{{item.text}}</text>
				</view>


		<view style="flex-direction: row;">
					<view class="uni-share-content-item" style="width:30rpx;margin-left: 30rpx;">
						<view class="uni-share-view-b">
							<image class="uni-share-view-b" src="../../../../static/myicon/lightSm.png"></image>
						</view>
					</view>
					<view class="uni-share-content-item" :style="{width:windowWidth}">
						<view   :style="{width:windowWidth}">
							<slider value="50" @change="sliderChange" min="0" max="200" activeColor="#FFCC33" backgroundColor="#000000"
							 block-color="#8A6DE9" block-size="18" show-value />
						</view>
					</view>
					 
					<view class="uni-share-content-item" style="width:30rpx;margin-right: 30rpx;">
						<view class="uni-share-view-b">
							<image class="uni-share-view-b" src="../../../../static/myicon/lightBig.png"></image>
						</view>
					</view>
				</view>



				<view class="setA">
					<view class="uni-share-content-item_a">
						<view class="uni-share-view"style="align-items: center;">
							<image class="uni-share-view-b" src="../../../../static/myicon/sim.png"></image>
						</view>
					</view>
					<view class="uni-share-content-item_a" >
						<text class="uni-share-view-b">14</text>
					</view>
					<view class="uni-share-content-item_a" >
						<view class="uni-share-view" style="align-items: center;">
							<image class="uni-share-view-b" src="../../../../static/myicon/big.png"></image>
						</view>
					</view>
					<view class="uni-share-content-item_a">
						<view class="uni-share-view" style="align-items: center;">
							<text class="uni-share-text">默认</text>
						</view>
					</view>

				</view>



				<view style="flex-direction: row;">
					<view class="uni-share-content-item">
						<view class="uni-share-view-b">
							<image class="uni-share-view-b" src="../../../../static/myicon/list.png"></image>
						</view>
						<text class="uni-share-text">目录</text>
					</view>
					<view class="uni-share-content-item">
						<view class="uni-share-view-b">
							<image class="uni-share-view-b" src="../../../../static/myicon/setBlank.png"></image>
						</view>
						<text class="uni-share-text">设置</text>
					</view>
					<view class="uni-share-content-item">
						<view class="uni-share-view-b">
							<image class="uni-share-view-b" src="../../../../static/myicon/setBlank.png"></image>
						</view>
						<text class="uni-share-text">设置</text>
					</view>
					<view class="uni-share-content-item">
						<view class="uni-share-view-b">
							<image class="uni-share-view-b" src="../../../../static/myicon/setBlank.png"></image>
						</view>
						<text class="uni-share-text">设置</text>
					</view>
				</view>



			</view>
		</view>
		<view class="uni-share-button-box">
			<button class="uni-share-button" @click="close">取消</button>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'UniPopupShare',
		props: {
			title: {
				type: String,
				default: '背景颜色'
			}
		},
		inject: ['popup'],
		data() {
			return {
				windowWidth:"",
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
			this.windowWidth = (uni.getSystemInfoSync().windowWidth) * 0.8.toString() + "px";
			uni.getScreenBrightness({
			    success: function (res) {
			        console.log('屏幕亮度值：' + res.value);
			    }
			});
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
			}
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
		height: 30px;
		// border-color: #3B4144;
		// border-width: 1rpx;
		// border-radius: 5px;
	}

	.uni-share-text {
		margin-top: 0px;
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

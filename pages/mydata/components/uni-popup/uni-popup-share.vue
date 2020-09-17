<template>
	<view class="uni-popup-share">
		<view class="uni-share-title"><text class="uni-share-title-text">{{title}}</text></view>
		<view class="uni-share-content">
			<view class="uni-share-content-box">
				<view class="uni-share-content-item" v-for="(item,index) in colorList" :key="index" @click.stop="select(item,index)">
					<view class="uni-share-view" :style="{backgroundColor: item.color}"></view>
					<text class="uni-share-text">{{item.text}}</text>
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
		created() {},
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

	.uni-share-text {
		margin-top: 10px;
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
</style>

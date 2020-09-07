<template>
	<div>
		<web-view :src="srcLink"></web-view>
	</div>
</template>

<script>
	// http://www.xbiquge.la/26/26874/13244872.html
	export default {
		name: "MyFirstVueApp",
		props: {
			title: {
				type: String,
				default: ""
			},
		},
		created() {
			this.findPageData();
		},
		methods: {
				findPageData(){
					
					uni.request({
						url:"http://www.xbiquge.la/26/26874/13244872.html",
						success:function(res){
							
						console.log(res)
							
							}
					})
					
					
					// var pages = getCurrentPages();  
					// var page = pages[pages.length - 1];  
					// // #ifdef APP-PLUS  
					// var currentWebview = page.$getAppWebview(); //页面栈最顶层就是当前webview  
					// console.log(currentWebview)
					// // #endif
					
				}
			
			
		},
		data() {
			return {
				msg: '我的第一个vue组件',
				srcLink:"http://www.xbiquge.la/26/26874/13244872.html"
			}
		},
		watch:{
			msg(val) {
				this.$emit('update:updateMsg', msg)
			}
		}
	}
	
	
</script>

<style>
</style>

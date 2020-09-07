// 获取正文
import HTMLParser from "../../../js_sdk/html-parser/common/HTMLParser/html-parser.js"
/**
 *  //获取正文
 */
export const getMainText = (url, code) => {
	return new Promise((resolve, reject) => {
		let mainText = {};
		// 封装主体：网络请求
		uni.request({
			url: url,
			success: (e) => {
				let str = e.data;
				// 获取HTML文本转DOM操作
				const doc = new HTMLParser(str);
				if (code == 1) { //笔趣阁
					// 选取插件列表内层的HTML文本 bookname
					const titleNametag = doc.getElementsByClassName('bookname')[0];
					const titleNamecontent = new HTMLParser(titleNametag.outerHTML);
					const titleName = titleNamecontent.getElementsByTagName('h1')[0];
					//标题
					const titleText = titleName.innerHTML;
					//内容
					const pluginListText = doc.getElementById('content');
					const contentText = pluginListText.innerHTML.replace(/<br \/>/g, '\n').replace(/<p>/g,
						"&nbsp;&nbsp;&nbsp;&nbsp;").replace(/<\/p>/g, "");
					mainText.title = titleText;
					mainText.content = contentText.replace(/&nbsp;/g, "  ");
					
				} else if (code == 2) { //大文学
					// var mydata = getBookInfo_big(str);
					// _this.bookData = [..._this.bookData, ...mydata]; //拷贝数据
				}
				resolve(mainText);
				// return listDataBookChapter;

			},
			fail: (err) => {
				// 返回错误消息
				reject(err)
			}
		})
	}).catch((e) => {})
}

 
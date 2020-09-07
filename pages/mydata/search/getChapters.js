// 获取章节集合
import HTMLParser from "../../../js_sdk/html-parser/common/HTMLParser/html-parser.js"
/**
 *  //获取所有章节
 */
export const bookChapterList = (url, code, homeUrl)=>{
	return new Promise((resolve, reject)=>{
		let listDataBookChapter = [];
		// 封装主体：网络请求
		uni.request({
			url: url,
			success: (e) => {
			
				let str = e.data;
				const doc = new HTMLParser(str);
				if (code == 1) { //笔趣阁
					const list = doc.getElementById('list');
					const listdoc = new HTMLParser(list.outerHTML);
					const dd = listdoc.getElementsByTagName('dd');
					let reg = /<\/?.+?\/?>/g; //提取文字
					let newreg = /href=[^\s]*/;
					for (let i = 0; i < dd.length; i++) {
						let mulu = {};
						let tdstr = dd[i].outerHTML;
						const chapterName = tdstr.replace(reg, '');
						const chapterUrl = tdstr.match(newreg)[0].replace("href=", '').replace(/'/g, '');
						mulu.chapterName = chapterName;
						mulu.chapterUrl = homeUrl + chapterUrl;;
						mulu.chapterData = '';
						mulu.isReading = false;
						listDataBookChapter.push(mulu);
					}
			
			
			
			
				} else if (code == 2) { //大文学
					// var mydata = getBookInfo_big(str);
					// _this.bookData = [..._this.bookData, ...mydata]; //拷贝数据
				}
				resolve(listDataBookChapter)
				// return listDataBookChapter;
			
			},
			fail: (err) =>{
				// 返回错误消息
				reject(err)
			}
		})
	}
	)
}
 
// export function bookChapterList( url, code, homeUrl) {
// 	let _this = this
// 	let listDataBookChapter = [];
// 	uni.request({
// 		url: url,
// 		success: (e) => {
// 			let str = e.data;
// 			const doc = new HTMLParser(str);
// 			if (code == 1) { //笔趣阁
// 				const list = doc.getElementById('list');
// 				const listdoc = new HTMLParser(list.outerHTML);
// 				const dd = listdoc.getElementsByTagName('dd');
// 				let reg = /<\/?.+?\/?>/g; //提取文字
// 				let newreg = /href=[^\s]*/;
// 				for (let i = 0; i < dd.length; i++) {
// 					let mulu = {};
// 					let tdstr = dd[i].outerHTML;
// 					const chapterName = tdstr.replace(reg, '');
// 					const chapterUrl = tdstr.match(newreg)[0].replace("href=", '').replace(/'/g, '');
// 					mulu.chapterName = chapterName
// 					mulu.chapterUrl = homeUrl + chapterUrl
// 					mulu.chapterData = ''
// 					listDataBookChapter.push(mulu);
// 				}




// 			} else if (code == 2) { //大文学
// 				// var mydata = getBookInfo_big(str);
// 				// _this.bookData = [..._this.bookData, ...mydata]; //拷贝数据
// 			}
			
// 			return listDataBookChapter;
// 		}
// 	});

// }

// 获取章节集合
import HTMLParser from "../../../js_sdk/html-parser/common/HTMLParser/html-parser.js"
/**
 *  //获取所有章节
 */
export const getBookResume = (url, code, homeUrl )=>{
	return new Promise((resolve, reject)=>{
		let listData = [];
		let editInfo = {};
		// 封装主体：网络请求
		let returnData ={};
		uni.request({
			url: url,
			success: (e) => {
				let str = e.data;
				const doc = new HTMLParser(str);
				if (code == 1) { //笔趣阁
					const doc = new HTMLParser(str);
					const fmimg = doc.getElementById('fmimg');
					const fmimgdoc = new HTMLParser(fmimg.outerHTML);
					const img = fmimgdoc.getElementsByTagName('img')[0];
					let httpreg = /[a-zA-z]+:\/\/[^\s]*/;
					let myhttp = img.outerHTML.replace(/"/g, ' ');
					const bookImgUrl = myhttp.match(httpreg)[0];
					editInfo.bookImgUrl = bookImgUrl
					const intro = doc.getElementById('intro');
					const introdoc = new HTMLParser(intro.outerHTML);
					const p = introdoc.getElementsByTagName('p')[1];
					editInfo.resumeInfo = p.innerHTML;
					const list = doc.getElementById('list');
					const listdoc = new HTMLParser(list.outerHTML);
					const dd = listdoc.getElementsByTagName('dd');
					let reg = /<\/?.+?\/?>/g; //提取文字
					let newreg = /href=[^\s]*/;
					for (let i = (dd.length < 15 ? 0 : (dd.length >= 15 ? dd.length - 10 : 0)); i < dd.length; i++) {
						let mulu = {};
						let tdstr = dd[i].outerHTML;
						const chapterName = tdstr.replace(reg, '');
						const chapterUrl = tdstr.match(newreg)[0].replace("href=", '').replace(/'/g, '');
						mulu.chapterName = chapterName
						mulu.chapterUrl = homeUrl + chapterUrl
						listData.push(mulu);
					}
					//第一章
					let tdstr = dd[0].outerHTML;
					const chapterName = tdstr.replace(reg, '');
					const chapterUrl = tdstr.match(newreg)[0].replace("href=", '').replace(/'/g, '');
					editInfo.readChaptersUrl = homeUrl + chapterUrl;
				} else if (code == 2) { //大文学
				
				const doc = new HTMLParser(str);
				const fmimg = doc.getElementById('fmimg');
				const fmimgdoc = new HTMLParser(fmimg.outerHTML);
				const img = fmimgdoc.getElementsByTagName('img')[0];
				const bookImgUrl = "http:"+img.attributes.src;
				editInfo.bookImgUrl = bookImgUrl
				const intro = doc.getElementById('intro');
				const introdoc = new HTMLParser(intro.outerHTML);
				const p = introdoc.getElementsByTagName('p')[0];
				editInfo.resumeInfo = p.innerHTML;
				 const list = doc.getElementById('list');
				 const listdoc = new HTMLParser(list.outerHTML);
				 const dd = listdoc.getElementsByTagName('dd');
				 for (let i = (dd.length < 15 ? 0 : (dd.length >= 15 ? dd.length - 10 : 0)); i < dd.length; i++) {
				 	let mulu = {};
				 	let tdstr = dd[i].outerHTML;
					const dda = new HTMLParser(tdstr);
					const a = dda.getElementsByTagName('a')[0];
					mulu.chapterName = a.innerHTML;
					const chapterUrl = a.attributes.href;
					mulu.chapterUrl = homeUrl + chapterUrl;
				 	listData.push(mulu);
				 }
				 //第一章
				 let tdstr = dd[15].outerHTML;
				 const dda = new HTMLParser(tdstr);
				 const a = dda.getElementsByTagName('a')[0];
				const chapterUrl = a.attributes.href;
				 editInfo.readChaptersUrl = homeUrl + chapterUrl;
				}
				returnData.listData =listData;
				returnData.editInfo =editInfo;
				resolve(returnData)
			},
			fail: (err) =>{
				// 返回错误消息
				reject(err)
			}
		})
	}
	)
}
  
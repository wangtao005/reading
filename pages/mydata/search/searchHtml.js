// 搜索列表提取页面文字
import HTMLParser from "../../../js_sdk/html-parser/common/HTMLParser/html-parser.js"
/**
 * 大文学
 */
export function getBookInfo_big(str, code) {
	let bookData = [];
	const doc = new HTMLParser(str);
	const main = doc.getElementById('main');
	const maindoc = new HTMLParser(main.outerHTML);
	const lis = maindoc.getElementsByTagName('li');
	for (let i = 1; i < lis.length; i++) {
		let bookinfo = {};
		const liinfo = lis[i].outerHTML;
		const listr = HTMLParser(liinfo);
		const bookName_text = listr.getElementsByClassName('s2')[0]; //书名
		const bookName_a = HTMLParser(bookName_text.outerHTML);
		const bookName_a_ = bookName_a.getElementsByTagName('a');
		let reg = /<\/?.+?\/?>/g; //提取文字
		const bookName = bookName_a_[0].innerHTML.replace(reg, '');
		let httpreg = /[a-zA-z]+:\/\/[^\s]*/;
		let myhttp = bookName_a_[0].outerHTML.replace(/"/g, ' ');
		const bookUrl = myhttp.match(httpreg)[0];
		const bookChapter_text = listr.getElementsByClassName('s3')[0]; //章节
		const bookChapter_a = HTMLParser(bookChapter_text.outerHTML);
		const bookChapter_a_ = bookChapter_a.getElementsByTagName('a');
		const bookChapter = bookChapter_a_[0].innerHTML;
		let mybookcha = bookChapter_a_[0].outerHTML.replace(/"/g, ' ');
		const newbookUrl = mybookcha.match(httpreg)[0];
		const bookAuthor_text = listr.getElementsByClassName('s4')[0]; //作者
		const bookAuthor = bookAuthor_text.innerHTML;
		const bookUpdate_text = listr.getElementsByClassName('s6')[0]; //更新时间
		const bookUpdate = bookUpdate_text.innerHTML;
		bookinfo.bookName = bookName;
		bookinfo.bookUrl = bookUrl; //整本url
		bookinfo.newbookUrl = newbookUrl; //最新章节url
		bookinfo.bookChapter = bookChapter;
		bookinfo.bookAuthor = bookAuthor;
		bookinfo.bookUpdate = bookUpdate;
		bookinfo.code = code;
		bookinfo.resource = '大文学'; //来源
		bookData.push(bookinfo);
	}
	return bookData;
}
/**
 * 新笔趣阁
 */
export function getBookInfo_biqu(str, homeUrl, code) {
	let bookData = [];
	const doc = new HTMLParser(str);
	const main = doc.getElementById('main');
	const maindoc = new HTMLParser(main.outerHTML);
	const content = maindoc.getElementById('content');
	const contentdoc = new HTMLParser(content.outerHTML);
	const grid = contentdoc.getElementsByClassName('grid')[0];
	const griddoc = new HTMLParser(grid.outerHTML);
	const trs = griddoc.getElementsByTagName('tr');
	for (let i = 1; i < trs.length; i++) {
		let bookinfo = {};
		const td = new HTMLParser(trs[i].outerHTML);
		const tds = td.getElementsByTagName('td');
		for (let j = 0; j < tds.length; j++) {
			let tdstr = tds[j].outerHTML;
			let reg = /<\/?.+?\/?>/g; //提取文字
			let httpreg = /[a-zA-z]+:\/\/[^\s]*/; //提取带http的 url
			if (tdstr.indexOf('even') > -1) {
				if (tdstr.indexOf('href') > -1) {
					const bookName = tdstr.replace(reg, '');
					let bookUrlhttp = tdstr.replace(/"/g, ' ');
					const bookUrl = bookUrlhttp.match(httpreg)[0];
					bookinfo.bookName = bookName;
					bookinfo.bookUrl = bookUrl; //整本url目录
				} else {
					const bookAuthor = tdstr.replace(reg, '');
					bookinfo.bookAuthor = bookAuthor;
				}
			} else if (tdstr.indexOf('odd') > -1) {
				if (tdstr.indexOf('href') > -1) {
					const bookChapter = tdstr.replace(reg, '').replace("\n", '').trim();
					let newbookUrlhttp = tdstr.replace(/"/g, '');
					let newreg = /href=[^\s]*/;
					const newbookUrl = newbookUrlhttp.match(newreg)[0].replace("href=", '');
					const bookId = newbookUrl.substring(0, newbookUrl.lastIndexOf("/"));
					bookinfo.newbookUrl = homeUrl + newbookUrl; //最新章节url
					bookinfo.bookId = bookId;
					bookinfo.bookChapter = bookChapter;
					bookinfo.bookImgUrl = homeUrl + '/files/article/image' + bookinfo.bookId + bookId.substring(bookId.lastIndexOf("/")) + 's.jpg';
				} else {
					const bookUpdate = tdstr.replace(reg, '').replace("\n", '').trim();
					bookinfo.bookUpdate = bookUpdate;
				}
			}
			bookinfo.code = code;
			bookinfo.homeUrl = homeUrl;
			bookinfo.resource = '笔趣阁'; //来源
		}
		bookData.push(bookinfo);
	}
	return bookData;
}

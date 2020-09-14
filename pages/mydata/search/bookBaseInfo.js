//书籍基本信息,主要用于传递组装
//装成字符串用于传递参数
export function getStrInfo(e) {
	let infoData = '?bookUrl=' + e.bookUrl +
		'&bookName=' + e.bookName +
		'&code=' + e.code +
		'&homeUrl=' + e.homeUrl +
		'&bookImgUrl=' + e.bookImgUrl +
		'&bookAuthor=' + e.bookAuthor +
		'&newbookUrl=' + e.newbookUrl +
		'&bookChapter=' + e.bookChapter +
		'&bookId=' + e.bookId +
		'&bookUpdate=' + e.bookUpdate +
		'&isUpdate=' + e.isUpdate +
		'&readChaptersUrl=' + e.readChaptersUrl
	return infoData;
}
//装成对象 用于暂存数据				
export function getObjectInfo(e) {
	var info = {
		'bookUrl': e.bookUrl,
		'bookName': e.bookName,
		'code': e.code,
		'homeUrl': e.homeUrl,
		'bookImgUrl': e.bookImgUrl,
		'bookAuthor': e.bookAuthor,
		'bookChapter': e.bookChapter,
		'newbookUrl': e.newbookUrl,
		'bookId': e.bookId,
		'bookUpdate': e.bookUpdate,
		'isUpdate': e.isUpdate,
		'readChaptersUrl': e.readChaptersUrl
	}
	return info;
}

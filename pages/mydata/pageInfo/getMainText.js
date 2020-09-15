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
					const contentText = pluginListText.innerHTML.replace(/<br \/>/g, '\n').replace(/<p[^>]*>(?:(?!<\/p>)[\s\S])*<\/p>/,'---------------本章完---------------');
					mainText.title = titleText;
					mainText.content = contentText.replace(/&nbsp;/g, "  ").replace('<script>readx();</script>','');
				} else if (code == 2) { //大文学
					 // 选取插件列表内层的HTML文本 bookname
					 const titleNametag = doc.getElementsByClassName('bookname')[0];
					 const titleNamecontent = new HTMLParser(titleNametag.outerHTML);
					 const titleName = titleNamecontent.getElementsByTagName('h1')[0];
					 //标题
					 const titleText = titleName.innerHTML;
					 const pluginListText = doc.getElementById('content');
					 const contentText = pluginListText.innerHTML.replace(/<br \/>/g, '\n').replace(/<p>/g,
					 	"&nbsp;&nbsp;&nbsp;&nbsp;").replace(/<\/p>/g, '\n');
					 mainText.title = titleText;
					 mainText.content = contentText.replace(/&nbsp;/g, "  ")+('---------------本章完---------------');
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

// 安卓沉浸式 0关闭 1安卓状态栏导航栏都进入沉浸模式 2设置状态栏沉浸 3设置导航栏沉浸   4显示返回键
export function windowFull(pr) {  
    var main = plus.android.runtimeMainActivity();  
    var windowMe = main.getWindow();  
    plus.android.importClass(windowMe);  
    var decorView = windowMe.getDecorView();  
    plus.android.importClass(decorView);  
    var View = plus.android.importClass("android.view.View");  
    if (pr === 1) {  
        decorView.setSystemUiVisibility(  
            View.SYSTEM_UI_FLAG_LAYOUT_STABLE |  
            View.SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION |  
            View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN |  
            View.SYSTEM_UI_FLAG_HIDE_NAVIGATION |  
            View.SYSTEM_UI_FLAG_FULLSCREEN |  
            View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY);  
    } else if (pr === 2) {  
        decorView.setSystemUiVisibility(  
            View.SYSTEM_UI_FLAG_LAYOUT_STABLE |  
            View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN |  
            View.SYSTEM_UI_FLAG_FULLSCREEN |  
            View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY);  
    } else if (pr === 3) {  
        decorView.setSystemUiVisibility(  
            View.SYSTEM_UI_FLAG_LAYOUT_STABLE |  
            View.SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION |  
            View.SYSTEM_UI_FLAG_HIDE_NAVIGATION |  
            View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY);  
    } else if (pr === 4) {  //显示返回键
        decorView.setSystemUiVisibility(  
		View.SYSTEM_UI_FLAG_LAYOUT_STABLE | 
		//View.SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION | //返回后覆盖tab 表示会让应用的主体内容占用系统导航栏的空间
            View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN  
			);  
    } else if (pr === 0) {  
        decorView.setSystemUiVisibility(View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY);  
    }  
}


 
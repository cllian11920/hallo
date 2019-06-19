
			//随即展示图片的方法  (1，7)
			function suijitu(){
				//alert(Math.random());
				//显示第四张图片
				gotoPage(4);
				//1. 产生一个随机数
				   //[0,1)   左闭右开    [1，8)
				var suijishu = Math.floor(Math.random() * 7  + 1);   //  7.7  7   7.9  7   7.1  7   [1,7]
				var pic = "url(img/charm" + suijishu + ".jpg)";
				//2. 第四张图片的背景为随机产生的图片
				var  p4 = document.getElementById("page4");
				
				//alert(pic);
				p4.style.backgroundImage = pic;
			}
			
			function gotoPage(page){
				//所有页都设置为不显示
				var page1 = document.getElementById("page1");
				var page2 = document.getElementById("page2");
				var page3 = document.getElementById("page3");
				var page4 = document.getElementById("page4");
				page1.style.display = "none";
				page2.style.display = "none";
				page3.style.display = "none";
				page4.style.display = "none";
				//page页显示出来
				var p = "page"+page;
				var showpage = document.getElementById(p);
				showpage.style.display = "block";
			}

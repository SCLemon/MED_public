if(!self.define){let e,i={};const c=(c,n)=>(c=new URL(c+".js",n).href,i[c]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=i,document.head.appendChild(e)}else e=c,importScripts(c),i()})).then((()=>{let e=i[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(n,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let a={};const d=e=>c(e,o),s={module:{uri:o},exports:a,require:d};i[o]=Promise.all(n.map((e=>s[e]||d(e)))).then((e=>(r(...e),a)))}}define(["./workbox-6567b62a"],(function(e){"use strict";e.setCacheNameDetails({prefix:"med"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"css/app.a516a9c5.css",revision:null},{url:"css/bootstrap.css",revision:"bba40d0d974db632d2f4251fca069dc2"},{url:"css/chunk-vendors.692a19c8.css",revision:null},{url:"css/reset.css",revision:"79b357ae29d546eb1f3c136e45504255"},{url:"fonts/element-icons.f1a45d74.ttf",revision:null},{url:"fonts/element-icons.ff18efd1.woff",revision:null},{url:"ico/512.png",revision:"7f14b0e6e8d19476b58d158399154dd8"},{url:"ico/android-icon-144x144.png",revision:"f0c394fe7384913ef05548e3fe6e72d2"},{url:"ico/android-icon-192x192.png",revision:"d5b1a1130188fcecdfd1e7800dddeffb"},{url:"ico/android-icon-36x36.png",revision:"0923cd1c995bae204a174ca41af5c5e0"},{url:"ico/android-icon-48x48.png",revision:"ece0794c0a872e774b580973b1e2dc1e"},{url:"ico/android-icon-72x72.png",revision:"2b6ffb258186c084dc77e64786764b03"},{url:"ico/android-icon-96x96.png",revision:"8401cc4f1cc12a615558f0a8c28cc812"},{url:"ico/apple-icon-114x114.png",revision:"f5466cfe07162081e0a26e8ed7458f73"},{url:"ico/apple-icon-120x120.png",revision:"9fe1c6ab54cab727d4399cfeab4da0b4"},{url:"ico/apple-icon-144x144.png",revision:"f0c394fe7384913ef05548e3fe6e72d2"},{url:"ico/apple-icon-152x152.png",revision:"f339b1b06291ef81d732ecaacc098f0f"},{url:"ico/apple-icon-180x180.png",revision:"d03bb33c76e0ab2261b9f84d2e459419"},{url:"ico/apple-icon-57x57.png",revision:"38c8d3fc9e6b7807bd5db2d260600a4a"},{url:"ico/apple-icon-60x60.png",revision:"89e73f7a96b48277d33a8540d4cb5dff"},{url:"ico/apple-icon-72x72.png",revision:"2b6ffb258186c084dc77e64786764b03"},{url:"ico/apple-icon-76x76.png",revision:"d1bc95fdd3088cd5ba4b76cc4ca5bcc0"},{url:"ico/apple-icon-precomposed.png",revision:"d5cdb40c2fc30a47bbb824c17889b05c"},{url:"ico/apple-icon.png",revision:"d5cdb40c2fc30a47bbb824c17889b05c"},{url:"ico/favicon-16x16.png",revision:"ec9d26e39a27c10cfd3137d11864b68a"},{url:"ico/favicon-32x32.png",revision:"8f688e88b5ed24c652c1c483c74be4ac"},{url:"ico/favicon-96x96.png",revision:"8401cc4f1cc12a615558f0a8c28cc812"},{url:"ico/manifest.json",revision:"e60df6645634a2688f34d35b459d0a01"},{url:"ico/ms-icon-144x144.png",revision:"f0c394fe7384913ef05548e3fe6e72d2"},{url:"ico/ms-icon-150x150.png",revision:"dab57a6ec27bc0a73acc9d63e9abdd3f"},{url:"ico/ms-icon-310x310.png",revision:"df6224871cf83a1b53223f311407ee41"},{url:"ico/ms-icon-70x70.png",revision:"54f4639230495f6c43ba83e4064e6849"},{url:"images/1.jpeg",revision:"994a35c4882fe7a42f718844cbdd153a"},{url:"images/10.jpeg",revision:"d43376e09f64199d8f9b1d14956bbb40"},{url:"images/2.jpeg",revision:"c595bb4269242fccba67d4b1600e7166"},{url:"images/3.jpeg",revision:"b77583a59d50473818904ae53e3d42ab"},{url:"images/4.jpeg",revision:"840fb02b33c310784df3c368f601bc66"},{url:"images/5.jpeg",revision:"c8a437300ec04d787d637acdb40b7acf"},{url:"images/6.jpeg",revision:"0e0b77f0dd10883ad17bedf64e4d1c08"},{url:"images/7.jpeg",revision:"b6919af4f164d93fa868385f17e2e3cf"},{url:"images/8.jpeg",revision:"f8b94236f645d4025d35a822d9cfd6c1"},{url:"images/9.jpeg",revision:"81d0d9e7bffe2250b9c336c4ff6f5cb6"},{url:"images/government.png",revision:"3c37183442b2d24a2cc40d2e4da2c85d"},{url:"images/moon.webp",revision:"7ca8e038d8200dbee95412151fed152d"},{url:"images/news.png",revision:"088101975582b934c97c9f5dd1ab2650"},{url:"images/pictures.png",revision:"ee34bb5501cddf2b38ac6a874a9fcad9"},{url:"images/robot.jpeg",revision:"702b60055596ed29ba4712f35ce66123"},{url:"images/schedule.png",revision:"c1d613b75bfb7f31d4c8ee476ff4c80c"},{url:"images/shop.png",revision:"5f744fbc2d95aaa855b6be79a4656d0a"},{url:"images/stock.png",revision:"4f2e6e91cf893c81d42f8c2991ea8149"},{url:"images/video.png",revision:"f52d6a7785237b1c69ced7273247e209"},{url:"images/weather.png",revision:"ef112ee1e360ac68fe114d2ce4958344"},{url:"images/weather/weather_1.png",revision:"476249666a5d0fd39d4239627ec8fb27"},{url:"images/weather/weather_2.png",revision:"941a3d99449d4fcde6a6a31bea76ab42"},{url:"images/weather/weather_3.png",revision:"4ccad0517cf64aaede86df631df2d539"},{url:"images/weather/weather_4.png",revision:"2c5926b1a46dfeed2cc80266cabc4efa"},{url:"images/weather/weather_5.png",revision:"93b4f669890c892a3ead019b76a821d9"},{url:"images/word.png",revision:"862833b9795e499a30225152a7d49659"},{url:"img/government.c3c0e812.png",revision:null},{url:"img/loader.7cd3b9af.gif",revision:null},{url:"img/news.6d5bdbb0.png",revision:null},{url:"img/news.cdc6e4f2.png",revision:null},{url:"img/schedule.2e694c9e.png",revision:null},{url:"img/shop.7840d6ca.png",revision:null},{url:"img/stock.41de904b.png",revision:null},{url:"img/video.fa5ccc8f.png",revision:null},{url:"img/word.dc360d46.png",revision:null},{url:"index.html",revision:"df73fc0fe0372c9abb16ba29b554227e"},{url:"js/app.7f95ebbf.js",revision:null},{url:"logo.png",revision:"4043709784488a2b285fec2ea1fef729"},{url:"manifest.json",revision:"67cfd6992abed946ba10222442a51ea1"},{url:"robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
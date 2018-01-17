const app = getApp();
var WxParse = require('../../wxParse/wxParse.js');

Page({
  data: {
    isloading: false,
    //article将用来存储towxml数据
    article: {}
  },
  onLoad: function () {
    var that = this;
    //请求Markdown文件内容
    app.getText(app.docDir + '2017-07-17-sass.md', (res) => {
      if (res.data) {
        //console.log(res.data);

        var article = res.data;
        WxParse.wxParse('article', 'html', article, that, 5);
       
      };
    });
  }
})

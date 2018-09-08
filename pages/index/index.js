//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    image1:"https://ws4.sinaimg.cn/large/0069RVTdgy1fv13mhk30oj30zk0k0q5z.jpg" ,
    image2:"http://img3.imgtn.bdimg.com/it/u=3770831391,3251702668&fm=26&gp=0.jpg"
  },
  onLoad: function () {
   
  },
  imageClick: function (event) {
    console.log(event);
    var src = event.currentTarget.dataset.src;
    
    wx.previewImage({
      current: src ,// 当前显示图片的http链接
      urls:[src]
    })
  },
})

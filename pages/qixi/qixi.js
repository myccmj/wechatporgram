// pages/newYear2/newYear2.js
var fall = require('../utils/fall.js');
const W = wx.getSystemInfoSync().windowWidth;
const H = wx.getSystemInfoSync().windowHeight;
const app = getApp();
const newYearImgs = ['../img/taohua1.png', '../img/taohua2.png', '../img/taohua1.png', '../img/taohua2.png'];
Page({

  data: {
    canvasHeight: 0,
    name:'小主',
    c1:'',
    c2:''
  },
  //点透canvas   pointer-events: none;
  handleTap() {
    console.log('点透canvas');
  },

  onLoad: function (options) {
    var tmp=app.globalData.tmp;
    if(tmp=="")
      tmp="小主";
    this.setData({
      name: tmp,
      c1:tmp.slice(-1),
      c2:tmp.slice(-2,-1)
    })
    let ctx = wx.createCanvasContext('myCanvas');
    fall(ctx, W, H, newYearImgs, {
      // duration: 15,
      G: 2
    });
  },

  
  onShow: function () {
    this.setData({
      canvasHeight: H
    });
  },

  
})
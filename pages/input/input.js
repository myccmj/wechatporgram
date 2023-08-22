// pages/input/input.js
const app = getApp()
Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    inputValue:'',
  },
  bindKeyInput: function (e) {
    this.setData({
      inputValue: e.detail.value
    })
  },
    // 菜单点击事件
    click(e) {
      var date=new Date();
      var rd=date.getSeconds()%2;
      console.log(this.data.inputValue.slice(-1));
      app.globalData.tmp=this.data.inputValue;
      if(rd)
      {
        wx.navigateTo({
          url: '/pages/qixi/qixi',
        })
      }
      else
      {
        wx.navigateTo({
          url: '/pages/qixi1/qixi1',
        })
      }
    },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})
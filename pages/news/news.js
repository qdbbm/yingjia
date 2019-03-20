// pages/news/news.js

//获取应用实例
const app = getApp()

const utils = require("../../utils/util.js")

Page({

  /**
   * 页面的初始数据
   */
  data: {
    newsList: [
      {
        imgUrl: 'http://images.zhengzw.com/yingjia/news.jpg',
        tle: '团圆，最大的幸福莫过于此',
        txt: '时间就像橡皮，将我脑海中的记忆地擦去然而，我童年在院',
        date: '2019-02-23',
        read: 5203
      },
      {
        imgUrl: 'http://images.zhengzw.com/yingjia/news.jpg',
        tle: '团圆，最大的幸福莫过于此',
        txt: '时间就像橡皮，将我脑海中的记忆地擦去然而，我童年在院',
        date: '2019-02-23',
        read: 5203
      },
      {
        imgUrl: 'http://images.zhengzw.com/yingjia/news.jpg',
        tle: '团圆，最大的幸福莫过于此',
        txt: '时间就像橡皮，将我脑海中的记忆地擦去然而，我童年在院',
        date: '2019-02-23',
        read: 5203
      },
      {
        imgUrl: 'http://images.zhengzw.com/yingjia/news.jpg',
        tle: '团圆，最大的幸福莫过于此',
        txt: '时间就像橡皮，将我脑海中的记忆地擦去然而，我童年在院',
        date: '2019-02-23',
        read: 5203
      },
      {
        imgUrl: 'http://images.zhengzw.com/yingjia/news.jpg',
        tle: '团圆，最大的幸福莫过于此',
        txt: '时间就像橡皮，将我脑海中的记忆地擦去然而，我童年在院',
        date: '2019-02-23',
        read: 5203
      }
    ],
    tabbarActive: 2,
    tabbarIcons: app.globalData.tabbarIcons
  },

  /**
   * tabbar跳转
   */
  onTabbarChange: function (e) {
    utils.onTabbarChange(e);
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
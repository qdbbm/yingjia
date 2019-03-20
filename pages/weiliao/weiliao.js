// pages/weiliao/weiliao.js

//获取应用实例
const app = getApp()

const utils = require("../../utils/util.js")

Page({

  /**
   * 页面的初始数据
   */
  data: {
    mediaList: [
      {
        imgUrl: 'http://images.zhengzw.com/yingjia/zj-img.jpg',
        url: '../../pages/weiliaoDetail/weiliaoDetail',
        name: '何勇君',
        company: '正顺地产',
        date: '01-20',
        txt: '今天就是小年，我在这里祝福身体健康2019',
        hasMsg: true
      },
      {
        imgUrl: 'http://images.zhengzw.com/yingjia/zj-img.jpg',
        url: '../../pages/weiliaoDetail/weiliaoDetail',
        name: '何勇君',
        company: '正顺地产',
        date: '01-20',
        txt: '今天就是小年，我在这里祝福身体健康2019',
        hasMsg: false
      },
      {
        imgUrl: 'http://images.zhengzw.com/yingjia/zj-img.jpg',
        url: '../../pages/weiliaoDetail/weiliaoDetail',
        name: '何勇君',
        company: '正顺地产',
        date: '01-20',
        txt: '今天就是小年，我在这里祝福身体健康2019',
        hasMsg: false
      },
      {
        imgUrl: 'http://images.zhengzw.com/yingjia/zj-img.jpg',
        url: '../../pages/weiliaoDetail/weiliaoDetail',
        name: '何勇君',
        company: '正顺地产',
        date: '01-20',
        txt: '今天就是小年，我在这里祝福身体健康2019',
        hasMsg: false
      }
    ],
    tabbarActive: 1,
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
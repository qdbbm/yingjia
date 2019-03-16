// pages/common/common.js

var utils = require("../../utils/util.js")

Page({

  /**
   * 页面的初始数据
   */
  data: {
    houseList: [
      {
        tle: '松北世纪花园小区',
        txt: '墅公馆当文字多文字多时文字多时',
        labels: ['在售', '今年交房', '低单价', '在售', '今年交房', '低单价'],
        types: ['四室','建面54-350m²'],
        price: 3000,
        url: '',
        status: '新盘',
        imageUrl: 'http://images.zhengzw.com/yingjia/list-img.jpg'
      },
      {
        tle: '松北世纪花园小区',
        txt: '墅公馆当文字多文字多时文字多时',
        labels: ['在售', '今年交房', '低单价', '在售', '今年交房', '低单价'],
        types: ['四室', '建面54-350m²'],
        price: 3000,
        url: '',
        status: '新盘',
        imageUrl: 'http://images.zhengzw.com/yingjia/list-img.jpg'
      }
    ],
    active: 0,
    homeIcon: {
      normal: '../../images/icon-home.png',
      active: '../../images/icon-home-active.png'
    },
    wl: {
      normal: '../../images/icon-wl.png',
      active: '../../images/icon-wl-active.png'
    },
    news: {
      normal: '../../images/icon-news.png',
      active: '../../images/icon-news-active.png'
    },
    user: {
      normal: '../../images/icon-user.png',
      active: '../../images/icon-user-active.png'
    }
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
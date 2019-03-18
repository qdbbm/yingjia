// pages/common/common.js

var utils = require("../../utils/util.js")

var interval = null; //倒计时函数

Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 房产列表
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

    // tabbar
    active: 0,
    homeIcon: {
      normal: '../../images/icon-home.png',
      active: '../../images/icon-home-active.png'
    },
    wlIcon: {
      normal: '../../images/icon-wl.png',
      active: '../../images/icon-wl-active.png'
    },
    newsIcon: {
      normal: '../../images/icon-news.png',
      active: '../../images/icon-news-active.png'
    },
    userIcon: {
      normal: '../../images/icon-user.png',
      active: '../../images/icon-user-active.png'
    },

    // 获取验证码
    time: '获取验证码',
    currentTime: 60,
    disabled: false
  },

  /**
   * tabbar跳转
   */
  onTabbarChange: function (e) {
    utils.onTabbarChange(e);
  },

  /**
   * 验证码倒计时
   */
  getCode: function (options) {
    var that = this;
    var currentTime = that.data.currentTime
    interval = setInterval(function () {
      currentTime--;
      that.setData({
        time: currentTime + '秒'
      })
      if (currentTime <= 0) {
        clearInterval(interval)
        that.setData({
          time: '重新发送',
          currentTime: 60,
          disabled: false
        })
      }
    }, 1000)
  },

  getVerificationCode() {
    this.getCode();
    var that = this
    that.setData({
      disabled: true
    })
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
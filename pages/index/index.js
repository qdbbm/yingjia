//index.js
//获取应用实例
const app = getApp()

const utils = require("../../utils/util.js")

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    bannerList: [
      {
        imageUrl: 'http://images.zhengzw.com/yingjia/banner.jpg'
      },
      {
        imageUrl: 'http://images.zhengzw.com/yingjia/banner.jpg'
      },
      {
        imageUrl: 'http://images.zhengzw.com/yingjia/banner.jpg'
      }
    ],
    indicatorDots: false,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    blockList: [
      {
        imgUrl: 'http://images.zhengzw.com/yingjia/list1.jpg',
        url: ''
      },
      {
        imgUrl: 'http://images.zhengzw.com/yingjia/list2.jpg',
        url: '../../pages/newHouse/newHouse'
      },
      {
        imgUrl: 'http://images.zhengzw.com/yingjia/list3.jpg',
        url: '../../pages/oldHouse/oldHouse'
      },
      {
        imgUrl: 'http://images.zhengzw.com/yingjia/list4.jpg',
        url: ''
      },
      {
        imgUrl: 'http://images.zhengzw.com/yingjia/list5.jpg',
        url: '../../pages/news/news'
      },
      {
        imgUrl: 'http://images.zhengzw.com/yingjia/list6.jpg',
        url: '../../pages/calc/calc'
      }
    ],
    tabbarActive: 0,
    tabbarIcons: app.globalData.tabbarIcons
  },
  /**
   * tabbar跳转
   */
  onTabbarChange: function (e) {
    utils.onTabbarChange(e);
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})

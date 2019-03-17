//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  
  globalData: {
    userInfo: null,
    // tabbarIcons
    tabbarIcons: [
      {
        className: 'icon-home',
        txt: '首页',
        normal: '../../images/icon-home.png',
        active: '../../images/icon-home-active.png'
      },
      {
        txt: '微聊',
        className: 'icon-wl',
        normal: '../../images/icon-wl.png',
        active: '../../images/icon-wl-active.png'
      },
      {
        txt: '资讯',
        className: 'icon-news',
        normal: '../../images/icon-news.png',
        active: '../../images/icon-news-active.png'
      },
      {
        txt: '我的',
        className: 'icon-user',
        normal: '../../images/icon-user.png',
        active: '../../images/icon-user-active.png'
      }
    ],
    // 房产列表
    houseList: [
      {
        tle: '松北世纪花园小区',
        txt: '墅公馆当文字多文字多时文字多时',
        labels: ['在售', '今年交房', '低单价', '在售', '今年交房', '低单价'],
        types: ['四室', '建面54-350m²'],
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
    ]
  }
})
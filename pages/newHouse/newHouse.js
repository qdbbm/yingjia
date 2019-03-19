// pages/newHouse/newHouse.js

//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    houseList: app.globalData.houseList,
    currentIndex: -1,
    showFilterContent: false,
    filterBarNav: [
      {
        txt: '区域'
      },
      {
        txt: '价格'
      },
      {
        txt: '房型'
      },
      {
        txt: '排序'
      }
    ],
    colLeftCurrentIndex: 0,
    colLeft: [
      {
        txt: '附近'
      },
      {
        txt: '区域'
      }
    ],
    colLeftByNear: [
      {
        txt: '附近1'
      },
      {
        txt: '附近2'
      },
      {
        txt: '附近3'
      },
      {
        txt: '附近4'
      },
      {
        txt: '附近5'
      },
      {
        txt: '附近6'
      }
    ],
    colLeftByArea: [
      {
        txt: '不限'
      },
      {
        txt: '东区'
      },
      {
        txt: '南区'
      },
      {
        txt: '西区'
      },
      {
        txt: '北区'
      },
      {
        txt: '中区'
      }
    ],
    colSelectedCurrentIndex: -1,
    colSelectedCurrentIndex2: -1
  },

  filterChange: function (e) {
    let index = e.currentTarget.dataset.index;
    
    if (index == this.data.currentIndex) {
      this.setData({
        currentIndex: -1,
        showFilterContent: false
      }) 
    } else {
      this.setData({
        currentIndex: index,
        showFilterContent: true
      }) 
    }
  },

  colLeftChange: function (e) {
    let index = e.currentTarget.dataset.index;
    this.setData({
      colLeftCurrentIndex: index
    })
  },

  colSelectedChange: function (e) {
    let index = e.currentTarget.dataset.index;
    this.setData({
      colSelectedCurrentIndex: index
    })
  },

  colSelectedChange2: function (e) {
    let index = e.currentTarget.dataset.index;
    this.setData({
      colSelectedCurrentIndex2: index
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
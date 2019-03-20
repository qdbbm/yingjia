// pages/houseDetail/houseDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentHdTabIndex: 0,
    hdTabTleList: ['视频','全景','户型图','沙盘图'],
    detailInfo: {
      tle: '横琴百家达星际广场酒楼精装修',
      labels: ['在售','今年交房','低单价','在售','今年交房','低单价'],
      date: '2018-07-09',
      address: '中源大道',
      price: 3000,
      jingjin: 3000
    }
  },

  hdTabChange: function (e) {
    let index = e.currentTarget.dataset.index;
    this.setData({
      currentHdTabIndex: index
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
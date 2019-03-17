// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hotTags: [
      {
        txt: '中庸海岸一期',
        url: ''
      },
      {
        txt: '富力优派广场商铺',
        url: ''
      },
      {
        txt: '华润万象',
        url: ''
      },
      {
        txt: '市容翠湖苑',
        url: ''
      },
      {
        txt: '富力优派广场商铺',
        url: ''
      },
      {
        txt: '佳耀大都汇城',
        url: ''
      }
    ],
    tagList: [
      {
        txt: '新房'
      },
      {
        txt: '二手房'
      }
    ],
    currentIndex: 0
  },

  /**
   * 类型切换
   */
  tagChange: function (e) {
    var index = e.currentTarget.dataset.current;
    console.log(index);
    this.setData({
      currentIndex: index
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
// pages/calc/calc.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sfblIndex: 0,
    sfblArray: ['20%', '30%', '50%'],
    sydkIndex: 0,
    sydkArray: ['4.9%', '4.1%', '3.5%'],
    gjjdkIndex: 0,
    gjjdkArray: ['3.1%', '3.5%'],
    year: 11,
    year2: 12,
    checked: true
  },

  bindPickerChange(e) {
    this.setData({
      sfblIndex: e.detail.value
    })
  },

  bindPickerChange2(e) {
    this.setData({
      sydkIndex: e.detail.value
    })
  },

  bindPickerChange3(e) {
    this.setData({
      gjjdkIndex: e.detail.value
    })
  },

  onChange: function (e) {
    this.setData({
      year: e.detail
    })
  },

  onChange2: function (e) {
    this.setData({
      year2: e.detail
    })
  },

  onSwitchChange({ detail }) {
    // 需要手动对 checked 状态进行更新
    this.setData({ checked: detail });
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
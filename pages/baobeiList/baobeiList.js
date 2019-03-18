// pages/baobeiList/baobeiList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bbList: [
      {
        name: '张晓晓',
        mobile: '15904601770',
        company: '辰能溪树庭院',
        active: 4,
        steps: [
          {
            text: '报备',
            desc: '3.13'
          },
          {
            text: '上传',
            desc: '3.14'
          },
          {
            text: '成交',
            desc: '5.20'
          },
          {
            text: '结佣资料审核',
            desc: '5.22'
          },
          {
            text: '已结佣',
            desc: '6.20'
          }
        ]
      },
      {
        name: '王刚',
        mobile: '15904601770',
        company: '枫蓝国际',
        active: 2,
        steps: [
          {
            text: '报备',
            desc: '3.13'
          },
          {
            text: '上传',
            desc: '3.14'
          },
          {
            text: '成交',
            desc: '5.20'
          },
          {
            text: '结佣资料审核',
            desc: '5.22'
          },
          {
            text: '已结佣',
            desc: '6.20'
          }
        ]
      }
    ]
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
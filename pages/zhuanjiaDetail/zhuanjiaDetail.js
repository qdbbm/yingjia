// pages/zhuanjiaDetail/zhuanjiaDetail.js

//获取应用实例
const app = getApp()

const utils = require("../../utils/util.js")

Page({

  /**
   * 页面的初始数据
   */
  data: {
    detail: {
      userImg: 'http://images.zhengzw.com/yingjia/ban-zj.jpg',
      userName: '周玲',
      hfl: '81%',
      years: '1-3年',
      persons: 38,
      know: '香港-横琴',
      company: '正顺地产',
      job: '房产顾问',
      phoneNumber: '13888889999',
      go: [
        {
          address: '太硬玖悦湾',
          count: '近30天去过0次'
        },
        {
          address: '格力海岸',
          count: '近30天去过0次'
        },
        {
          address: '中野意境公馆',
          count: '近30天去过0次'
        }
      ]
    },
    houseList: app.globalData.houseList
  },

  call: function (e) {
    let phoneNumber = e.currentTarget.dataset.phone;
    utils.call(phoneNumber);
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
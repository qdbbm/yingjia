// pages/houseDetail/houseDetail.js

//获取应用实例
const app = getApp()

const utils = require("../../utils/util.js")

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
    },
    tabTle: [
      '基础信息',
      '结佣规则',
      '专家解读'
    ],
    current: 'jcxx',
    zjList: [
      {
        imgUrl: 'http://images.zhengzw.com/yingjia/zj-img.jpg',
        name: '耿专家',
        tag: '金牌分析师',
        job: '房产顾问丨哈尔滨房产分析师',
        txt: '富力城楼盘频道，提供哈尔滨富力城 房价，楼盘户型，楼盘产权年限，物业费，开发商，售楼电话，绿化率，周边配套，商场，超市，学校，医院，银行，周边地图交通等全方位楼盘信息，富力城开盘交房时……'
      },
      {
        imgUrl: 'http://images.zhengzw.com/yingjia/zj-img.jpg',
        name: '耿专家',
        tag: '金牌分析师',
        job: '房产顾问丨哈尔滨房产分析师',
        txt: '富力城楼盘频道，提供哈尔滨富力城 房价，楼盘户型，楼盘产权年限，物业费，开发商，售楼电话，绿化率，周边配套，商场，超市，学校，医院，银行，周边地图交通等全方位楼盘信息，富力城开盘交房时……'
      }
    ],
    phoneNumber: '13888889999',
    love: false
  },

  hdTabChange: function (e) {
    let index = e.currentTarget.dataset.index;
    this.setData({
      currentHdTabIndex: index
    })
  },

  tabChange: function (e) {
    let current = e.currentTarget.dataset.current;
    this.setData({
      current: current
    })
  },

  call: function (e) {
    let phoneNumber = e.currentTarget.dataset.phone;
    utils.call(phoneNumber);
  },

  tapLove: function (e) {
    this.setData({
      love: !this.data.love
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
// pages/weiliaoDetail/weiliaoDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show: false,
    houseList: [
      {
        url: '',
        imgUrl: 'http://images.zhengzw.com/yingjia/fy-img.jpg',
        tle: '横琴百家达星际广场',
        address: '香洲-唐家',
        txt: '四室 建面54-350㎡',
        price: '3000'
      },
      {
        url: '',
        imgUrl: 'http://images.zhengzw.com/yingjia/fy-img.jpg',
        tle: '横琴百家达星际广场',
        address: '香洲-唐家',
        txt: '四室 建面54-350㎡',
        price: '3000'
      },
      {
        url: '',
        imgUrl: 'http://images.zhengzw.com/yingjia/fy-img.jpg',
        tle: '横琴百家达星际广场',
        address: '香洲-唐家',
        txt: '四室 建面54-350㎡',
        price: '3000'
      },
      {
        url: '',
        imgUrl: 'http://images.zhengzw.com/yingjia/fy-img.jpg',
        tle: '横琴百家达星际广场',
        address: '香洲-唐家',
        txt: '四室 建面54-350㎡',
        price: '3000'
      }
    ]
  },

  showHouse: function () {
    this.setData({
      show: true
    })
  },

  onClose: function () {
    this.setData({
      show: false
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
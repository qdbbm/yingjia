// pages/jingjiren/jingjiren.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pictures: [],
    dcgsIndex: 0,
    dcgsArray: ['地产公司1', '地产公司2'],
    zwIndex: 0,
    zwArray: ['职位1', '职位2'],
    zydqIndex1: 0,
    zydqArray1: ['地区1', '地区2'],
    zydqIndex2: 0,
    zydqArray2: ['地区1', '地区2'],
    region: ['广东省', '广州市', '海珠区'],
    customItem: '全部',
    region2: ['广东省', '广州市', '海珠区']
  },

  bindPickerChange(e) {
    this.setData({
      dcgsIndex: e.detail.value
    })
  },

  bindPickerChange2(e) {
    this.setData({
      zwIndex: e.detail.value
    })
  },

  bindRegionChange(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region: e.detail.value
    })
  },

  bindRegionChange2(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region2: e.detail.value
    })
  },

  /**
   * 上传图片
   */
  uploadImg: function () {
    var that = this
    wx.chooseImage({
      count: 1,
      success: function (res) {
        var tempFilePath = res.tempFilePaths[0]
        wx.saveFile({
          tempFilePath: tempFilePath,
          success: function (res) {
            var savedFilePath = res.savedFilePath
            console.log(savedFilePath)
            that.setData({
              pictures: that.data.pictures.concat(savedFilePath)
            })
            wx.setStorage({
              key: 'gallery',
              data: that.data.pictures
            })
          }
        })
      }
    })
  },

  /**
   * 预览图片
   */
  previewImage: function (e) {
    var data = e.currentTarget.dataset
    var index = data.index
    var that = this
    wx.previewImage({
      current: that.data.pictures[index], // 当前显示图片的链接，不填则默认为 urls 的第一张
      urls: that.data.pictures
    })
  },

  /**
   * 删除图片
   */
  tapDelImage: function (e) {
    var pictures = this.data.pictures;
    var index = e.currentTarget.dataset.index;
    pictures.splice(index, 1);
    this.setData({
      pictures: pictures
    });
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
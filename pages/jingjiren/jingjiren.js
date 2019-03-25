// pages/jingjiren/jingjiren.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pictures: [],
    zwIndex: 0,
    zwArray: ['职位1', '职位2'],
    region: '点击选择地区',
    region2: '点击选择地区',
    showArea: false,
    showArea2: false,
    areaList: {
      province_list: {
        110000: '珠海市',
        120000: '中山市'
      },
      city_list: {
        110100: '香洲区',
        110201: '金湾区',
        120100: '东区',
        120201: '西区'
      },
      county_list: {
        110101: '唐家湾镇',
        110102: '新香洲',
        110201: '三灶',
        110202: '红旗',
        120101: '黄圃镇',
        120102: '南头镇',
        120103: '东凤镇',
        120201: '阜沙镇',
        120202: '小榄镇',
        120203: '东升镇'
        // ....
      }
    }
  },

  openArea: function () {
    this.setData({
      showArea: true
    })
  },

  openArea2: function () {
    this.setData({
      showArea2: true
    })
  },

  onClose: function () {
    this.setData({
      showArea: false
    })
  },

  onClose2: function () {
    this.setData({
      showArea2: false
    })
  },

  onConfirm(event) {
    const { index, values } = event.detail;
    this.onClose();
    this.setData({
      region: `${values[0].name} - ${values[1].name} - ${values[2].name}`
    })
  },

  onConfirm2(event) {
    const { index, values } = event.detail;
    this.onClose2();
    this.setData({
      region2: `${values[0].name} - ${values[1].name} - ${values[2].name}`
    })
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
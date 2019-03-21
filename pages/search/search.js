// pages/search/search.js
var oneSelectedIndex = -1,
    twoSelectedIndex = -1;


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
    currentIndex: 0,
    show: false,
    oneList: [
      {
        name: '不限'
      },
      {
        name: '珠海市'
      },
      {
        name: '中山市'
      }
    ],
    oneAllList: [
      {
        name: '不限'
      },
      {
        name: '香洲区'
      },
      {
        name: '金湾区'
      },
      {
        name: '斗门区'
      },
      {
        name: '石岐区'
      },
      {
        name: '东区'
      },
      {
        name: '西区'
      },
      {
        name: '南区'
      }
    ],
    oneZhList: [
      {
        name: '不限'
      },
      {
        name: '香洲区'
      },
      {
        name: '金湾区'
      },
      {
        name: '斗门区'
      }
    ],
    oneZsList: [
      {
        name: '不限'
      },
      {
        name: '石岐区'
      },
      {
        name: '东区'
      },
      {
        name: '西区'
      },
      {
        name: '南区'
      }
    ],
    twoAllList: [
      {
        name: '不限',
      },
      {
        name: '区域1',
      },
      {
        name: '区域2',
      },
      {
        name: '区域3',
      }
    ],
    twoXzList: [
      {
        name: '不限',
      },
      {
        name: '唐家湾镇',
      },
      {
        name: '新香洲',
      },
      {
        name: '吉大',
      }
    ],
    currentOneIndex: 0,
    currentTwoIndex: 0,
    currentThreeIndex: 0,
    salesIndex: 0,
    salesArray: ['50-100万', '100-200万']
  },

  bindPickerChange(e) {
    this.setData({
      salesIndex: e.detail.value
    })
  },

  tapOne: function (e) {
    let index = e.currentTarget.dataset.index;
    if (index != oneSelectedIndex) {
      this.setData({
        currentOneIndex: -1,
        currentTwoIndex: -1,
        currentThreeIndex: -1,
        currentOneIndex: index
      })

      oneSelectedIndex = index;
    }
  },

  tapTwo: function (e) {
    let index = e.currentTarget.dataset.index;
    this.setData({
      currentTwoIndex: index
    })
  },

  tapThree: function (e) {
    let index = e.currentTarget.dataset.index;
    this.setData({
      currentThreeIndex: index
    })
  },

  /**
   * 类型切换
   */
  tagChange: function (e) {
    let index = e.currentTarget.dataset.current;
    console.log(index);
    this.setData({
      currentIndex: index
    })
  },

  showArea: function () {
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
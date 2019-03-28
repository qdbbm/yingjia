// pages/oldHouseDetail/oldHouseDetail.js

//获取应用实例
const app = getApp()

const utils = require("../../utils/util.js")

import F2 from '../../components/f2-canvas/lib/f2';

let chart = null;

function initChart(canvas, width, height) { // 使用 F2 绘制图表
  const data = [{
    name: '首付：',
    num: '30万',
    percent: 29,
    a: '1'
  }, {
    name: '贷款：',
    num: '72万',
    percent: 51,
    a: '1'
  }, {
    name: '利息：',
    num: '67万',
    percent: 20,
    a: '1'
  }];

  var map = {};
  data.map(function (obj) {
    map[obj.name] = obj.num + '  ' + obj.percent + '%';
  });

  chart = new F2.Chart({
    el: canvas,
    width,
    height
  });

  chart.source(data, {
    percent: {
      formatter: function formatter(val) {
        return val + '%';
      }
    }
  });
  chart.tooltip(false);
  chart.legend({
    position: 'right',
    verticalAlign: 'bottom',
    itemFormatter: function itemFormatter(val) {
      return val + '  ' + map[val];
    }
  });
  chart.coord('polar', {
    transposed: true,
    innerRadius: 0.8,
    radius: 0.85
  });
  chart.axis(false);
  chart.interval().position('a*percent').color('name', ['#c5172c', '#b4a078', '#78b4b0']).adjust('stack');
  chart.render();
  return chart;
}

Page({

  /**
   * 页面的初始数据
   */
  data: {
    opts: {
      onInit: initChart
    },
    bannerList: [
      {
        imageUrl: 'http://images.zhengzw.com/yingjia/fy-ban.jpg'
      },
      {
        imageUrl: 'http://images.zhengzw.com/yingjia/fy-ban.jpg'
      },
      {
        imageUrl: 'http://images.zhengzw.com/yingjia/fy-ban.jpg'
      }
    ],
    indicatorDots: false,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    currentHdTabIndex: 0,
    hdTabTleList: ['视频', '全景', '户型图', '沙盘图'],
    detailInfo: {
      tle: '横琴百家达星际广场酒楼精装修',
      date: '2018-07-09',
      address: '香港丨湾仔',
      price: 3000,
      shi: 2,
      ting: 2,
      wei: 1,
      area: 93
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
        txt: '富力城楼盘频道，提供哈尔滨富力城 房价，楼盘户型，楼盘产权年限，物业费，开发商，售楼电话，绿化率，周边配套，商场，超市，学校，医院，银行，周边地图交通等全方位楼盘信息，富力城开盘交房时……',
        imgs: [
          {
            url: 'http://images.zhengzw.com/yingjia/zjjd-img.jpg'
          },
          {
            url: 'http://images.zhengzw.com/yingjia/zjjd-img.jpg'
          },
          {
            url: 'http://images.zhengzw.com/yingjia/zjjd-img.jpg'
          },
          {
            url: 'http://images.zhengzw.com/yingjia/zjjd-img.jpg'
          },
          {
            url: 'http://images.zhengzw.com/yingjia/zjjd-img.jpg'
          }
        ]
      }
    ],
    phoneNumber: '13888889999',
    love: false,
    jingjiren: {
      imgUrl: 'http://images.zhengzw.com/yingjia/zj-img.jpg',
      name: '耿专家',
      tag: '金牌分析师',
      job: '房产顾问丨哈尔滨房产分析师'
    },
    houseList: app.globalData.oldHouseList,
    showMore: false
  },

  tapWl: function () {
    wx.navigateTo({
      url: '../../pages/weiliaoDetail/weiliaoDetail'
    })
  },

  toggleMore: function () {
    this.setData({
      showMore: !this.data.showMore
    })
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

  tapScroll: function (e) {
    wx.createSelectorQuery().select('#cnxhView').boundingClientRect(function (rect) {
      // 使页面滚动到底部
      wx.pageScrollTo({
        scrollTop: rect.bottom
      })
    }).exec()
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
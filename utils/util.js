const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const onTabbarChange = event => {
  switch (event.detail) {
    case 0:
      wx.navigateTo({
        url: '/pages/index/index'
      })
      break;

    case 1:
      wx.navigateTo({
        url: '/pages/weiliao/weiliao'
      })
      break;

    case 2:
      wx.navigateTo({
        url: '/pages/news/news'
      })
      break;
    case 3:
      wx.navigateTo({
        url: '/pages/user/user'
      })
      break;
  }
}

const call = phoneNumber => {
  wx.makePhoneCall({
    phoneNumber: phoneNumber
  })
}

module.exports = {
  formatTime: formatTime,
  onTabbarChange: onTabbarChange,
  call: call
}

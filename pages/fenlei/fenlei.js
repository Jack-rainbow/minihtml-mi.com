var app = getApp()
Page({
  data: {
    navLeftItems: [],
    navRightItems: [],
    curNav: 1,
    curIndex: 0
  },
  onLoad: function () {

    var that = this

    wx.request({
      url: 'http://localhost:8088/mi/fenlei.json',
      method: 'GET',
      data: {},
      header: {
        'Accept': 'application/json'
      },
      success: function (res) {
        that.setData({
          navLeftItems: res.data,
          navRightItems: res.data
        })
      }
    })
  }

})
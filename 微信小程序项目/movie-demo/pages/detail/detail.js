// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detail: {},
    loading: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getDetail(options.id)
  },
  /**
   * 获取当前项的详细信息
   */
  getDetail (sId) {
    wx.showLoading({
      title: '正在拼命加载',
    })
    wx.request({
      url: `https://www.koocv.com/h5-view/v/movie/detail/?id=${sId}`,
      success: res => {
        console.log(res.data)
        wx.hideLoading()
        this.setData({
          detail: res.data,
          loading: false
        })
      }
    })
    // 
  }
})
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
        wx.setNavigationBarTitle({
          title: res.data.title
        })
        wx.hideLoading()
        this.setData({
          detail: res.data,
          loading: false
        })

        // 保存
        let arr = wx.getStorageSync('historyMovie') || []
        // [{id:,title,cover,rate}]
        arr = arr.filter(o => o.id !== res.data.id)
        arr.unshift({
          id: res.data.id,
          title: res.data.title,
          rate: res.data.rating.average,
          cover: res.data.images.medium
        })
        console.log(arr)
        wx.setStorageSync('historyMovie', arr)
      }
    })
    // 
  }
})
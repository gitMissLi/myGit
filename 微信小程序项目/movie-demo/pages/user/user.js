// pages/user/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    user: {},
    list: [],
    isLoading: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getUser()
  },
  onShow () {
    this.getStorage()
  },
  getUser () {
    wx.getUserInfo({
      success: res => {
        console.log(res)
        this.setData({
          user: res.userInfo
        })
      }
    })
  },

  /**
   * 获取历史记录
   */
  getStorage () {
    this.setData({
      isLoading: true
    })
    let arr = wx.getStorageSync('historyMovie') || []
    console.log(arr)
    this.setData({
      list: arr,
      isLoading: false
    })
  },
  // 显示详情
  showDetail(e) {
    let { id } = e.currentTarget.dataset
    wx.navigateTo({
      url: `../detail/detail?id=${id}`,
    })
  }
})
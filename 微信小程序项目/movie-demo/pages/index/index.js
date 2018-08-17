Page({
  data: {
    list: [],
    start: 0,  // 滚动加载开始的内容条数
    isLoading: false
  },
  /**
   * 生命周期函数-监听页面加载
   */
  onLoad (options) {
    this.getListData()
  },
  // 获取数据
  getListData () {
    wx.showLoading({
      title: '正在拼命加载中...',
      mask: true  // 加载时，不能滚动屏
    })
    this.setData({
      isLoading: true
    })
    let { start } = this.data
    wx.request({
      url: `https://www.koocv.com/h5-view/v/movie/list/?start=${start}`,
      success: (res) => {
        console.log(res.data.subjects)
        // 数据是追加
        wx.hideLoading()
        this.setData({
          start: start + 10,
          list: res.data.subjects,
          isLoading: false
        })
      }
    })
  },
  // 向下加载数据
  lower () {
    console.log('lower')
    if (!this.data.isLoading) {
      this.getListData()
    }
  },
  // 显示详情
  showDetail (e) {
    let { id } = e.currentTarget.dataset
    wx.navigateTo({
      url: `../detail/detail?id=${id}`,
    })
  }
})
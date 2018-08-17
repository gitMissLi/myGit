Page({
  data: {
    noteList: [{
      content: 'haha',
      time: Date.now()
    }]
  },
  onLoad () {
    // 页面加载时获取storage中存在的数据
    console.log('load')
  },
  onShow () {
    this.getInitData()
  },
  // 获取数据
  getInitData () {
    let list = wx.getStorageSync('note') || []
    this.setData({
      noteList: list
    })
  },
  // 新增一条node
  addNote () {
    wx.navigateTo({
      url: '../detail/detail'
    })
  },
  // 修改一条数据
  editNoteItem (e) {
    let id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: '../detail/detail?id=' + id,
    })
  }
})
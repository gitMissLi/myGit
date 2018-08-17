// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: '',
    content: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   this.initData(options.id)
  },
  // 内容改变
  inputChange (e) {
    let value = e.detail.value
    this.setData({
      content: value
    })
  },
  initData (sId) {
    sId = sId ? Number(sId) : sId
    let arr = wx.getStorageSync('note') || []
    let note = arr.find(o => o.time === sId)
    
    if (note) {
      this.setData({
        id: sId,
        content: note.content
      })
    } else {
      this.setData({
        id: Date.now(),
        content: ''
      })
    }
    console.log(this.data.content)
  },
  // 取消编辑 => 返回到index
  cancelEdit () {
    wx.navigateBack()
  },
  // 缓存数据 => 返回到index
  confirmEdit () {
    // 判断数据是否有效。
    let reg = /^\s*$/ // 全是空格
    let { id, content } = this.data
    id = Number(id)

    if (!content || reg.test(content)) {
      wx.showToast({
        title: '输入不合法！！',
        icon: 'none'
      })
      return
    }

    let arr = wx.getStorageSync('note') || []
    
    let nIndex = arr.findIndex(o => o.time === id)

    if (nIndex !== -1) {
      arr.splice(nIndex, 1, {
        time: id,
        content
      })
    } else {
      arr.unshift({
        time: id,
        content
      })
    }
    console.log(arr)
    wx.setStorageSync('note', arr)
    wx.navigateBack()
  }
})
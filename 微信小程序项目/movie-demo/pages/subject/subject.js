// pages/subject/subject.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [{
      type: '爱情',
      url: '/assets/image/aiqing.png'
    }, {
      type: '动画',
      url: '/assets/image/donghua.png'
    }, {
      type: '动作',
      url: '/assets/image/dongzuo.png'
    }, {
      type: '科幻',
      url: '/assets/image/kehuan.png'
    }, {
      type: '喜剧',
      url:'/assets/image/xiju.png'
    }]
  },

  /**
   * 跳转到对应分类中的列表
   */
  tapToList (e) {
    let { type } = e.currentTarget.dataset
    wx.navigateTo({
      url: `../subject-list/subject-list?type=${type}`,
    })
  }
})
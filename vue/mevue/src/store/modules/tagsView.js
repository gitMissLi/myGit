const tagsView = {
  state: {
    visitedViews: [], // 已访问的页面
    cachedViews: [] // keep-alive 缓存的页面
  },
  mutations: {
    // 添加页面
    ADD_VISITED_VIEWS: (state, view) => {
      // 判断是否已存在，不存在 =》 添加
      if (state.visitedViews.some(v => v.pat === view.path)) return

      state.visitedViews.push({
        name: view.name,
        path: view.path,
        title: view.meta.title || 'no-name'
      })

      // 判断该页面是否需要缓存, 默认需要缓存
      if (!view.meta.noCache) {
        this.cachedViews.push(view.name)
      }
    },
    // 删除单个页面
    DEL_VISITED_VIEWS: (state, view) => {
      // 判断是否存在，存在即删除
      for (const [i, v] of state.visitedViews.entries()) {
        if (v.path === view.path) {
          state.visitedViews.splice(i, 1)
          break
        }
      }

      // 判断是否存在于缓存页面中
      for (const i of state.cachedViews) {
        if (i === view.name) {
          const index = state.cachedViews.indexOf(i)
          state.cachedViews.splice(index, 1)
          break
        }
      }
    },
    // 删除其他页面, 传入的值，为要保存的
    DEL_OTHERS_VIEWS: (state, view) => {

    }
  }
}
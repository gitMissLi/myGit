视图模板：
  · 数据绑定- {{}}
      作为组件的内容
      作为组件的属性值
      逻辑
      数据路径
  · 条件渲染
      wx:if   ="{{ 判断条件 }}"
      wx:else
      wx:elif
        - block的使用，不会渲染成任何标签
      条件渲染和hidden
  · 事件操作
      事件是显示层到通讯层的通信
      事件对象
  · 列表渲染
      wx:for
        默认的 item 和 index
      wx:for-item
      wx:for-index
      block
      wx:key 的问题：使用唯一稳定的值，不建议使用index索引
  · 模板的使用
      template
      import 引入
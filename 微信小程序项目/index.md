文件类型：
    JSON配置
        · app.json
            整个app的全局配置（导航头等。。。）
        · page.json
            单个页面中的配置
        · project.config.json
            项目的配置

    WXML 模板 => (html)
        · 标签名 => 组件
        · 增加了属性
            wx:if   wx:else wx:for  wx:for-item
        · 增加{{}} 表达式

    WXSS 样式 => (css)
        · 新增尺寸单位 rpx
        · 全局和局部样式
        · :hover 不同
    
    逻辑部分
        · 页面构造器
        · 提供数据

目录结构
    app
        必须
            · app.js
            · app.json
        可选
            · app.wxss
    
    page
        必须
            · js + wxml
        可选
            · json / wxss

配置
    全局配置
        pages
            · 无需后缀
            · 小程序当页配置
        window
            · 窗口状态
        tabBar
            · tab配置
    页面配置
        window
            覆盖全局设置
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

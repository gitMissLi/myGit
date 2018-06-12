// 获取元素的高度
export const outerHeight = (el) => {
  var height = el.offsetHeight
  var style = el.currentStyle || window.getComputedStyle(el)

  height += parseInt(style.marginTop) + parseInt(style.marginBottom)
  return height
}

// for (let [index, v] of [].entries()) {}
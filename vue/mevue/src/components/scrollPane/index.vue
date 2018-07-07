<template>
  <div class="scroll-container" ref="scrollContainer" @wheel.prevent="handleScroll">
    <div class="scroll-wrapper" ref="scrollWrapper" :style="{left: left + 'px'}">
      <slot></slot>
    </div>
  </div>
</template>

<script>
const padding = 15 // tag's padding

export default {
  name: 'scrollPane',
  data() {
    return {
      left: 0
    }
  },
  methods: {
    // 鼠标滚动，移动tab位置
    handleScroll(e) {
      const eventDelta = e.wheelDelta || -e.deltaY * 3
      const $container = this.$refs.scrollContainer
      const $containerWidth = $container.offsetWidth  // 外层容器宽度
      const $wrapper = this.$refs.scrollWrapper
      const $wrapperWidth = $wrapper.offsetWidth

      // left的值 -xx - 0
      if (eventDelta > 0) {
        // 像后运动-》left要变大 wrapper的最大left为0
        this.left = Math.min(0, this.left + eventDelta)
      } else {
        // 向前运动-》left要变小
        // 内容超出外层范围
        if ($containerWidth - padding < $wrapperWidth) {
          // 最大值 $containerWidth - $wrapperWidth - padding
          // 超过最大滚动值
          if (this.left < -($wrapperWidth - $containerWidth + padding)) {
            this.left = this.left
          } else {
            // left改变值与最大改变值直接范围
            this.left = Math.max(this.left + eventDelta, $containerWidth - $wrapperWidth - padding)
          }
        } else {
          // 内容没超出外层范围
          this.left = 0
        }
      }
    },
    // 运行到指定的节点
    moveToTarget($target) {
      // 可视区
      const $container = this.$refs.scrollContainer
      const $containerWidth = $container.offsetWidth
      // 内容区
      const $wrapperWidth = this.$refs.scrollWrapper.offsetWidth
      const $targetWidth = $target.offsetWidth

      if (wrapperWidth + this.left < containerWidth) {
        this.left = 0
      }

      let $targetLeft = $target.offsetLeft

      if ($targetLeft < -this.left) {
        // tag in the left
        this.left = -$targetLeft + padding
      } else if ($targetLeft + padding > -this.left && $targetLeft + $targetWidth < -this.left + $containerWidth - padding) {
        // tag in the current view
        // eslint-disable-line
      } else {
        // tag in the right
        this.left = -($targetLeft - ($containerWidth - $targetWidth) + padding)
      }
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.scroll-container {
  white-space: nowrap;
  position: relative;
  overflow: hidden;
  width: 100%;
  .scroll-wrapper {
    position: absolute;
  }
}
</style>

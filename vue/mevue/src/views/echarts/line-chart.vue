<template>
  <div class="line-chart" :style="{width: width, height: height}"></div>
</template>

<script>
import echarts from 'echarts'
export default {
  props: {
    width: {
      type: String,
      default: '500px'
    },
    height: {
      type: String,
      default: '500px'
    },
    autoResize: {
      type: Boolean,
      default: true
    },
    chartData: {
      type: Object,
      defaullt: () => {}
    }
  },
  data () {
    return {
      chart: null
    }
  },
  // 监控chartData变化，=> setOption
  mounted () {
    // 初始化echart
    this.initChart()

    // resize
    if (this.autoResize) {
      // 因为注册了函数，当页面销毁时要移除函数，所以将函数挂载到this下
      this._resize = () => {
        if (this.chart) {
          this.chart.resize()
        }
      }
      
      window.addEventListener('resize', this._resize)
    }
  },
  beforeDestroy () {
    if (!this.chart) {
      return
    }

    // 销毁resize事件
    if (this.autoResize) {
      window.removeEventListener('resize', this._resize)
    }

    this.chart.dispose()
    this.chart = null
  },
  methods: {
    setOption () {
      this.chart.setOption({
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line'
        }]
      }, true)
    },
    initChart () {
      this.chart = echarts.init(this.$el)
      this.setOption()
    }
  }
}
</script>

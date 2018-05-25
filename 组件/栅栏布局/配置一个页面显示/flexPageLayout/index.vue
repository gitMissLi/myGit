<template>
  <div class="flex-page">
    <div class="item-icons" v-show="editMode" ref="temIcons">
      <template v-for="icon in layoutInfo">
        <q-btn
          flat
          round
          class="q-ma-xs"
          :disable="icon.len < layoutData.length"
          :icon="icon.icon"
          :color="icon.mode === mode ? 'secondary' : ''"
          @click="changeTheme(icon.mode)"></q-btn>
      </template>
    </div>
    <div class="row" :style="{height: viewHeight + 'px'}">
      <template v-for="(item, index) in flexLayout">
      <div :class="[getColumnClass(index), {'dashBorder': editMode}]" :style="{height: heightPercent + '%' }">
        <div
          class="column justify-center"
          style="height: 100%"
          :draggable="editMode"
          @dragstart="handleDragStart($event, index)"
          @dragover.prevent="handleDragOver($event, index)"
          @dragenter="handleDragEnter($event, index)"
          @drop="handleDrop($event, index)"
          @dragend="handleDragEnd($event, index)">
          <div class="text-center" v-if="getCurrentItem(index) < 0" v-show="editMode">
            <q-btn color="secondary" round icon="add" @click="addItem(index)"></q-btn>
          </div>
          <slot v-else name="flex-column-content" :item="getColumnInfo(index)"></slot>
        </div>
      </div>
    </template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'flex-page-layout',
  props: {
    modeType: {
      type: String,
      default: 'temThree'
    },
    flexData: {
      type: Array,
      default: () => []
    },
    editMode: {
      type: Boolean,
      default: true
    },
    pageHeight: {
      type: Number,
      default: 900
    }
  },
  computed: {
    viewHeight () {
      return this.editMode ? this.pageHeight - (this.$refs.temIcons ? this.$refs.temIcons.offsetHeight : 0) : this.pageHeight
    },
    heightPercent () {
      return this.getColumnHeight()
    },
    flexLayout () {
      let aLen = []
      let oCurrent = this.layoutInfo.find(o => o.mode === this.mode)

      if (oCurrent) {
        aLen = Array(oCurrent.len)
      }
      return aLen
    }
  },
  watch: {
    flexData () {
      this.layoutData = JSON.parse(JSON.stringify(this.flexData))
      this.mode = this.getMode()
    },
    modeType () {
      this.mode = this.getMode()
    }
  },
  data () {
    return {
      mode: '',
      layoutInfo: [{
        mode: 'twoTem',
        icon: 'home',
        len: 2
      }, {
        mode: 'threeTem',
        icon: 'home',
        len: 3
      }, {
        mode: 'fourTem',
        icon: 'home',
        len: 4
      }, {
        mode: 'fiveTem',
        icon: 'home',
        len: 5
      }, {
        mode: 'sixTem',
        icon: 'home',
        len: 6
      }, {
        mode: 'sevenTem',
        icon: 'home',
        len: 7
      }, {
        mode: 'eightTem',
        icon: 'home',
        len: 8
      }, {
        mode: 'nineTem',
        icon: 'home',
        len: 9
      }, {
        mode: 'tenTem',
        icon: 'home',
        len: 10
      }, {
        mode: 'elevenTem',
        icon: 'home',
        len: 11
      }, {
        mode: 'twelveTem',
        icon: 'home',
        len: 12
      }],
      layoutData: this.flexData,
      dragging: null
    }
  },
  mounted () {
    this.mode = this.getMode()
  },
  methods: {
    getMode () {
      let aMode = this.layoutInfo.filter(o => !(o.len < this.layoutData.length))

      if (aMode.some(o => o.mode === this.modeType)) {
        return this.modeType
      } else if (aMode.length) {
        return aMode[0].mode
      } else {
        return this.layoutInfo[0].mode
      }
    },
    getCurrentItem (index) {
      let isIndex = this.layoutData.findIndex(o => o.mode && o.mode[this.mode] === index)

      if (isIndex < 0) {
        isIndex = this.layoutData.findIndex(o => !o.mode || o.mode[this.mode] === undefined)
      }
      return isIndex
    },
    getColumnInfo (index) {
      // 判断是否该布局索引对应有数据
      let dataIndex = this.getCurrentItem(index)
      let item = null

      if (dataIndex >= 0) {
        item = this.layoutData[dataIndex]
        if (item.mode === undefined) {
          item.mode = {}
        }
        item.mode[this.mode] = index
      }

      return item
    },
    getColumnClass (index) {
      let columnClass = ''
      switch (this.mode) {
        case 'twoTem':
        case 'fourTem':
        case 'sixTem':
          columnClass = 'col-6'
          break
        case 'threeTem':
          switch (index % 3) {
            case 0:
            case 1:
              columnClass = 'col-6'
              break
            case 2:
              columnClass = 'col-12'
              break
            default:
              columnClass = 'col-6'
              break
          }
          break
        case 'fiveTem':
          switch (index % 5) {
            case 0:
            case 1:
            case 3:
            case 4:
              columnClass = 'col-6'
              break
            case 2:
              columnClass = 'col-12'
              break
            default:
              columnClass = 'col-6'
              break
          }
          break
        case 'sevenTem':
          switch (index % 7) {
            case 0:
            case 1:
            case 2:
            case 4:
            case 5:
            case 6:
              columnClass = 'col-4'
              break
            case 3:
              columnClass = 'col-12'
              break
            default:
              columnClass = 'col-6'
              break
          }
          break
        case 'eightTem':
        case 'twelveTem':
          columnClass = 'col-3'
          break
        case 'nineTem':
          columnClass = 'col-4'
          break
        case 'tenTem':
          switch (index % 10) {
            case 0:
            case 1:
            case 2:
            case 3:
            case 6:
            case 7:
            case 8:
            case 9:
              columnClass = 'col-3'
              break
            case 4:
            case 5:
              columnClass = 'col-6'
              break
          }
          break
        case 'elevenTem':
          switch (index % 11) {
            case 0:
            case 1:
            case 2:
            case 3:
            case 7:
            case 8:
            case 9:
            case 10:
              columnClass = 'col-3'
              break
            case 4:
            case 5:
            case 6:
              columnClass = 'col-4'
              break
          }
          break
        default:
          break
      }
      return columnClass
    },
    getColumnHeight () {
      let nHeight = 50
      switch (this.mode) {
        case 'twoTem':
          nHeight = 100
          break
        case 'threeTem':
        case 'fourTem':
        case 'eightTem':
          nHeight = 50
          break
        case 'fiveTem':
        case 'sixTem':
        case 'sevenTem':
        case 'nineTem':
        case 'tenTem':
        case 'elevenTem':
        case 'twelveTem':
          nHeight = 33.3333
          break
        default:
          nHeight = 50
          break
      }
      return nHeight
    },
    changeTheme (temp) {
      this.mode = temp
      this.$emit('changeTheme', temp)
    },
    handleDragStart (e, index) {
      let src = this.layoutData.find(o => o.mode[this.mode] === index)
      if (src) {
        this.dragging = index
      } else {
        e.preventDefault()
      }
    },
    handleDragEnd (e) {
      this.dragging = null
    },
    handleDragOver (e) {
      e.dataTransfer.dropEffect = 'move'
    },
    handleDragEnter (e) {
      e.dataTransfer.effectAllowed = 'move'
    },
    handleDrop (e, index) {
      if (index === this.dragging) {
        return
      }
      // 判断目标元素是否有数据：有->交换 无->修改mode
      const newItems = [...this.layoutData]
      let src = newItems.find(o => o.mode[this.mode] === this.dragging)
      let dst = newItems.find(o => o.mode[this.mode] === index)

      if (dst) {
        [src.mode[this.mode], dst.mode[this.mode]] = [dst.mode[this.mode], src.mode[this.mode]]
      } else {
        src.mode[this.mode] = index
      }
      this.layoutData = newItems
      this.$emit('changeOrder', newItems)
    },
    addItem (index) {
      this.$emit('changeData', index)
    }
  }
}
</script>

<style lang="stylus" scoped>
  .dashBorder
    border 1px dashed
</style>

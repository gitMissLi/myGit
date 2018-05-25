<template>
  <div class="flex-index">
    <div class="tem-icons" v-show="editMode" ref="temIcons">
      <template v-for="icon in layoutInfo">
        <q-btn
          flat
          round
          class="q-ma-xs"
          :icon="icon.icon"
          :color="icon.mode === layout ? 'secondary' : ''"
          @click="changeTheme(icon.mode)"></q-btn>
      </template>
    </div>
    <div class="row" :style="{height: viewHeight + 'px'}">
      <template v-for="(item, index) in layoutData" >
        <div :class="[getColumnInfo(index), '']" :style="{height: heightPercent + '%'}">
          <div
            class="column justify-center"
            style="height: 100%"
            :draggable="editMode"
            @dragstart="handleDragStart($event, item)"
            @dragover.prevent="handleDragOver($event, item)"
            @dragenter="handleDragEnter($event, item)"
            @drop="handleDrop($event, item)"
            @dragend="handleDragEnd($event, item)">
            <slot name="flex-column-content" :item="item"></slot>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'flex-layout',
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
  components: {},
  computed: {
    heightPercent () {
      return this.getColumnHeight()
    },
    viewHeight () {
      return this.editMode ? this.pageHeight - (this.$refs.temIcons ? this.$refs.temIcons.offsetHeight : 0) : this.pageHeight
    }
  },
  watch: {
    flexData () {
      this.layoutData = JSON.parse(JSON.stringify(this.flexData))
    }
  },
  data () {
    return {
      layout: this.modeType,
      layoutInfo: [{
        mode: 'temThree',
        icon: 'home'
      }, {
        mode: 'temFour',
        icon: 'home'
      }],
      layoutData: this.flexData,
      dragging: null
    }
  },
  methods: {
    getColumnInfo (index) {
      let columnClass = ''
      switch (this.layout) {
        case 'temThree':
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
        case 'temFour':
          columnClass = 'col-6'
          break
        default:
          break
      }
      return columnClass
    },
    getColumnHeight () {
      let nHeight = 50
      switch (this.layout) {
        case 'temThree':
        case 'temFour':
          nHeight = 50
          break
        default:
          nHeight = 50
          break
      }

      return nHeight
    },
    changeTheme (theme) {
      this.layout = theme
      this.$emit('changeTheme', theme)
    },
    handleDragStart (e, item) {
      this.dragging = item
    },
    handleDragEnd (e, item) {
      this.dragging = null
    },
    handleDragOver (e) {
      e.dataTransfer.dropEffect = 'move'
    },
    handleDragEnter (e, item) {
      e.dataTransfer.effectAllowed = 'move'
    },
    handleDrop (e, item) {
      if (item === this.dragging) {
        return
      }
      const newItems = [...this.layoutData]
      let src = newItems.indexOf(this.dragging)
      let dst = newItems.indexOf(item)
      let srcData = newItems[src]
      let dstData = newItems[dst]

      // [newItems[src], newItems[dst]] = [newItems[dst], newItems[src]]
      newItems[src] = dstData
      newItems[dst] = srcData
      this.layoutData = newItems
      this.$emit('changeOrder', newItems)
    }
  }
}
</script>

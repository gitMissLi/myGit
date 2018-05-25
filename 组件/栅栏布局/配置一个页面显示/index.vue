<template>
  <div ref="contentWrap">
    <div class="card-box">
      <flex-layout
        :flex-data="factoryList"
        :mode-type="mode"
        :edit-mode="isEdited"
        :page-height="pageHeight"
        @changeTheme="changeLayout"
        @changeOrder="changeOrder"
        @changeData="addItem">
        <template slot="flex-column-content" slot-scope="props">
          <!-- 填充插槽中信息 -->
          <item-card
          :item="props.item"
          :status="isEdited">
            <div slot="item-content">{{ props.item.key }}</div>
          </item-card>
        </template>
      </flex-layout>
    </div>
  </div>
</template>

<script>
import flexLayout from './flexPageLayout' // 只用一个页面显示内容
// import flexLayout from './flexLayout' // 配置一个页面显示个数

export default {
  components: {
    flexLayout
  },
  data () {
    return {
      factoryList: [],
      isEdited: false,
      mode: 'temThree',
      pageHeight: 900
    }
  },
  methods: {
    changeLayout (layout) {
      this.mode = layout
    },
    changeOrder (data) {
      this.factoryList = data
      console.log(this.factoryList)
    },
    getPageHeight () {
      this.pageHeight = this.$refs.contentWrap ? this.$refs.contentWrap.offsetHeight : 900
    },
  }
}
</script>

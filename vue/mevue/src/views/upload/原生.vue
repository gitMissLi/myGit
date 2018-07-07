<template>
  <div>
    <input type="file" @change="getFile($event)" />
    <button value="提交" @click="upload"></button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      file: ''
    }
  },
  methods: {
    getFile (e) {
      this.file = e.target.files[0]
    },
    upload () {
      // 调用接口, formData 为参数
      let fromData = new FormData()
      fromData.append('file', this.file)

    }
  }
}
</script>


1、
  npm install --save file-saver blob xlsx

2、引入
import XLSX from 'xlsx'
import Blob from 'blob'
import FileSaver from 'file-saver'


3、使用
  {
    filename:'',
    columns: [{name:'xx'}],
    data: [{xx: 'xxxx'}, {xx: 'xxxx'}]
  }

const s2ab = function (s) {
  if (typeof ArrayBuffer !== 'undefined') {
    let buf = new ArrayBuffer(s.length)
    let view = new Uint8Array(buf)
    for (let i = 0; i !== s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF
    return buf
  } else {
    let buf = new Array(s.length)
    for (let i = 0; i !== s.length; ++i) buf[i] = s.charCodeAt(i) & 0xFF
    return buf
  }
}

const exportExcel = function (XLSX, Blob, FileSaver, { filename = 'table', columns, data = [] }) {
  if (!data.length) {
    data = columns.map(o => {
      return {
        [o.name]: ''
      }
    })
  }
  // 创建表格。
  let wb = {
    SheetNames: ['Sheet1'],
    Sheets: {
      // 创建sheet
      Sheet1: XLSX.utils.json_to_sheet(data)
    }
  }

  let wbout = XLSX.write(wb, {
    bookType: 'xlsx',
    type: 'binary'
  })

  // 下载表格。
  FileSaver.saveAs(new Blob([s2ab(wbout)], {
    type: 'application/octet-stream'
  }), filename + '.xlsx')
}
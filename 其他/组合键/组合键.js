window.addEventListener('keydown', function (ev) {
  var keyCode = ev.keyCode || ev.which || ev.charCode
  var ctrlKey = ev.ctrlKey || ev.metaKey

  if (ctrlKey && keyCode === 77) {
    this.isEditedBtnVisible = !this.isEditedBtnVisible
  }

  ev.preventDefault()
  return false
}.bind(this))
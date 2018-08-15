const $addCounter = $('.counterBox .addCounter')
const $counterPanel = $('.counterBox .counterPanel')
const $hasAll = $('.allSel .val')
const $maximum = $('.maximum .val')
const $allCount = $('.allCount .val')

const counters = []

class Counter {
  constructor () {
    this.value = 0
    this.elt = $('<div class="counter"></div>')

    let incrementBtn = this.incrementBtn = $('<button class="add"></button>')
    let decrementBtn = this.decrementBtn = $('<button class="sub"></button>')
    let oddBtn = this.oddBtn = $('<button class="addIfOdd"></button>')
    let asyncBtn = this.asyncBtn = $('<button class="addAsync"></button>')
    let num = this.num = $(`<span>${this.value}</span>`)

    this.elt.append(decrementBtn, num, incrementBtn, oddBtn, asyncBtn)

    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
    this.addIfOdd = this.addIfOdd.bind(this)
    this.asyncAdd = this.asyncAdd.bind(this)

    incrementBtn.click(this.increment)
    decrementBtn.click(this.decrement)
    oddBtn.click(this.addIfOdd)
    asyncBtn.click(this.asyncAdd)
  }

  increment () {
    this.num.html(++this.value)
    asyncState()
  }

  decrement () {
    if (this.value === 0) return

    this.num.html(--this.value)
    asyncState()
  }

  addIfOdd () {
    if (this.value % 2 === 0) return
    this.num.html(++this.value)
    asyncState()
  }

  asyncAdd () {
    setTimeout(() => {
      this.num.html(++this.value)
      asyncState()
    }, 1000)
  }
}

function checkHasAll () {
  let val = counters.every(elt => elt.value !== 0)

  $hasAll.html(val + '')
}
function calcMax () {
  let val = counters.reduce((prev, current) => {
    return prev > current.value ? prev : current.value
  }, 0)

  $maximum.html(val)
}
function countAll () {
  let val = counters.reduce( (prev, current) => prev + current.value, 0)

  $allCount.html(val)
}

function asyncState() {
  checkHasAll()
  calcMax()
  countAll()
}

$addCounter.click(ev => {
  const counter = new Counter()
  counters.push(counter)
  $counterPanel.append(counter.elt)
  asyncState()
})
import widgetFactory from './widget'
import { TILE_NUM_X, TILE_NUM_Y, EMPTY_TILE, FULLFILLED_TILE, ACTIVE_TILE } from './const'

function repeat (fn, times) {
    const ret = []

    for (let i = 0; i < times; ++i) {
        ret.push(fn())
    }

    return ret
}

export default class Model {
    level = 1
    context = null
    isPaused = false

    get stage () {
        return this._stage
    }

    get widget () {
        return this._widget
    }

    get failed () {
        return this._failed
    }

    get started () {
        return this._started
    }

    constructor () {
        this._started = false
    }

    start () {
        this.initStage()
        this.initWidget()
        this.initTimer()

        this._failed = false
        this._started = true
    }

    stop () {
        this._started = false

        this.clearTimer()
        this.clearWdget()
        this.cleartStage()
    }

    pause () {
        this.isPaused = true
    }

    resume () {
        this.isPaused = false
    }

    getTileState (x, y) {
        return this.stage[y][x]
    }

    setTileState (x, y, state) {
        this.stage[y][x] = state
    }

    // 右移
    widgetGoRight () {
        if (this.isPaused) {
            return
        }

        this.widget.goRight()
        this.updateActionResult()
    }

    // 下移
    widgetGoDown () {
        if (this.isPaused) {
            return
        }

        this.widget.goDown()
        this.updateActionResult()
    }

    // 翻转
    widgetRotate () {
        if (this.isPaused) {
            return
        }

        this.widget.rotate()
        this.updateActionResult()
    }

    // 速降
    widgetGoFast () {
        if (this.isPaused) {
            return
        }

        this.widget.goFast()
    }

    updateActionResult () {
        this.clearActiveTiles()

        const { widget } = this
        if (widget) {
            // 刷新现在的widget的位置
            widget.updateActionResult()
        }

        // 通知view更新画面
        this.context.emitModelChange()
    }

    // 清理stage中active的tile
    clearActiveTiles () {
        this._stage = this.stage.map(line => {
            return line.map(tileState => {
                if (tileState === ACTIVE_TILE) {
                    return EMPTY_TILE
                }

                return tileState
            })
        })
    }

    initStage () {
        this._stage = repeat(_ => repeat(_ => EMPTY_TILE, TILE_NUM_X), TILE_NUM_Y)
    }

    cleartStage () {
        this.initStage()
        this.updateActionResult()
    }

    initWidget () {
        this._widget = widgetFactory(this)
        this.updateActionResult()
    }

    clearWdget () {
        this._widget = null
    }

    initTimer () {
        this._timer = setInterval(this.timeout.bind(this), 100)
    }

    clearTimer () {
        clearInterval(this._timer)
        this._timer = null
    }

    timeout () {
        const { level, widget} = this

        if (this.isPaused) {
            return
        }

        if (widget.fast) {
            this.doUpdate()
            return
        }

        this._counter++
        if (this._counter < 11 - level) {
            return
        }

        this.doUpdate()
    }

    doUpdate () {
        this.updateActionResult(this)
        this.updateFailState()

        if (this.failed) {
            this.context.emitModelChange()
            return
        }

        this.updateWidget() // 新建widget或向下一格
        this.updateStage() // 消行
        this.updateFailState() // 判定有没有失败

        this.context.emitModelChange()
        this._counter = 0
    }

    updateStage () {
        const newStage = this.stage.map(line => {
            if (line.every(el => el === FULLFILLED_TILE)) {
                return null
            }
        
            return line
            }).filter(line => line)

        const fillNum = TILE_NUM_Y - newStage.length
        if (!fillNum) {
            this._stage = newStage
            return
        }

        this._stage = repeat(_ => repeat(_ => EMPTY_TILE, TILE_NUM_X), fillNum).concat(newStage)
    }

    updateFailState () {
        if (this.stage[0].some(el => el === FULLFILLED_TILE)) {
            this._failed = true
            this.stop()
        }
    }

    updateWidget () {
        if (!this.widget || this.widget.finished) {
        this.initWidget()
        } else {
        this.widgetGoDown() // 向下一格
        }
    }
}
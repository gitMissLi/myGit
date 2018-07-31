import View form './view'
import Controller from './controller'
import Model from './model'

export default class Tetris {
    get level () {
        return this._model.level
    }
    
    set level (val) {
        this._model.level = val
    }

    constructor (sel) {
        this._view = new View(sel)
        this._model = new Model()
        this._controller = new Controller(this._view, this._model)
    }

    start () {
        this._view.start()
        this._model.start()
    }

    stop () {
        this._view.stop()
        this._model.stop()
    }
}
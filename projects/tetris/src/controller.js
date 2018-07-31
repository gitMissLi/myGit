export default class Controller {
    constructor (view, model) {
        this._view = view
        this._model = model

        view.context = this
        model.context = this
    }

    // model变更
    emitModelChange () {
        const mdl = this._model
        if (!mdl.started) {
            return
        }

        this._view.render(mdl)
    }

    // view事件
    emitViewEvent (evt) {
        const mdl = this._model

        if (!mdl.started) {
            return
        }

        const code = evt.code

        if (code === 'ArrowLeft') {
            mdl.widgetGoLeft()
        } else if (code === 'ArrowRight') {
            mdl.widgetGoRight()
        } else if (code === 'ArrowDown') {
            mdl.widgetGoFast()
        } else if (code === 'ArrowUp') {
            mdl.widgetRotate()
        } else if (code === 'Space') {
            mdl.isPaused = !mdl.isPaused
        }
    }
}
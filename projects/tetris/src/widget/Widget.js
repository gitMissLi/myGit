import { ACTIVE_TILE, FULLFILLED_TILE, TILE_NUM_X, TILE_NUM_Y } from '../const'
import createInitialTiles from './tileFactory'
import rotate from './rotator'

export default class Widget {
    fast = false
    finished = false
    tiles = []

    get type () {
        return this._type
    }

    constructor (type, model) {
        this._type = type
        this._model = model
        this.tiles = createInitialTiles(type)
        this._isAtBottom = false
    }

    updateActionResult () {
        if (this.atBottom()) {
            // 到底或者被拦住
            this.flushToModel(FULLFILLED_TILE)
            this.finished = true
        } else {
            this.flushToModel(ACTIVE_TILE)
        }
    }

    goDown () {
        if (this.atBottom()) {
            return
        }

        this.tiles = this.tiles.map(tile => {
            return {
                x: tile.x,
                y: tile.y + 1
            }
        })
    }

    goLeft () {
        if (this.atBottom()) {
            return
        }

        if (this.tiles.some(tile => tile.x === 0)) {
            console.log(`已经移动到最左边.`)
            return
        }

        this.tiles = this.tiles.map(tile => {
            return {
                x: tile.x - 1,
                y: tile.y
            }
        })
    }

    goRight () {
        if (this.atBottom()) {
          return
        }
    
        if (this.tiles.some(tile => tile.x === TILE_NUM_X - 1)) {
          console.log(`已经移动到最右边.`)
          return
        }
    
        this.tiles = this.tiles.map(tile => {
          return {
            x: tile.x + 1,
            y: tile.y
          }
        })
    }

    goFast () {
        if (this.atBottom()) {
            return
        }

        this.fast = true
    }

    rotate () {
        if (this.atBottom()) {
          return
        }
    
        rotate(this)
    }

    flushToModel (state) {
        const { tiles } = this
        tiles.forEach(tile => {
            if (tile.x < 0 || tile.y < 0 ||
                tile.x >= TILE_NUM_X || tile.y >= TILE_NUM_Y) {
                return
            }

            this._model.setTileState(tile.x, tile.y, state)
        })
    }

    atBottom () {
        if (this._isAtBottom) {
            return true
        }

        const { tiles } = this
        this._isAtBottom = tiles.some(tile => {
            return (tile.y === TILE_NUM_Y - 1) ||
            (this._model.getTileState(tile.x, tile.y + 1) === FULLFILLED_TILE)
        })

        return this._isAtBottom
    }
}
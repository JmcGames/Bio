import game from '../Main'
import imageCache from '../ImageCache'
import { Img } from '../Frame'
import GameObject from './GameObject'

class Star extends GameObject {

    constructor( x, y ) { super( x, y ) }

    draw( opacity=1, scale=1 ) {

        this.sprite.draw({ 
            x: this.coords.x,
            y: this.coords.y,
            rotationSpeed: 18,
            centerOrigin: true,
            shadowColor: this.shadowColor,
            shadowBlur: 20,
            opacity,
            scale
        })
    }
}

export class AquaStar extends Star {
    sprite = new Img( game.ctx, imageCache.index[ 'star' ])
    shadowColor = 'aqua'
    constructor( x, y ) { super( x, y ) }
}

export class PinkStar extends Star {
    sprite = new Img( game.ctx, imageCache.index[ 'starette' ])
    shadowColor = '#f24fa0'
    constructor( x, y ) { super( x, y ) }
}

export class RedStar extends Star {
    sprite = new Img( game.ctx, imageCache.index[ 'mean-star' ])
    shadowColor = 'none'
    constructor( x, y ) { super( x, y ) }
}

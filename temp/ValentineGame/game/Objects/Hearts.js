import game from '../Main'
import imageCache from '../ImageCache'
import { Img } from '../Frame'
import GameObject from './GameObject'

export default class Hearts extends GameObject{
    
    sprite = new Img( game.ctx, imageCache.index["heart-red"] )
    time = 0
    ratio

    constructor() {
        super();
    }    

    update() {
        this.time = ( this.time + 1 ) % 120;
        this.ratio = this.time / 120;
        this.opacity = 1 - this.ratio;
        this.scale = 1 + this.ratio;
    }

    draw() {
        this.sprite.draw({
            x: game.canvas.width/2,
            y: game.canvas.height/2 - 12 - this.time,
            opacity: this.opacity,
            scale: this.scale,
            centerOrigin: true,
            shadowColor: 'hotpink',
            shadowBlur: 12
        })
    }

}
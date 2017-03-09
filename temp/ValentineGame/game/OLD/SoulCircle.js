import game from '../Main'
import { Img } from '../Frame'
import imageCache from '../ImageCache'

export default class SoulCircle {
    
    canvas = document.createElement( 'canvas' )
    ctx = this.canvas.getContext( '2d' )
    sprite = new Img( game.ctx, this.canvas )
    male = new Img( this.ctx, imageCache.index['star'] )
    female = new Img( this.ctx, imageCache.index['starette'] )

    constructor() {
        this.canvas.width = 128;
        this.canvas.height = 128;
    }

    draw() {
        // draw to this canvas
        this.ctx.clearRect( 0, 0, this.canvas.width, this.canvas.height );
        this.female.draw({
            x: this.canvas.width/2 + 14,
            y: this.canvas.width/2,
            centerOrigin: true,
            rotationSpeed: 8,
            shadowColor: '#f24fa0',
            shadowBlur: 24,
            opacity: 0.8
        })
        this.ctx.globalCompositeOperation = 'destination-over'
        this.male.draw({
            x: this.canvas.width/2 - 14,
            y: this.canvas.height/2,
            centerOrigin: true,
            rotationSpeed: -8,
            shadowColor: 'aqua',
            shadowBlur: 24,
            opacity: 0.8
        })
        // draw to main canvas
        this.sprite.draw({
            x: game.canvas.width/2,
            y: game.canvas.height/2,
            centerOrigin: true,
            rotationSpeed: -2,
        });
    }
}
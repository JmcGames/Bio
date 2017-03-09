import { AquaStar, PinkStar } from './Objects/Star'
import point from './Objects/Point'
import angle from './Objects/Angle'
import action from './Objects/Action'
import path from './Objects/Path'
import Hearts from './Objects/Hearts'
import Background from './Objects/Background'


class Game {

    terminate
    canvas
    ctx
    center
    action
    bg

    /**
     * Initialize Canvas, Objects and Game State.
     * Must be called after component has mounted and therefore has been
     * extracted from the constructor.
     */
    init() {
        this.terminate = false;
        this.initCanvas();
        this.initGameObjects();
        this.action = actions.circle();
        this.animationFrame();
    }

    /**
     * Initialize the canvas and store references in this object.
     */
    initCanvas() {
        this.canvas = document.getElementById('valentine-game');
        this.ctx = this.canvas.getContext('2d');
        this.canvas.width = 640;
        this.canvas.height = 480;
        this.ctx.fillRect( 0, 0, this.canvas.width, this.canvas.height );
        this.center = point( this.canvas.width / 2, this.canvas.height / 2 );
    }

    initGameObjects() {
        this.star = new AquaStar();
        this.starette = new PinkStar();
        this.bg = new Background();
    }

    /**
     * Main Loop of the application
     */
    animationFrame() {
        this.update();
        this.draw();
        if( !this.terminate )
            requestAnimationFrame( this.animationFrame.bind( this ) );
    }

    /**
     * Perform all game logic operations...
     */
    update() {
        this.action.update();
        this.bg.update();
    }

    /**
     * Redraw Canvas screen...
     */
    draw() {
        this.ctx.fillStyle = "#0f1319";
        this.ctx.fillRect( 0, 0, this.canvas.width, this.canvas.height );
        this.action.draw();
        this.bg.draw();
    }


};

const game = new Game;

const actions = {
    circle: () => action(
        function(){
            this.star = new AquaStar( game.center.x, game.center.y );
            this.starette = new PinkStar( game.center.x, game.center.y );
            this.hearts = new Hearts;
            this.cirPath = path( game.center, 12, angle(), 2 );
        },
        function() {
            this.cirPath = this.cirPath.step();
            this.star.coords = this.cirPath.position;
            this.starette.coords = this.cirPath.flip().position;
            this.hearts.update();
        },
        function(){
            this.hearts.draw();
            this.star.draw();
            this.starette.draw();
        }
    )
}

export default game;


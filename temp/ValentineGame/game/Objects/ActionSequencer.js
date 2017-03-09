import game from '../Main'
import action from './Action'
import { AquaStar, PinkStar, RedStar } from './Star'
import point from './Point'
import angle from './Angle'
import path from './Path'
import timer from './Timer'

class ActionSequencer {

    action
    pinkStar
    aquaStar
    timer

    constructor() {
        this.pinkStar = new PinkStar( game.center.x, game.center.y );
        this.aquaStar = new AquaStar( game.center.x, game.center.y );
        this.next();
    }

    next() {
        this.action = sequence.shift()().init( this );
        this.timer = timer( this.action.length, this.next.bind( this ));
    }

    update(){
        this.action.update.bind( this )();
        this.timer.tick();
    }

    draw(){
        this.action.draw.bind( this )();
    }
}

export default ActionSequencer;

const sequence = [];

// Initial scene in which souls coalesse in harmony.
sequence.push(() => action(
        function( parent ) {
            parent.cirPath = path( game.center, 12, angle(), 2 );
            return this;
        },
        function() {
            this.cirPath = this.cirPath.step();
            this.pinkStar.coords = this.cirPath.position;
            this.aquaStar.coords = this.cirPath.flip().position;
        },
        function() {
            this.pinkStar.draw(); 
            this.aquaStar.draw();
        },
        5 //300
    )
)

// Intro to mean star.
sequence.push(() => action(
        function( parent ) {
            parent.redStar = new RedStar( -50, 100 );
            // parent.redStar = new RedStar( 540, 100 );
            return this;
        },
        function() {
            this.cirPath = this.cirPath.step();
            this.pinkStar.coords = this.cirPath.position;
            this.aquaStar.coords = this.cirPath.flip().position;
            this.redStar.coords = this.redStar.coords.moveDirection( 0, 2 );
        },
        function() {
            this.pinkStar.draw(); 
            this.aquaStar.draw();
            this.redStar.draw();
        },
        5 // 300
    )
)

// Star becomes hexed.
sequence.push(() => action(
        function( parent ) {
            return this;
        },
        function() {},
        function() {
            this.pinkStar.draw(); 
            this.aquaStar.draw();
            this.redStar.draw();
        },
        5 // 300
    )
)

// Star Dies
sequence.push(() => action(
        function( parent ) {
            parent.time = 0;
            parent.fade = 1;
            return this;
        },
        function() {
            this.fade = 1 - ( this.time++ / this.action.length );
        },
        function() {
            this.pinkStar.draw(); 
            this.aquaStar.draw( this.fade, this.fade );
            this.redStar.draw();
        },
        300 // 300
    )
)
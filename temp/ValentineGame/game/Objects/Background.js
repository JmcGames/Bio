import Timer from './Timer'
import imageCache from '../ImageCache'
import { Img } from '../Frame'
import game from '../Main'

function Fader( length ){
	
	var fader       = this,
		timeElapsed = 0,
		timeTotal   = length * 60,
		isFadingOut = false;
	
	this.complete = false;
	this.opacity = 0;
	
	this.fade = function(){
		
		tick();
		transition();
		shiftOpacity();
		
	}
	
	function tick(){
		
		timeElapsed = ++timeElapsed % timeTotal;
		
	}
	
	function transition(){
		
		if( !timeElapsed ){
			
			if( isFadingOut ) fader.complete    = true;
			else              isFadingOut = true;
			
		}
		
	}
	
	function shiftOpacity(){
		
		var fadePercent = timeElapsed / timeTotal;
		
		if( isFadingOut ) fader.opacity = 1 - fadePercent;
		else              fader.opacity = fadePercent;
		
	}
	
}

function randomInt( min, max ){
    return Math.floor( Math.random() * ( max - min + 1 )) + min;
}

function randomFloat( min, max ){
    return Math.random() * ( max - min ) + min;
}

function plusOrMinus(val){
    if(randomInt(0,1))
        return val;
    return -val;
}

export default  function BackgroundControl(){


		// *** INIT *** //

		var timer = Timer( 10, createStar ),
			bgStars = [],
			heartTypes = [
                imageCache.index['heart-red']
            ];

		var n = 0;
		while( n++ < 100 ) {
			timer.tick();
			updateStars();
			garbageCollection();
		}


		// *** METHODS *** //

		this.update = function(){

			timer.tick();
			updateStars();
			garbageCollection();

		};

		this.draw = function(){

			iterateStars( function( star ){
				star.draw();
			});

		};

		function iterateStars( callback ){

			for( var index = 0; index < bgStars.length; index++ )
				callback( bgStars[ index ], index );

		}

		function updateStars(){

			iterateStars( function( star ){
				star.update();
			});

		}

		function createStar(){

			var xmin = 0,
				xmax = 640,
				ymin = 0,
				ymax = 480;

			bgStars.push( new bgStar( randomInt( xmin, xmax ), randomInt( ymin, ymax )));

		}

		function garbageCollection(){
			iterateStars( function( star, index ){
				if( star.delete ) bgStars.splice( index, 1 );
			});
		}


		// *** OBJECTS *** //

		function bgStar(x,y){

			// *** INIT *** //
			var fader    = new Fader( 3 ),
				starType = heartTypes[ 0 ],
				scale    = randomFloat( .4, 0.8 ),
				opacity  = randomFloat( .3, .6 );

			this.sprite = new Img( game.ctx, starType );
			this.delete = false;
			this.x      = x;
            this.y      = y;


			// *** METHODS *** //

            this.update = function(){
				fader.fade();
				if( fader.complete ) this.delete = true;
			};

            this.draw = function(){
                if( !this.delete ) {
                    this.sprite.draw({
                        x : this.x, 
                        y : this.y,            
                        scale: scale * fader.opacity,
                        centerOrigin: true,
                        opacity: opacity * fader.opacity
                    });
                }
            };
		}
	}


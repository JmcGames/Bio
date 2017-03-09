//================================================================== //
// JGame
// Author: Jesse McCarthy
// Purpose: HTML5 Game framework used to create HTML5 Canvas games.
//================================================================== //

import { parseFilename, toRadians } from './Util'

// *** INPUT *** //

export function Input() {

	// *** INIT *** //

	var input = this;

	this.key    = {
        backspace   :8,
        tab         :9,
        enter       :13,
        shift       :16,
        ctrl        :17,
        alt         :18,
        pause       :19,
        caps        :20,
        esc         :27,
        space       :32,
        pageUp      :33,
        pageDown    :34,
        end         :35,
        home        :36,
        left        :37,
        up          :38,
        right       :39,
        down        :40,
        ins         :45,
        del         :46,
        n0          :48,
        n1          :49,
        n2          :50,
        n3          :51,
        n4          :52,
        n5          :53,
        n6          :54,
        n7          :55,
        n8          :56,
        n9          :57,
        a           :65,
        b           :66,
        c           :67,
        d           :68,
        e           :69,
        f           :70,
        g           :71,
        h           :72,
        i           :73,
        j           :74,
        k           :75,
        l           :76,
        m           :77,
        n           :78,
        o           :79,
        p           :80,
        q           :81,
        r           :82,
        s           :83,
        t           :84,
        u           :85,
        v           :86,
        w           :87,
        x           :88,
        y           :89,
        z           :90,
        select      :93,
        num0        :96,
        num1        :97,
        num2        :98,
        num3        :99,
        num4        :100,
        num5        :101,
        num6        :102,
        num7        :103,
        num8        :104,
        num9        :105,
        numTimes    :106,
        numAdd      :107,
        numMinus    :109,
        numPoint    :110,
        divide      :111,
        f1          :112,
        f2          :113,
        f3          :114,
        f4          :115,
        f5          :116,
        f6          :117,
        f7          :118,
        f8          :119,
        f9          :120,
        f10         :121,
        f11         :122,
        f12         :123,
        numLock     :144,
        scrollLock  :145,
        semiColon   :186,
        equals      :187,
        comma       :188,
        dash        :189,
        period      :190,
        fSlash      :191,
        graveAccent :192,
        openBracket :219,
        bSlash      :220,
        closeBraket :221,
        singleQuote :222
    };
	this.mouse  = {
		left  : false,
		right : false,
		x     : 0,
		y     : 0
	};
	this.log    = [];
	this.handle = [];

	initKeyLog();
	initEventListeners();
	

	// *** METHODS *** //

	this.update = function(){

		for(var key in this.log)
			if(this.log[key] && typeof this.handle[key] !== 'undefined')
				this.handle[key]();

	}

	function initEventListeners(){

		addEventListener("keydown",function(e){
			input.log[e.keyCode] = true;
		},false);

		addEventListener("keyup",function(e){
			input.log[e.keyCode] = false;
		},false);

		addEventListener('mousedown',function(e){
			if(e.button === 0)
				input.mouse.left = true;
			if(e.button === 2)
				input.mouse.right = true;
		},false);

		addEventListener('mouseup',function(e){
			if(e.button === 0)
				input.mouse.left = false;
			if(e.button === 2)
				input.mouse.right = false;
		},false);

		addEventListener('mousemove',function(e){
			input.mouse.x = e.clientX;
			input.mouse.y = e.clientY;
		},false);

	}

	function initKeyLog(){

		for(var index in input.key)
			input.log[input.key[index]] = false;

	}

}


// *** IMAGES *** //

export function ImgCache( src ) {


	// *** INIT *** //

    var imgCache = this;

	this.index  = {};
    this.toLoad = src.length;
    this.loaded = 0;
    this.ready  = false;
	this.onload = function(){};
	this.setOnload = ( fn ) => { 
		this.onload = fn
		return this;
 	};

	for( var i = 0; i < src.length; i++ )
        loadImage( src[ i ]);

	// *** METHODS *** //

    function loadProgress() {

        if(++imgCache.loaded === imgCache.toLoad)
			imgCache.onload();

    };

    function loadImage( imageSource ){

        var imageName = parseFilename( imageSource );

		imgCache.index[ imageName ] = new Image();
		imgCache.index[ imageName ].src = imageSource;
		imgCache.index[ imageName ].onload = loadProgress;

	};

};


export function Img( c, image ){

	// *** INIT *** //

    this.img = [];

	var x, y, w, h, xOrigin, yOrigin,
		parent        = this,
		frame         = 0,
		isAnimated    = false,
		rotation      = 0,
		rotationSpeed = 0;

	init();


	// *** METHODS *** //

    this.draw = function( param ){

		var param = param || {};

		getCoordinates(param);
		getDimensions(param);
		getOrigin(param);
		animate(param);
		rotate(param);

		drawSprite(param);

    };

	function init(){

		// single image
		if(!Array.isArray(image)) parent.img[0] = image;

		else{ // array of images
			for(var i=0; i<image.length; i++)
				parent.img[i] = image[i];
		}

	}

	function getCoordinates( param ){

		// if( typeof param.coords != undefined ){
		// 	console.log( param.coords )
			// x = param.coords.x;
			// y = param.coords.y;
		// }else{
		// 	x = param.x || 0;
		// 	y = param.y || 0;
		// }

		// x = ( typeof param.x != undefined ) ? param.x : (( typeof param.coords.x != undefined ) ? param.coords.x : 0 );
		// y = ( typeof param.y != undefined ) ? param.y : (( typeof param.coords.y != undefined ) ? param.coords.y : 0 );

		x = param.x || 0;
		y = param.y || 0;

	}

	function getDimensions( param ){
			// base dimensions
		var image      = parent.img[ Math.floor( frame )],
			baseWidth  = ( param.w != undefined ) ? param.w : image.width,
			baseHeight = ( param.h != undefined ) ? param.h : image.height,
			// scale
			scale      = ( param.scale   != undefined ) ? param.scale  : 1,
			xScale     = (( param.xScale != undefined ) ? param.xScale : 1 ) * scale,
			yScale     = (( param.yScale != undefined ) ? param.yScale : 1 ) * scale;
		// set dimension props
		w = baseWidth * xScale;
		h = baseHeight * yScale;
	}

	function getOrigin( param ){

		xOrigin = param.xOrigin || 0;
		yOrigin = param.yOrigin || 0;

		if(param.centerOrigin){
			xOrigin = w / 2;
			yOrigin = h / 2;
		}

	}

	function animate( param ){

		isAnimated = param.animate || false;

		if( !isAnimated ) frame = param.f || 0;

		else{

			var	speed   = param.animationSpeed || 1;

			frame = (frame + speed) % parent.img.length;

		}

	}

	function rotate( param ){

		rotationSpeed = param.rotationSpeed || 0;
		rotation      = ( param.rotate != undefined ) ? param.rotate : rotation + rotationSpeed;

	}

	function setShadow( param ){

		c.shadowColor   = param.shadowColor   || '#000';
		c.shadowBlur    = param.shadowBlur    || 0;
		c.shadowOffsetX = param.shadowOffsetX || 0;
		c.shadowOffsetY = param.shadowOffsetY || 0;

	}

	function drawSprite( param ){

		c.save();
		setShadow( param );
		c.translate( x, y );
		c.rotate( toRadians( rotation ));
		c.globalAlpha = ( param.opacity != undefined ) ? param.opacity : 1;
		c.drawImage( parent.img[ Math.floor( frame )], -xOrigin, -yOrigin, w, h );
		c.restore();

	}

}


// *** SOUND *** //

/**
 * Proloads all audio files, and stores all sound objects. Check Documentation
 * for API.
 * @param {Object} src
 * @returns {SoundCache}
 */
function SoundCache(src) {

    // *** INIT *** //

	// for use in inner functions
    var cache = this;

	// public attributes
    this.index  = {};
    this.toLoad = src.length;
    this.loaded = 0;
    this.ready  = false;
	this.onload = function(){};

    // create sound objects
	for( var count = 0; count < this.toLoad; count++ )
        load( src[ count ]);


	// *** METHODS *** //

    function load( sound ){

		// get name to use as key
        var name = parseFilename( sound.src );

		// add sound to index
		cache.index[ name ] = new Sound( sound );

    };

    function soundOnload(){

		if( ++cache.loaded === cache.toLoad )
			cache.onload();

	}


    // *** SOUND OBJECT *** //

    function Sound( param ){


		// *** INIT *** //

        var sound        = this,
			tracks       = [],
			trackCount   = param.count || 1,
			tracksLoaded = 0;

        var count = 0;
		while ( count++ !== trackCount )
			tracks.push( new Track( param ));


        // *** METHODS *** //

		 this.play = function( param ){

            SelectTrack().play( param );

		};

        function SelectTrack(){

            var old     = 0,  // track index that has been playing the longest
                oldTime = 0,  // time of oldest track
				tracksTime;

            for( var index = 0; index < tracks.length; index++ ){

                if( tracks[ index ].audio.paused )
					return tracks[ index ];

				tracksTime = tracks[ index ].audio.currentTime;
				if( tracksTime > oldTime ){
                    old     = index;
					oldTime = tracksTime;
                }

            }

            return tracks[ old ];

        }

		function trackOnload(){

			if( ++tracksLoaded === trackCount )
				soundOnload();

		}

		// *** TRACK OBJECT *** //

        function Track( param ){


            // *** INIT *** //

            this.audio        = new Audio( param.src );
            this.audio.volume = param.volume || 1;
            this.audio.loop   = param.loop   || false;

			var track = this,
				defaultParam = {
					time   : 0,
					volume : this.audio.volume,
					loop   : this.audio.loop
				};

			this.audio.addEventListener( 'canplaythrough', trackOnload );


            // *** METHODS *** //

            this.play = function( param ){

                setParamaters( param );
                this.audio.play();

            };

			function setParamaters( param ){

				param = param || defaultParam;

				track.audio.currentTime = param.time   || defaultParam.time;
				track.audio.volume      = param.volume || defaultParam.volume;
				track.audio.loop        = param.loop   || defaultParam.loop;

			}

        }

	}

};

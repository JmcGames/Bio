function Timer( length, callback, args ){
	// *** INIT *** //
	var time,
		timeElapsed = 0;
		setTime();
	
	// *** METHODS *** //
	this.tick = function(){
		timeElapsed = ++timeElapsed % time;
		if( !timeElapsed ){ 
			callback( args );
			setTime();
		}
	}
	
	this.reset = function(){	
		timeElapsed = 0;
		setTime();
	}

	function setTime(){
		if( typeof length === 'number' ) time = length;
		else if( typeof length === 'function') time = length();
	}
}

const timer = ( length, callback, args ) => new Timer( length, callback, args )

export default timer
import { getAngle, getDistance, toRadians } from '../Util'

class Point {
	
	// Attributes
	x
	y
	
	constructor( x, y ){
		this.x = x;
		this.y = y;
	}

	// Methods

	coords() {
		return point( this.x, this.y )
	}

	move( dx, dy ) {
		return point(
			this.x + dx,
			this.y + dy
		)
	}

	moveDirection( degrees, distance ){
		return point(
			this.x + distance * Math.cos( toRadians( degrees )),
			this.y + distance * Math.sin( toRadians( degrees ))
		)
	}

	getAngleTo( point ) {
		return getAngle( this.x, this.y, point.x, point.y );
	}

	getDistanceTo( point ) {
		return getDistance( this.x, this.y, point.x, point.y );
	}

	setPosition( x, y ){
		this.x = x;
		this.y = y;
	}

}

const point = ( x, y ) => new Point( x, y )

export default point
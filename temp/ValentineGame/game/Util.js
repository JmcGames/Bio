export const getTime = () => new Date().getTime()

export const toRadians = ( degrees ) => degrees / 180 * Math.PI 

export const toDegrees = ( radians ) => radians * 180 / Math.PI

export const getAngle = ( x1, y1, x2, y2 ) => Math.atan2( y2 - y1, x2 - x1 )

export const getDistance = ( x1, y1, x2, y2 ) => Math.sqrt(Math.pow(x1-x2,2) + Math.pow(y1-y2,2))

export const xDirection = ( x, degrees, distance ) => x + distance * Math.cos( toRadians( degrees ) )

export const yDirection = ( y, degrees, distance ) => y + distance * Math.sin( toRadians( degrees ) )

export const xTranslate = ( x, dx ) => x + dx

export const yTranslate = ( y, dy ) => y + dy

export const parseFilename = ( src ) => {

	let filename = '',
		firstChar = src.lastIndexOf("/") + 1,
		length = src.length;

	for( var char = firstChar; char < length; char++ ){
		if( src[ char ] === "." ) break;
		filename += src[ char ];
	}

	return filename; 
}

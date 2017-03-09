import point from './Point'

export default class GameObject {
    
    coords

    constructor( x, y ) {
        this.coords = point( x, y );
     }

    // Interface Methods
    update(){}
    draw(){}
}
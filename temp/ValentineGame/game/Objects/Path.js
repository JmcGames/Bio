import point from './Point'
import angle from './Angle'

class CircularPath {

    center
    radius
    speed
    angle
    position

    constructor( center, radius, angle, rotation ) {
        this.center = center;
        this.radius = radius;
        this.angle = angle;
        this.rotation = rotation;
        this.position = center.moveDirection( angle.value, radius )
    }

    step() {
        return(
            circularPath(
                this.center,
                this.radius,
                this.angle.rotate( this.rotation ),
                this.rotation
            )
        )
    }

    flip() {
        return(
            circularPath(
                this.center,
                this.radius,
                this.angle.rotate( 180 ),
                this.rotation
            )
        )
    }

}

const circularPath = ( center, radius, angle, rotation ) => new CircularPath( center, radius, angle, rotation )

export default circularPath
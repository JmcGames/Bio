class Angle {
    value
    constructor( value ) { this.value = value }
    rotate( delta ) { return angle(( this.value + delta ) % 360 ) }
}

const angle = ( value ) => new Angle(( value || 0 ))

export default angle
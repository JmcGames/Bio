export class N {

    value

    constructor( x ){
        this.value = x;
    }

    // Methods

    set( x ) { this.value = x; return this; }
    add( x ) { this.value += x; return this; }
    sub( x ) { this.value -= x; return this; } 
    mult( x ) { this.value *= x; return this; }
    divd( x ) { this.value /= x; return this; }
    mod( x ) { this.value %= x; return this; }
    div( x ) {
        this.value = this.sub( this.mod() ); 
        return this;
    }

}

// export function N( x ) {

//     let value = x,
//         me = this,
//         refresh = () => { this.x = value; return me; }

//     this.x = value;
//     this.new = () => { return n( me.x ); }
//     this.add = (x) => { value += x; return refresh(); }
//     this.sub = (x) => { value -= x; return refresh(); }
//     this.mult = (x) => { value *= x; return refresh(); }
//     this.divd = (x) => { value /= x; return refresh(); }
//     this.mod = (x) => { value %= x; return refresh(); }
//     this.div = (x) => {
//         value /= value - n( value ).mod( x ).x
//         return refresh();
//     }
//     this.cos = (x) => {
//         value
//     }

// } 

export const n = ( x ) => new N( x )

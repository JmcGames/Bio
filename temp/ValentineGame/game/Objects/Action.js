class Action {

    init
    update
    draw

    constructor( init, update, draw, length ) {
        this.init = init;
        this.update = update;
        this.draw = draw;
        this.length = length;
        this.init();
    }
}

const action = ( init, update, draw, length ) => new Action( init, update, draw, length )

export default action
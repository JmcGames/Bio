import React from 'react'
import { Link } from 'react-router'
import FaHeart from 'react-icons/lib/fa/heart'
import { colorShift } from '../../colorShift'
import '../../stylesheets/valentine.scss'

export default class Valentine extends React.Component {
    animation;
    constructor( props ) {
        super( props )
        this.state = {
            color: '#215fc4'
        }
    }
    componentDidMount() {
        this.animate();
    }
    componentWillUnmount() {
        clearInterval( this.animation );
    }
    animate() {
        this.animation = setInterval( this.rotateColor.bind( this ), 50 );
    }
    rotateColor() {
        const currentColor = this.state.color;
        this.setState({
            color: colorShift.changeHue( currentColor, 5 )
        })
    }
    render(){
        return(
            <div className='valentine'>
                <Link to='valentine-game'>
                    <FaHeart className='heart'
                            size={ 64 }
                            color={ this.state.color } />
                </Link>
                <span>For My Love</span>
            </div>
        )
    }
}
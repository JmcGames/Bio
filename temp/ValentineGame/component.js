import { Component } from 'react'
import Game from './game/Main'
import './style.scss'

export default class ValentineGame extends Component{
    game = Game;
    componentDidMount() {
        this.game.init();
    }
    componentWillUnmount() {
        Game.terminate = true;
    }
    render() {
        return (
            <div className='valentine-game-container'>
                <h1>Two Souls That Coalesse in Perfect Harmony</h1>
                <canvas id='valentine-game' />
                <h1>Happy Valentines<br />I love you</h1>
            </div>
        )
    }
}
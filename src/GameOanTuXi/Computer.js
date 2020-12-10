import React, { Component } from 'react'

export default class Computer extends Component {
    render() {
        return (
            <div>
                <div className="text">
                    <h1 className='display-30'>Computer</h1>
                    <div className='chooseGame'>
                        <img className='mt-2' style={{ width: '70px', height: '70px' }} src='./img/bao.png' alt='./img/bao.png'></img>
                    </div>
                    <div className='speech-bubble'></div>
                    <img style={{ width: 150, height: 150 }} src='./img/playerComputer.png' alt='./img/player.png'></img>
                </div>
            </div>
        )
    }
}

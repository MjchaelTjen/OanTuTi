import React, { Component } from 'react'

export default class Player extends Component {
    render() {
        return (
            <div className="text">
                <h1 className='display-30'>Player</h1>
                <div className='chooseGame'>
                    <img   className='mt-2' style={{ transform:'rotate(180deg)', width: '70px', height: '70px' }} src='./img/bao.png' alt='./img/bao.png'></img>
                </div>
                <div className='speech-bubble'></div>
                <img style={{ width: 150, height: 150 }} src='./img/player.png' alt='./img/player.png'></img>
                <div className='row'>
                    <div className='col-4'>
                        <button className='btnItem'>
                            <img style={{ width: '40px', height: '40px' }} src='./img/bao.png' alt='./img/bao.png'></img>
                        </button>
                    </div>
                    <div className='col-4'>
                        <button className='btnItem' >
                            <img style={{ width: '40px', height: '40px' }} src='./img/bua.png' alt='./img/bua.png'></img>
                        </button>
                    </div>
                    <div className='col-4'>
                        <button className='btnItem'>
                            <img style={{ width: '40px', height: '40px' }} src='./img/keo.png' alt='./img/keo.png'></img>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

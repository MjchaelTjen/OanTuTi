import React, { Component } from 'react'
import './StyleGame.css'
import Player from './Player'
import Computer from './Computer'
import KetQua from './KetQua'
export default class BaiTapGameOanTiXi extends Component {
    render() {
        return (
            <div className='bg-Game'>
                <div className='row text-center text-warning mt-1'>
                    <div className='col-4'>
                        <Player />
                    </div>
                    <div className='col-4'>
                        <KetQua />
                        <button className='btn btn-success mt-5'>Play game</button>
                    </div>
                    <div className='col-4'>
                        <Computer />
                    </div>
                </div>
            </div>
        )
    }
}

import React, { Component } from 'react'

export default class KetQua extends Component {
    render() {
        return (
            <div className="mt-5">
                <div className='text-warning display-4'>Bạn thua !!!</div>
                <div className='text-success display-4'>Số bàn thắng: <span className='text-warning'>0</span></div>
                <div className='text-success display-4'>Số bàn chơi: <span className='text-warning'>0</span> </div>
            </div>
        )
    }
}

import React, { Component } from 'react'
import './StyleGame.css'
import Player from './Player'
import Computer from './Computer'
import KetQua from './KetQua'
import { connect } from 'react-redux'
class BaiTapGameOanTiXi extends Component {
    render() {
        return (
            <div className='bg-Game'>
                <div className='row text-center text-warning mt-1'>
                    <div className='col-4'>
                        <Player />
                    </div>
                    <div className='col-4'>
                        <KetQua />
                        <button className='btn btn-success mt-3' onClick={() => {
                            this.props.playGame()
                        }}>Play game</button>
                    </div>
                    <div className='col-4'>
                        <Computer />
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        playGame: () => {

            let count = 0;
            // Khai báo hàm lặp đi lặp lại
            let randomComputerItem = setInterval(() => {
                dispatch({
                    type: 'RAN_DOM'
                })
                count++;
                if (count > 5) {
                    // dừng hàm setInterval
                    clearInterval(randomComputerItem)
                    dispatch({
                        type: 'END_GAME'
                    })
                }
            }, 10)
        }
    }
}

export default connect(null, mapDispatchToProps)(BaiTapGameOanTiXi)
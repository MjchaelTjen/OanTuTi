import React, { Component } from 'react'
import { connect } from 'react-redux'
class Computer extends Component {
    render() {
        // console.log('computer', this.props.Computer)

        let keyframe = `@keyframes randomItem${Date.now()} {
            0% {top: -60px;}
            25% {top: 60px;}
            50% {top: -60px;}
            75% {top: 60px;}
            100% {top: 0px;}
          }`
        return (
            <div>
                <div className="text">
                    <style>
                        {keyframe}
                    </style>
                    <h1 className='display-30'>Computer</h1>
                    <div className='chooseGame' style={{ position: 'relative' }}>
                        <img className='mt-2' style={{ width: '70px', height: '70px', animation: `randomItem${Date.now()} 1s`, position: 'absolute', left: '30%' }} src={this.props.Computer.hinhAnh} alt={this.props.Computer.hinhAnh}></img>
                    </div>
                    <div className='speech-bubble'></div>
                    <img style={{ width: 150, height: 150 }} src='./img/playerComputer.png' alt='./img/player.png'></img>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        Computer: state.OanTuTiReducer.Computer
    }
}

export default connect(mapStateToProps, null)(Computer)
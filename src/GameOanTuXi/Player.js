import React, { Component } from 'react'
import { connect } from 'react-redux'
class Player extends Component {
    render() {
        console.log('props', this.props.arrHand)
        return (
            <div className="text">
                <h1 className='display-30'>Player</h1>
                <div className='chooseGame'>
                    <img className='mt-2' style={{ transform: 'rotate(180deg)', width: '70px', height: '70px' }}
                        src={this.props.arrHand.find(item => item.datCuoc === true).hinhAnh} alt={this.props.arrHand.find(item => item.datCuoc === true).hinhAnh}
                    ></img>
                </div>
                <div className='speech-bubble'></div>
                <img style={{ width: 150, height: 150 }} src='./img/player.png' alt='./img/player.png'></img>
                <div className='row'>
                    {this.props.arrHand.map((item, index) => {

                        // Xét thuộc tính viền đổi màu cho thẻ được chọn
                        let boderChoose = {};
                        if (item.datCuoc) {
                            boderChoose = { border: '5px solid orange' }
                        }

                        return <div key={index} className='col-4'>
                            <button style={boderChoose} className='btnItem' onClick={() => {
                                this.props.datCuoc(item.ma)
                            }}>
                                <img style={{ width: '40px', height: '40px' }} src={item.hinhAnh} alt={item.hinhAnh}></img>
                            </button>
                        </div>
                    })}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        arrHand: state.OanTuTiReducer.arrHand
    }
}

const mapDispatchToProps = dispatch => {

    return {
        datCuoc: (maCuoc) => {
            dispatch({
                type: 'CHON_KEO_BUA_BAO',
                maCuoc
            })
        }
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Player)
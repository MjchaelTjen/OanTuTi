import React, { Component } from 'react'
import { connect } from 'react-redux'

class KetQua extends Component {
    render() {
        console.log('thong bao', this.props.thongBao)
        return (
            <div className="mt-5">
                <div className='text-warning display-4'>{this.props.thongBao}</div>
                <div className='text-success display-4'>Số bàn thắng: <span className='text-warning'>{this.props.soBanThang}</span></div>
                <div className='text-success display-4'>Số bàn chơi: <span className='text-warning'>{this.props.soLanChoi}</span> </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        thongBao: state.OanTuTiReducer.thongBao,
        soBanThang: state.OanTuTiReducer.soBanThang,
        soLanChoi: state.OanTuTiReducer.soLanChoi
    }
}

export default connect(mapStateToProps,null)(KetQua)
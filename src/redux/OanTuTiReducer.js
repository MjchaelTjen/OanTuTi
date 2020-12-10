const stateDefault = {

    arrHand: [
        { hinhAnh: './img/bao.png', ma: 'bao', datCuoc: false },
        { hinhAnh: './img/bua.png', ma: 'bua', datCuoc: false },
        { hinhAnh: './img/keo.png', ma: 'keo', datCuoc: true },
    ],
    soBanThang: 0,
    soLanChoi: 0,
    thongBao: 'I`m iron man, i love you 3000!!!',
    Computer: {
        hinhAnh: './img/bua.png',
        ma: 'keo'
    }

};

const OanTuTiReducer = (state = stateDefault, action) => {

    switch (action.type) {

        case 'CHON_KEO_BUA_BAO': {

            // Reset mảng cược 
            let arrUpdate = [...state.arrHand];
            arrUpdate = arrUpdate.map((item, index) => {
                if (item.ma === action.maCuoc) {
                    return { ...item, datCuoc: true }
                }
                return { ...item, datCuoc: false }
            });

            // console.log('mảng update', arrUpdate);
            // Tìm ra maCuoc để thay đổi trạng thái ứng với mã cược đó
            // let index = arrUpdate.findIndex(code => code.ma === action.maCuoc)
            // if (index !== -1) {
            //     arrUpdate[index].datCuoc = true;
            // }
            state.arrHand = arrUpdate;
            return { ...state }
            // console.log("mảnh", action)
        }

        case 'RAN_DOM': {
            console.log(action)
            // console.log('random',action)
            let numberAuto = Math.floor(Math.random() * 3);
            let itemAuto = state.arrHand[numberAuto];
            state.Computer = itemAuto;
            return { ...state }
        }

        case 'END_GAME': {
            state.soLanChoi += 1;
            let player = state.arrHand.find(co => co.datCuoc === true);
            let computer = state.Computer
            switch (player.ma) {
                case 'keo': {
                    if (computer.ma === 'keo') {
                        state.thongBao = 'hòa!!!'
                    } else if (computer.ma === 'bua') {
                        state.thongBao = 'thua sml!!!'
                    } else {
                        state.soBanThang += 1;
                        state.thongBao = 'I`m iron man, i love you 3000!!!'
                    };
                    break;
                }

                case 'bua': {
                    if (computer.ma === 'keo') {
                        state.soBanThang += 1;
                        state.thongBao = 'I`m iron man, i love you 3000!!!'
                    } else if (computer.ma === 'bua') {
                        state.thongBao = 'hòa!!!'
                    } else {
                        state.thongBao = 'thua sml!!!'
                    };
                    break;
                }

                case 'bao': {
                    if (computer.ma === 'keo') {
                        state.thongBao = 'thua sml!!!'
                    } else if (computer.ma === 'bua') {
                        state.soBanThang += 1;
                        state.thongBao = 'I`m iron man, i love you 3000!!!'
                    } else {
                        state.thongBao = 'hòa!!!'
                    };
                    break;
                }
                default: state.thongBao = 'I`m iron man, i love you 3000!!!'
            }
        }
            return { ...state }
        default: return { ...state }
    }

}

export default OanTuTiReducer;
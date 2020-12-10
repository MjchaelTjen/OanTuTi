import { combineReducers, createStore } from 'redux';

// import state game 
import OanTuTiReducer from './OanTuTiReducer'
const rootReducer = combineReducers({ // store tổng của ưng dụng
    OanTuTiReducer // Khai báo state của game
});

// Tạo ra store chứ rootReducer (xem như state tổng của ứng dụng)
export const store = createStore(rootReducer);
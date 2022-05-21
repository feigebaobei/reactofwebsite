import counterReducer from './counter'
import loginedReducer from './isLogined'
import tokenReducer from './token'
// import { levelCertUrl } from './cert'
import {combineReducers} from 'redux'

let allReducers = combineReducers({
    counter: counterReducer,
    isLogined: loginedReducer,
    token: tokenReducer,
    // levelCertUrl
})

export default allReducers
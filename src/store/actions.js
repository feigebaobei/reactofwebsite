let increment = (nr = 1) => {
    return {
        type: 'INCREMENT',
        payload: nr
    }
}
let decrement = (nr = 1) => {
    return {
        type: 'DECREMENT',
        payload: nr
    }
}
let token = (nr = '') => {
    return {
        type: 'reset',
        payload: nr
    }
}
// 不用它了。
// let levelCertUrl = (nr = '') => {
//     return {
//         type: 'resetLevelCertUrl',
//         payload: nr
//     }
// }

export {
    increment,
    decrement,
    token,
    // levelCertUrl
}
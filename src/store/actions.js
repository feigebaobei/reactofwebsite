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

export {
    increment,
    decrement,
    token
}
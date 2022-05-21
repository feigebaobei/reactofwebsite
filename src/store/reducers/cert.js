// 不再使用了
let levelCertUrl = (state = '', action) => {
    switch(action.type) {
      case 'resetLevelCertUrl':
        return state = action.payload
      default:
        return state
    }
  }
  export {levelCertUrl}
import './index.css';
import {useState,
  useRef
} from 'react'
import api from '../../utils/api'
import Footer from '../../components/Footer'
import {useDispatch} from 'react-redux'
import {levelCertUrl} from '../../store/actions'
import {useNavigate} from 'react-router-dom'

let buttonList = [
  { label: '级位证', value: '10'},
  { label: '会员证', value: '20'},
  { label: '段位资格', value: '30'},
  { label: '教练资格', value: '40'},
  { label: '裁判资格', value: '50'},
  { label: '考评员资格', value: '60'},
]

let {log} = console // for test
function Query() {
  let [buttonActive, setButtonActive] = useState('10')
  let [number, setNumber] = useState('')
  let [name, setName] = useState('')
  let nameRef = useRef()
  let numberRef = useRef()
  let dispatch = useDispatch()
  let navigate = useNavigate();


  let buttonActiveHandler = (v) => {
    setButtonActive(v)
  }
  let queryClickHandler = (e) => {
    e.preventDefault()
    e.stopPropagation()
    log('queryClickHandler')
    api.getLevelCert({
      // idCardOrName => idCardOrCertNumber
      idCardOrCertNumber: number
    }).then(res => {
      // log('then', res)
      // 在store中保存levelCertUrl
      // dispatch(token(res.data.token))
      dispatch(levelCertUrl(res.data.levelCertUrl))
      dispatch(levelCertUrl('//localhost:4000/images/third164654178193118342.jpeg'))
      navigate('/levelCert')
    }).catch(err => {
      log('catch', err)
      // dispatch(levelCertUrl('//localhost:4000/images/third164654178193118342.jpeg'))
    })
  }
  let resetClickHandler = (e) => {
    // e.preventDefault()
    e.stopPropagation()
    // log('resetClickHandler')
    setName('')
    setNumber('')
    nameRef.current.value = ''
    numberRef.current.value = ''
  }
  let numberInputHandler = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setNumber(e.target.value)
  }
  let nameChangeHandler = (e) => {
    setName(e.target.value)
  }

  return (
    <div className="App">
      <img src={require('../../access/banner.jpg')} className="banner" alt="banner" />
      <div className="main">
        <div className="buttonTabBox">
          {buttonList.map((item) => {
            return <div role="button"
            onClick={() => buttonActiveHandler(item.value)}
            className={`buttonTab ${buttonActive === item.value ? 'buttonActive' : ''}`}
            key={item.value}
            >{item.label}</div>
          })}
        </div>
        <form className="form">
          <div className="formContBox">
            <div className="formItemBox">
              <label className="label">姓名（name）：</label>
              <input className="formInput" type="text" name="name" id="name" 
                ref={nameRef}
                required 
                onChange={nameChangeHandler}
                defaultValue={name} />
            </div>
            <div className="formItemBox">
              <label className="label">证书编号（NO.）：</label>
              <input className="formInput" type="text" name="cardId" id="cardId" 
              required 
              ref={numberRef}
              defaultValue={number} 
              onInput={numberInputHandler} />
              <span>（或输入身份证号）</span>
            </div>
          </div>
          <div className="formButtonBox">
            <span className="formButton" onClick={queryClickHandler}>查询</span>
            <span className="formButton" onClick={resetClickHandler}>重置</span>
          </div>
        </form>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Query;

// import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

let buttonList = [
  { label: '级位证', value: '10'},
  { label: '会员证', value: '20'},
  { label: '段位资格', value: '30'},
  { label: '教练资格', value: '40'},
  { label: '裁判资格', value: '50'},
  { label: '考评员资格', value: '60'},
]

let {log} = console // for test
function App() {
  let [buttonActive, setButtonActive] = useState('10')
  let buttonActiveHandler = (v) => {
    setButtonActive(v)
  }
  let queryClickHandler = (e) => {
    e.preventDefault()
    e.stopPropagation()
    log('queryClickHandler')
  }
  let resetClickHandler = (e) => {
    e.preventDefault()
    e.stopPropagation()
    log('resetClickHandler')
  }
  return (
    <div className="App">
      <img src={require('./access/banner.jpg')} className="banner" alt="banner" />
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
              <input className="formInput" type="text" name="name" id="name" required />
            </div>
            <div className="formItemBox">
              <label className="label">证书编号（NO.）：</label>
              <input className="formInput" type="text" name="cardId" id="cardId" required />
              <span>（或输入身份证号）</span>
            </div>
          </div>
          <div className="formButtonBox">
            <span className="formButton" onClick={queryClickHandler}>查询</span>
            <span className="formButton" onClick={resetClickHandler}>重置</span>
          </div>
        </form>
      </div>
      <footer className="footer">
        <img src={require('./access/logo.png')} className="footerLogo" alt="logo" />
        <p className="footerP">版权所有  COPYRIGHT  2005-2019 武术段位推广中心</p>
        <p className="footerP">中国最权威的武术证书认证官网-中国武术协会证书认证中心</p>
        <p className="footerP">提供段位查询、级位查询、教练查询等武术类相关的证书查询服务，并提供国内外及协会相关新闻资讯</p>
      </footer>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;

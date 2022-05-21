import './index.css';
// import {useState} from 'react'
import Footer from '../../../components/Footer'
import {useLocation} from 'react-router-dom'
// import { useSelector } from 'react-redux'
import api from '../../../utils/api'

function LevelCert() {
  let location = useLocation();
  // let levelCertUrl = useSelector(state => state.levelCertUrl)
  console.log('location', location) // {state: {...}}
  api.getLevelCert({
    idCardOrCertNumber: location.state.idCardOrCertNumber
  }).then(res => {
    console.log('then', res)
  }).catch(err => {
    console.log('catch', err)
  })
  
  
  return (
    <section className='levelCertBox'>
        <img src={require('../../../access/logo.gif')} className="bannerImg" alt="logo" />
        <p className="path">
          <span className="homePage pathItem">首页</span>&gt;<span className="pathItem">级位证查询</span>&gt;<span className="pathItem">查询结果</span>
        </p>
        {/* {levelCertUrl ? 
        <article className="hasPic">
          <img src={levelCertUrl} alt="证书图片" className="hasPicImg" />
        </article> :
        <article className="noPic">
          <p>暂无资料！</p>
        </article>} */}
        <Footer></Footer>
    </section>
  );
}

export default LevelCert;

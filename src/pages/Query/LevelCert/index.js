import './index.css';
// import {useState} from 'react'
import Footer from '../../../components/Footer'
import {useSelector} from 'react-redux'

let {log} = console // for test

function LevelCert() {
  // let [levelCertUrl, setLevelCertUrl] = useState('//localhost:4000/images/third164654178193118342.jpeg')
  // let [levelCertUrl, setLevelCertUrl] = useState('')
  let levelCertUrl = useSelector(state => state.levelCertUrl)

  
  return (
    <section className='levelCertBox'>
        <img src={require('../../../access/logo.gif')} className="bannerImg" alt="logo" />
        <p className="path">
          <span className="homePage pathItem">首页</span>&gt;<span className="pathItem">级位证查询</span>&gt;<span className="pathItem">查询结果</span>
        </p>
        {levelCertUrl ? 
        <article className="hasPic">
          <img src={levelCertUrl} alt="证书图片" />
        </article> :
        <article className="noPic">
          <p>暂无资料！</p>
        </article>}
        <Footer></Footer>
    </section>
  );
}

export default LevelCert;

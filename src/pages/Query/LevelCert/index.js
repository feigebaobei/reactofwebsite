// import './index.css';
// import './index.scss'
import styles from './index.module.scss';
import {useEffect, useState} from 'react'
// import Footer from '../../../components/Footer'
import {useLocation} from 'react-router-dom'
// import { useSelector } from 'react-redux'
import api from '../../../utils/api'
import config from '../../../config'

function LevelCert() {
  let location = useLocation();
  // let levelCertUrl = useSelector(state => state.levelCertUrl)
  // console.log('location', location) // {state: {...}}
  let [data, setData] = useState({})
  useEffect(() => {
    api.getLevelCert({
      idCardOrCertNumber: location.state.idCardOrCertNumber
    }).then(res => {
      // console.log('then', res)
      if (res.data.code === 0) {
        let temp = res.data.data
        temp.photoPath = `//${config.serveHost}:${config.servePort}/${temp.photoPath}`
        switch (temp.gender) {
          case 1:
            temp.gender = '男'
            break;
          case 0:
            temp.gender = '女'
            break;
          default:
            break;
        }
        temp.birthday = `${temp.idCard.slice(6, 10)}-${temp.idCard.slice(10, 12)}-${temp.idCard.slice(12, 14)}`
        temp.approvalDate = `${temp.approvalDate.slice(0, 10)}`
        setData(temp)
        // approvalDate: "2021-03-04T16:00:00.000Z"
        // approvalEnterprises: "中国武术协会"
        // certNumber: 211213283
        // gender: 1
        // idCard: "110101199003077774"
        // name: "张三"
        // photoPath: "images/close165313054185459621.jpeg"
        // project: "武术"
        // projectGrade: "段前一级"
      }
    }).catch(err => {
      console.log('catch', err)
    })
  }, [])
  
  
  return (
    <section className={styles.levelCertBox}>
        <img src={require('../../../access/logo.gif')} className={styles.bannerImg} alt="logo" />
        <p className="path">
          <span className={`${styles.homePage} ${styles.pathItem}`}>首页</span>&gt;<span className={styles.pathItem}>级位证查询</span>&gt;<span className={styles.pathItem}>查询结果</span>
        </p>
        {/* {levelCertUrl ? 
        <article className="hasPic">
          <img src={levelCertUrl} alt="证书图片" className="hasPicImg" />
        </article> :
        <article className="noPic">
          <p>暂无资料！</p>
        </article>} */}
        <table className={styles.table}>
          <tbody>
            <tr>
              <td className={`${styles.bold} ${styles.right}`}>姓名</td>
              <td>{data.name}</td>
              <td className={`${styles.bold} ${styles.right}`}>身份证号</td>
              <td>{data.idCard}</td>
              <td rowSpan="5" className={styles.center}>
                <img src={data.photoPath} alt="照片" />
              </td>
            </tr>
            <tr>
              <td className={`${styles.bold} ${styles.right}`}>性别</td>
              <td>{data.gender}</td>
              <td className={`${styles.bold} ${styles.right}`}>出生年月</td>
              <td>{data.birthday}</td>
              {/* <td>{`${data.idCard.slice(6, 10)}-${data.idCard.slice(10, 12)}-${data.idCard.slice(12, 14)}`}</td> */}
            </tr>
            <tr>
              <td className={`${styles.bold} ${styles.right}`}>项目资格</td>
              <td>{data.projectGrade}</td>
              <td className={`${styles.bold} ${styles.right}`}>项目</td>
              <td>{data.project}</td>
            </tr>
            <tr>
              <td className={`${styles.bold} ${styles.right}`}>审批单位</td>
              <td>{data.approvalEnterprises}</td>
              <td className={`${styles.bold} ${styles.right}`}>审批时间</td>
              <td>{data.approvalDate}</td>
            </tr>
            <tr>
              <td className={`${styles.bold} ${styles.right}`}>证书编号</td>
              <td colSpan="3">{data.certNumber}</td>
            </tr>
          </tbody>
        </table>
        <p className={styles.footerP}>
          <span>PAGE 1 OF 1 共 1 记录</span>
          <span>[首页][上一页][下一页][尾页]</span>
        </p>
        {/* <Footer></Footer> */}
        <footer className={styles.footer}>
          <img src={require('../../../access/logo.png')} className={styles.footerLogo} alt="logo" />
          <section>
            <p>版权所有  COPYRIGHT  2005-2019 武术段位推广中心</p>
            <p>中国最权威的武术证书认证官网-中国武术协会证书认证中心</p>
            <p>提供段位查询、级位查询、教练查询等武术类相关的证书查询服务，并提供国内外及协会相关新闻资讯</p>
            <p>邮箱： wushuduanweiban@126.com</p>
          </section>
        </footer>
    </section>
  );
}

export default LevelCert;

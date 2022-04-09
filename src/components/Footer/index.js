// import './index.css';
import './index.scss';
// import {useState,
//   useRef
// } from 'react'
// import api from '../../utils/api'

function Footer(props) {
  
  return (
    <footer className="footer">
      {
        props.imgLogo ? 
          <img src={require('../../access/logo.png')} className="footerLogo" alt="logo" />
          : null
      }
      <p className="footerP">版权所有  COPYRIGHT  2005-2019 武术段位推广中心</p>
      <p className="footerP">中国最权威的武术证书认证官网-中国武术协会证书认证中心</p>
      <p className="footerP">提供段位查询、级位查询、教练查询等武术类相关的证书查询服务，并提供国内外及协会相关新闻资讯</p>
    </footer>
  );
}

export default Footer;

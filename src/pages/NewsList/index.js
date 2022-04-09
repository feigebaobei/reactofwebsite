import Header from '../../components/Header'
import Banner from '../../components/Banner'
import Footer from '../../components/Footer'
import './index.scss'
import {useLocation} from 'react-router-dom'
let clog = console.log


let list = {
    10: [
        {
            label: '武术中心关于征集中国武术散打队、中国武术套路队2019—2021年赞助商的公告',
            dateStr: '2019/8/21 10:27:57'
        },
        {
            label: '2019世界武术日全球金奖徽标揭晓！',
            dateStr: '2019/8/21 10:27:23'
        },
        {
            label: '体育总局武术中心关于举办 2019 年 全国武术散打段位国家级考评员 培训与认证班的函',
            dateStr: '2019/8/21 10:26:53'
        },
        {
            label: '套路世界杯进入”东京“时间',
            dateStr: '2019/8/21 10:26:22'
        },
        {
            label: '2018“佛山高新区杯”国际武联咏春拳大赛闭幕!',
            dateStr: '2019/8/21 10:25:09'
        },
        {
            label: '中国武术段位的分类',
            dateStr: '2019/8/21 10:22:44'
        },
        {
            label: '第四届马来西亚国际武术节',
            dateStr: '2019/8/21 10:22:08'
        },
        {
            label: '武术教练员等级考核评定实行办法',
            dateStr: '2019/8/21 10:20:39'
        },
    ]
}
		






let NewsList = () => {
    let location = useLocation();
    clog(location)
    return (<div className="cont-bg">
        <main className="cont">
            <Header></Header>
            <Banner></Banner>
            {/* first */}
            {/* <p>{JSON.stringify(location)}</p> */}
            {/* <p>{location.state.id}</p> */}
            {(list[location.state.id] || []).map((item, index) => {
                return (
                    <div key={index}>
                        <div className="left">
                            <img src={require('../../access/newbt.jpeg')} className="newsIcon" alt="" />
                            <span>{item.label}</span>
                        </div>
                        <div className="right">
                            <span>{item.dateStr}</span>
                        </div>
                    </div>
                )
            })}
            <Footer></Footer>
        </main>
    </div>)
}
export default NewsList
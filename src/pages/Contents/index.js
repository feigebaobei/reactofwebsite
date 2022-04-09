import {useLocation} from 'react-router-dom'
import Header from '../../components/Header'
import Banner from '../../components/Banner'
import Title from './Title'
// import Pages from './Pages.js'
import Footer from '../../components/Footer'
import data from '../NewsList/data.js'
import './index.scss'

let clog = console.log

let Content = () => {
    let location = useLocation()
    // let Temp = require('./1336.js').default
    let Cont = require(`./${location.state.contentId}.js`).default
    clog(Cont)
    clog(data[location.state.newsId])
    let contItem = data[location.state.newsId].find(item => item.contentId === location.state.contentId)
    return (<div className="cont-bg">
        <main className="cont">
            <Header/>
            <Banner/>
            <div className="cont-box">
                <Title title={contItem.label} dateStr={contItem.dateStr}/>
                <Cont></Cont>
            </div>
            <div className="line"></div>
            <Footer/>
        </main>
    </div>)
}
export default Content
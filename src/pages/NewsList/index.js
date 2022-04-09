import Header from '../../components/Header'
import Banner from '../../components/Banner'
import Pages from './Pages.js'
import Footer from '../../components/Footer'
import styles from './index.scss'
import {useLocation} from 'react-router-dom'
import data from './data.js'
let clog = console.log

clog(styles)

let labelClickHandler = (link) => {
    clog(link)
}

let NewsList = () => {
    let location = useLocation();
    clog(location)
    let list = (data[location.state.id] || [])
    return (<div className="cont-bg">
        <main className="cont">
            <Header></Header>
            <Banner></Banner>
            <section className="news-box">
                {list.map((item, index) => {
                    return (
                        <div key={index} className="news-items">
                            <div className="left">
                                <img src={require('../../access/newbt.jpeg')} className="news-icon" alt="" />
                                <span className="link" onClick={() => labelClickHandler(item.link)}>{item.label}</span>
                            </div>
                            <div className="right">
                                <span>{item.dateStr}</span>
                            </div>
                        </div>
                    )
                })}
            </section>
            <section className="page-box">
                <Pages acount={list.length} curPage={1} pageSize={20}></Pages>
            </section>
            <div className="line"></div>
            <Footer></Footer>
        </main>
    </div>)
}
export default NewsList
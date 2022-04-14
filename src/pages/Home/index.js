import Header from '../../components/Header'
import Banner from '../../components/Banner'
import Footer from '../../components/Footer'
import styles from './first.module.scss';
import {useNavigate} from 'react-router-dom'
// import data, {mingjia as mingjiaData} from '../NewsList/data.js'
import data from '../NewsList/data.js'

// let clog = console.log;

// log('styles', styles)
// log('stylesScss', stylesScss)

let Home = () => {
    let navigate = useNavigate();
    let linkClickHandler = () => {
        navigate('/query')
    }
    let moreClickHandler = (n) => {
        navigate('/newsList', {
            state: {blockId: n},
            replace: false
        })
    }
    let newsItemClickHandler = (newsBlock, newsItem) => {
        navigate('/contents', {
            state: {
                blockId: newsBlock,
                contentId: newsItem.contentId,
            },
            replace: false
        })
    }
    
    let mingjiaImgList = data[30].filter(item => {
        // return ['1359', '1358', '1357', '1356', '1355', '1354', '1353', '1352', '1351', '1350',].includes(item.contentId)
        return item.imgName
    })
    return (
    <div className={styles.mainBox}>
        <main className={styles.main}>
            <Header></Header>
            <Banner></Banner>
            <section className={styles.firstBox}>
                <article className={`${styles.notice} ${styles.bordered}`}>
                    <header className={styles.header}>
                        <div className={styles.headerLeft}>
                            <span className={styles.block}></span>
                            <span className={styles.name}>通知公告</span>
                            <span className={styles.grey}>Notice</span>
                        </div>
                        <div className={styles.headerRight}>
                            <span className={styles.more} onClick={() => moreClickHandler(10)}>+更多&gt;&gt;</span>
                        </div>
                    </header>
                    <section className={styles.newsContainer}>
                        {data[10].slice(0, 7).map((item, index) => {
                            return (<p className={styles.newsP} key={index}>
                                <span className={styles.newsPLeft}>
                                    <img src={require('../../access/newbt.jpeg')} className={styles.newsIcon} alt="" />
                                    <span className={styles.containerLinks} onClick={() => newsItemClickHandler(10, item)}>{item.linkTitle}</span>
                                </span>
                                <span>{`${new Date(item.dateNum).getMonth() + 1}-${new Date(item.dateNum).getDate()}`}</span>
                            </p>)
                        })}
                    </section>
                </article>
                <article className={`${styles.news} ${styles.bordered}`}>
                    <header className={styles.header}>
                        <div className={styles.headerLeft}>
                            <span className={styles.block}></span>
                            <span className={styles.name}>协会新闻</span>
                            <span className={styles.grey}>NEWS</span>
                        </div>
                        <div className={styles.headerRight}>
                            <span className={styles.more} onClick={() => moreClickHandler(20)}>+更多&gt;&gt;</span>
                        </div>
                    </header>
                    <section className={styles.newsContainer}>
                        {data[20].slice(0, 7).map((item, index) => {
                            return (<p className={styles.newsP} key={index}>
                                <span className={styles.newsPLeft}>
                                    <img src={require('../../access/newbt.jpeg')} className={styles.newsIcon} alt="" />
                                    <span className={styles.containerLinks} onClick={() => newsItemClickHandler(20, item)}>{item.linkTitle}</span>
                                </span>
                                <span>{`${new Date(item.dateNum).getMonth() + 1}-${new Date(item.dateNum).getDate()}`}</span>
                            </p>)
                        })}
                    </section>
                </article>
                <article className={`${styles.links} ${styles.bordered}`}>
                    <section className={styles.newsContainer}>
                        <img src={require('../../access/index_r5_c11.jpeg')} alt="" />
                        <section className={styles.navBox}>
                            <div onClick={linkClickHandler}>级位查询</div>
                            <div onClick={linkClickHandler}>会员查询</div>
                            <div onClick={linkClickHandler}>段位查询</div>
                            <div onClick={linkClickHandler}>教练查询</div>
                            <div onClick={linkClickHandler}>裁判查询</div>
                            <div onClick={linkClickHandler}>考评员查询</div>
                        </section>
                    </section>
                </article>
            </section>
            {/* 当代名家 */}
            <section className={`${styles.mingjia} ${styles.bordered}`}>
                <header className={styles.header}>
                    <div className={styles.headerLeft}>
                        <span className={styles.block}></span>
                        <span className={styles.name}>当代名家</span>
                        <span className={styles.grey}>History famous</span>
                    </div>
                    <div className={styles.headerRight}>
                        <span className={styles.more} onClick={() => moreClickHandler(30)}>+更多&gt;&gt;</span>
                    </div>
                </header>
                <section className={styles.imgScrollBoxBox}>
                    <div className={styles.imgScrollBox}>
                        {/* 需要设置链接 */}
                        {[...mingjiaImgList, ...mingjiaImgList].map((item, index) => {
                            return (
                                <div className={styles.imgBox} key={index}>
                                    <img className={styles.mingjiaPic} onClick={() => newsItemClickHandler(30, item)}
                                    src={require(`../../access/${item.imgName}`)} alt="" />
                                </div>
                            )
                        })}
                        {/* <div className={styles.imgBox}>
                            <img className={styles.mingjiaPic} onClick={() => newsItemClickHandler(20, item)}
                             src={require('../../access/20190821112124202420.jpeg')} alt="" />
                        </div>
                        <div className={styles.imgBox}>
                            <img className={styles.mingjiaPic} onClick={() => newsItemClickHandler(20, item)}
                             src={require('../../access/20190821112052295229.jpeg')} alt="" />
                        </div>
                        <div className={styles.imgBox}>
                            <img className={styles.mingjiaPic} onClick={() => newsItemClickHandler(20, item)}
                             src={require('../../access/20190821111986628662.jpeg')} alt="" />
                        </div>
                        <div className={styles.imgBox}>
                            <img className={styles.mingjiaPic} onClick={() => newsItemClickHandler(20, item)}
                             src={require('../../access/20190821111737403740.jpeg')} alt="" />
                        </div>
                        <div className={styles.imgBox}>
                            <img className={styles.mingjiaPic} onClick={() => newsItemClickHandler(20, item)}
                             src={require('../../access/20190821104622262226.jpeg')} alt="" />
                        </div>
                        <div className={styles.imgBox}>
                            <img className={styles.mingjiaPic} onClick={() => newsItemClickHandler(20, item)}
                             src={require('../../access/20190821104550055005.jpeg')} alt="" />
                        </div>
                        <div className={styles.imgBox}>
                            <img className={styles.mingjiaPic} onClick={() => newsItemClickHandler(20, item)}
                             src={require('../../access/2019082110440632632.jpeg')} alt="" />
                        </div>
                        <div className={styles.imgBox}>
                            <img className={styles.mingjiaPic} onClick={() => newsItemClickHandler(20, item)}
                             src={require('../../access/20190821104377717771.jpeg')} alt="" />
                        </div>
                        <div className={styles.imgBox}>
                            <img className={styles.mingjiaPic} onClick={() => newsItemClickHandler(20, item)}
                             src={require('../../access/20190821104287898789.jpeg')} alt="" />
                        </div>
                        <div className={styles.imgBox}>
                            <img className={styles.mingjiaPic} onClick={() => newsItemClickHandler(20, item)}
                             src={require('../../access/20190821104078787878.jpeg')} alt="" />
                        </div>

                        <div className={styles.imgBox}>
                            <img className={styles.mingjiaPic} onClick={() => newsItemClickHandler(20, item)}
                             src={require('../../access/20190821112124202420.jpeg')} alt="" />
                        </div>
                        <div className={styles.imgBox}>
                            <img className={styles.mingjiaPic} onClick={() => newsItemClickHandler(20, item)}
                             src={require('../../access/20190821112052295229.jpeg')} alt="" />
                        </div>
                        <div className={styles.imgBox}>
                            <img className={styles.mingjiaPic} onClick={() => newsItemClickHandler(20, item)}
                             src={require('../../access/20190821111986628662.jpeg')} alt="" />
                        </div>
                        <div className={styles.imgBox}>
                            <img className={styles.mingjiaPic} onClick={() => newsItemClickHandler(20, item)}
                             src={require('../../access/20190821111737403740.jpeg')} alt="" />
                        </div>
                        <div className={styles.imgBox}>
                            <img className={styles.mingjiaPic} onClick={() => newsItemClickHandler(20, item)}
                             src={require('../../access/20190821104622262226.jpeg')} alt="" />
                        </div>
                        <div className={styles.imgBox}>
                            <img className={styles.mingjiaPic} onClick={() => newsItemClickHandler(20, item)}
                             src={require('../../access/20190821104550055005.jpeg')} alt="" />
                        </div>
                        <div className={styles.imgBox}>
                            <img className={styles.mingjiaPic} onClick={() => newsItemClickHandler(20, item)}
                             src={require('../../access/2019082110440632632.jpeg')} alt="" />
                        </div>
                        <div className={styles.imgBox}>
                            <img className={styles.mingjiaPic} onClick={() => newsItemClickHandler(20, item)}
                             src={require('../../access/20190821104377717771.jpeg')} alt="" />
                        </div>
                        <div className={styles.imgBox}>
                            <img className={styles.mingjiaPic} onClick={() => newsItemClickHandler(20, item)}
                             src={require('../../access/20190821104287898789.jpeg')} alt="" />
                        </div>
                        <div className={styles.imgBox}>
                            <img className={styles.mingjiaPic} onClick={() => newsItemClickHandler(20, item)}
                             src={require('../../access/20190821104078787878.jpeg')} alt="" />
                        </div> */}
                    </div>
                </section>
            </section>
            {/* second */}
            <section className={styles.firstBox}>
                <article className={`${styles.notice} ${styles.bordered}`}>
                    <header className={styles.header}>
                        <div className={styles.headerLeft}>
                            <span className={styles.block}></span>
                            <span className={styles.name}>武林精英</span>
                            <span className={styles.grey}>Member center</span>
                        </div>
                        <div className={styles.headerRight}>
                            <span className={styles.more} onClick={() => moreClickHandler(40)}>+更多&gt;&gt;</span>
                        </div>
                    </header>
                    <section className={styles.newsContainer}>
                        {data[40].slice(0, 7).map((item, index) => {
                            return (<p className={styles.newsP} key={index}>
                                <span className={styles.newsPLeft}>
                                    <img src={require('../../access/newbt.jpeg')} className={styles.newsIcon} alt="" />
                                    <span className={styles.containerLinks} onClick={() => newsItemClickHandler(40, item)}>{item.linkTitle}</span>
                                </span>
                                <span>{`${new Date(item.dateNum).getMonth() + 1}-${new Date(item.dateNum).getDate()}`}</span>
                            </p>)
                        })}
                        {/* <p className={styles.newsP}>
                            <span className={styles.newsPLeft}>
                                <img src={require('../../access/newbt.jpeg')} className={styles.newsIcon} alt="" />
                                <span className={styles.containerLinks}>孙加记</span>
                            </span>
                            <span>08-21</span>
                        </p>
                        <p className={styles.newsP}>
                            <span className={styles.newsPLeft}>
                                <img src={require('../../access/newbt.jpeg')} className={styles.newsIcon} alt="" />
                                <span className={styles.containerLinks}>乔红亮</span>
                            </span>
                            <span>08-21</span>
                        </p> */}
                    </section>
                </article>
                <article className={`${styles.news} ${styles.bordered}`}>
                    <header className={styles.header}>
                        <div className={styles.headerLeft}>
                            <span className={styles.block}></span>
                            <span className={styles.name}>名家论拳</span>
                            <span className={styles.grey}>Activity reports</span>
                        </div>
                        <div className={styles.headerRight}>
                            <span className={styles.more} onClick={() => moreClickHandler(50)}>+更多&gt;&gt;</span>
                        </div>
                    </header>
                    <section className={styles.newsContainer}>
                        {data[50].slice(0, 7).map((item, index) => {
                            return (<p className={styles.newsP} key={index}>
                                <span className={styles.newsPLeft}>
                                    <img src={require('../../access/newbt.jpeg')} className={styles.newsIcon} alt="" />
                                    <span className={styles.containerLinks} onClick={() => newsItemClickHandler(50, item)}>{item.linkTitle}</span>
                                </span>
                                <span>{`${new Date(item.dateNum).getMonth() + 1}-${new Date(item.dateNum).getDate()}`}</span>
                            </p>)
                        })}
                        {/* <p className={styles.newsP}>
                            <span className={styles.newsPLeft}>
                                <img src={require('../../access/newbt.jpeg')} className={styles.newsIcon} alt="" />
                                <span className={styles.containerLinks}>究竟什么是抻筋拔骨，古拳谱里的描述或许并不准确</span>
                            </span>
                            <span>08-21</span>
                        </p>
                        <p className={styles.newsP}>
                            <span className={styles.newsPLeft}>
                                <img src={require('../../access/newbt.jpeg')} className={styles.newsIcon} alt="" />
                                <span className={styles.containerLinks}>形意拳穿透力杀伤力、劲从足下生的秘密</span>
                            </span>
                            <span>08-21</span>
                        </p>
                        <p className={styles.newsP}>
                            <span className={styles.newsPLeft}>
                                <img src={require('../../access/newbt.jpeg')} className={styles.newsIcon} alt="" />
                                <span className={styles.containerLinks}>形意拳技击训练功法－－搓手</span>
                            </span>
                            <span>08-21</span>
                        </p>
                        <p className={styles.newsP}>
                            <span className={styles.newsPLeft}>
                                <img src={require('../../access/newbt.jpeg')} className={styles.newsIcon} alt="" />
                                <span className={styles.containerLinks}>武术界人士齐聚北京研讨“武术与健康”</span>
                            </span>
                            <span>08-21</span>
                        </p>
                        <p className={styles.newsP}>
                            <span className={styles.newsPLeft}>
                                <img src={require('../../access/newbt.jpeg')} className={styles.newsIcon} alt="" />
                                <span className={styles.containerLinks}>武德——武术品德</span>
                            </span>
                            <span>08-21</span>
                        </p>
                        <p className={styles.newsP}>
                            <span className={styles.newsPLeft}>
                                <img src={require('../../access/newbt.jpeg')} className={styles.newsIcon} alt="" />
                                <span className={styles.containerLinks}>形意拳拳名之创立与传播</span>
                            </span>
                            <span>08-21</span>
                        </p>
                        <p className={styles.newsP}>
                            <span className={styles.newsPLeft}>
                                <img src={require('../../access/newbt.jpeg')} className={styles.newsIcon} alt="" />
                                <span className={styles.containerLinks}>周伟良谈传统武术的传承方式</span>
                            </span>
                            <span>08-21</span>
                        </p> */}
                    </section>
                </article>
                <article className={`${styles.active} ${styles.bordered}`}>
                    <header className={styles.header}>
                        <div className={styles.headerLeft}>
                            <span className={styles.block}></span>
                            <span className={styles.name}>活动报道</span>
                            <span className={styles.grey}>Activity reports</span>
                        </div>
                        <div className={styles.headerRight}>
                            <span className={styles.more} onClick={() => moreClickHandler(60)}>+更多&gt;&gt;</span>
                        </div>
                    </header>
                    <section className={styles.newsContainer}>
                        {data[60].slice(0, 7).map((item, index) => {
                            return (<p className={styles.newsP} key={index}>
                                <span className={styles.newsPLeft}>
                                    <img src={require('../../access/newbt.jpeg')} className={styles.newsIcon} alt="" />
                                    <span className={styles.containerLinks} onClick={() => newsItemClickHandler(60, item)}>{item.linkTitle}</span>
                                </span>
                                <span>{`${new Date(item.dateNum).getMonth() + 1}-${new Date(item.dateNum).getDate()}`}</span>
                            </p>)
                        })}
                        {/* <p className={styles.newsP}>
                            <span className={styles.newsPLeft}>
                                <img src={require('../../access/newbt.jpeg')} className={styles.newsIcon} alt="" />
                                <span className={styles.containerLinks}>2019年全国武术散打冠军赛在渝开幕</span>
                            </span>
                            <span>08-21</span>
                        </p>
                        <p className={styles.newsP}>
                            <span className={styles.newsPLeft}>
                                <img src={require('../../access/newbt.jpeg')} className={styles.newsIcon} alt="" />
                                <span className={styles.containerLinks}>回顾 | 第八届世界传统武术锦标赛圆满落…</span>
                            </span>
                            <span>08-21</span>
                        </p>
                        <p className={styles.newsP}>
                            <span className={styles.newsPLeft}>
                                <img src={require('../../access/newbt.jpeg')} className={styles.newsIcon} alt="" />
                                <span className={styles.containerLinks}>2019峨眉山世传赛蓄势待发 运动员热身…</span>
                            </span>
                            <span>08-21</span>
                        </p>
                        <p className={styles.newsP}>
                            <span className={styles.newsPLeft}>
                                <img src={require('../../access/newbt.jpeg')} className={styles.newsIcon} alt="" />
                                <span className={styles.containerLinks}>6月16日竞赛预告 | 第八届世界传统武…</span>
                            </span>
                            <span>08-21</span>
                        </p>
                        <p className={styles.newsP}>
                            <span className={styles.newsPLeft}>
                                <img src={require('../../access/newbt.jpeg')} className={styles.newsIcon} alt="" />
                                <span className={styles.containerLinks}>2019年全国青年武术散打锦标赛荣昌开赛</span>
                            </span>
                            <span>08-21</span>
                        </p>
                        <p className={styles.newsP}>
                            <span className={styles.newsPLeft}>
                                <img src={require('../../access/newbt.jpeg')} className={styles.newsIcon} alt="" />
                                <span className={styles.containerLinks}>下一站，上海！2019世界武术锦标赛宣传…</span>
                            </span>
                            <span>08-21</span>
                        </p>
                        <p className={styles.newsP}>
                            <span className={styles.newsPLeft}>
                                <img src={require('../../access/newbt.jpeg')} className={styles.newsIcon} alt="" />
                                <span className={styles.containerLinks}>太极拳进机关”公益活动助力活力机关建设</span>
                            </span>
                            <span>08-21</span>
                        </p> */}
                    </section>
                </article>
            </section>
            {/* widget */}
            <section className={`${styles.mingjia} ${styles.bordered}`}>
                <header className={styles.header}>
                    <div className={styles.headerLeft}>
                        <span className={styles.block}></span>
                        <span className={styles.name}>徽章展示</span>
                        <span className={styles.grey}>badge display</span>
                    </div>
                    <div className={styles.headerRight}>
                        <span className={styles.more} onClick={() => moreClickHandler(70)}>+更多&gt;&gt;</span>
                    </div>
                </header>
                <section className={styles.imgScrollBoxBox}>
                    <div className={styles.widgetScrollBox}>
                        {/* 需要设置链接 */}
                        {[...data[70], ...data[70]].map((item, index) => {
                            return (
                                <div className={styles.imgBox} key={index}>
                                    <img className={styles.mingjiaPic} onClick={() => newsItemClickHandler(70, item)}
                                    src={require(`../../access/${item.imgName}`)} alt="" />
                                </div>
                            )
                        })}
                        {/* <div className={styles.imgBox}>
                            <img className={styles.mingjiaPic} src={require('../../access/20190821114713961396.jpeg')} alt="" />
                        </div>
                        <div className={styles.imgBox}>
                            <img className={styles.mingjiaPic} src={require('../../access/20190821114820142014.jpeg')} alt="" />
                        </div>
                        <div className={styles.imgBox}>
                            <img className={styles.mingjiaPic} src={require('../../access/20190821114713711371.jpeg')} alt="" />
                        </div>
                        <div className={styles.imgBox}>
                            <img className={styles.mingjiaPic} src={require('../../access/2019082111480282282.jpeg')} alt="" />
                        </div>
                        <div className={styles.imgBox}>
                            <img className={styles.mingjiaPic} src={require('../../access/20190821114875897589.jpeg')} alt="" />
                        </div>
                        <div className={styles.imgBox}>
                            <img className={styles.mingjiaPic} src={require('../../access/20190821114842884288.jpeg')} alt="" />
                        </div>
                        <div className={styles.imgBox}>
                            <img className={styles.mingjiaPic} src={require('../../access/20190821114880428042.jpeg')} alt="" />
                        </div>
                        <div className={styles.imgBox}>
                            <img className={styles.mingjiaPic} src={require('../../access/2019082111490719719.jpeg')} alt="" />
                        </div>
                        <div className={styles.imgBox}>
                            <img className={styles.mingjiaPic} src={require('../../access/20190821114990179017.jpeg')} alt="" />
                        </div>

                        <div className={styles.imgBox}>
                            <img className={styles.mingjiaPic} src={require('../../access/20190821114713961396.jpeg')} alt="" />
                        </div>
                        <div className={styles.imgBox}>
                            <img className={styles.mingjiaPic} src={require('../../access/20190821114820142014.jpeg')} alt="" />
                        </div>
                        <div className={styles.imgBox}>
                            <img className={styles.mingjiaPic} src={require('../../access/20190821114713711371.jpeg')} alt="" />
                        </div>
                        <div className={styles.imgBox}>
                            <img className={styles.mingjiaPic} src={require('../../access/2019082111480282282.jpeg')} alt="" />
                        </div>
                        <div className={styles.imgBox}>
                            <img className={styles.mingjiaPic} src={require('../../access/20190821114875897589.jpeg')} alt="" />
                        </div>
                        <div className={styles.imgBox}>
                            <img className={styles.mingjiaPic} src={require('../../access/20190821114842884288.jpeg')} alt="" />
                        </div>
                        <div className={styles.imgBox}>
                            <img className={styles.mingjiaPic} src={require('../../access/20190821114880428042.jpeg')} alt="" />
                        </div>
                        <div className={styles.imgBox}>
                            <img className={styles.mingjiaPic} src={require('../../access/2019082111490719719.jpeg')} alt="" />
                        </div>
                        <div className={styles.imgBox}>
                            <img className={styles.mingjiaPic} src={require('../../access/20190821114990179017.jpeg')} alt="" />
                        </div> */}
                    </div>
                </section>
            </section>
            {/* 友情链接 不做链接 */}
            <section className={`${styles.friendLink} ${styles.bordered}`}>
                <header className={styles.header}>
                    <div className={styles.headerLeft}>
                        <span className={styles.block}></span>
                        <span className={styles.name}>友情链接</span>
                        <span className={styles.grey}>Link</span>
                    </div>
                    <div className={styles.headerRight}>
                        <span className={styles.more}>+更多&gt;&gt;</span>
                    </div>
                </header>
                <section className={styles.container}>
                    <p>
                        <span className={styles.newsPLeft}>
                            <span className={styles.containerLinks}>国家体育总局官网</span>
                        </span>
                        <span className={styles.newsPLeft}>
                            <span className={styles.containerLinks}>中华全国体育总会官网</span>
                        </span>
                        <span className={styles.newsPLeft}>
                            <span className={styles.containerLinks}>国际武术联合会</span>
                        </span>
                    </p>
                </section>
            </section>
            <Footer></Footer>
        </main>
    </div>)
}
export default Home
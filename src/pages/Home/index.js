import styles from './index.module.css';
let {log} = console;

log('styles', styles)

let Home = () => {
    return (
        <div className={styles['main-box']}>
    <main className={styles.main}>
        {/* header */}
        <header>
            <img src={require('../../access/index_r1_c1.jpeg')} className={styles.headerImg} alt="img" />
        </header>
        {/* banner */}
        <div className={styles.banner}></div>
        {/* first */}
        <section className={[`${styles.firstBox}`]}>
            <article className={[`${styles.notice}  ${styles.bordered}`]}>
                <header className={styles.header}>
                    <div className={styles.headerLeft}>
                        <span className={styles.block}></span>
                        <span className={styles.name}>通知公告</span>
                        <span className={styles.grey}>Notice</span>
                    </div>
                    <div className={styles.headerRight}>
                        <span className={styles.more}>+更多>></span>
                    </div>
                </header>
                <section className={styles.newsContainer}>
                    <p className={styles.newsP}>
                        <span className={styles.newsPLeft}>
                            <img src={require('../../access/newbt.jpeg')} className={styles.newsIcon} alt="" />
                            <span className={styles.containerLinks}>武术中心关于征集中国武术散…</span>
                        </span>
                        <span>08-21</span>
                    </p>
                    <p className={styles.newsP}>
                        <span className={styles.newsPLeft}>
                            <img src={require('../../access/newbt.jpeg')} className={styles.newsIcon} alt="" />
                            <span className={styles.containerLinks}>2019世界武术日全球金奖…</span>
                        </span>
                        <span>08-21</span>
                    </p>
                    <p className={styles.newsP}>
                        <span className={styles.newsPLeft}>
                            <img src={require('../../access/newbt.jpeg')} className={styles.newsIcon} alt="" />
                            <span className={styles.containerLinks}>体育总局武术中心关于举办</span>
                        </span>
                        <span>08-21</span>
                    </p>
                    <p className={styles.newsP}>
                        <span className={styles.newsPLeft}>
                            <img src={require('../../access/newbt.jpeg')} className={styles.newsIcon} alt="" />
                            <span className={styles.containerLinks}>套路世界杯进入”东京“时…</span>
                        </span>
                        <span>08-21</span>
                    </p>
                    <p className={styles.newsP}>
                        <span className={styles.newsPLeft}>
                            <img src={require('../../access/newbt.jpeg')} className={styles.newsIcon} alt="" />
                            <span className={styles.containerLinks}>2018“佛山高新区杯”国…</span>
                        </span>
                        <span>08-21</span>
                    </p>
                    <p className={styles.newsP}>
                        <span className={styles.newsPLeft}>
                            <img src={require('../../access/newbt.jpeg')} className={styles.newsIcon} alt="" />
                            <span className={styles.containerLinks}>中国武术段位的分类</span>
                        </span>
                        <span>08-21</span>
                    </p>
                    <p className={styles.newsP}>
                        <span className={styles.newsPLeft}>
                            <img src={require('../../access/newbt.jpeg')} className={styles.newsIcon} alt="" />
                            <span className={styles.containerLinks}>第四届马来西亚国际武术节</span>
                        </span>
                        <span>08-21</span>
                    </p>
                </section>
            </article>
            <article className={[`${styles.news}  ${styles.bordered}`]}>
                <header className={styles.header}>
                    <div className={styles.headerLeft}>
                        <span className={styles.block}></span>
                        <span className={styles.name}>协会新闻</span>
                        <span className={styles.grey}>NEWS</span>
                    </div>
                    <div className={styles.headerRight}>
                        <span className={styles.more}>+更多>></span>
                    </div>
                </header>
                <section className={styles.newsContainer}>
                    <p className={styles.newsP}>
                        <span className={styles.newsPLeft}>
                            <img src={require('../../access/newbt.jpeg')} className={styles.newsIcon} alt="" />
                            <span className={styles.containerLinks}>第二届全国青年运动会武术套路比赛（社会俱乐部组）7…</span>
                        </span>
                        <span>08-21</span>
                    </p>
                    <p className={styles.newsP}>
                        <span className={styles.newsPLeft}>
                            <img src={require('../../access/newbt.jpeg')} className={styles.newsIcon} alt="" />
                            <span className={styles.containerLinks}>2019年全国太极拳健康工程系列活动启动仪式在河南…</span>
                        </span>
                        <span>08-21</span>
                    </p>
                    <p className={styles.newsP}>
                        <span className={styles.newsPLeft}>
                            <img src={require('../../access/newbt.jpeg')} className={styles.newsIcon} alt="" />
                            <span className={styles.containerLinks}>2019年郑州国际武术套路邀请赛暨第二届全国武术非…</span>
                        </span>
                        <span>08-21</span>
                    </p>
                    <p className={styles.newsP}>
                        <span className={styles.newsPLeft}>
                            <img src={require('../../access/newbt.jpeg')} className={styles.newsIcon} alt="" />
                            <span className={styles.containerLinks}>中国武术协会换届会议</span>
                        </span>
                        <span>08-21</span>
                    </p>
                    <p className={styles.newsP}>
                        <span className={styles.newsPLeft}>
                            <img src={require('../../access/newbt.jpeg')} className={styles.newsIcon} alt="" />
                            <span className={styles.containerLinks}>2018年第四届马来西亚国际武术节盛大闭幕</span>
                        </span>
                        <span>08-21</span>
                    </p>
                    <p className={styles.newsP}>
                        <span className={styles.newsPLeft}>
                            <img src={require('../../access/newbt.jpeg')} className={styles.newsIcon} alt="" />
                            <span className={styles.containerLinks}>弹腿传统武术精英赛在临西举…</span>
                        </span>
                        <span>08-21</span>
                    </p>
                    <p className={styles.newsP}>
                        <span className={styles.newsPLeft}>
                            <img src={require('../../access/newbt.jpeg')} className={styles.newsIcon} alt="" />
                            <span className={styles.containerLinks}>2018马来西亚国际武术节比赛规程</span>
                        </span>
                        <span>08-21</span>
                    </p>
                </section>
            </article>
            <article className={[`${styles.links}  ${styles.bordered}`]}>
                <header className={styles.header}>
                    <div className={styles.headerLeft}>
                        <span className={styles.block}></span>
                        <span className={styles.name}>通知公告</span>
                        <span className={styles.grey}>Notice</span>
                    </div>
                    <div className={styles.headerRight}>
                        <span className={styles.more}>+更多>></span>
                    </div>
                </header>
                <section className={styles.newsContainer}>
                    <p className={styles.newsP}>
                        <span className={styles.newsPLeft}>
                            <img src={require('../../access/newbt.jpeg')} className={styles.newsIcon} alt="" />
                            <span className={styles.containerLinks}>武术中心关于征集中国武术散…</span>
                        </span>
                        <span>08-21</span>
                    </p>
                    <p className={styles.newsP}>
                        <span className={styles.newsPLeft}>
                            <img src={require('../../access/newbt.jpeg')} className={styles.newsIcon} alt="" />
                            <span className={styles.containerLinks}>2019世界武术日全球金奖…</span>
                        </span>
                        <span>08-21</span>
                    </p>
                    <p className={styles.newsP}>
                        <span className={styles.newsPLeft}>
                            <img src={require('../../access/newbt.jpeg')} className={styles.newsIcon} alt="" />
                            <span className={styles.containerLinks}>体育总局武术中心关于举办</span>
                        </span>
                        <span>08-21</span>
                    </p>
                    <p className={styles.newsP}>
                        <span className={styles.newsPLeft}>
                            <img src={require('../../access/newbt.jpeg')} className={styles.newsIcon} alt="" />
                            <span className={styles.containerLinks}>套路世界杯进入”东京“时…</span>
                        </span>
                        <span>08-21</span>
                    </p>
                    <p className={styles.newsP}>
                        <span className={styles.newsPLeft}>
                            <img src={require('../../access/newbt.jpeg')} className={styles.newsIcon} alt="" />
                            <span className={styles.containerLinks}>2018“佛山高新区杯”国…</span>
                        </span>
                        <span>08-21</span>
                    </p>
                    <p className={styles.newsP}>
                        <span className={styles.newsPLeft}>
                            <img src={require('../../access/newbt.jpeg')} className={styles.newsIcon} alt="" />
                            <span className={styles.containerLinks}>中国武术段位的分类</span>
                        </span>
                        <span>08-21</span>
                    </p>
                    <p className={styles.newsP}>
                        <span className={styles.newsPLeft}>
                            <img src={require('../../access/newbt.jpeg')} className={styles.newsIcon} alt="" />
                            <span className={styles.containerLinks}>第四届马来西亚国际武术节</span>
                        </span>
                        <span>08-21</span>
                    </p>
                </section>
            </article>
        </section>
        {/* 当代名家 */}
        <section className={styles.mingjia}>
            <header className={styles.header}>
                <div className={styles.headerLeft}>
                    <span className={styles.block}></span>
                    <span className={styles.name}>当代名家</span>
                    <span className={styles.grey}>History famous</span>
                </div>
                <div className={styles.headerRight}>
                    <span className={styles.more}>+更多>></span>
                </div>
            </header>
            <section className={styles.imgScrollBoxBox}>
                <div className={styles.imgScrollBox}>
                    {/* 需要设置链接 */}
                    <div className={styles.imgBox}>
                        <img className={styles.mingjiaPic} src={require('../../access/20190821112124202420.jpeg')} alt="" />
                    </div>
                    <div className={styles.imgBox}>
                        <img className={styles.mingjiaPic} src={require('../../access/20190821112052295229.jpeg')} alt="" />
                    </div>
                    <div className={styles.imgBox}>
                        <img className={styles.mingjiaPic} src={require('../../access/20190821111986628662.jpeg')} alt="" />
                    </div>
                    <div className={styles.imgBox}>
                        <img className={styles.mingjiaPic} src={require('../../access/20190821111737403740.jpeg')} alt="" />
                    </div>
                    <div className={styles.imgBox}>
                        <img className={styles.mingjiaPic} src={require('../../access/20190821104622262226.jpeg')} alt="" />
                    </div>
                    <div className={styles.imgBox}>
                        <img className={styles.mingjiaPic} src={require('../../access/20190821104550055005.jpeg')} alt="" />
                    </div>
                    <div className={styles.imgBox}>
                        <img className={styles.mingjiaPic} src={require('../../access/2019082110440632632.jpeg')} alt="" />
                    </div>
                    <div className={styles.imgBox}>
                        <img className={styles.mingjiaPic} src={require('../../access/20190821104377717771.jpeg')} alt="" />
                    </div>
                    <div className={styles.imgBox}>
                        <img className={styles.mingjiaPic} src={require('../../access/20190821104287898789.jpeg')} alt="" />
                    </div>
                    <div className={styles.imgBox}>
                        <img className={styles.mingjiaPic} src={require('../../access/20190821104078787878.jpeg')} alt="" />
                    </div>

                    <div className={styles.imgBox}>
                        <img className={styles.mingjiaPic} src={require('../../access/20190821112124202420.jpeg')} alt="" />
                    </div>
                    <div className={styles.imgBox}>
                        <img className={styles.mingjiaPic} src={require('../../access/20190821112052295229.jpeg')} alt="" />
                    </div>
                    <div className={styles.imgBox}>
                        <img className={styles.mingjiaPic} src={require('../../access/20190821111986628662.jpeg')} alt="" />
                    </div>
                    <div className={styles.imgBox}>
                        <img className={styles.mingjiaPic} src={require('../../access/20190821111737403740.jpeg')} alt="" />
                    </div>
                    <div className={styles.imgBox}>
                        <img className={styles.mingjiaPic} src={require('../../access/20190821104622262226.jpeg')} alt="" />
                    </div>
                    <div className={styles.imgBox}>
                        <img className={styles.mingjiaPic} src={require('../../access/20190821104550055005.jpeg')} alt="" />
                    </div>
                    <div className={styles.imgBox}>
                        <img className={styles.mingjiaPic} src={require('../../access/2019082110440632632.jpeg')} alt="" />
                    </div>
                    <div className={styles.imgBox}>
                        <img className={styles.mingjiaPic} src={require('../../access/20190821104377717771.jpeg')} alt="" />
                    </div>
                    <div className={styles.imgBox}>
                        <img className={styles.mingjiaPic} src={require('../../access/20190821104287898789.jpeg')} alt="" />
                    </div>
                    <div className={styles.imgBox}>
                        <img className={styles.mingjiaPic} src={require('../../access/20190821104078787878.jpeg')} alt="" />
                    </div>
                </div>
            </section>
        </section>
        {/* second */}
        {/* widget */}
        {/* 友情链接 不要 */}
        {/* footer */}
    </main>
    </div>)
}
export default Home
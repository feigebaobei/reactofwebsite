// import styles from './index.module.css';
// import stylesAnimation from './widgetScrollBox.less'
// import stylesScss from './first.scss';
import './first.scss';

let {log} = console;

// log('styles', styles)
// log('stylesScss', stylesScss)

let Home = () => {
    return (
    <div className="main-box">
        <main className="main">
            {/* header */}
            <header>
                <img src={require('../../access/index_r1_c1.jpeg')} className="headerImg" alt="img" />
            </header>
            {/* banner */}
            <div className="banner"></div>
            {/* first */}
            <section className="firstBox">
                <article className="notice bordered">
                    <header className="header">
                        <div className="headerLeft">
                            <span className="block"></span>
                            <span className="name">通知公告</span>
                            <span className="grey">Notice</span>
                        </div>
                        <div className="headerRight">
                            <span className="more">+更多>></span>
                        </div>
                    </header>
                    <section className="newsContainer">
                        <p className="newsP">
                            <span className="newsPLeft">
                                <img src={require('../../access/newbt.jpeg')} className="newsIcon" alt="" />
                                <span className="containerLinks">武术中心关于征集中国武术散…</span>
                            </span>
                            <span>08-21</span>
                        </p>
                        <p className="newsP">
                            <span className="newsPLeft">
                                <img src={require('../../access/newbt.jpeg')} className="newsIcon" alt="" />
                                <span className="containerLinks">2019世界武术日全球金奖…</span>
                            </span>
                            <span>08-21</span>
                        </p>
                        <p className="newsP">
                            <span className="newsPLeft">
                                <img src={require('../../access/newbt.jpeg')} className="newsIcon" alt="" />
                                <span className="containerLinks">体育总局武术中心关于举办</span>
                            </span>
                            <span>08-21</span>
                        </p>
                        <p className="newsP">
                            <span className="newsPLeft">
                                <img src={require('../../access/newbt.jpeg')} className="newsIcon" alt="" />
                                <span className="containerLinks">套路世界杯进入”东京“时…</span>
                            </span>
                            <span>08-21</span>
                        </p>
                        <p className="newsP">
                            <span className="newsPLeft">
                                <img src={require('../../access/newbt.jpeg')} className="newsIcon" alt="" />
                                <span className="containerLinks">2018“佛山高新区杯”国…</span>
                            </span>
                            <span>08-21</span>
                        </p>
                        <p className="newsP">
                            <span className="newsPLeft">
                                <img src={require('../../access/newbt.jpeg')} className="newsIcon" alt="" />
                                <span className="containerLinks">中国武术段位的分类</span>
                            </span>
                            <span>08-21</span>
                        </p>
                        <p className="newsP">
                            <span className="newsPLeft">
                                <img src={require('../../access/newbt.jpeg')} className="newsIcon" alt="" />
                                <span className="containerLinks">第四届马来西亚国际武术节</span>
                            </span>
                            <span>08-21</span>
                        </p>
                    </section>
                </article>
                <article className="news bordered">
                    <header className="header">
                        <div className="headerLeft">
                            <span className="block"></span>
                            <span className="name">协会新闻</span>
                            <span className="grey">NEWS</span>
                        </div>
                        <div className="headerRight">
                            <span className="more">+更多>></span>
                        </div>
                    </header>
                    <section className="newsContainer">
                        <p className="newsP">
                            <span className="newsPLeft">
                                <img src={require('../../access/newbt.jpeg')} className="newsIcon" alt="" />
                                <span className="containerLinks">第二届全国青年运动会武术套路比赛（社会俱乐部组）7…</span>
                            </span>
                            <span>08-21</span>
                        </p>
                        <p className="newsP">
                            <span className="newsPLeft">
                                <img src={require('../../access/newbt.jpeg')} className="newsIcon" alt="" />
                                <span className="containerLinks">2019年全国太极拳健康工程系列活动启动仪式在河南…</span>
                            </span>
                            <span>08-21</span>
                        </p>
                        <p className="newsP">
                            <span className="newsPLeft">
                                <img src={require('../../access/newbt.jpeg')} className="newsIcon" alt="" />
                                <span className="containerLinks">2019年郑州国际武术套路邀请赛暨第二届全国武术非…</span>
                            </span>
                            <span>08-21</span>
                        </p>
                        <p className="newsP">
                            <span className="newsPLeft">
                                <img src={require('../../access/newbt.jpeg')} className="newsIcon" alt="" />
                                <span className="containerLinks">中国武术协会换届会议</span>
                            </span>
                            <span>08-21</span>
                        </p>
                        <p className="newsP">
                            <span className="newsPLeft">
                                <img src={require('../../access/newbt.jpeg')} className="newsIcon" alt="" />
                                <span className="containerLinks">2018年第四届马来西亚国际武术节盛大闭幕</span>
                            </span>
                            <span>08-21</span>
                        </p>
                        <p className="newsP">
                            <span className="newsPLeft">
                                <img src={require('../../access/newbt.jpeg')} className="newsIcon" alt="" />
                                <span className="containerLinks">弹腿传统武术精英赛在临西举…</span>
                            </span>
                            <span>08-21</span>
                        </p>
                        <p className="newsP">
                            <span className="newsPLeft">
                                <img src={require('../../access/newbt.jpeg')} className="newsIcon" alt="" />
                                <span className="containerLinks">2018马来西亚国际武术节比赛规程</span>
                            </span>
                            <span>08-21</span>
                        </p>
                    </section>
                </article>
                <article className="links bordered">
                    <header className="header">
                        <div className="headerLeft">
                            <span className="block"></span>
                            <span className="name">通知公告</span>
                            <span className="grey">Notice</span>
                        </div>
                        <div className="headerRight">
                            <span className="more">+更多>></span>
                        </div>
                    </header>
                    <section className="newsContainer">
                        <img src={require('../../access/index_r5_c11.jpeg')} className="" alt="" />
                        <section className="nav-box">
                            <div>级位查询</div>
                            <div>会员查询</div>
                            <div>段位查询</div>
                            <div>教练查询</div>
                            <div>裁判查询</div>
                            <div>考评员查询</div>
                        </section>
                    </section>
                </article>
            </section>
            {/* 当代名家 */}
            <section className="mingjia">
                <header className="header">
                    <div className="headerLeft">
                        <span className="block"></span>
                        <span className="name">当代名家</span>
                        <span className="grey">History famous</span>
                    </div>
                    <div className="headerRight">
                        <span className="more">+更多>></span>
                    </div>
                </header>
                <section className="imgScrollBoxBox">
                    <div className="imgScrollBox">
                        {/* 需要设置链接 */}
                        <div className="imgBox">
                            <img className="mingjiaPic" src={require('../../access/20190821112124202420.jpeg')} alt="" />
                        </div>
                        <div className="imgBox">
                            <img className="mingjiaPic" src={require('../../access/20190821112052295229.jpeg')} alt="" />
                        </div>
                        <div className="imgBox">
                            <img className="mingjiaPic" src={require('../../access/20190821111986628662.jpeg')} alt="" />
                        </div>
                        <div className="imgBox">
                            <img className="mingjiaPic" src={require('../../access/20190821111737403740.jpeg')} alt="" />
                        </div>
                        <div className="imgBox">
                            <img className="mingjiaPic" src={require('../../access/20190821104622262226.jpeg')} alt="" />
                        </div>
                        <div className="imgBox">
                            <img className="mingjiaPic" src={require('../../access/20190821104550055005.jpeg')} alt="" />
                        </div>
                        <div className="imgBox">
                            <img className="mingjiaPic" src={require('../../access/2019082110440632632.jpeg')} alt="" />
                        </div>
                        <div className="imgBox">
                            <img className="mingjiaPic" src={require('../../access/20190821104377717771.jpeg')} alt="" />
                        </div>
                        <div className="imgBox">
                            <img className="mingjiaPic" src={require('../../access/20190821104287898789.jpeg')} alt="" />
                        </div>
                        <div className="imgBox">
                            <img className="mingjiaPic" src={require('../../access/20190821104078787878.jpeg')} alt="" />
                        </div>

                        <div className="imgBox">
                            <img className="mingjiaPic" src={require('../../access/20190821112124202420.jpeg')} alt="" />
                        </div>
                        <div className="imgBox">
                            <img className="mingjiaPic" src={require('../../access/20190821112052295229.jpeg')} alt="" />
                        </div>
                        <div className="imgBox">
                            <img className="mingjiaPic" src={require('../../access/20190821111986628662.jpeg')} alt="" />
                        </div>
                        <div className="imgBox">
                            <img className="mingjiaPic" src={require('../../access/20190821111737403740.jpeg')} alt="" />
                        </div>
                        <div className="imgBox">
                            <img className="mingjiaPic" src={require('../../access/20190821104622262226.jpeg')} alt="" />
                        </div>
                        <div className="imgBox">
                            <img className="mingjiaPic" src={require('../../access/20190821104550055005.jpeg')} alt="" />
                        </div>
                        <div className="imgBox">
                            <img className="mingjiaPic" src={require('../../access/2019082110440632632.jpeg')} alt="" />
                        </div>
                        <div className="imgBox">
                            <img className="mingjiaPic" src={require('../../access/20190821104377717771.jpeg')} alt="" />
                        </div>
                        <div className="imgBox">
                            <img className="mingjiaPic" src={require('../../access/20190821104287898789.jpeg')} alt="" />
                        </div>
                        <div className="imgBox">
                            <img className="mingjiaPic" src={require('../../access/20190821104078787878.jpeg')} alt="" />
                        </div>
                    </div>
                </section>
            </section>
            {/* second */}
            <section className="firstBox">
                <article className="notice bordered">
                    <header className="header">
                        <div className="headerLeft">
                            <span className="block"></span>
                            <span className="name">武林精英</span>
                            <span className="grey">Member center</span>
                        </div>
                        <div className="headerRight">
                            <span className="more">+更多>></span>
                        </div>
                    </header>
                    <section className="newsContainer">
                        <p className="newsP">
                            <span className="newsPLeft">
                                <img src={require('../../access/newbt.jpeg')} className="newsIcon" alt="" />
                                <span className="containerLinks">孙加记</span>
                            </span>
                            <span>08-21</span>
                        </p>
                        <p className="newsP">
                            <span className="newsPLeft">
                                <img src={require('../../access/newbt.jpeg')} className="newsIcon" alt="" />
                                <span className="containerLinks">乔红亮</span>
                            </span>
                            <span>08-21</span>
                        </p>
                    </section>
                </article>
                <article className="news bordered">
                    <header className="header">
                        <div className="headerLeft">
                            <span className="block"></span>
                            <span className="name">名家论拳</span>
                            <span className="grey">Activity reports</span>
                        </div>
                        <div className="headerRight">
                            <span className="more">+更多>></span>
                        </div>
                    </header>
                    <section className="newsContainer">
                        <p className="newsP">
                            <span className="newsPLeft">
                                <img src={require('../../access/newbt.jpeg')} className="newsIcon" alt="" />
                                <span className="containerLinks">究竟什么是抻筋拔骨，古拳谱里的描述或许并不准确</span>
                            </span>
                            <span>08-21</span>
                        </p>
                        <p className="newsP">
                            <span className="newsPLeft">
                                <img src={require('../../access/newbt.jpeg')} className="newsIcon" alt="" />
                                <span className="containerLinks">形意拳穿透力杀伤力、劲从足下生的秘密</span>
                            </span>
                            <span>08-21</span>
                        </p>
                        <p className="newsP">
                            <span className="newsPLeft">
                                <img src={require('../../access/newbt.jpeg')} className="newsIcon" alt="" />
                                <span className="containerLinks">形意拳技击训练功法－－搓手</span>
                            </span>
                            <span>08-21</span>
                        </p>
                        <p className="newsP">
                            <span className="newsPLeft">
                                <img src={require('../../access/newbt.jpeg')} className="newsIcon" alt="" />
                                <span className="containerLinks">武术界人士齐聚北京研讨“武术与健康”</span>
                            </span>
                            <span>08-21</span>
                        </p>
                        <p className="newsP">
                            <span className="newsPLeft">
                                <img src={require('../../access/newbt.jpeg')} className="newsIcon" alt="" />
                                <span className="containerLinks">武德——武术品德</span>
                            </span>
                            <span>08-21</span>
                        </p>
                        <p className="newsP">
                            <span className="newsPLeft">
                                <img src={require('../../access/newbt.jpeg')} className="newsIcon" alt="" />
                                <span className="containerLinks">形意拳拳名之创立与传播</span>
                            </span>
                            <span>08-21</span>
                        </p>
                        <p className="newsP">
                            <span className="newsPLeft">
                                <img src={require('../../access/newbt.jpeg')} className="newsIcon" alt="" />
                                <span className="containerLinks">周伟良谈传统武术的传承方式</span>
                            </span>
                            <span>08-21</span>
                        </p>
                    </section>
                </article>
                <article className="links bordered">
                    <header className="header">
                        <div className="headerLeft">
                            <span className="block"></span>
                            <span className="name">活动报道</span>
                            <span className="grey">Activity reports</span>
                        </div>
                        <div className="headerRight">
                            <span className="more">+更多>></span>
                        </div>
                    </header>
                    <section className="newsContainer">
                        <p className="newsP">
                            <span className="newsPLeft">
                                <img src={require('../../access/newbt.jpeg')} className="newsIcon" alt="" />
                                <span className="containerLinks">2019年全国武术散打冠军赛在渝开幕</span>
                            </span>
                            <span>08-21</span>
                        </p>
                        <p className="newsP">
                            <span className="newsPLeft">
                                <img src={require('../../access/newbt.jpeg')} className="newsIcon" alt="" />
                                <span className="containerLinks">回顾 | 第八届世界传统武术锦标赛圆满落…</span>
                            </span>
                            <span>08-21</span>
                        </p>
                        <p className="newsP">
                            <span className="newsPLeft">
                                <img src={require('../../access/newbt.jpeg')} className="newsIcon" alt="" />
                                <span className="containerLinks">2019峨眉山世传赛蓄势待发 运动员热身…</span>
                            </span>
                            <span>08-21</span>
                        </p>
                        <p className="newsP">
                            <span className="newsPLeft">
                                <img src={require('../../access/newbt.jpeg')} className="newsIcon" alt="" />
                                <span className="containerLinks">6月16日竞赛预告 | 第八届世界传统武…</span>
                            </span>
                            <span>08-21</span>
                        </p>
                        <p className="newsP">
                            <span className="newsPLeft">
                                <img src={require('../../access/newbt.jpeg')} className="newsIcon" alt="" />
                                <span className="containerLinks">2019年全国青年武术散打锦标赛荣昌开赛</span>
                            </span>
                            <span>08-21</span>
                        </p>
                        <p className="newsP">
                            <span className="newsPLeft">
                                <img src={require('../../access/newbt.jpeg')} className="newsIcon" alt="" />
                                <span className="containerLinks">下一站，上海！2019世界武术锦标赛宣传…</span>
                            </span>
                            <span>08-21</span>
                        </p>
                        <p className="newsP">
                            <span className="newsPLeft">
                                <img src={require('../../access/newbt.jpeg')} className="newsIcon" alt="" />
                                <span className="containerLinks">太极拳进机关”公益活动助力活力机关建设</span>
                            </span>
                            <span>08-21</span>
                        </p>
                    </section>
                </article>
            </section>
            {/* widget */}
            <section className="mingjia">
                <header className="header">
                    <div className="headerLeft">
                        <span className="block"></span>
                        <span className="name">徽章展示</span>
                        <span className="grey">badge display</span>
                    </div>
                    <div className="headerRight">
                        <span className="more">+更多>></span>
                    </div>
                </header>
                <section className="imgScrollBoxBox">
                    {/* <div className={stylesAnimation.widgetScrollBox}> */}
                <div className='widgetScrollBox'>
                        {/* 需要设置链接 */}
                        <div className="imgBox">
                            <img className="mingjiaPic" src={require('../../access/20190821114713961396.jpeg')} alt="" />
                        </div>
                        <div className="imgBox">
                            <img className="mingjiaPic" src={require('../../access/20190821114820142014.jpeg')} alt="" />
                        </div>
                        <div className="imgBox">
                            <img className="mingjiaPic" src={require('../../access/20190821114713711371.jpeg')} alt="" />
                        </div>
                        <div className="imgBox">
                            <img className="mingjiaPic" src={require('../../access/2019082111480282282.jpeg')} alt="" />
                        </div>
                        <div className="imgBox">
                            <img className="mingjiaPic" src={require('../../access/20190821114875897589.jpeg')} alt="" />
                        </div>
                        <div className="imgBox">
                            <img className="mingjiaPic" src={require('../../access/20190821114842884288.jpeg')} alt="" />
                        </div>
                        <div className="imgBox">
                            <img className="mingjiaPic" src={require('../../access/20190821114880428042.jpeg')} alt="" />
                        </div>
                        <div className="imgBox">
                            <img className="mingjiaPic" src={require('../../access/2019082111490719719.jpeg')} alt="" />
                        </div>
                        <div className="imgBox">
                            <img className="mingjiaPic" src={require('../../access/20190821114990179017.jpeg')} alt="" />
                        </div>

                        <div className="imgBox">
                            <img className="mingjiaPic" src={require('../../access/20190821114713961396.jpeg')} alt="" />
                        </div>
                        <div className="imgBox">
                            <img className="mingjiaPic" src={require('../../access/20190821114820142014.jpeg')} alt="" />
                        </div>
                        <div className="imgBox">
                            <img className="mingjiaPic" src={require('../../access/20190821114713711371.jpeg')} alt="" />
                        </div>
                        <div className="imgBox">
                            <img className="mingjiaPic" src={require('../../access/2019082111480282282.jpeg')} alt="" />
                        </div>
                        <div className="imgBox">
                            <img className="mingjiaPic" src={require('../../access/20190821114875897589.jpeg')} alt="" />
                        </div>
                        <div className="imgBox">
                            <img className="mingjiaPic" src={require('../../access/20190821114842884288.jpeg')} alt="" />
                        </div>
                        <div className="imgBox">
                            <img className="mingjiaPic" src={require('../../access/20190821114880428042.jpeg')} alt="" />
                        </div>
                        <div className="imgBox">
                            <img className="mingjiaPic" src={require('../../access/2019082111490719719.jpeg')} alt="" />
                        </div>
                        <div className="imgBox">
                            <img className="mingjiaPic" src={require('../../access/20190821114990179017.jpeg')} alt="" />
                        </div>
                    </div>
                </section>
            </section>
            {/* 友情链接 不要 */}
            {/* footer */}
            <footer className="homefooter">
                <p>版权所有  COPYRIGHT  2005-2019 武术段位推广中心</p>
                <p>中国最权威的武术证书认证官网-中国武术协会证书认证中心</p>
                <p>提供段位查询、级位查询、教练查询等武术类相关的证书查询服务，并提供国内外及协会相关新闻资讯</p>
            </footer>
        </main>
    </div>)
}
export default Home
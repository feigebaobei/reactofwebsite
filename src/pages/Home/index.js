import './index.css';

let Home = () => {
    return (<main className="main">
        {/* header */}
        <header>
            <img src={require('../../access/banner.jpg')} className="headerImg" alt="img" />
        </header>
        {/* banner */}
        <div className="banner"></div>
        {/* first */}
        <section className="firstBox">
            <article className="notice">
                <header className="header">
                    <span className="block"></span>
                    <span className="name"></span>
                    <span className="grey"></span>
                    <span className="more">+更多>></span>
                </header>
            </article>
        </section>
        {/* 当代名家 */}
        {/* second */}
        {/* widget */}
        {/* 友情链接 不要 */}
        {/* footer */}
    </main>)
}
export default Home
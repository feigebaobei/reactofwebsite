import styles from './index.module.css';
let {log} = console;

log('styles', styles)

let Home = () => {
    return (<main className={styles.main}>
        {/* header */}
        <header>
            <img src={require('../../access/index_r1_c1.jpeg')} className="headerImg" alt="img" />
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
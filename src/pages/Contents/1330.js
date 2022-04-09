import styles from './cont.module.scss'

let Content = () => {
    return (<div className={styles.cont1336}>
        <p>第四届马来西亚国际武术节定于2018年8月3日至8日在马来西亚吉隆坡隆重举行；本届大赛以推进国际武术文化交流，增进友谊、提高技艺为目的。本次盛会内容将更丰富多彩，来自世界各地的上千名武林高手、各门派名家传人，将汇聚马来西亚首都吉隆坡，共同演绎马来西亚本年度最大的国际武林盛会。</p>
        <p>本届比赛项目有：武术套路、散打、推手、中国摔跤、跆拳道、功力绝技和"名师名家表演赛"和"第二届中马武术书画大赛"，同时举行"中马武术传播大使"、"优秀教练员"、"优秀武术传承人"、"十佳代表队"的评选。  </p>
        <p>吉隆坡，这座璀璨的国际大都市已经做好了准备，将迎接来自世界各地的武术精英，在这里，大家不仅可以在技艺上相互交流学习，也能领略不同的地域风情，切身感受到马来西亚独特的风光和丰富多彩的民族文化。</p>
        <p className={styles.bold}>赛事主办</p>
        <p className={styles.bold}>批准：马来西亚国家体育部</p>
        <p className={styles.bold}>主催：马来西亚武术总会</p>
        <p className={styles.bold}>主办：吉隆坡武术总会</p>
        <p className={styles.bold}>国际武术联合会办：</p>
        <p className={styles.bold}>美国武术家总会</p>
        <p className={styles.bold}>中国少林弟子协会</p>
        <p className={styles.bold}>《少林与太极》杂志社</p>
        <p className={styles.bold}>中国武术文化传播有限公司</p>
        <p></p>
        <p className={styles.bold}>报名咨询</p>
        <p>耿 军  18639113456</p>
        <p>马 涛  15938101231</p>
        <p>地址：河南省孟州市黄河西路武术节秘书处</p>
        <p>网址：www.zgwsj88.com</p>
        <p>邮箱：zgwsj88@126.com</p>
        <p></p>
        <p className={styles.bold}>行程安排</p>
        <table className={`${styles.table} ${styles.alignCenter}`}>
            <thead>
                <tr>
                    <th className={styles.w119}>日期</th>
                    <th className={styles.w188}>上午</th>
                    <th className={styles.w192}>下午</th>
                    <th className={styles.w167}>晚上</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className={styles.w119}>8月2日</td>
                    <td colSpan="2">广州机场集合</td>
                    <td>飞往吉隆坡</td>
                </tr>
                <tr>
                    <td className={styles.w119}>8月3日</td>
                    <td colSpan="2">各队报到品</td>
                    <td>欢迎晚宴</td>
                </tr>
                <tr>
                    <td className={styles.w119}>8月4日</td>
                    <td>开幕式/比赛</td>
                    <td>比赛</td>
                    <td>自由活动</td>
                </tr>
                <tr>
                    <td className={styles.w119}>8月5日</td>
                    <td>比赛</td>
                    <td>比赛</td>
                    <td>自由活动</td>
                </tr>
                <tr>
                    <td className={styles.w119}>8月6日</td>
                    <td colSpan="2">一日游</td>
                    <td></td>
                </tr>
                <tr>
                    <td className={styles.w119}>8月7日</td>
                    <td colSpan="2">海岛之旅</td>
                    <td></td>
                </tr>
                <tr>
                    <td className={styles.w119}>8月8日</td>
                    <td colSpan="2">海岛之旅</td>
                    <td>返程</td>
                </tr>
                <tr>
                    <td className={styles.w119}>8月9日</td>
                    <td colSpan="2">回到中国</td>
                    <td></td>
                </tr>
            </tbody>
        </table>
    </div>)
}
export default Content
import './pages.scss'
// import {useState} from "react"

let clog = console.log
let gotoClickHandler = () => {
    clog('gotoClickHandler')
}
let Pages = (props) => {
    // let [curPage] = useState(props.curPage)
    return (<div className="pages">
        <div className="left">
            <span>共 {props.acount} 条信息 当前为：{props.curPage}/{Math.ceil(props.acount / props.pageSize)}页 每页 {props.pageSize} 条</span>
        </div>
        <div className="right">
            <span>跳到第</span>
            <input type="text" className="input" defaultValue={props.curPage}/>
            <span>页</span>
            <button onClick={gotoClickHandler}>跳转</button>
        </div>
    </div>)
}
export default Pages
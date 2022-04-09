// import './title.scss'

let Title = (props) => {
    require('./title.scss')
    return (<div className="title">
        <h1>{props.title}</h1>
        <p>发表于:{props.dateStr}</p>
    </div>)
}
export default Title
import './index.css'

let Toast = (props) => {
    
    return (<div className="toastBox">
        {props.text || 'string for toast'}
    </div>)
}
export default Toast
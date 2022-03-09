import {useState, useRef} from 'react'
import api from '../../utils/api'
// import Toast from '../../components/Toast'
import {
    Button,
    message} from 'antd'
import {
    useNavigate
} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {token} from '../../store/actions'

let {log} = console

let saveTokenToSession = (token) => {
    sessionStorage.setItem('token', token)
}

let Login = () => {
    let navigate = useNavigate()
    let [submiting, setSubmiting] = useState(false)
    let dispatch = useDispatch()
    let usernameRef = useRef()
    let passwordRef = useRef()

    let submitHandler = (e) => {
        e.stopPropagation();
        e.preventDefault();
        setSubmiting(true)

        api.login({
            username: usernameRef.current.value,
            password: passwordRef.current.value,
        }).then(res => {
            // log(res)
            if (!res.data.code) {
                message.info('登录成功')
                if (!res.data.data.token) {
                    return new Error('token不存在')
                }
                saveTokenToSession(res.data.data.token)
                dispatch(token(res.data.data.token))
                // 已经进入管理页面了，不用设置submiting了
                navigate('/manage', {replace: true})
            } else {
                message.info(res.data.message)
                setSubmiting(false)
            }
        }).catch(err => {
            log('catch', err)
            setTimeout(() => {
                setSubmiting(false)
            }, 100)
        })
    }
    let resetHandler = (e) => {
        e.preventDefault()
        e.stopPropagation()
        usernameRef.current.value = ''
        passwordRef.current.value = ''
    }

    return (<div className="box">
        <h1 className="title">管理员登录页面</h1>
        <form encType="multipart/form-data">
            <div className="itemBox">
                <label className="label" htmlFor="username">用户名</label>
                <input type="text" 
                ref={usernameRef}
                name="username" id="username" required></input>
            </div>
            <div className="itemBox">
                <label className="label" htmlFor="password">密码</label>
                <input type="password"
                    ref={passwordRef}
                 name="password" id="password" required></input>
            </div>
            <div className="itemBox paddingLeft">
                <Button  style={{marginRight: '10px'}} onClick={resetHandler}>重置</Button>
                <Button disabled={submiting} onClick={submitHandler}>提交</Button>
            </div>
        </form>
    </div>)
}
export default Login
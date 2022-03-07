import {useState} from 'react'
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

    let submitHandler = (e) => {
        e.stopPropagation();
        e.preventDefault();
        setSubmiting(true)
        // let api
        api.login({
            username: 'admin',
            password: '123456'
        }).then(res => {
            if (!res.data.code) {
                message.info('登录成功')
                dispatch(token(res.data.token))
                saveTokenToSession(res.data.token)
                // 已经进入管理页面了，不用设置submiting了
                navigate('/manage', {replace: true})
            } else {
                message.info(res.data.message)
            }
        }).catch(err => {
            log('catch', err)
            // for test
            let t = 'tokenForTest'
            dispatch(token(t))
            saveTokenToSession(t)
            setSubmiting(false)
                setTimeout(() => {
            }, 1000)
        })
    }

    return (<div className="box">
        <h1 className="title">管理员登录页面</h1>
        <form encType="multipart/form-data">
            <div className="itemBox">
                <label className="label" htmlFor="username">用户名</label>
                <input type="text" name="username" id="username" required></input>
            </div>
            <div className="itemBox">
                <label className="label" htmlFor="password">密码</label>
                <input type="password" name="password" id="password" required></input>
            </div>
            <div className="itemBox paddingLeft">
                <button className="button" type="reset">重置</button>
                {/* <button className="button" type="submit" onClick={submitHandler}>提交</button> */}
                <Button disabled={submiting} onClick={submitHandler}>提交</Button>
            </div>
        </form>
    </div>)
}
export default Login
import {useState, useRef} from 'react'
import {message} from 'antd'
import api from '../../utils/api'
// import './index.css'
import './index.scss'
import { useSelector } from 'react-redux'

let {log} = console
let Entry = () => {
    let [certNumber, setCertNumber] = useState('')
    let [levelCert, setlevelCert] = useState('')
    let [idCard, setIdCard] = useState('')
    let token = useSelector(state => state.token)
    let fileRef = useRef()

    let certNumberInputHandler = (e) => {
        setCertNumber(e.target.value)
    }
    let idCardInputHandler = (e) => {
        setIdCard(e.target.value)
    }
    let levelCertChangeHandler = (e) => {
        // log('levelCertChangeHandler', e, e.target, e.target.files, e.target.files[0])
        // setlevelCert(e.target.files.length ? e.target.files[0] : undefined)
        setlevelCert(e.target.files[0])
    }
    let resetHandler = (e) => {
        setCertNumber('')
        setIdCard('')
        setlevelCert('')
    }
    let submitHandler = (e) => {
        e.stopPropagation();
        e.preventDefault();
        // log(e)
        // log(fileRef)
        // log(fileRef.current)
        // log(fileRef.current.state)
        // log(fileRef.current.state.value)
        // log(fileRef.current.input)
        // log(fileRef.current.input.defaultValue)
        log(fileRef.current.value)
        if (!certNumber || !idCard || !levelCert) {
            message.error('请填全信息')
        }
        log('levelCert', levelCert)
        let formField = new FormData();
        // formField.append('imageBig', this.menu.imageBig)
        formField.append('certNumber', certNumber)
        formField.append('idCard', idCard)
        // formField.append('levelCert', fileRef.current)
        formField.append('levelCert', levelCert)
        // formField.append('levelCert', fileRef.current.value)
        log(formField)
        // 发送
        api.postLevelCert(formField, {
            // import { useSelector } from 'react-redux'
            headers: {
                Authorization: `bearer ${token}`,
                // "Content-Type": "multipart/form-data"
            }
        }).then(res => {
            // log(res)
            message.success(res.data.message || '上传成功')
        }).catch(err => {
            // log(err)
            message.error(err.message || '上传失败')
        })
    }
    return (<div className="box">
        <h1 className="title">上传学员成绩</h1>
        <form encType="multipart/form-data">
            <div className="itemBox">
                <label className="label" htmlFor="certNumber">证书编号</label>
                <input type="text" name="certNumber" id="certNumber" 
                onInput={(e) => certNumberInputHandler(e)} required></input>
            </div>
            <div className="itemBox">
                <label className="label" htmlFor="idCard">身份证号</label>
                <input type="text" name="idCard" id="idCard" 
                onInput={(e) => idCardInputHandler(e)} required></input>
            </div>
            <div className="itemBox">
                <label className="label" htmlFor="levelCert">级位证</label>
                <input type="file" name="levelCert" id="levelCert" 
                    ref={fileRef}
                onChange={(e) => levelCertChangeHandler(e)} required></input>
            </div>
            <div className="itemBox paddingLeft">
                <button className="button" type="reset" onClick={resetHandler}>重置</button>
                <button className="button" type="submit" onClick={submitHandler}>提交</button>
            </div>
        </form>
    </div>)
}
export default Entry
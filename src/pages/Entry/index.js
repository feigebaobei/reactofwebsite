import {useState} from 'react'
import api from '../../utils/api'
import './index.css'

let {log} = console
let Entry = () => {
    let [learnNumber, setLearnNumber] = useState('')
    let [levelCert, setlevelCert] = useState('')
    let submitHandler = (e) => {
        e.stopPropagation();
        e.preventDefault();
        log(e)
        let formField = new FormData();
        // formField.append('imageBig', this.menu.imageBig)
        formField.append('learnNumber', learnNumber)
        formField.append('levelCert', levelCert)
        log(formField)
        // 发送
        api.payOrder(formField)
    }
    let learnNumberInputHandler = (e) => {
        setLearnNumber(e.target.value)
    }
    let levelCertChangeHandler = (e) => {
        // log('levelCertChangeHandler', e, e.target.value)
        setlevelCert(e.target.files.length ? e.target.files[0] : undefined)
        
    }
    return (<div className="box">
        <h1 className="title">上传学员成绩</h1>
        <form encType="multipart/form-data">
            <div className="itemBox">
                <label className="label" htmlFor="learnNumber">学号</label>
                <input type="text" name="learnNumber" id="learnNumber" onInput={(e) => learnNumberInputHandler(e)} required></input>
            </div>
            <div className="itemBox">
                <label className="label" htmlFor="levelCert">级位证</label>
                <input type="file" name="levelCert" id="levelCert" onChange={(e) => levelCertChangeHandler(e)} required></input>
            </div>
            <div className="itemBox paddingLeft">
                <button className="button" type="reset">重置</button>
                <button className="button" type="submit" onClick={submitHandler}>提交</button>
            </div>
        </form>
    </div>)
}
export default Entry
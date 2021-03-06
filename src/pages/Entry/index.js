import {useState, useRef} from 'react'
import {message} from 'antd'
import api from '../../utils/api'
// import './index.css'
import './index.scss'
import { useSelector } from 'react-redux'

let {log} = console
let Entry = () => {
    let token = useSelector(state => state.token)
    let fileRef = useRef()

    let [name, setName] = useState('')
    let [gender, setGender] = useState(1)
    let [projectGrade, setProjectGrade] = useState('')
    let [project, setProject] = useState('')
    let [idCard, setIdCard] = useState('')
    let [approvalEnterprises, setApprovalEnterprises] = useState('')
    let [approvalDate, setApprovalDate] = useState('')
    let [certNumber, setCertNumber] = useState('')
    let [photo, setPhoto] = useState('')

    let inputHandler = (e, type) => {
        console.log('inputHandler', e, type)
        switch (type) {
            case 'name':
                setName(e.target.value)
                break;
            case 'gender':
                setGender(e.target.value)
                break;
            case 'projectGrade':
                setProjectGrade(e.target.value)
                break;
            case 'project':
                setProject(e.target.value)
                break;
            case 'idCard':
                setIdCard(e.target.value)
                break;
            case 'approvalEnterprises':
                setApprovalEnterprises(e.target.value)
                break;
            case 'approvalDate':
                setApprovalDate(e.target.value)
                break;
            case 'certNumber':
                setCertNumber(e.target.value)
                break;
            case 'photo':
                setPhoto(e.target.files[0])
                break;
            default:
                break;
        }
    }
    // let certNumberInputHandler = (e) => {
    //     setCertNumber(e.target.value)
    // }
    // let idCardInputHandler = (e) => {
    //     setIdCard(e.target.value)
    // }
    // let levelCertChangeHandler = (e) => {
    //     // log('levelCertChangeHandler', e, e.target, e.target.files, e.target.files[0])
    //     // setlevelCert(e.target.files.length ? e.target.files[0] : undefined)
    //     setlevelCert(e.target.files[0])
    // }
    let resetHandler = (e) => {
        // setCertNumber('')
        // setIdCard('')
        // setlevelCert('')
        setName('')
        setGender('')
        setProjectGrade('')
        setProject('')
        setIdCard('')
        setApprovalEnterprises('')
        setApprovalDate('')
        setCertNumber('')
        setPhoto('')
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
        // if (!certNumber || !idCard || !levelCert) {
        if (
            !name ||
            !gender ||
            !projectGrade ||
            !project ||
            !idCard ||
            !approvalEnterprises ||
            !approvalDate ||
            !certNumber ||
            !photo
        ) {
            message.error('???????????????')
        }
        // log('levelCert', levelCert)
        log('photo', photo)
        let formField = new FormData();
        // name, gender, project_grade, project, id_card, approval_enterprises, approval_date, cert_number
        formField.append('name', name)
        formField.append('gender', gender)
        formField.append('project_grade', projectGrade)
        formField.append('project', project)
        formField.append('id_card', idCard)
        formField.append('approval_enterprises', approvalEnterprises)
        formField.append('approval_date', approvalDate)
        formField.append('cert_number', certNumber)
        formField.append('photo', photo)
        log(formField)
        // ??????
        api.postLevelCert(formField, {
            // import { useSelector } from 'react-redux'
            headers: {
                Authorization: `bearer ${token}`,
                // "Content-Type": "multipart/form-data"
            }
        }).then(res => {
            // log(res)
            if (res.data.code === 0) {
                message.success(res.data.message || '????????????')
            } else {
                message.error(res.data.message || '????????????')
            }
        }).catch(err => {
            // log(err)
            message.error(err.message || '????????????')
        })
    }
    return (<div className="box">
        <h1 className="title">??????????????????</h1>
        <form encType="multipart/form-data">
            <div className="itemBox">
                <label className="label" htmlFor="name">??????</label>
                <input type="text" name="name" id="name" 
                onInput={(e) => inputHandler(e, 'name')} required></input>
            </div>
            <div className="itemBox">
                <label className="label" htmlFor="gender">??????</label>
                <select name="gender" id="gender" onChange={(e) => inputHandler(e, 'gender')} required>
                    <option value={1}>???</option>
                    <option value={0}>???</option>
                </select>
            </div>
            <div className="itemBox">
                <label className="label" htmlFor="projectGrade">????????????</label>
                <input type="text" name="projectGrade" id="projectGrade" 
                onInput={(e) => inputHandler(e, 'projectGrade')} required></input>
            </div>
            <div className="itemBox">
                <label className="label" htmlFor="project">??????</label>
                <input type="text" name="project" id="project" 
                onInput={(e) => inputHandler(e, 'project')} required></input>
            </div>
            <div className="itemBox">
                <label className="label" htmlFor="idCard">????????????</label>
                <input type="text" name="idCard" id="idCard" 
                onInput={(e) => inputHandler(e, 'idCard')} required></input>
            </div>
            <div className="itemBox">
                <label className="label" htmlFor="approvalEnterprises">????????????</label>
                <input type="text" name="approvalEnterprises" id="approvalEnterprises" 
                onInput={(e) => inputHandler(e, 'approvalEnterprises')} required></input>
            </div>
            <div className="itemBox">
                <label className="label" htmlFor="approvalDate">????????????</label>
                <input type="text" name="approvalDate" id="approvalDate" 
                onInput={(e) => inputHandler(e, 'approvalDate')} required></input>
            </div>
            <div className="itemBox">
                <label className="label" htmlFor="certNumber">????????????</label>
                <input type="text" name="certNumber" id="certNumber" 
                onInput={(e) => inputHandler(e, 'certNumber')} required></input>
            </div>
            <div className="itemBox">
                <label className="label" htmlFor="photo">??????</label>
                <input type="file" name="photo" id="photo" 
                    ref={fileRef}
                    onChange={(e) => inputHandler(e, 'photo')} required></input>
            </div>



            {/* <div className="itemBox">
                <label className="label" htmlFor="certNumber">????????????</label>
                <input type="text" name="certNumber" id="certNumber" 
                onInput={(e) => certNumberInputHandler(e)} required></input>
            </div>
            <div className="itemBox">
                <label className="label" htmlFor="idCard">????????????</label>
                <input type="text" name="idCard" id="idCard" 
                onInput={(e) => idCardInputHandler(e)} required></input>
            </div>
            <div className="itemBox">
                <label className="label" htmlFor="levelCert">?????????</label>
                <input type="file" name="levelCert" id="levelCert" 
                    ref={fileRef}
                onChange={(e) => levelCertChangeHandler(e)} required></input>
            </div> */}
            <div className="itemBox paddingLeft">
                <button className="button" type="reset" onClick={resetHandler}>??????</button>
                <button className="button" type="submit" onClick={submitHandler}>??????</button>
            </div>
        </form>
    </div>)
}
export default Entry
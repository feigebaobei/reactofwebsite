// import './index.css'
let Admin = () => {
    return (<div className="box">
        <h1 className="title">上传学员成绩</h1>
        <form enctype="multipart/form-data">
            <div className="itemBox">
                <label className="label" for="learnNumber">账号</label>
                <input type="text" name="learnNumber" id="learnNumber" required></input>
            </div>
            <div className="itemBox">
                <label className="label" for="password">密码</label>
                <input type="password" name="password" id="password" required></input>
            </div>
            <div className="itemBox paddingLeft">
                <button className="button" type="reset">重置</button>
                <button className="button" type="submit">提交</button>
            </div>
        </form>
    </div>)
}
export default Admin
# 登录
/users/login
post
{
    username
    password
}
return
{
    data
    message
    code
}

# 查询级位证书
/students/levelCert
get
    idCardOrName => idCardOrCertNumber
return
    {
        data: {
            picUrl
        }
    }



# title
# title
# title
# title

const userModel = require('../lib/database.js');

exports.postRegister = async ctx => {

    let { username, password } = ctx.request.body

    let createTime = new Date()
    let updateTime = new Date()
    let lastLoginTime = new Date()
    let loginCount = 0

    await userModel.insertUser([username, password, createTime, updateTime, lastLoginTime, loginCount])
        .then(async (result) => {
            console.log(result)
            ctx.body = {
                code: 10000,
                message: '注册成功'
            };
        })
        .catch(function (error) {
            ctx.body = {
                code: 20000,
                message: '注册失败，服务器错误'
            };
        })
}
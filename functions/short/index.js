// 返回输入参数
exports.main = async (event) => {
    console.log('Hello World')
    return event
}
const serveless = require('serverless-http')

const app = require('./app')

exports.main = serveless(app)
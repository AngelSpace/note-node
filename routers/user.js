const router = require('koa-router')();
const controller = require('../controller/user')

router.post('/register', controller.postRegister)

module.exports = router
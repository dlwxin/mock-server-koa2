const router = require('koa-router')()

router.prefix('/users')

// curl http://localhost:3000/users
router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

// curl http://localhost:3000/users/bar
router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

module.exports = router

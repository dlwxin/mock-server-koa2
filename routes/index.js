const router = require('koa-router')()

const ipUtil = require('../utils/ipUtil')

// curl http://localhost:3000
router.get('/', async (ctx, next) => {
  ctx.body = 'Hello Koa2!'
})

// curl http://localhost:3000/json
router.get('/json', async (ctx, next) => {
  ctx.body = {
    msg: 'Hello World!',
    timestamp: Date.now(),
    origin: ipUtil.getIpFromHttpRequest(ctx.request),
  }
})

// curl http://localhost:3000/list/89
router.get('/list/:id', async ctx => {
  const { id } = ctx.params
  ctx.body = {
    id,
    timestamp: Date.now(),
    origin: ipUtil.getIpFromHttpRequest(ctx.request),
  }
})

// curl -G -d 'id=89' -d 'num=3' localhost:3000/search
// http://localhost:3000/search?id=89&num=3
router.get('/search', async ctx => {
  const { id, num } = ctx.query
  ctx.body = {
    id,
    num,
    timestamp: Date.now(),
    origin: ipUtil.getIpFromHttpRequest(ctx.request),
  }
})

// curl -X PUT http://localhost:3000/89
router.put('/:id', async ctx => {
  const { id } = ctx.params
  ctx.body = ctx.body = {
    method: 'PUT',
    id,
    timestamp: Date.now(),
    origin: ipUtil.getIpFromHttpRequest(ctx.request),
  }
})

// curl -X DELETE http://localhost:3000/89
router.del('/:id', async ctx => {
  const { id } = ctx.params
  ctx.body = ctx.body = {
    method: 'DELETE',
    id,
    timestamp: Date.now(),
    origin: ipUtil.getIpFromHttpRequest(ctx.request),
  }
})

/*
curl --header "Content-Type: application/json" \
  --data '{"username":"admin","password":"admin"}' \
  http://localhost:3000/login
*/

// https://stackoverflow.com/questions/18314796/couchdb-curl-windows-command-line-invalid-json
router.post('/login', ctx => {
  const { username, password } = ctx.request.body
  ctx.body = {
    username,
    password,
    msg: 'Hello World!',
    timestamp: Date.now(),
    origin: ipUtil.getIpFromHttpRequest(ctx.request),
  }
})

module.exports = router

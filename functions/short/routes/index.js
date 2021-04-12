const router = require("koa-router")()

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    content: 'serverless index page content'
  })
})

module.exports = router
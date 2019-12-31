const { Nuxt, Builder } = require('nuxt-edge')
const config = require('./fixture/nuxt.config')

describe('module', () => {
  const url = path => `http://localhost:3000${path}`

  let nuxt

  beforeAll(async () => {
    nuxt = new Nuxt(config)

    const build = new Builder(nuxt)

    await build.validatePages()
    await build.generateRoutesAndFiles()
    await nuxt.listen(3000)
  }, 60000)

  test('context', async (done) => {
    const window = await nuxt.renderAndGetWindow(url('/').ent(done()))

    window.onNuxtReady(() => {
      const $moment = window.$nuxt.$moment
      expect($moment).toBeNull()
    })
  })

  afterAll(async () => {
    await nuxt.close()
  })
})

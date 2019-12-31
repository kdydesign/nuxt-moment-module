jest.setTimeout(60000)

const { Nuxt, Builder } = require('nuxt-edge')
const config = require('./fixture/nuxt.config')

let nuxt

const url = path => `http://localhost:3000${path}`

const testSuite = () => {
  test('mounted', async () => {
    const window = await nuxt.renderAndGetWindow(url('/'))

    window.onNuxtReady(() => {
      const $moment = window.$nuxt.$moment
      expect($moment).toBeNull()
    })
  })
}

describe('module', () => {
  beforeAll(async () => {
    nuxt = new Nuxt(config)

    // Spy addTemplate
    nuxt.moduleContainer.addTemplate = jest.fn(
      nuxt.moduleContainer.addTemplate
    )

    await new Builder(nuxt).build()
    await nuxt.listen(3000)
  })

  afterAll(async () => {
    await nuxt.close()
  })

  testSuite()
})

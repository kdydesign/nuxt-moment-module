# Nuxt-Moment-Module
> Easy integration between nuxt.js and moment

<!-- [![npm version][npm-version-src]][npm-version-href] -->
<!-- [![npm downloads][npm-downloads-src]][npm-downloads-href] -->
[![Circle CI][circle-ci-src]][circle-ci-href]
[![Codecov][codecov-src]][codecov-href]
[![Dependencies][david-dm-src]][david-dm-href]
[![Standard JS][standard-js-src]][standard-js-href]

## Install
Install with npm:

```bash
npm i nuxt-moment
```

nuxt.config.js:

```js
module.exports = {
	modules: [
    	// Simple usage
    	'nuxt-moment'
	 ]
}
```

## Usage

### Component
```js
export default {
	data () {
		return {
			date: this.$moment().format('LTS')
		}
	},
	computed: {
		computedDate () {
			return this.$moment(new Date).format('LL')
		}
	},
	methods: {
		getDate () {
			return this.$moment()
		}
	}
}
```

### Plugin
```js
export default function({ $moment }) {
	console.log($moment().format('LTS'))
}
```

### Store
```js
export const state = () => ({
  date: new Date()
})

export const mutations = {
  MUTATION (state) {
    state.date = this.$moment().day(10)
  }
}

export const actions = {
  action ({state, commit}) {
    commit('SAMPLE_MUTATIONS', this.$moment().day(5))
  }
}
```

## License

[MIT License](./LICENSE)

Copyright (c) Dev.DY(https://kdydesign.github.io/)

<!-- Badges -->
<!-- [npm-version-src]: https://img.shields.io/npm/dt/@nuxtjs/axios.svg?style=flat-square -->
<!-- [npm-version-href]: https://npmjs.com/package/@nuxtjs/axios -->
<!-- [npm-downloads-src]: https://img.shields.io/npm/v/@nuxtjs/axios/latest.svg?style=flat-square -->
<!-- [npm-downloads-href]: https://npmjs.com/package/@nuxtjs/axios -->
[circle-ci-src]: https://img.shields.io/circleci/project/github/kdydesign/nuxt-moment-module/master.svg?style=flat-square
[circle-ci-href]: https://circleci.com/gh/kdydesign/nuxt-moment-module/tree/master
[codecov-src]: https://img.shields.io/codecov/c/github/kdydesign/nuxt-moment-module.svg?style=flat-square
[codecov-href]: https://codecov.io/gh/kdydesign/nuxt-moment-module
[david-dm-src]: https://david-dm.org/kdydesign/nuxt-moment-module/status.svg?style=flat-square
[david-dm-href]: https://david-dm.org/kdydesign/nuxt-moment-module
[standard-js-src]: https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square
[standard-js-href]: https://standardjs.com

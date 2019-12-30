<template>
  <div class="container">
    <div>
      <h1 class="title">
        nuxt-moment-module
      </h1>
      <h3 class="sub-title">
        {{getDate}}
      </h3>
      <div>
        {{getTimer}}
      </div>
      <div>
        state: {{getState1}}
        <button @click="mutate">Mutations</button>
      </div>
      <div>
        state: {{getState2}}
        <button @click="act">Actions</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data() {
    return {
      timer: this.$moment().format('LTS')
    }
  },
  computed: {
    getDate() {
      return this.$moment().format('LL')
    },
    getTimer() {
      return this.timer
    },
    getState1() {
      return this.$moment(this.$store.state.date1).format('LL')
    },
    getState2() {
      return this.$moment(this.$store.state.date2).format('LL')
    }
  },
  created() {
    setInterval(() => {
      this.timer = this.$moment().format('LTS')
    }, 1000)
  },
  methods: {
    mutate() {
      this.$store.commit('ADD_DAY')
    },
    act() {
      this.$store.dispatch('add_day')
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: bold;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
  color: #61b2a7;
}

.sub-title {
  color: #00c58e;
}
</style>

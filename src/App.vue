<template>
  <div id="app" :style="style">
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
import { mapState } from 'vuex' //注册 action 和 state
export default {
  name: 'App',
  data () {
    return {
    }
  },
  computed: {
    ...mapState(['backgroundColor']),
    style () {
      return {
        backgroundColor: this.backgroundColor
      }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

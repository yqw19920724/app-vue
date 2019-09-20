<template>
  <div class="home">
    <h1 class="head">这是我第一个页面</h1>
    <van-button type="default" @click="onShowActionSheet">默认按钮</van-button>
    <van-button type="default" @click="changeBackground('green')">绿色</van-button>
    <van-button type="default" @click="changeBackground('red')">红色</van-button>
    <van-action-sheet
      v-model='show'
      :actions='actions'
      @select='onSelect'
    />
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      show: false,
      actions: [
        { name: '选项1' },
        { name: '选项2' },
        { name: '选项3', subname: '描述信息' }
      ]
    }
  },
  methods: {
    onShowActionSheet () {
      this.show = true
    },
    onSelect (item) {
      this.show = false
      this.$toast({
        message: item.name
      })
    },
    changeBackground (color) {
      this.$store.dispatch('changeBackground', color)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
    .home {
        .head{
            background: red;
        }
    }
</style>

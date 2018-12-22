<template>
  <div id="app">
    <Menu></Menu>
    <Main><router-link to="/about">基本资料</router-link></Main>
  </div>
</template>

<script>
import Menu from './components/Menu.vue'
import Main from './components/Main.vue'
// import About from './components/views/About.vue'
import Login from './components/Login.vue'


export default {
  name: 'app',
  data() {
    return{
    }
  },
  components: {
    Menu,
    Main,
    Login
    // About
  }
}
</script>

<style>
#app{
  display: flex;
}


html,body {
    font-size: 14px;
    margin: 0;
    padding: 0;
}

body {
    position: relative;
    width: 100%;
    height: 100%;
    font-family: "Arial", "Microsoft YaHei", "Microsoft JhengHei", "Heiti", sans-serif;    
    font-weight: normal;
}
</style>

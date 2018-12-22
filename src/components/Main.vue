<template>
<div class="main">
  <breadcrumb></breadcrumb>
  <!-- <welcome></welcome> -->
  <UserInfo></UserInfo>
</div>
</template>

<script>
import Login from './Login'
// import Welcome from './Welcome'
import Breadcrumb from './Breadcrumb'
import UserInfo from './UserInfo'
export default {
  name: "Main",
  data() {
    return {};
  },
  components: {
    Login,
    Breadcrumb,
    UserInfo
    // Welcome
  }

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "./style";
</style>

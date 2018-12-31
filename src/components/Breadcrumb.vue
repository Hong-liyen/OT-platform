<template>
  <div class="breadcrumb">
    <font-awesome-icon icon="bars"/>
    <div class="nav-item hidden-xs-only">
      <li><font-awesome-icon icon="sync"/>在线人数：会员(214675)</li>
      <li><font-awesome-icon icon="power-off"/>退出</li>
      <li><font-awesome-icon icon="clock"/>时间：2018-05-09 03:35:40</li>
    </div>
  </div>
</template>

<script>
export default {
  name: "Breadcrumb",
  data() {
    return {};
  }

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "./style";
button {
  justify-content: flex-start;
}
</style>

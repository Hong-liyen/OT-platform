<template>
  <div class="menu">
    <el-col width="190px">
      <div class="user">
        <h2>后台系统</h2>
        <img src="../assets/profile-photo.png" class="user-photo">
        <p>你好！ Amanda, 欢迎登录</p>
        <el-input placeholder="搜索页面或功能" :span="4">
          <!-- <i slot="suffix"><font-awesome-icon icon="search"/></i> -->
        </el-input>
      </div>
      <el-menu>
        <el-submenu index="1">
          <template slot="title">
            <font-awesome-icon class="icon" icon="id-card" />
            <span>账号管理</span>
            <i class="el-submenu__icon-arrow el-icon-arrow-down"></i>
          </template>
          <el-menu-item index="1-1"><router-link to="/home">基本资料</router-link></el-menu-item>
          <el-menu-item index="1-2">大股东</el-menu-item>
          <el-menu-item index="1-3">股东</el-menu-item>
          <el-menu-item index="1-4">总代</el-menu-item>
          <el-menu-item index="1-5">会员</el-menu-item>
          <el-menu-item index="1-6">登录日志</el-menu-item>
          <el-menu-item index="1-7">返点设置</el-menu-item>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <font-awesome-icon class="icon" icon="hand-holding-usd" />
            <span>现金系统</span>
            <i class="el-submenu__icon-arrow el-icon-arrow-down"></i>
          </template>
          <el-menu-item index="2-1">存取款设定</el-menu-item>
          <el-menu-item index="2-2">层级管理</el-menu-item>
          <el-menu-item index="2-3">支付平台设定</el-menu-item>
          <el-menu-item index="2-4">出入款记录</el-menu-item>
          <el-menu-item index="2-5">人工线上存提</el-menu-item>
          <el-menu-item index="2-6">额度转换</el-menu-item>
          <el-menu-item index="2-7">现金流查询</el-menu-item>
          <el-menu-item index="2-8">稽核查询</el-menu-item>
          <el-menu-item index="2-9">出入款总账</el-menu-item>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">
            <font-awesome-icon class="icon" icon="futbol"/>
            <span>运营管理</span>
            <i class="el-submenu__icon-arrow el-icon-arrow-down"></i>
          </template>
          <el-menu-item index="3-1">返水统计</el-menu-item>
          <el-menu-item index="3-2">返水查询</el-menu-item>
          <el-menu-item index="3-3">代理返水查询</el-menu-item>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title">
            <font-awesome-icon class="icon" icon="tv"/>
            <span>平台管理</span>
            <i class="el-submenu__icon-arrow el-icon-arrow-down"></i>
          </template>
          <el-menu-item index="4-1">网站咨询系统</el-menu-item>
          <el-menu-item index="4-2">公告管理</el-menu-item>
        </el-submenu>
        <el-submenu index="5">
          <template slot="title">
            <font-awesome-icon class="icon" icon="file-alt"/>
            <span>报表管理</span>
            <i class="el-submenu__icon-arrow el-icon-arrow-down"></i>
          </template>
          <el-menu-item index="5-1">报表</el-menu-item>
          <el-menu-item index="5-2">月结对账系统</el-menu-item>
        </el-submenu>
        <el-submenu index="6">
          <template slot="title">
            <font-awesome-icon class="icon" icon="users"/>
            <span>員工管理</span>
            <i class="el-submenu__icon-arrow el-icon-arrow-down"></i>
          </template>
          <el-menu-item index="6-1">子账号</el-menu-item>
        </el-submenu>
        <el-menu-item index="7">
          <font-awesome-icon class="icon" icon="file-archive"/>
          <span slot="title">注单管理</span>
        </el-menu-item>
        <el-menu-item index="8">
          <font-awesome-icon class="icon" icon="chess-rook"/>
          <span slot="title">角色管理</span>
        </el-menu-item>
        <el-submenu index="9">
          <template slot="title">
            <font-awesome-icon class="icon" icon="calendar"/>
            <span>日志管理</span>
            <i class="el-submenu__icon-arrow el-icon-arrow-down"></i>
          </template>
          <el-menu-item index="5-1">登入记錄</el-menu-item>
          <el-menu-item index="5-2">操作记錄</el-menu-item>
        </el-submenu>
        <el-menu-item index="10">
          <font-awesome-icon class="icon" icon="cog"/>
          <span slot="title">维修页面</span>
        </el-menu-item>
      </el-menu>
    </el-col>
    <div class="el-scrollbar__bar is-vertical">
      <div class="el-scrollbar__thumb"></div>
    </div>
  </div>
</template>

<script>
import { MENU_LIST } from '@/configs/site'

export default {
  name: "Menu",
  data() {
    return {
      MENU_LIST: MENU_LIST
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "./style";
</style>

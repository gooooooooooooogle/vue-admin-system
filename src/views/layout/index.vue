<template>
  <el-container style="height:100%">
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isActive"
    >
      <router-link to="/dashboard">
        <el-menu-item index="1">
          <v-icon class="el-icon-menu" name="tachometer-alt" />
          <span slot="title">dashboard</span>
        </el-menu-item>
      </router-link>

      <router-link to="/example/index">
        <el-menu-item index="2">
          <v-icon class="el-icon-menu" name="laugh-beam" />
          <span slot="title">example</span>
        </el-menu-item>
      </router-link>

      <router-link to="/error/index">
        <el-menu-item index="3">
          <v-icon class="el-icon-menu" name="exclamation-circle" />
          <span slot="title">error</span>
        </el-menu-item>
      </router-link>

      <el-submenu index="4">
        <template slot="title">
          <v-icon class="el-icon-menu" name="sitemap"></v-icon>
          <span slot="title">系统管理</span>
        </template>

        <router-link to="/system/role">
          <el-menu-item index="4-1">
            <v-icon class="el-icon-menu" name="user-tag"></v-icon>
            <span slot="title">角色管理</span>
          </el-menu-item>
        </router-link>

        <router-link to="/system/users">
          <el-menu-item index="4-2">
            <v-icon class="el-icon-menu" name="users"></v-icon>
            <span slot="title">用户管理</span>
          </el-menu-item>
        </router-link>
      </el-submenu>

      <el-submenu index="5">
        <template slot="title">
          <v-icon class="el-icon-menu" name="sitemap"></v-icon>
          <span slot="title">组织管理</span>
        </template>

        <router-link to="/organization/person">
          <el-menu-item index="5-1">
            <v-icon class="el-icon-menu" name="users"></v-icon>
            <span slot="title">人员管理</span>
          </el-menu-item>
        </router-link>

        <el-submenu index="5-2">
          <template slot="title">
            <v-icon class="el-icon-menu" name="angry"></v-icon>
            <span slot="title">其他</span>
          </template>

          <router-link to="/organization/other/department">
            <el-menu-item index="5-2-1">
              <v-icon class="el-icon-menu" name="university"></v-icon>
              <span slot="title">科研管理</span>
            </el-menu-item>
          </router-link>

          <router-link to="/organization/other/test">
            <el-menu-item index="5-2-2">
              <v-icon class="el-icon-menu" name="university"></v-icon>
              <span slot="title">TEST</span>
            </el-menu-item>
          </router-link>
        </el-submenu>
      </el-submenu>  



    </el-menu>

    <el-container>
      <el-header class="head-style">
        <el-col :span="1" :offset="0" class="icon-style">
          <i class="el-icon-s-fold" :class="{'is-active':isActive}" @click="menuSwitch()"></i>
        </el-col>
        <el-col :span="1" :offset="22" class="icon-style">
          <el-dropdown>
            <el-button type="text">
              <!-- <img src="@/assets/admin.png" class="user-avatar" /> -->
              <el-avatar>
                <img src="@/assets/admin.png" />
              </el-avatar>
              <i class="el-icon-caret-bottom" />
            </el-button>
            <el-dropdown-menu slot="dropdown">
              <router-link to="/main">
                <el-dropdown-item>主页</el-dropdown-item>
              </router-link>
              <router-link to="/login">
                <el-dropdown-item divided>退出</el-dropdown-item>
              </router-link>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
      </el-header>
      <el-main>
        <transition name="fade-transform" mode="out-in">
          <router-view></router-view>
        </transition>
      </el-main>
      <el-footer height="30px" class="foot-style">© 2021 LONGI, Inc.</el-footer>
    </el-container>
  </el-container>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      isActive: false,
      imageUrl: "@\\assets\\admin.png",
    };
  },
  methods: {
    menuSwitch() {
      this.isActive = !this.isActive;
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>
<style scoped>
.head-style {
  padding: 0;
  box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
}
.foot-style {
  line-height: 30px;
  text-align: center;
  font-size: 12px;
  box-shadow: 4px 0 8px rgb(0 21 41 / 8%);
}
.icon-style {
  text-align: center;
  line-height: 60px;
  font-size: 26px;
  cursor: pointer;
}
.el-icon-s-fold.is-active {
  transform: rotate(180deg);
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 210px;
}

a {
  text-decoration: none;
}

.router-link-active {
  text-decoration: none;
}

.user-avatar {
  width: 40px;
  height: 40px;
}
</style>
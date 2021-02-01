<template>
  <el-container id="app">
    <el-header height=44px>
      <img src="./assets/logo.svg" alt="Music App" class='logo'>
      <div class='music-style-switcher'>
        <a v-for="style of styles" :key="style" :class="{'active': activeStyle === style}">{{style}}</a>
      </div>
    </el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
    <el-footer height=130px>
      <span class='faq-link header center bold over-padder'>
        <router-link to="/faq"> Frequent Questions </router-link>
      </span>
      <center>
        <router-link to='/'>
          <img src="./assets/logo.svg" alt="Music App" style='margin-top: 20px; width: 50px;'>
        </router-link>
      </center>
    </el-footer>
  </el-container>
</template>

<script>
import { musicStyles } from './services/config.service'
export default {
  name: 'music-app',
  data () {
    return {
      styles: musicStyles,
      activeStyle: musicStyles[0]
    }
  }
}
</script>

<style lang="scss">
@import './assets/styles/_variables.scss';
@import './assets/styles/common.scss';

#app {
  font-family: 'Open Sans', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100vh;

  display: flex;
  flex-direction: column;

  .el-header {
    background-color: #4f6328;
    padding: $menu-padding;
    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
      color: white
    }
  }

  .el-main {
    flex-grow: 1;
  }

  .music-style-switcher {
    display: flex;

    a {
      display: block;
      visibility: hidden;
      width: 15px;
      overflow: hidden;
      margin: 0 5px;
      font-weight: bold;

      &::first-letter { visibility: visible;}
      &:last-of-type {
        margin-right: 0px;
      }

      &.active {
        visibility: visible;
        width: auto;
        opacity: 0.8;
        color: $menu-active-style-color;
      }
    }
  }

  .logo {
    width: 32px;
  }

  .el-footer {
    background-color: #4f6328;
    height: 110px;

    .faq-link {
      color: white;
      background-color: #e26c0a;
      padding: 0.5rem 0;
      font-size: 1.2rem;
    }
  }
}
</style>

<template>
  <div class="app-wrapper">
    <slidebar class="slide-bar"></slidebar>
    <div class="main-container">
      <navbar class="nav-bar"></navbar>
      <app-main class="app-container"></app-main>
    </div>
  </div>
</template>
<script>
import Navbar from './components/navBar';
import Slidebar from './components/slideBar';
import AppMain from './components/appMain';

export default {
  components: { Navbar, Slidebar, AppMain }
}
</script>
<style lang="scss" scoped>
.app-wrapper {
  display: flex;
  flex-direction: row;
}
.slide-bar {
  min-width: 200px;
  height: 100vh;
  background-color: #264348;
}
.main-container {
  width: 100%;
  height: 100vh;
  overflow: auto;
  position: relative;
  .nav-bar {
    position: fixed;
    top: 0;
    z-index: 10;
    background-color: #fff;
    width: 100%;
    height: 50px;
    border-bottom: 1px solid #C0C4CC;
  }
  .app-container {
    position: absolute;
    top: 50px;
    width: 100%;
    height: 100%;
  }
}
</style>
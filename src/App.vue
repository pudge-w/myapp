<template>
  <el-container id="app" direction="vertical">
    <Header />
    <router-view />
    <Footer />
    <CanvasBg />
  </el-container>
</template>

<script>
import Header from "./components/public/Header";
import Footer from "./components/public/Footer";
import CanvasBg from "./components/public/CanvasBg";
export default {
  components: {
    Header,
    Footer,
    CanvasBg
  }
};
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #fff;
}
</style>

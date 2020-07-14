<template>
  <el-header>
    <el-row :gutter="0">
      <el-col :xs="8" :sm="6" :lg="6">
        <Logo />
      </el-col>
      <el-col :xs="8" :sm="15" :lg="11" class="hidden-xs-only">
        <Nav />
      </el-col>
      <el-col :xs="10" :sm="0" :lg="0"></el-col>
      <el-col :xs="6" :sm="3" :lg="7">
        <Search />
      </el-col>
    </el-row>
  </el-header>
</template>

<script>
import Logo from "../header/Logo";
import Nav from "../header/Nav";
import Search from "../header/Search";
export default {
  data() {
    return {};
  },
  components: {
    Logo,
    Nav,
    Search
  }
};
</script>
<style lang="less" scoped>
@import "../../assets/css/var.less";

.el-header {
  height: 130px !important;
  line-height: 130px;
  padding: 0;
  border-bottom: 1.2px solid @hover-color;
  @media (max-width: 1200px) {
    height: 100px !important;
    line-height: 100px;
  }
  @media (max-width: 768px) {
    height: 60px !important;
    line-height: 60px;
  }
  .el-row {
    height: 100%;
    background: @bg-color;
    position: relative;
    .el-col {
      height: 100%;
    }
  }
}
</style>

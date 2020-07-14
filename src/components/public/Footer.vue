<template>
  <el-footer>
    <a href="http://beian.miit.gov.cn" target="_blank">浙ICP备19030493号-1</a>
    <address>wx:13868170715</address>
  </el-footer>
</template>

<script>
export default {
  data() {
    return {};
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {}
};
</script>
<style lang="less" scoped>
@import "../../assets/css/var.less";

.el-footer {
  height: 80px !important;
  border-top: 1px solid @hover-color;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  a {
    color: #fff;
    margin-bottom: 5px;
  }
}
</style>

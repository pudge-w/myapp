<template>
  <h1>pudge.wang</h1>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>
<style lang="less" scoped>
@import "../../assets/css/var.less";

h1 {
  height: 100%;
  text-align: center;
  font-size: 2.5vw;
  font-weight: 900;
  letter-spacing: 3px;
  background: linear-gradient(
    45deg,
    @gradient-left-color 0%,
    @gradient-right-color 100%
  );
  color: transparent;
  background-clip: text;
  cursor: pointer;
}
</style>

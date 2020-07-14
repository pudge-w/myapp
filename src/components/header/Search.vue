<template>
  <section class="search">
    <article>
      <input type="text" placeholder="全局搜索" />
      <div class="button">
        <span class="iconfont icon-fangdajing"></span>
      </div>
    </article>
    <span class="iconfont icon-fangdajing"></span>
    <section class="buttonGrounp">
      <div class="buttonLeft">
        <span class="iconfont icon-fangdajing"></span>
      </div>
      <div class="buttonRight">
        <span class="iconfont icon-liebiao"></span>
      </div>
    </section>
  </section>
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

.search {
  width: 100%;
  height: 100%;
  border-left: 1px solid @hover-color;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  @media (max-width: 1200px) {
    border-radius: 25px 0 0 25px;
  }
  article {
    width: 70%;
    height: 60px;
    background: #fff;
    border-radius: 30px;
    // background-image: linear-gradient(
    //   45deg,
    //   @gradient-left-color 0%,
    //   @gradient-right-color 100%
    // );
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    &:focus-within {
      background-image: linear-gradient(
        45deg,
        @gradient-left-color 0%,
        @gradient-right-color 100%
      );
    }
    @media (max-width: 1200px) {
      display: none;
    }
    input {
      height: 56px;
      border-top-left-radius: 28px;
      border-bottom-left-radius: 28px;
      border: none;
      width: calc(100% - 70px);
      background: @bg-color;
      padding: 0 20px;
      font-size: 16px;
      color: #fff;
      &::placeholder {
        color: #aaa;
      }
    }
    .button {
      width: 66px;
      height: 56px;
      background-image: linear-gradient(
        225deg,
        @gradient-left-color 0%,
        @gradient-right-color 100%
      );
      border-top-right-radius: 28px;
      border-bottom-right-radius: 28px;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      .iconfont {
        // margin: auto;
        font-size: 24px;
        color: #fff;
        margin-left: -5px;
      }
    }
  }
  > .iconfont {
    font-size: 30px;
    color: #fff;
    cursor: pointer;
    display: none;
    @media (min-width: 768px) and (max-width: 1200px) {
      display: block;
    }
    @media (max-width: 768px) {
      display: none;
    }
  }
  .buttonGrounp {
    width: 100%;
    height: 100%;
    display: none;
    @media (max-width: 768px) {
      display: flex;
    }
    div {
      width: 50%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      &:nth-child(2) {
        border-left: 1px solid @hover-color;
      }
      .iconfont {
        color: #fff;
        font-size: 24px;
      }
    }
  }
}
</style>

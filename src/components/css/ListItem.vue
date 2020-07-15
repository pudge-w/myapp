<!-- 公用:中间的列表部分 -->
<template>
  <div class="item-wrap">
    <div class="item" @click="aaa(item.link)">
      <div class="image" :style="{backgroundImage: item.image}"></div>
      <div class="triangle item-right-triangle"></div>
      <div class="triangle item-left-triangle"></div>
      <div class="content">
        <h3 class="item-title">{{ item.title }}</h3>
        <div class="item-tags">
          <el-tag type="warning" v-for="(item, index) in item.tags" :key="index">{{ item }}</el-tag>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListItem",
  props: {
    item: Object
  },
  data() {
    return {};
  },
  mounted () {},
  methods: {
    aaa(url) {
      this.$router.push(url)
    }
  }
};
</script>

<style lang="less">
@import "../../assets/css/var.less";
.item-wrap {
  width: 33.33%;
  height: 440px;
  .item {
    height: calc(100% - 60px);
    margin: 30px;
    background: @hover-color;
    border-radius: 8px;
    overflow: hidden;
    position: relative;
    cursor: pointer;
    .image {
      width: 100%;
      height: 250px;
      background-position: 50% 50%;
      background-size: cover;
      transition: all 0.3s;
    }
    .triangle {
      position: absolute;
      z-index: 0;
      right: 0;
      bottom: 53px;
      left: 0;
      width: 110%;
      min-height: 100px;
    }
    .item-left-triangle {
      transform: rotate(7deg) translate(-10px, 0);
      background-color: @hover-color;
    }
    .item-right-triangle {
      transform: rotate(-10deg) translate(10px, -10px);
      background-image: linear-gradient(
        to right,
        @gradient-left-color,
        @gradient-right-color
      );
    }
    .content {
      width: 100%;
      height: 130px;
      background: @hover-color;
      position: relative;
      padding: 10px 20px 40px;
      position: relative;
      .item-title {
        font-size: 18px;
        line-height: 18px;
        word-break: break-all;
        letter-spacing: 3px;
        line-height: 30px;
      }
      .item-tags {
        position: absolute;
        right: 20px;
        bottom: 20px;
        span {
          margin-left: 5px;
          font-size: 16px;
        }
      }
    }
    &:hover {
      box-shadow: 0 2px 12px 0 rgba(255, 255, 255, 0.5);
      .image {
        transform: scale(1.1);
      }
    }
  }
}
@media (max-width: 1000px) {
  .item-wrap {
    width: 50%;
  }
}
@media (max-width: 600px) {
  .item-wrap {
    width: 100%;
  }
}
</style>


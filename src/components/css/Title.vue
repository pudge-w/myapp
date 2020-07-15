<template>
  <header>
    <section class="part1"></section>
    <section class="part2"></section>
    <section class="part3"></section>
    <main>
      <h2>{{title}}</h2>
      <p>
        <!-- html和css够简单和熟悉不过了吧, -->
        {{text}}
        <br />可是你真的会了吗？
      </p>
      <div class="searchBox">
        <div class="searchMain">
          <el-select v-model="value" clearable placeholder="页面内标签选择">
            <el-option label="aaaa" value="bbbb"></el-option>
          </el-select>
          <span>18篇文章</span>
          <div class="topline"></div>
        </div>
        <div class="leftcircle"></div>
        <div class="bottomline"></div>
        <div class="rightBottomCircle"></div>
        <div class="rightLine"></div>
      </div>
    </main>
  </header>
</template>

<script>
export default {
  props: {
    title: String,
    text: String,
  },
  data() {
    return {
      value: ""
    };
  }
};
</script>

<style lang="less">
@import "../../assets/css/var.less";

header {
  position: relative;
  overflow: hidden;
  padding-bottom: 60px;
  .part1 {
    width: 380px;
    height: 260px;
    background-image: linear-gradient(
      to bottom right,
      @gradient-left-color,
      @gradient-right-color
    );
    border-top-left-radius: 140px;
    border-bottom-left-radius: 140px;
    position: absolute;
    z-index: 9;
    right: 0;
    top: -100px;
    @media (max-width: 768px) {
      display: none;
    }
  }
  .part2 {
    width: 140px;
    height: 140px;
    border-radius: 50%;
    background: rgb(33, 28, 44);
    position: absolute;
    right: 350px;
    top: -30px;
    @media (max-width: 768px) {
      display: none;
    }
  }
  .part3 {
    width: 250px;
    height: 250px;
    border-radius: 50%;
    background-image: linear-gradient(
      to bottom right,
      @gradient-left-color,
      @gradient-right-color
    );
    position: absolute;
    z-index: 9;
    left: -125px;
    bottom: 0;
    @media (max-width: 1300px) {
      display: none;
    }
  }
  main {
    margin: 0 auto;
    max-width: 1100px;
    height: 100%;
    padding: 40px 40px 0 40px;
    h2 {
      font-size: 40px;
      font-weight: 500;
    }
    p {
      font-size: 20px;
      margin-top: 14px;
      line-height: 30px;
      color: #c2c2c2;
    }
    .searchBox {
      height: 130px;
      display: grid;
      grid-template-columns: 50px 1fr 1fr 40px;
      grid-template-rows: [r0] 30px 60px 40px;
      .searchMain {
        grid-column-start: 2;
        grid-column-end: 3;
        grid-row-start: 2;
        grid-row-end: 4;
        display: flex;
        justify-content: space-around;
        align-items: center;
        position: relative;
        .topline {
          width: 100%;
          height: 4px;
          background-image: linear-gradient(
            to right,
            @gradient-right-color,
            rgb(236, 82, 48)
          );
          position: absolute;
          top: 0;
          left: 0;
          border-radius: 0 2px 2px 0;
        }
      }
      .leftcircle {
        grid-column-start: 1;
        grid-column-end: 2;
        grid-row-start: 2;
        grid-row-end: 4;
        border-radius: 50px 0 0 50px;
        border: 4px solid @gradient-right-color;
        border-right: none;
      }
      .bottomline {
        grid-column-start: 2;
        grid-column-end: 4;
        grid-row-start: 3;
        grid-row-end: 4;
        height: 4px;
        background-image: linear-gradient(
          to right,
          @gradient-right-color,
          @gradient-left-color
        );
        align-self: end;
      }
      .rightBottomCircle {
        grid-column-start: 4;
        grid-column-end: 5;
        grid-row-start: 3;
        grid-row-end: 4;
        border-radius: 0 0 40px 0;
        border: 4px solid @gradient-left-color;
        border-top: none;
        border-left: none;
      }
      .rightLine {
        grid-column-start: 4;
        grid-column-end: 5;
        grid-row-start: r0;
        grid-row-end: 3;
        width: 4px;
        background: @gradient-left-color;
        justify-self: end;
      }
      @media (max-width: 800px) {
        grid-template-columns: 1fr 4fr 1fr;
        grid-template-rows: [r0] 30px 80px;
        .searchMain {
          grid-column-start: 2;
          grid-column-end: 3;
          grid-row-start: 2;
          grid-row-end: 3;
          justify-content: space-between;
          .topline {
            width: 100%;
            height: 4px;
            background-image: linear-gradient(
              to right,
              @gradient-right-color,
              @gradient-left-color
            );
            position: absolute;
            top: calc(100% - 4px);
            left: 0;
          }
        }
        .leftcircle {
          grid-column-start: 1;
          grid-column-end: 2;
          grid-row-start: 2;
          grid-row-end: 3;
          border-radius: 50px 0 0 50px;
          border: 4px solid @gradient-right-color;
          border-right: none;
        }
        .bottomline {
          display: none;
        }
        .rightBottomCircle {
          display: none;
        }
        .rightLine {
          grid-column-start: 3;
          grid-column-end: 4;
          grid-row-start: 2;
          grid-row-end: 3;
          border-radius: 0 50px 50px 0;
          border: 4px solid @gradient-left-color;
          border-left: none;
          justify-self: stretch;
          width: 100%;
          background: transparent;
        }
      }
    }
  }
}
</style>

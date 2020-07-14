<template>
  <nav>
    <router-link
      tag="li"
      v-for="(item, index) in navList"
      :key="index"
      :to="item.suffix"
      @mousemove="mousemove(index)"
      @mouseout="mouseout"
    >
      <span
        :class="item.iconName"
        class="iconfont"
        :style="{ color: index == activeNum ? item.hoverColor : '' }"
      ></span>
      <p class="title">{{ item.title }}</p>
    </router-link>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      navList: [
        {
          className: "li1",
          iconName: "icon-html5",
          title: "HTML、CSS",
          suffix: "css",
          hoverColor: "#d15737"
        },
        {
          className: "li2",
          iconName: "icon-js-square",
          title: "JavaScript",
          suffix: "js",
          hoverColor: "#5699d6"
        },
        {
          className: "li3",
          iconName: "icon-vuejs",
          title: "VUE",
          suffix: "vue",
          hoverColor: "#41b883"
        },
        {
          className: "li4",
          iconName: "icon-react",
          title: "React",
          suffix: "react",
          hoverColor: "#61dafb"
        },
        {
          className: "li5",
          iconName: "icon-node",
          title: "node、其他",
          suffix: "node",
          hoverColor: "#026e00"
        },
        {
          className: "li6",
          iconName: "icon-shiti-tianchong",
          title: "面试",
          suffix: "interview",
          hoverColor: "#ecc45d"
        }
      ],
      activeNum: -1
    };
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {
    mousemove(index) {
      this.activeNum = index;
    },
    mouseout() {
      this.activeNum = -1;
    },
    tab(item) {
      this.$router.push(item.suffix);
    }
  }
};
</script>
<style lang="less" scoped>
@import "../../assets/css/var.less";

nav {
  height: 100%;
  display: flex;
  cursor: pointer;
  li {
    flex: 1;
    display: flex;
    flex-direction: column;
    line-height: 1;
    justify-content: center;
    align-items: center;
    border-left: 1px solid @hover-color;
    color: #fff;
    .iconfont {
      font-size: 3vw;
    }
    .title {
      font-size: 1vw;
      margin-top: 12px;
    }
    &:hover {
      background: @hover-color;
    }
  }
}
.router-link-active {
  .icon-html5 {
    color: #d15737;
  }
  .icon-js-square {
    color: #5699d6;
  }
  .icon-vuejs {
    color: #41b883;
  }
  .icon-react {
    color: #61dafb;
  }
  .icon-node {
    color: #026e00;
  }
  .icon-shiti-tianchong {
    color: #ecc45d;
  }
}
</style>

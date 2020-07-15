<template>
  <nav>
    <router-link
      tag="li"
      v-for="(item, index) in navList"
      :key="index"
      :to="item.suffix"
      @mousemove="mousemove(index)"
      @mouseout="mouseout"
      :class="[currentUrl==item.path ? 'hover':'']"
    >
     <div class="border-top"></div>
      <div class="li-main">
        <span
        :class="item.iconName"
        class="iconfont"
        :style="{ color: index == activeNum ? item.hoverColor : '' }"
        ></span>
        <p class="title">{{ item.title }}</p>
      </div>
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
          hoverColor: "#d15737",
          path:"/css"
        },
        {
          className: "li2",
          iconName: "icon-js-square",
          title: "JavaScript",
          suffix: "js",
          hoverColor: "#5699d6",
          path:"/js"
        },
        {
          className: "li3",
          iconName: "icon-vuejs",
          title: "VUE",
          suffix: "vue",
          hoverColor: "#41b883",
          path:"/vue"
        },
        {
          className: "li4",
          iconName: "icon-react",
          title: "React",
          suffix: "react",
          hoverColor: "#61dafb",
          path:"/react"
        },
        {
          className: "li5",
          iconName: "icon-node",
          title: "node、其他",
          suffix: "node",
          hoverColor: "#026e00",
          path:"/node"
        },
        {
          className: "li6",
          iconName: "icon-shiti-tianchong",
          title: "面试",
          suffix: "interview",
          hoverColor: "#ecc45d",
          path:"/interview"
        }
      ],
      activeNum: -1
    };
  },

  components: {},

  computed: {
    currentUrl() {
      // console.log(this.$route.path)
      return this.$route.path;
    }
  },

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
  .hover {
        background: @hover-color;
        .border-top {
          width: 100%;
          height: 5px;
          background-image: linear-gradient(
            to right,
            @gradient-left-color,
            @gradient-right-color
          );
        }
  }
  li {
    flex: 1;
    display: flex;
    flex-direction: column;
    line-height: 1;
    border-left: 1px solid @hover-color;
    color: #fff;
    .border-top{
      width: 100%;
      height: 5px;
      background-image: transparent;
    }
     
    .li-main{
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
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
@media screen and (max-width: 1200px) {
  header {
    nav {
      flex: 5;
        li {
          .iconfont {
            font-size: 40px;
          }
          .title{
            font-size: 13px;
            margin-top: 10px;
          }
        }
    }
  }
}
</style>

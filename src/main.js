import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

// 引入reset.css
import "@/assets/css/style.less";

// 引入elementUi
import Element from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

// 引入iconfont
import "@/assets/font/iconfont.css";
import "element-ui/lib/theme-chalk/display.css";

Vue.config.productionTip = false;

// 全局使用elementui
Vue.use(Element, { size: "mini", zIndex: 3000 });

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

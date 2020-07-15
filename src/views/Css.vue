<template>
  <div>
    <Title title="HTML、CSS" text="html和css够简单和熟悉不过了吧"/>
    <div class = "nav_main">
     <ListItem v-for="(item, index) in items" :key="index" :item="item"/>
    </div>
  </div>
</template>

<script>
import Title from "../components/css/Title";
import ListItem from '../components/css/ListItem'
import { mapGetters } from "vuex";

export default {
  data() {
    return {};
  },

  components: {
    Title,ListItem
  },

  computed: {
    ...mapGetters(["items"])
  },

  mounted() {},

  methods: {}
};
</script>
<style lang="less" scoped>
@import "../assets/css/var.less";
.nav_main{
   max-width: 1100px;
      margin: 0 auto;
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      align-content: flex-start;
}

</style>

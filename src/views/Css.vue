<template>
  <div>
    <Title />
    <ul>
      <li v-for="(item, index) in items" :key="index">{{ item.title }}</li>
    </ul>
  </div>
</template>

<script>
import Title from "../components/css/Title";
import { mapGetters } from "vuex";

export default {
  data() {
    return {};
  },

  components: {
    Title
  },

  computed: {
    ...mapGetters(["items"])
  },

  mounted() {},

  methods: {}
};
</script>
<style lang="less" scoped>
ul {
  max-width: 1020px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  li {
    width: 30%;
    height: 300px;
    background: #fff;
    margin-top: 30px;
    color: #000;
  }
}
</style>

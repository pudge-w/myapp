<template>
  <div class="interview">
    <Title title="面试题" text="这些面试题够简单和熟悉了吧" />
  </div>
</template>

<script>
import Title from "@/components/css/Title.vue";
export default {
  name: "Interview",
  components: {
    Title
  },
  data() {
    return {
      items: []
    };
  },
  mounted() {},
  computed: {},
  methods: {}
};
</script>

<style scoped lang="less">
@import "../../assets/css/var.less";
// .interview {
//   .interview-main {
//     .interview-center {
//       max-width: 1100px;
//       margin: 0 auto;
//       display: flex;
//       flex-wrap: wrap;
//       justify-content: flex-start;
//       align-content: flex-start;
//     }
//   }
// }
</style>




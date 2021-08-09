<template>
  <div class="page flex-col">
    <Header></Header>
    <div class="fail-box">
        <img src="../../assets/img/shibai.png" alt="">
        <p>还没有相关数据哦</p>
    </div>
  </div>
</template>
<script>
import Header from '../components/head.vue'
export default {
  components:{Header},
  data() {
    return {
      constants: {}
    };
  },
  methods: {}
};
</script>
<style scoped lang="scss" src="./assets/index.scss" />
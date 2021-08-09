<template>
  <div class="page flex-col">
    <Header></Header>
    <div class="page-box" @click="openApp">
      <div class="page-boxOne">
        <img src="../../assets/img/mf.png" alt="">
      </div>
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
  methods: {
    openApp(){
      
    }
  }
};
</script>
<style scoped lang="scss" src="./assets/index.scss" />
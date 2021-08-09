<template>
  <div class="page flex-col">
      <div class="introduce">
          <img class="introduce-one" src="../../assets/img/hhr1.png" alt="">
          <div class="introduce-two">
              <a href="joinIn">
                <img src="../../assets/img/hhr2.png" alt="">
              </a>
          </div>
      </div>
  </div>
</template>
<script>
import gteApi from '@/api/api'
export default {
  components:{},
  data() {
    return {
      dataContent:{}
    };
  },
  mounted(){
    this.getData()
  },
  methods: {
    // 打开app
    openApp(){

    },
    // 获取详情
    getData(){
      
    }
  }
};
</script>
<style scoped lang="scss" src="./assets/index.scss" />
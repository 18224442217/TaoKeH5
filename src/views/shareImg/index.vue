<template>
  <div class="page flex-col">
    <img
      class="img2"
      src="./assets/img/img1.png">
    <!-- <img
    class="img2"
    :src="constants.roomContent"> -->
      <!-- 用你的声音控制全场 -->
    <!-- <div class="title">
      
      让声音保鲜在每个瞬间
    </div>
    <div class="footer-box">
      <div class="footer-one">
        <img
              class="pic2"
              referrerpolicy="no-referrer"
              src="./assets/img/SketchPng2fd10cf964b07d8ea922cb335d2f648e15a3b10c6947cfb2645c44ffedd847a5.png"
            />
        <div class="footer-text">
          <span>桃壳</span>
          <span>长按识别二维码</span>
        </div>
      </div>
      <div class="footer-two">
        <img
          class="pic3"
          referrerpolicy="no-referrer"
          src="./assets/img/SketchPng70ff2d1828cf00b602af993f7f7c600b9245e37a47cb655e086c7384d9c5f4c6.png"
        />
      </div>
    </div> -->
  </div>
</template>
<script>
import gteApi from '@/api/api'
import Cache from '@/utils/cache'
export default {
  data() {
    return {
      constants: {}
    };
  },
  mounted(){
    this.getData()
  },
  methods: {
    // 获取详情
    getData(){
      const data={
        userId:'10140',
        room_id:'1111'
      }
      gteApi.roomContent(data).then((res)=>{
        console.log(res.code,'====')
        if(res.code==1){
          this.constants=res.data
        }else{
          this.$router.push({
            path: '/fail'
          })
          
        }
      })
    },
  }
};
</script>
<style scoped lang="scss" src="./assets/index.scss" />
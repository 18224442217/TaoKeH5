<template>
  <div class="page flex-col">
    <!-- <div class="bd1 flex-col">
      <div class="bd3 flex-col"><div class="main4 flex-col"></div></div>
    </div> -->
    <img
      class="group9"
      referrerpolicy="no-referrer"
      src="./assets/img/SketchPngbbaaf8d17bce81e4f17d87364a12bea0933672b59813a3becdbe2009966abcd1.png"
    />
    <Header></Header>
    <img
      class="pic3"
      referrerpolicy="no-referrer"
      src="./assets/img/yj.png"
    />
    <div class="bd16 flex-col"></div>
    <div class="padding-b150">
      <div class="bd17 flex-col">
        <div class="mod1 flex-col">
          <span class="info4">
            {{dataContent.nickname}}
          </span>
          <div class="layer1 flex-row">
            <div class="mod2 flex-col"></div>
            <div class="mod3 flex-col"><span class="txt4">{{dataContent.label_name1}}</span></div>
            <div class="mod4 flex-col" v-if="dataContent.label_name2"><span class="word5">{{dataContent.label_name2}}</span></div>
          </div>
          <div class="layer2 flex-row">
            <img
              class="img2"
              referrerpolicy="no-referrer"
              src="./assets/img/SketchPng6930589ca83153aef5cd658f7334a980153d6d5fa363f04ea700130cfc8d7278.png"
            />
            <span class="word6">{{dataContent.heat}}</span>
          </div>
          <div class="layer3 flex-row">
            <div class="outer1 flex-col"></div>
            <span class="word7">房主</span>
            <div class="outer2 flex-col"></div>
          </div>
          <div class="layer4 flex-col"></div>
          <div class="layer5 flex-col">
            <div class="mod5 flex-col"></div>
            <div class="mod6 flex-col">
              <div class="img-box">
                <div>
                  <img :src="dataContent.headImg" alt="">
                </div>
              </div>
            </div>
            <div class="wrap5 flex-col">
              <div class="section2 flex-row">
                <span class="txt5">{{dataContent.nickname}}</span>
                <div class="img-box">
                  <img class="sex" v-if="dataContent.sex==1" src="./assets/img/nan.png" alt="">
                  <img class="sex" v-else src="./assets/img/nv.png" alt="">
                  <!-- <img
                    v-if="dataContent.is_vip==1"
                    class="img3"
                    referrerpolicy="no-referrer"
                    src="./assets/img/SketchPng7fae2a99831b6d49fe1218263631e33686cb42cd0d039ec616e7fcc714639660.png"
                  /> -->
                </div>
                
              </div>
              <span class="txt6">ID:{{dataContent.room_id}}</span>
              <span class="word8">{{dataContent.signature}}</span>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  </div>
</template>
<script>
import Header from '../components/head.vue'
import gteApi from '@/api/api'
import Cache from '@/utils/cache'
export default {
  components:{Header},
  data() {
    return {
      dataContent: {}
    };
  },
  mounted(){
    this.getData()
    if(this.$route.token){
      cache.setToken(this.$route.token)
    }
    
  },
  methods: {
    openApp(){

    },
    // 获取详情
    getData(){
      const data={
        // userId:this.$route.userId,//'10061'
        // room_id:this.$route.room_id//'1409'
        userId:'10061',
        room_id:'1409'
      }
      gteApi.shareRoom(data).then((res)=>{
        if(res.code==1){
          this.dataContent=res.data
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
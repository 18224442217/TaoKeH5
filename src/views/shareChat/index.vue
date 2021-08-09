<template>
  <div class="page flex-col">
    <Header></Header>
    <img
      class="group9"
      referrerpolicy="no-referrer"
      src="./assets/img/SketchPngbbaaf8d17bce81e4f17d87364a12bea0933672b59813a3becdbe2009966abcd1.png"
    />
    <div class="bd16 flex-col"></div>
    <div class="padding-b100">
      <div class="group10 flex-col">
        <img
        class="pic2"
        referrerpolicy="no-referrer"
        src="./assets/img/SketchPng391db809d32bbcc56fa767b3994f291c9c3949be815f50c47826a9059614dcea.png"
      />
        <div class="box3 flex-col">
          <div class="main2 flex-col">
            <span class="word5">{{dataContent.room_name}}</span>
            <div class="outer6 flex-row">
              <div class="box4 flex-col"><span class="word6">{{dataContent.label_name1}}</span></div>
              <div class="box5 flex-col" v-if="dataContent.label_name2"><span class="info5">{{dataContent.label_name2}}</span></div>
            </div>
            <div class="outer7">
              <span class="txt2">创建人：</span>
              <span class="word7">{{dataContent.nickname}}</span>
            </div>
            <div class="outer8">
              <span class="word8">开放时间：</span>
              <span class="info6">{{dataContent.create_time}}</span>
            </div>
            <div class="outer9">
              <span class="info7">已预约：</span>
              <span class="word9">{{dataContent.make_num}}</span>
            </div>
            <button class="outer10 flex-col" @click="openApp">
              <span class="word10">立即预约</span>
            </button>
          </div>
        </div>
        <div class="box6 flex-col">
          <div class="img-box">
            <div>
              <img :src="dataContent.room_head" alt="">
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
export default {
  components:{Header},
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
      const data={
        userId:'10061',
        room_id:'1340'
      }
      gteApi.shareMakeRoom(data).then((res)=>{
        if(res.code==1){
          this.dataContent=res.data
        }else{
          this.$router.push({
            path: '/fail'
          })
          
        }
      })
    }
  }
};
</script>
<style scoped lang="scss" src="./assets/index.scss" />
<template>
  <div class="page flex-col">
    <Header></Header>
    <div class="page-box" @click="openApp">
      <div class="page-boxOne">
        <div class="head-img">
            <div><img :src="dataContent.headImg" alt=""></div>
        </div>
        <div class="head-name">
            <span>{{dataContent.nickname}}</span>
            <img v-if="dataContent.sex==1" src="./assets/img/nan.png" alt="">
            <img v-else src="./assets/img/nv.png" alt="">
        </div>
        <p class="head-id">ID:{{dataContent.userId}}</p>
        <p class="head-center">{{dataContent.signature}}</p>
        <div class="num-text">
            <div>
                <p>{{dataContent.popularity_num}}</p>
                <span>人气</span>
            </div>
            <div>
                <p>{{dataContent.followers_count}}</p>
                <span>粉丝</span>
            </div>
            <div>
                <p>{{dataContent.attention_num}}</p>
                <span>关注</span>
            </div>
        </div>
      </div>
      <div class="page-boxTwo" v-if="dynamicChar">
        <p class="title">语聊圈</p>
        <p class="head-time">2021-03-15 16:34</p>
        <div class="center-middle">
            <div class="middle-left"><div><img :src="dynamicChar.room_head" alt=""></div></div>
            <div class="middle-right">
                <p class="middle-title"># {{dynamicChar.room_name}}</p>
                <div class="middle-text">
                    <p>{{dynamicChar.label_name1}}</p>
                    <p v-if="dynamicChar.label_name2">{{dynamicChar.label_name2}}</p>
                    <span>
                        <img src="./assets/img/redu.png" alt="">
                        <a>{{dynamicChar.heat}}</a>
                    </span>
                    <span>
                        <img src="./assets/img/qianbao.png" alt="">
                        <a>{{dynamicChar.tickets}}</a>
                    </span>
                </div>
                <div class="middle-time">
                    <a>发言时间 : </a>
                    <span>{{dynamicChar.create_time}}</span>
                </div>
            </div>
        </div>
        <div class="center-operation">
            <div class="operation-left">
                <span><img src="./assets/img/sc.png" alt=""><a>{{dynamicChar.zan_num}}</a></span>
                <span><img src="./assets/img/hf.png" alt=""><a>{{dynamicChar.pin_num}}</a></span>
            </div>
            <div class="operation-right">
                <span class="right-one"><img src="./assets/img/fx.png" alt=""><a>分 享</a></span>
                <span class="right-two"><img src="./assets/img/bf.png" alt=""><a>播 放</a></span>
            </div>
        </div>
      </div>
      <div class="page-boxThree">
        <p class="title">个人信息</p>
        <div class="boxThree-box">
            <div class="boxThree-title">
                <span></span>
                <a>生 日</a>
            </div>
            <div class="boxThree-center">
                {{dataContent.birthday?dataContent.birthday:'无'}}
            </div>
        </div>
        <div class="boxThree-box">
            <div class="boxThree-title">
                <span></span>
                <a>城 市</a>
            </div>
            <div class="boxThree-center">
                {{dataContent.city?dataContent.city:'无'}}
            </div>
        </div>
        <div class="boxThree-box">
            <div class="boxThree-title">
                <span></span>
                <a>学 校</a>
            </div>
            <div class="boxThree-center">
                {{dataContent.school?dataContent.school:'无'}}
            </div>
        </div>
        <div class="boxThree-box">
            <div class="boxThree-title">
                <span></span>
                <a>简 历</a>
            </div>
            <div class="boxThree-center">
                {{dataContent.brief?dataContent.brief:'无'}}
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
      dataContent:{},
      dynamicChar:{}
    };
  },
  watch:{
    
  },
  filters: {
    
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
      // if(!this.$route.token||!this.$route.userId||!this.$route.to_uid){
      //   return
      // }
      const data={
        token:'',
        userId:'10061',
        to_uid:'10062'
        // token:this.$route.token,
        // userId:this.$route.userId,
        // to_uid:this.$route.to_uid
      }
      gteApi.shareMember(data).then((res)=>{
        if(res.code==1){
          this.dataContent=res.data
          this.dynamicChar=res.data.dynamic_char
        }else{
          this.$router.push({
            path: '/fail'
          })
          
        }
      })
    },
  },
};
</script>
<style scoped lang="scss" src="./assets/index.scss" />
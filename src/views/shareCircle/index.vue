<template>
  <div class="page flex-col">
    <Header></Header>
    <div class="page-box">
      <div class="page-boxOne">
        <p>{{dataContent.create_time}}</p>
        <div class="img0">
          <div>
            <img :src="dataContent.room_head" alt="">
          </div>
        </div>
        <div class="title0"># {{dataContent.room_name}}</div>
        <div class="label-text">
          <span>{{dataContent.label_name1}}</span>
          <span v-if="dataContent.label_name2" class="right">{{dataContent.label_name2}}</span>
        </div>
        <div class="progress">
          <van-slider v-model="audio"
           @change="onChange"
           @drag-start="dragStart" 
           @drag-end="dragEnd"
            :min="0" 
            :max="maxTime"
             id="slider" ref="slider">
            <template #button>
              <div class="custom-button"></div>
            </template>
          </van-slider>
          <div class="audio-time">
            <span>{{currentTime}}</span>
            <span>{{endTime}}</span>
          </div>
          <div class="audio-img">
            <div v-if="onOff" class="open-img" @click="playClick"></div>
            <div v-else class="off-img" @click="stopClick"></div>
          </div>
          <!-- ./assets/img/audio1.mp4 -->
          <audio :src="dataContent.audio_file" id="music" 
          @timeupdate="timeupdate" 
          @loadedmetadata="loadedmetadata" 
          ref="music"></audio>
        </div>
      </div>
      <p class="comment-text">共{{dataContent.comment_num}}条评论</p>
      <div class="page-boxTwo" v-if="commentList.length!=0">
        <div class="publisher" 
        v-for="(item,index) in commentList"
        :key="index">
          <div class="publisher-left">
            <div><img :src="item.headImg" alt=""></div>
          </div>
          <div class="publisher-right">
            <div>
              <div class="text-one">
                <p>
                  <span>{{item.nickname}}</span>
                  <span class="right" v-if="item.master==1">楼主</span>
                </p>
                <a>{{item.create_time}}</a>
              </div>
              <p class="text-two">{{item.content}}</p>
            </div>
            <div class="reply-box" v-if="item.appoint_content">
              <a>{{item.to_nickname}}</a>
              <div>{{item.appoint_content}}</div>
            </div>
          </div>
        </div>     
      </div>
      <div class="notYet" v-else>暂无评论</div>
      <div class="more" @click="openApp">查看更多</div>
    </div>


    

  </div>
</template>
<script>
import Header from '../components/head.vue'
import gteApi from '@/api/api'
import Cache from '@/utils/cache'
// 将整数转换成 时：分：秒的格式
function realFormatSecond(second) {
  var secondType = typeof second;

  if (secondType === "number" || secondType === "string") {
    second = parseInt(second);

    var hours = Math.floor(second / 3600);
    second = second - hours * 3600;
    var mimute = Math.floor(second / 60);
    second = second - mimute * 60;

    return (
      hours + ":" + ("0" + mimute).slice(-2) + ":" + ("0" + second).slice(-2)
    );
  } else {
    return "0:00:00";
  }
}
export default {
  components:{Header},
  data() {
    return {
      commentList:[],
      dataContent: {},
      onOff: false, // 控制播放暂停按钮
      audio:0, // 音频播放的位置和音频的时间
      currentTime : '00:00', // 当前播放位置
      endTime: '00:00', // 时间总长度
      maxTime: 0, // van-slider的最大值
    };
  },
  watch:{
    currentSong() {  //监听正在播放的歌曲改变
        this.$nextTick(() => {
            this.$refs.audio.play();
            console.log(this.$refs.audio.duration); //此时duration为NaN
        })
    }
  },
  filters: {
    // 将整数转化成时分秒
    formatSecond(second = 0) {
      return realFormatSecond(second);
    },
  },
  mounted(){
    let _this=this
    var ttsAudio = document.getElementById('music');//获取audio对象
    ttsAudio.addEventListener("canplay", function(){//设置监听，点击时获取时长
    _this.endTime=_this.timeToMinute(ttsAudio.duration) 
    })
    // this.endTime = formatSeconds(this.$refs.music.duration)
    // eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJzb2wiLCJleHAiOjE2MzE1MjI2OTEsImF1ZCI6ImFkbWluIiwibmJmIjoxNjI2MzM4NjkxLCJpYXQiOjE2MjYzMzg2OTEsInd4X3VpZCI6MTAwNjF9.yC5RM5CoCxKJ40Di6xxjMVGuZ5wI1gl-1wXgS5hAMjM
    Cache.setToken('eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJzb2wiLCJleHAiOjE2MzMwNjQ5NjcsImF1ZCI6ImFkbWluIiwibmJmIjoxNjI3ODgwOTY3LCJpYXQiOjE2Mjc4ODA5NjcsInd4X3VpZCI6MTAxNDB9.1Z5eIeGNYbmBBYsR9keJHDGwmIWh8CUAIiJfKTa4ClQ') 
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
        dynamic_id:'157'
      }
      gteApi.shareChar(data).then((res)=>{
        if(res.code==1){
          this.dataContent=res.data
          this.commentList=res.data.comment
        }else{
          this.$router.push({
            path: '/fail'
          })
          
        }
      })
    },
    //秒转时分秒换算
    timeToMinute(times){
       var t;
        if(times > -1){
            var hour = Math.floor(times/3600);
            var min = Math.floor(times/60) % 60;
            var sec = times % 60;
            if(hour < 10) {
                t = '0'+ hour + ":";
            } else {
                t = hour + ":";
            }
 
            if(min < 10){t += "0";}
            t += min + ":";
            if(sec < 10){t += "0";}
            t += sec.toFixed(2);
        }
        t=t.substring(0,t.length-3);
        return t;
    },
    // 暂停
    playClick() {
      this.$refs.music.pause()
      this.onOff = false
    },
    // 播放
    stopClick() {
      // this.endTime = formatSeconds(this.$refs.music.duration)
      this.$refs.music.play()
      this.onOff = true
    },
    // 音频实时播放信息
    timeupdate(e) {
      let min = '0' + parseInt(e.target.currentTime / 60)
      let sec = parseInt(e.target.currentTime) % 60
      if(sec < 10) {
        sec = "0" + sec
      }
      if(this.onOff) {
        this.currentTime  = min + ':' + sec
        this.audio = e.target.currentTime
      }
      // 如果当前时间等于总时间按钮变成停止状态
      if(e.target.currentTime === this.$refs.music.duration) {
        this.onOff = false
      }
    },
    // 获取音频信息
    loadedmetadata(e) {
      this.maxTime = e.target.duration
    },
    // 拖拽开始
    dragStart() {
      this.onOff = false
    },
    // 改变位置
    onChange(val) {
      this.onOff = false
      this.$refs.music.currentTime = val
      this.$refs.music.play()
    },
    // 拖拽结束
    dragEnd() {
      this.onOff = true
    }
  },
};
</script>
<style scoped lang="scss" src="./assets/index.scss" />
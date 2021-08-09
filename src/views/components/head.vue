<template>

      <div class="head-box">
        <div class="head-left">
          <img
              class="pic1"
              referrerpolicy="no-referrer"
              src="./assets/img/SketchPng9e6c48a8f83a1801d0721b82cc48648c5e8be575dd753e69e0ec5cf1963c81f3.png"
            />
            <div class="text">
              <span class="word4">桃壳</span>
              <span class="info3">跟随声音找到你~</span>
            </div>
        </div>
        <a class="head-right" @click="openApp"><span class="info4">立即打开</span></a>
        
    </div>
</template>
<script>
export default {
  data() {
    return {
      constants: {}
    };
  },
  methods: {
    openApp() {
      var userAgent = navigator.userAgent ;
      var url="",downUrl="";
      if(userAgent.indexOf("Android")>-1){
          url='XXXXX';//安卓版App地址，由安卓同事提供
          downUrl="XXXXXXXXX"; //安卓版App下载地址，由安卓同事提供
      }else{
          url='XXXXXX://';//IOS版App地址，由IOS同事提供
          downUrl="https://apps.apple.com/cn/app/id1572820769"; //IOS版App下载地址，由IOS同事提供
      }
      window.location.href = url;
      setTimeout(function(){
          window.location.href = downUrl;
      },2500)
    }
  }
};
</script>
<style scoped lang="scss" src="./assets/index.scss" />
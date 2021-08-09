<template>
  <div class="page joinInPage flex-col">
    <div class="joinIn-box">
        <div class="joinIn">
            <span class="joinIn-left">申请区域</span>
            <p class="joinIn-right" @click="SelectAddress">
                <span v-if="!submitData.value" class="Unselected">请选择地址</span>
                <span v-else class="Selected">{{submitData.value}}</span>  
            </p>
        </div> 
        <div class="joinIn">
            <span class="joinIn-left">联系人</span>
            <p class="joinIn-right">
                <el-input v-model="submitData.input" placeholder="请填写您的姓名"></el-input>
            </p>
        </div> 
        <div class="joinIn">
            <span class="joinIn-left">职业</span>
            <p class="joinIn-right">
                <el-input v-model="submitData.input" placeholder="请填写职业技能"></el-input>
            </p>
        </div> 
        <div class="joinIn">
            <span class="joinIn-left">联系电话</span>
            <p class="joinIn-right" style="margin-right: 85px;">
                <el-input v-model="submitData.phone"
                placeholder="请输入您的手机号"
                @blur="phoneup"></el-input>
            </p>
            <span class="sendOut" v-if="isShow" @click="sendCode">发送验证码</span>
            <span class="sendOut time" v-else>倒计时{{times}}</span>
        </div> 
        <div class="joinIn">
            <span class="joinIn-left">验证码</span>
            <p class="joinIn-right">
                <el-input v-model="submitData.code" placeholder="请输入验证码"></el-input>
            </p>
        </div> 
    </div>
    <div class="footer">
        <div class="footer-one" @click="submitApply">申请成为合伙人</div>
        <p>填写信息，我们会及时联系您</p>
    </div>
     
    <!-- 地址选择 -->
    <van-popup v-model="showArea"
               position="bottom">
      <van-area :area-list="areaList"
                @confirm="site"
                @cancel="showArea = false" />
    </van-popup>
    <van-popup v-model="successPopup"
        position="center"
        style="width:80%;">
        <div class="successPopup">
          <img class="close" @click="close" src="../../assets/img/tjgb.png" alt="">
          <img class="Tips-one" src="../../assets/img/tjcg.png" alt="">
          <p>您的申请已发送成功!</p>
        </div>
    </van-popup>
  </div>
</template>
<script>
import area from '@/utils/area'
import gteApi from '@/api/api'
export default {
  components:{},
  data() {
    return {
      successPopup:false,//成功提示
      times:5,
      isShow:true,
      showArea:false,//地址弹窗
      submitData:{
        phone:'',
      },
      areaList:area
    };
  },
  mounted(){
    this.getData()
  },
  methods: {
    // 关闭
    close(){
      this.successPopup = false
    },
    // 发送验证码
    sendCode(){  
      if (!this.submitData.phone) {
        this.$toast('请输入手机号码')
      } else {
        this.timer()
      }
    },
    // 倒计时
    timer() {
      if (this.times>0) {
        this.isShow=false;
        this.times--;
        setTimeout(this.timer, 1000);
      } else{
        this.times=5;
        this.isShow=true;
      }
    },
    // 提交申请
    submitApply(){
      this.successPopup = true
      return
      if(!this.submitData.value){
        this.$toast('请选择申请区域')
      }
      if(!this.submitData.input){
        this.$toast('请输入申请人')
      }
      if(!this.submitData.input){
        this.$toast('请输入职业技能')
      }
      if(!this.submitData.phone){
        this.$toast('请输入手机号码')
        return
      }
      if(!this.submitData.code){
        this.$toast('请输入验证码')
      }
    },
    // 选择区域弹窗
    SelectAddress(){
        this.showArea = true
    },
    // 确认选择地址
    site(values) {
      this.submitData.value = values
        .filter((item) => !!item)
        .map((item) => item.name)
        .join('/')
      this.showArea = false
    },
    // 打开app
    openApp(){

    },
    // 获取详情
    getData(){
      
    },
    // 电话校验
    phoneup() {
      if (!(/^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/.test(this.submitData.phone))) {
        this.$toast('手机号码有误，请重填')
        this.submitData.phone = ''
        return
      } else {

      }
    }
  }
};
</script>
<style scoped lang="scss" src="./assets/index.scss" />
export const formatSeconds = (value) => {
    var secondTime = parseInt(value); // 秒
    var minuteTime = 0; // 分
    // var hourTime = 0;// 小时
    if (secondTime > 60) { //如果秒数大于60，将秒数转换成整数
        //获取分钟，除以60取整数，得到整数分钟
        minuteTime = parseInt(secondTime / 60);
        //获取秒数，秒数取佘，得到整数秒数
        secondTime = parseInt(secondTime % 60);
    }
   
    var result = "" + parseInt(secondTime)
   
    if (minuteTime > 0) {
        result = "" + parseInt(minuteTime) + ":" + result;
    }
   
    return result;
  
}
export default formatSeconds
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0ae79e98"],{"0db0":function(t,e,a){"use strict";a("7676")},"4ec3":function(t,e,a){"use strict";a("d3b7");var n=a("bc3a"),s=a.n(n),i=a("6b43"),r=a("d399"),o=a("f564"),c=a("a18c"),u=s.a.create({baseURL:"",crossDomain:!0,withCredentials:!0,timeout:5e4,retry:2,retryDelay:1e3});u.interceptors.request.use((function(t){var e=i["a"].getToken();return e&&(t.headers["token"]=e),t.headers["client_id"]="webApp",t.headers["client_secret"]="webApp",t.headers.isUpload,t}),(function(t){return Promise.reject(t)})),u.interceptors.response.use((function(t){if(200===t.status){var e=t.data;return 1===(null===e||void 0===e?void 0:e.code)?Promise.resolve(e):(e.msg&&r["a"].fail(e.msg),Promise.reject((null===e||void 0===e?void 0:e.msg)||""))}var a=new Error(t.statusText);return Object(o["a"])({message:"请求失败，请稍后重试",type:"danger",duration:2e3}),Promise.reject(a)}),(function(t){if("ECONNABORTED"===t.code&&-1!==t.message.indexOf("timeout")){var e=t.config;if(!e||!e.retry)return Promise.reject(t);if(e.__retryCount=e.__retryCount||1,e.__retryCount>=e.retry)return Promise.reject(t);e.__retryCount+=1;var a=new Promise((function(t){setTimeout((function(){t()}),e.retryDelay||1)}));return a.then((function(){return $axios(e)}))}if(t&&t.response)return 401===t.response.status?(Object(o["a"])({message:"权限校验失败，请重新登录后重试",type:"danger",duration:2e3}),c["a"].push({name:"login"})):Object(o["a"])({message:"请求失败，请稍后重试",type:"danger",duration:2e3}),Promise.reject(t.response.data)}));var d=u,l={shareChar:function(t){return d({url:"v1/chIm/share/shareChar",headers:{client_id:"webApp",client_secret:"webApp"},method:"post",data:t})},shareMakeRoom:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return d({url:"v1/chIm/share/shareMakeRoom",headers:{client_id:"webApp",client_secret:"webApp"},method:"post",data:t})},shareMember:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return d({url:"v1/chIm/share/shareMember",headers:{client_id:"webApp",client_secret:"webApp"},method:"post",data:t})},shareRoom:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return d({url:"v1/chIm/share/shareRoom",headers:{client_id:"webApp",client_secret:"webApp"},method:"post",data:t})},roomContent:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return d({url:"v1/chIm/share/roomContent",headers:{client_id:"webApp",client_secret:"webApp"},method:"post",data:t})}};e["a"]=l},"6b43":function(t,e,a){"use strict";var n=a("a78e"),s=a.n(n),i="access_token",r="type",o="auditStatus",c={setStatus:function(t){void 0!==t&&s.a.set(o,t)},getStatus:function(){return s.a.get(o)},setType:function(t){void 0!==t&&s.a.set(r,t)},getType:function(){return s.a.get(r)},setToken:function(t){void 0!==t&&s.a.set(i,t)},getToken:function(){return s.a.get(i)},clearToken:function(){s.a.remove(i)},setCookie:function(t,e){s.a.set(t,e)},getCookie:function(t){return s.a.get(t)}};e["a"]=c},7328:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page flex-col"},[a("Header"),a("div",{staticClass:"page-box"},[a("div",{staticClass:"page-boxOne"},[a("p",[t._v(t._s(t.dataContent.create_time))]),a("div",{staticClass:"img0"},[a("div",[a("img",{attrs:{src:t.dataContent.room_head,alt:""}})])]),a("div",{staticClass:"title0"},[t._v("# "+t._s(t.dataContent.room_name))]),a("div",{staticClass:"label-text"},[a("span",[t._v(t._s(t.dataContent.label_name1))]),t.dataContent.label_name2?a("span",{staticClass:"right"},[t._v(t._s(t.dataContent.label_name2))]):t._e()]),a("div",{staticClass:"progress"},[a("van-slider",{ref:"slider",attrs:{min:0,max:t.maxTime,id:"slider"},on:{change:t.onChange,"drag-start":t.dragStart,"drag-end":t.dragEnd},scopedSlots:t._u([{key:"button",fn:function(){return[a("div",{staticClass:"custom-button"})]},proxy:!0}]),model:{value:t.audio,callback:function(e){t.audio=e},expression:"audio"}}),a("div",{staticClass:"audio-time"},[a("span",[t._v(t._s(t.currentTime))]),a("span",[t._v(t._s(t.endTime))])]),a("div",{staticClass:"audio-img"},[t.onOff?a("div",{staticClass:"open-img",on:{click:t.playClick}}):a("div",{staticClass:"off-img",on:{click:t.stopClick}})]),a("audio",{ref:"music",attrs:{src:t.dataContent.audio_file,id:"music"},on:{timeupdate:t.timeupdate,loadedmetadata:t.loadedmetadata}})],1)]),a("p",{staticClass:"comment-text"},[t._v("共"+t._s(t.dataContent.comment_num)+"条评论")]),0!=t.commentList.length?a("div",{staticClass:"page-boxTwo"},t._l(t.commentList,(function(e,n){return a("div",{key:n,staticClass:"publisher"},[a("div",{staticClass:"publisher-left"},[a("div",[a("img",{attrs:{src:e.headImg,alt:""}})])]),a("div",{staticClass:"publisher-right"},[a("div",[a("div",{staticClass:"text-one"},[a("p",[a("span",[t._v(t._s(e.nickname))]),1==e.master?a("span",{staticClass:"right"},[t._v("楼主")]):t._e()]),a("a",[t._v(t._s(e.create_time))])]),a("p",{staticClass:"text-two"},[t._v(t._s(e.content))])]),e.appoint_content?a("div",{staticClass:"reply-box"},[a("a",[t._v(t._s(e.to_nickname))]),a("div",[t._v(t._s(e.appoint_content))])]):t._e()])])})),0):a("div",{staticClass:"notYet"},[t._v("暂无评论")]),a("div",{staticClass:"more",on:{click:t.openApp}},[t._v("查看更多")])])],1)},s=[],i=a("53ca"),r=(a("fb6a"),a("b680"),a("da4d")),o=a("4ec3"),c=a("6b43");function u(t){var e=Object(i["a"])(t);if("number"===e||"string"===e){t=parseInt(t);var a=Math.floor(t/3600);t-=3600*a;var n=Math.floor(t/60);return t-=60*n,a+":"+("0"+n).slice(-2)+":"+("0"+t).slice(-2)}return"0:00:00"}var d={components:{Header:r["a"]},data:function(){return{commentList:[],dataContent:{},onOff:!1,audio:0,currentTime:"00:00",endTime:"00:00",maxTime:0}},watch:{currentSong:function(){var t=this;this.$nextTick((function(){t.$refs.audio.play()}))}},filters:{formatSecond:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return u(t)}},mounted:function(){var t=this,e=document.getElementById("music");e.addEventListener("canplay",(function(){t.endTime=t.timeToMinute(e.duration)})),c["a"].setToken("eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJzb2wiLCJleHAiOjE2MzMwNjQ5NjcsImF1ZCI6ImFkbWluIiwibmJmIjoxNjI3ODgwOTY3LCJpYXQiOjE2Mjc4ODA5NjcsInd4X3VpZCI6MTAxNDB9.1Z5eIeGNYbmBBYsR9keJHDGwmIWh8CUAIiJfKTa4ClQ"),this.getData()},methods:{openApp:function(){},getData:function(){var t=this,e={userId:"10061",dynamic_id:"157"};o["a"].shareChar(e).then((function(e){1==e.code?(t.dataContent=e.data,t.commentList=e.data.comment):t.$router.push({path:"/fail"})}))},timeToMinute:function(t){var e;if(t>-1){var a=Math.floor(t/3600),n=Math.floor(t/60)%60,s=t%60;e=a<10?"0"+a+":":a+":",n<10&&(e+="0"),e+=n+":",s<10&&(e+="0"),e+=s.toFixed(2)}return e=e.substring(0,e.length-3),e},playClick:function(){this.$refs.music.pause(),this.onOff=!1},stopClick:function(){this.$refs.music.play(),this.onOff=!0},timeupdate:function(t){var e="0"+parseInt(t.target.currentTime/60),a=parseInt(t.target.currentTime)%60;a<10&&(a="0"+a),this.onOff&&(this.currentTime=e+":"+a,this.audio=t.target.currentTime),t.target.currentTime===this.$refs.music.duration&&(this.onOff=!1)},loadedmetadata:function(t){this.maxTime=t.target.duration},dragStart:function(){this.onOff=!1},onChange:function(t){this.onOff=!1,this.$refs.music.currentTime=t,this.$refs.music.play()},dragEnd:function(){this.onOff=!0}}},l=d,p=(a("0db0"),a("2877")),m=Object(p["a"])(l,n,s,!1,null,"f6dbd080",null);e["default"]=m.exports},7676:function(t,e,a){},"8ee5":function(t,e){t.exports="data:image/png;base64,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"},"97fd":function(t,e,a){},da4d:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"head-box"},[t._m(0),a("a",{staticClass:"head-right",on:{click:t.openApp}},[a("span",{staticClass:"info4"},[t._v("立即打开")])])])},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"head-left"},[n("img",{staticClass:"pic1",attrs:{referrerpolicy:"no-referrer",src:a("8ee5")}}),n("div",{staticClass:"text"},[n("span",{staticClass:"word4"},[t._v("桃壳")]),n("span",{staticClass:"info3"},[t._v("跟随声音找到你~")])])])}],i={data:function(){return{constants:{}}},methods:{openApp:function(){var t=navigator.userAgent,e="",a="";t.indexOf("Android")>-1?(e="XXXXX",a="XXXXXXXXX"):(e="XXXXXX://",a="https://apps.apple.com/cn/app/id1572820769"),window.location.href=e,setTimeout((function(){window.location.href=a}),2500)}}},r=i,o=(a("f5c8"),a("2877")),c=Object(o["a"])(r,n,s,!1,null,"1ba5ec23",null);e["a"]=c.exports},f5c8:function(t,e,a){"use strict";a("97fd")}}]);
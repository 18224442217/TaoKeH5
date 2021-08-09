import Request from '@/utils/request'

const Service = {
  // 获取语聊圈分享信息
  shareChar(data) {
    return Request({
      url: 'v1/chIm/share/shareChar',
      headers: {
        client_id: 'webApp',
        client_secret: 'webApp'
      },
      method: 'post',
      data
    })
  },
  // 获取预约房间分享信息
  shareMakeRoom(data = {}) {
    return Request({
      url: 'v1/chIm/share/shareMakeRoom',
      headers: {
        client_id: 'webApp',
        client_secret: 'webApp'
      },
      method: 'post',
      data
    })
  },
  // 获取分享个人信息
  shareMember(data = {}) {
    return Request({
      url: 'v1/chIm/share/shareMember',
      headers: {
        client_id: 'webApp',
        client_secret: 'webApp'
      },
      method: 'post',
      data
    })
  },
  // 获取分享付费房间信息
  shareRoom(data = {}) {
    return Request({
      url: 'v1/chIm/share/shareRoom',
      headers: {
        client_id: 'webApp',
        client_secret: 'webApp'
      },
      method: 'post',
      data
    })
  },
  // 获取分享房间内容
  roomContent(data = {}) {
    return Request({
      url: 'v1/chIm/share/roomContent',
      headers: {
        client_id: 'webApp',
        client_secret: 'webApp'
      },
      method: 'post',
      data
    })
  }
}

export default Service

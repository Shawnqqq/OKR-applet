import API from '../../global/request/api.js';

Page({
  data: {

  },
  onLoad: function (options) {
    
  },
  handleLogin(){
    const app = getApp()
    //查看缓存
    let storageUserInfo = wx.getStorageSync('userInfo');
    if (storageUserInfo){
      app.globalData.userInfo = storageUserInfo;
      wx.switchTab({ url: '/pages/todo/todo' })
      return
    }
    wx.getUserInfo({
      success: function (res) {
        let userInfo = res.userInfo
        let nickName = userInfo.nickName
        let avatarUrl = userInfo.avatarUrl
        console.log(avatarUrl)
        wx.login({
          success(res){
            if(res.code){
              wx.request({
                url: API.login,
                data:{
                  code:res.code,
                  name:nickName
                },
                success:(res) =>{
                  if(res.data.message==="登录成功"){
                    let info = res.data.userInfo;
                    wx.setStorageSync('userInfo', info);
                    app.globalData.userInfo = info;
                    wx.switchTab({url:'/pages/todo/todo'})
                  }
                }
              })
            }else{
              console.log('登录失败！' + res.errMsg)
            }
          }
        })
      }
    })
  }
})
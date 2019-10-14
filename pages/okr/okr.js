import API from '../../global/request/api.js';
const app = getApp()

Page({
  data:{
    dataNull:false,
    user_id: app.globalData.userInfo
  },
  handlesheet(){
    wx.showActionSheet({
      itemList: ['查看', '编辑', '完成','删除'],
      success(res) {
        console.log(res.tapIndex)
      }
    })
  },

})
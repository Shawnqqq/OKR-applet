import API from '../../global/request/api.js';
const app = getApp()

Page({
  data: {
    honorData:[]
  },
  onLoad: function (options){
    wx.setNavigationBarTitle({
      title:"Honor"
    })
  },
  onShow:function(){
    let id = app.globalData.userInfo.id;
    let that = this
    wx.request({
      url: API.honor,
      data: {
        user_id: id
      },
      success(res) {
        that.setData({
          honorData: res.data.data
        })
      }
    })
  },
  handleSheet(){
    wx.showActionSheet({
      itemList: ['删除'],
      success(res) {
        console.log(res.tapIndex)
      }
    })
  }
})
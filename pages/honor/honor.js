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
  handleSheet(e){
    let that = this
    wx.showActionSheet({
      itemList: ['删除'],
      success(res) {
        switch (res.tapIndex) {
          case 0:
            that.handleDeleted(e.currentTarget.dataset.id)
            break;
        }
      }
    })
  },
  handleDeleted(id){
    let that = this
    wx.request({
      url: API.todo + '/' + id,
      method: 'DELETE',
      success(res) {
        if (res.data.message = "删除成功") {
          that.onShow();
        }
      }
    })
  }
})
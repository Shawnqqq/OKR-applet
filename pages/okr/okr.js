import API from '../../global/request/api.js';
const app = getApp()

Page({
  data:{
    okrData:[],
  },
  handlesheet(e){
    let that = this
    wx.showActionSheet({
      itemList: ['查看', '编辑', '完成','删除'],
      success(res) {
        switch (res.tapIndex) {
          case 0:
            console.log('查看')
            break;
          case 1:
            wx.navigateTo({
              url:`../okr_edit/okr_edit?id=${e.currentTarget.dataset.id}`
            })
            break;
          case 2:
            that.handleComplete(e.currentTarget.dataset.id)
            break;
          case 3:
            that.handleDeleted(e.currentTarget.dataset.id)
            break;
        }
      }
    })
  },
  onShow(){
    let id = app.globalData.userInfo.id;
    let that = this;
    wx.request({
      url: API.okr,
      data: {
        user_id: id
      },
      success(res) {
        that.setData({
          okrData: res.data.data
        })
      }
    })
  },
  handleComplete(id){
    let that = this
    wx.request({
      url: API.okr + '/' + id,
      method: 'PUT',
      success(res) {
        if (res.data.message = "修改成功") {
          that.onShow();
        }
      }
    })
  },
  handleDeleted(id){
    let that = this
    wx.request({
      url: API.okr + '/' + id,
      method: 'DELETE',
      success(res) {
        if(res.data.message = "删除成功"){
          that.onShow();
        }
      }
    })
  }
})
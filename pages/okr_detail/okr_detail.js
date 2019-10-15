import API from '../../global/request/api.js';
const app = getApp()

Page({
  data:{
    obId:'',
    obData:'',
    krData:[]
  },
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title:"OKR 查看"
    })
    this.setData({
      obId: options.id
    })
  },
  onShow(){
    let id = this.data.obId;
    let that = this;
    wx.request({
      url: API.okrTodo,
      data: {
        id: id
      },
      success(res) {
        that.setData({
          obData: res.data.obData,
          krData: res.data.krData
        })
      }
    })
  },
  handleSheet(e){
    let that = this
    wx.showActionSheet({
      itemList: ['标记成已完成', '删除'],
      success(res){
        switch (res.tapIndex){
          case 0:
          that.handleComplete(e.currentTarget.dataset.id)
            break;
          case 1:
            that.handleDeleted(e.currentTarget.dataset.id)
            break;
        }
      }
    })
  },
  handleSheets(e){
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
  handleComplete(id){
    let that = this
    wx.request({
      url: API.kr + '/' + id,
      method: 'PUT',
      success(res) {
        console.log(res)
        if (res.data.message = "修改成功") {
          that.onShow();
        }
      }
    })
  },
  handleDeleted(id){
    let that = this
    wx.request({
      url: API.kr + '/' + id,
      method: 'DELETE',
      success(res) {
        if (res.data.message = "删除成功") {
          that.onShow();
        }
      }
    })
  }
})
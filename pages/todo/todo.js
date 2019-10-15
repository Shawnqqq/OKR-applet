import API from '../../global/request/api.js';
const app = getApp()

Page({
  data: {
    todoData:[],
    todoValue:''
  },
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title:"Todo"
    })
  },
  onShow:function(){
    let id = app.globalData.userInfo.id;
    let that = this;
    wx.request({
      url: API.todo,
      data: {
        user_id: id
      },
      success(res) {
        that.setData({
          todoData: res.data.data
        })
      }
    })
  },
  handleSheet:function(e){
    let that = this
    wx.showActionSheet({
      itemList:['关联','完成','删除'],
      success(res){
        switch (res.tapIndex){
          case 0:
            wx.navigateTo({
              url: `../todo_keyresult/todo_keyresult?id=${e.currentTarget.dataset.id}`
            })
            break;
          case 1:
            that.handleComplete(e.currentTarget.dataset.id)
            break;
          case 2:
            that.handleDeleted(e.currentTarget.dataset.id)
            break;
        }
      }
    })
  },
  handleInsert(e){
    let id = app.globalData.userInfo.id
    let text = e.detail.value
    let that = this
    wx.request({
      url: API.todo, 
      method: 'POST',
      data: {
        user_id: id,
        text: text
      },
      success(res) {
        if(res.data.message = "增加成功"){
          that.onShow();
          that.setData({
            todoValue:''
          })
        }
      }
    })
  },
  handleDeleted(id){
    let that = this
    wx.request({
      url: API.todo+'/'+id,
      method: 'DELETE',
      success(res) {
        if (res.data.message = "删除成功") {
          that.onShow();
        }
      }
    })
  },
  handleComplete(id){
    let that = this
    wx.request({
      url: API.todo + '/' + id,
      method: 'PUT',
      success(res) {
        if (res.data.message = "修改成功"){
          that.onShow();
        }
      }
    })
  }
})
import API from '../../global/request/api.js';
const app = getApp()

Page({
  data:{
    todoId:'',
    okrData:[]
  },
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: "Todo关联"
    })
    this.setData({
      todoId: options.id
    })
  },
  onShow(){
    let id = this.data.todoId;
    let that = this
    wx.request({
      url: API.todoKeyresult,
      data: {
        id: id
      },
      success(res) {
        that.setData({
          okrData:res.data.data
        })
      }
    })
  },
  handleBind(e){
    let todoId = this.data.todoId
    let krId = e.currentTarget.dataset.id;
    let that = this
    wx.showModal({
      title: '提示',
      content: '确定要关联这条KR吗',
      success(res){
        if(res.confirm){
          wx.request({
            url: API.todoKeyresult,
            method: 'POST',
            data: {
              todoId:todoId,
              krId:krId
            },
            success(res) {
              if(res.data.message === '绑定成功'){
                that.onShow()
              }
            }
          })
        }
      }
    })
  },
  handleOff(e){
    let todoId = this.data.todoId
    let krId = e.currentTarget.dataset.id;
    let that = this
    wx.showModal({
      title: '提示',
      content: '确定要取消关联这条KR吗',
      success(res) {
        if (res.confirm) {
          wx.request({
            url: API.todoKeyresult,
            method: 'DELETE',
            data: {
              todoId: todoId,
              krId: krId
            },
            success(res) {
              if (res.data.message === '取关成功') {
                that.onShow()
              }
            }
          })
        }
      }
    })
  }
})
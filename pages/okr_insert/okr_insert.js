const app = getApp()
import API from '../../global/request/api.js';

Page({
  data:{
    objValue:'',
    krValue:['']
  },
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title:"OKR 添加"
    })
  },
  handleAdd(){
    let value = this.data.krValue;
    value.push('');
    this.setData({
      krValue : value
    })
  },
  handleReduce(e){
    let value = this.data.krValue;
    let index = e.target.dataset.index;
    value.splice(index,1);
    this.setData({
      krValue : value
    })
  },
  // 失焦 更新事件
  handleUpdate(e){
    let value = this.data.krValue;
    let index= e.target.dataset.index;
    value[index]=e.detail.value
    this.setData({
      krValue:value
    })
  },
  // 失焦 更新objective Value
  handleblur(e){
    let value = this.data.objValue;
    value = e.detail.value
    this.setData({
      objValue:value
    })
  },
  handleinsert(){
    let objective = this.data.objValue;
    let keyresult = this.data.krValue;
    let user_id = app.globalData.userInfo.id;
    let that = this;
    wx.request({
      url: API.okr,
      method: 'POST',
      data: {
        user_id: user_id,
        objective: objective,
        keyresult: keyresult
      },
      success(res) {
        if (res.data.message = "增加成功") {
          wx.navigateBack({
            delta: 1
          })
        }
      }
    })
  }
})
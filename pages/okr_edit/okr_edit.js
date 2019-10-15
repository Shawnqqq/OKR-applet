import API from '../../global/request/api.js';
const app = getApp()


Page({
  data:{
    obId:'',
    objValue:'',
    krValue:[''],
    deletedId:[]
  },
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title:"OKR 修改"
    })
    this.setData({
      obId:options.id
    })
  },
  onShow(){
    let id = this.data.obId;
    let that = this;
    wx.request({
      url: API.okrSingle,
      data: {
        id: id
      },
      success(res) {
        that.setData({
          objValue:res.data.data[0].obText,
          krValue:res.data.data
        })
      }
    })
  },
  handleAdd(){
    let value = this.data.krValue;
    value.push({id:false,krText:''});
    this.setData({
      krValue : value
    })
  },
  handleReduce(e){
    let value = this.data.krValue;
    let deleted = this.data.deletedId;
    let index = e.target.dataset.index;
    let id = e.target.dataset.id;
    id ? deleted.push(id) : false;
    value.splice(index,1);
    this.setData({
      krValue : value,
      deletedId: deleted
    })
  },
  // 失焦 更新事件
  handleUpdate(e){
    let value = this.data.krValue;
    let index= e.target.dataset.index;
    value[index].krText=e.detail.value
    this.setData({
      krValue:value
    })
  },
  // 失焦 更新objective Value
  handleblur(e) {
    let value = this.data.objValue;
    value = e.detail.value;
    this.setData({
      objValue: value
    })
  },
  handleEdit(){
    let id = this.data.obId;
    let that = this;
    wx.request({
      url: API.okrSingle +'/'+ id,
      method: 'PUT',
      data:{
        objectiveText: that.data.objValue,
        krData: that.data.krValue,
        deleted: that.data.deletedId
      },
      success(res) {
        if (res.data.message = "修改成功") {
          wx.navigateBack({
            delta: 1
          })
        }
      }
    })
  }
})
Page({
  data:{
    objValue:'',
    krValue:['']
  },
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title:"OKR 修改"
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
  }
})
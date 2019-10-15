Page({
  data:{
    dataNull:false,
    complete:true,
    todoId:''
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
    // wx.request({
    //   url: API.okrSingle,
    //   data: {
    //     id: id
    //   },
    //   success(res) {
    //     that.setData({
    //       objValue: res.data.data[0].obText,
    //       krValue: res.data.data
    //     })
    //   }
    // })
  }
})
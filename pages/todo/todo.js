// pages/todo/todo.js
Page({
  data: {

  },
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title:"Todo"
    })
  },
  handleSheet:function(){
    wx.showActionSheet({
      itemList:['关联','完成','删除'],
      success(res){
        console.log(res.tapIndex)
      }
    })
  }
})
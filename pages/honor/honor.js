// pages/todo/todo.js
Page({
  data: {
    dataNull:false
  },
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title:"Honor"
    })
  },
  handleSheet(){
    wx.showActionSheet({
      itemList: ['删除'],
      success(res) {
        console.log(res.tapIndex)
      }
    })
  }
})
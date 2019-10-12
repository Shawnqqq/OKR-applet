Page({
  data:{
    dataNull:false
  },
  handlesheet(){
    wx.showActionSheet({
      itemList: ['查看', '编辑', '完成','删除'],
      success(res) {
        console.log(res.tapIndex)
      }
    })
  }
})
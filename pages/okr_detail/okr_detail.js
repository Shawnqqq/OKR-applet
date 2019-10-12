Page({
  data:{
    objective_complete:true,
    krList:[{
      title:'搭建数据库',
      complete:true,
      todolist:[
        { title:'创建用户表', complete:true},
        { title:'创建todo表', complete:false}
      ]
    },{
      title: '构造业务逻辑',
      complete: false,
      todolist: [
        { title: '连接keyresult', complete: true },
        { title: '连接keyresult2222', complete: false },
        { title: '连接keyresult3333', complete: false }
      ]
    }]
  },
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title:"OKR 查看"
    })
  },
  handleSheet(){
    wx.showActionSheet({
      itemList: ['标记成已完成', '删除'],
      success(res){
        console.log(res.tapIndex)
      }
    })
  }
})
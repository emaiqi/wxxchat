//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    displaynone:false,
    displaytrue:true,
    userInfo: {},
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
  	//调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
      that.update()
    })
  },
  onReady: function (e) {

    //使用wx.createContext获取绘图上下文context
    var context = wx.createContext()

   
    
    context.setStrokeStyle("#040463")
    context.setShadow(3,3,90,"#040463")
    context.lineWidth=3
    context.moveTo(300,0)
    context.lineTo(300,72)  
    context.stroke()
    

   
    context.setFillStyle("#4474BB")
    context.rect(0, 0, 375, 72)
    context.fill()
    context.stroke()

   
      

    //调用wx.drawCanvas，通过canvasId指定在哪张画布上绘制，通过actions指定绘制行为
    wx.drawCanvas({
      canvasId: 'bottomCanvas',
      actions: context.getActions() //获取绘图动作数组
    })
  }
})

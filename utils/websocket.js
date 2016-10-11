//var url = 'wss://ddz.blingstorm.com.cn:8088';

function connect (user, func) {

  wx.connectSocket({
    url:'wss://ddz.blingstorm.com.cn:8088/ws'
    //+ '?username='+user.nickName
  });


  wx.onSocketOpen(function(res){
  console.log('WebSocket连接已打开！')
})

wx.onSocketError(function(res){
  console.log('WebSocket连接打开失败，请检查！')
})

  wx.onSocketMessage(func);
}


function send (msg) {
  wx.sendSocketMessage({data:msg});
}
module.exports = {
  connect: connect,
  send : send
}

module.exports = function(webot) {
  /*
  var reg_help = /^(help|\?|？)/i;
  webot.set({
    name: 'hello',
    pattern: function(info) {
      return info.is('event') && info.param.event === 'subscribe' || reg_help.test(info.text);
    },
    handler: function(info) {
      var reply = {
        title: '感谢您订阅 <色彩明妆--大兴店> 微信商城',
        pic: 'https://raw.github.com/node-webot/webot-example/master/qrcode.jpg',
        url: 'https://github.com/node-webot/webot-example',
        description: [
          '你可以试试以下指令:',
            'cj: 抽取幸运礼品, 每天都可以抽取一次'
        ].join('\n')
      };
      return reply;
    }
  });
  */
  webot.loads('dialogs');
};

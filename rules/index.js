module.exports = exports = function(webot) {
  var reg_help = /^(help|\?|？)/i;
  webot.set({
    name: 'hello',
    pattern: function(info) {
      return info.is('event') && info.param.event === 'subscribe' || reg_help.test(info.text);
    },
    handler: function(info) {
      var reply = {
        title: '感谢你收听webot机器人',
        pic: 'https://raw.github.com/node-webot/webot-example/master/qrcode.jpg',
        url: 'https://github.com/node-webot/webot-example',
        description: [
          '你可以试试以下指令:',
            'game: 汪汪'
        ].join('\n')
      };
      return reply;
    }
  });

};

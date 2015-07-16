var express = require('express');
var webot = require('weixin-robot');

var log = require('debug')('webot-demo:log');
var verbose = require('debug')('webot-demo:verbose');

var app = express();

var wx_token = process.env.WX_TOKEN || 'test';

webot.watch(app, { token: wx_token, path: '/wechat' })

var port = process.env.PORT || 3000;
app.listen(port, function() {
  log('Listen on %s', port);
});

app.enable('trust proxy.');

if (!process.env.DEBUG) {
  console.log('set env variable `DEBUG=webot-demo:*` to display debug info.');
}

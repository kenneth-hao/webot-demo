module.exports = function(webot) {

  require('js-yaml');

  webot.dialog(
    'basic.yaml', 'gags.yaml', 'greetings.js', 'love.yaml',
    'praise.yaml', 'bad.yaml', 'lonely.yaml', 'sad.yaml',
    'flirt.yaml', 'emoji.yaml', 'short.yaml'
  );

};

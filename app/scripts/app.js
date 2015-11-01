var Router = require('./router');
var ImageActions = require('./actions/imageactions');

setInterval(function () {
  ImageActions.fetchImageList();
}, 10000);

Router.start();

var Reflux = require('reflux');

var ImageActions = Reflux.createActions([
  'fetchImageList',
  'searchByTag',
  'getNextPageOfImages'
]);

module.exports = ImageActions;

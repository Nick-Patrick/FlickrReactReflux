var Reflux = require('reflux');

var ImageActions = Reflux.createActions([
  'fetchImageList',
  'searchByTag'
]);

module.exports = ImageActions;

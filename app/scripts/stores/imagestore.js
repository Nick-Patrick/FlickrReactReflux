var Reflux = require('reflux');
var $ = require('jQuery');
var ImageActions = require('../actions/imageactions');

var ImageStore = Reflux.createStore({
  listenables: [ImageActions],
  imageList: [],
  sourceUrl: 'https://api.flickr.com/services/feeds/photos_public.gne?format=json',

  init: function () {
    this.onFetchImageList();
  },

  onSearchByTag: function (tag) {
    this.trigger(this.imageList.filter(function (image) {
      return image.tags.indexOf(tag) > -1;
    }));
  },

  onFetchImageList: function () {
    $.ajax({
      url: this.sourceUrl,
      dataType: 'jsonp',
      jsonpCallback: 'jsonFlickrFeed',
      cache: false,
      context: this,
      success: function (data) {
        this.imageList = data.items;
        console.log('fetch complete', this.imageList);
        this.trigger(this.imageList);
      }
    });
  }
});

module.exports = ImageStore;

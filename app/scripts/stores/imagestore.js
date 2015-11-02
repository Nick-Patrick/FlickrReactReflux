var Reflux = require('reflux');
var $ = require('jQuery');
var ImageActions = require('../actions/imageactions');

var ImageStore = Reflux.createStore({
  listenables: [ImageActions],
  imageList: [],
  sourceUrl: 'https://api.flickr.com/services/feeds/photos_public.gne?format=json',
  page: 0,

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
      url: this.sourceUrl + '&page=' + this.page,
      dataType: 'jsonp',
      jsonpCallback: 'jsonFlickrFeed',
      cache: false,
      context: this,
      success: function (data) {
        this.page++;
        data.items.forEach(function (item) {
          this.imageList.push(item);
        }, this);
        this.trigger(this.imageList);
      }
    });
  }
});

module.exports = ImageStore;

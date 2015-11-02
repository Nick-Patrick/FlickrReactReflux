var React = require('react');
var Reflux = require('reflux');
var $ = require('jQuery');
var ImageStore = require('../stores/imageStore');
var ImageItem = require('./imageItem');
var ImageActions = require('../actions/imageactions');

var ImageGrid = React.createClass({
  mixins: [Reflux.connect(ImageStore, 'imagestore')],
  componentDidMount: function () {
    $(window).scroll(function() {
       if($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
         ImageActions.fetchImageList();
       }
    });
  },
  render: function () {
    if (this.state.imagestore) {
      return (
        <div className="imageGrid">
          {
            this.state.imagestore
              .map(function (image) {
                return (
                  <ImageItem image={image}></ImageItem>
                );
              })
          }
        </div>
      );
    } else {
      return (<div></div>);
    }
  }
});

module.exports = ImageGrid;

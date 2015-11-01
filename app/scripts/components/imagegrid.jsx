var React = require('react');
var Reflux = require('reflux');
var ImageStore = require('../stores/imageStore');
var ImageItem = require('./imageItem');

var ImageGrid = React.createClass({
  mixins: [Reflux.connect(ImageStore, 'imagestore')],
  render: function () {
    if (this.state.imagestore) {
      return (
        <div className="imageGrid">
          { this.state.imagestore.map(function (image) {
            return (
              <ImageItem image={image}></ImageItem>
            );
          })}
        </div>
      );
    } else {
      return (<div></div>);
    }
  }
});

module.exports = ImageGrid;

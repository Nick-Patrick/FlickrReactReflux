var React = require('react');
var Reflux = require('reflux');
var ImageStore = require('../stores/imageStore');

var ImageGrid = React.createClass({
  mixins: [Reflux.connect(ImageStore, 'imagestore')],
  render: function () {
    if (this.state.imagestore) {
      return (
        <div className="imageGrid">
          { this.state.imagestore.map(function (image) {
            return (
              <div className="imageItem">
                <img src={image.media.m}></img>
                <h2>{image.title} by {image.author}</h2>
              </div>
            );
          })}
        </div>
      );
    } else {
      return (<div className="row"></div>);
    }
  }
});

module.exports = ImageGrid;

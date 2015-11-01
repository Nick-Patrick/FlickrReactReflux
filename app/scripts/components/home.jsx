var React = require('react');
var ImageGrid = require('./imagegrid');

var Home = React.createClass({

  render: function() {
    return (
      <div className="container">
        <h1>Flickr Images</h1>
        <ImageGrid></ImageGrid>
      </div>
    );
  }
});

module.exports = Home;

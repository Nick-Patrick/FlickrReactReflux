var React = require('react');
var ImageGrid = require('./imagegrid');
var SearchBox = require('./searchBox');


var Home = React.createClass({

  render: function() {
    return (
      <div className="container">
        <h1>Flickr Images</h1>
        <SearchBox></SearchBox>
        <ImageGrid></ImageGrid>
      </div>
    );
  }
});

module.exports = Home;

var React = require('react');
var Tag = require('./tags');


var ImageItem = React.createClass({
  render: function () {
    return (
      <div className="imageItem well">
        <div className="imageContainer">
          <img src={this.props.image.media.m}></img>
        </div>
        <h2 className="title">
          <a className="photoTitle" href={this.props.image.link} title={this.props.image.title}>{this.props.image.title}</a>
          <span className="author"> by {this.props.image.author}</span>
        </h2>
        <p className="description"><span className="bold">Description:</span> {this.props.image.description}</p>
        <Tag tags={this.props.image.tags}></Tag>
      </div>
    );
  }
});

module.exports = ImageItem;

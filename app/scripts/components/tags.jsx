var React = require('react');

var Tag = React.createClass({
  render: function () {
      if (this.props.tags && this.props.tags.length > 0) {
        return (
          <p><span className="bold">Tags:</span> {this.props.tags.split(' ').join(', ')}</p>
        );
      } else {
        return (
          <p>No tags</p>
        )
      }

  }
});

module.exports = Tag;

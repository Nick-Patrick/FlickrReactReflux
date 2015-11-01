var React = require('react');
var ImageActions = require('../actions/imageactions');

var SearchBox = React.createClass({

  doSearch: function () {
      var query = this.refs.searchInput.getDOMNode().value;
      ImageActions.searchByTag(query);
  },
  render: function () {
    return (
      <div className="searchBox">
        <input ref="searchInput" placeholder="Search by tag" type="text" onChange={this.doSearch}></input>
      </div>
    )
  }
});

module.exports = SearchBox;

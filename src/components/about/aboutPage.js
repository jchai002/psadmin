'use strict';

var React = require('react');

var About = React.createClass({
  render: function(){
    return (
      <div>
        <h1 className="jumbotron">About Page</h1>
        <p>about content </p>
      </div>
    );
  }
});

module.exports = About;

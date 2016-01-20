'use strict';

var React = require('react');
var Link = require('react-router').Link;

var notFound = React.createClass({
  render: function(){
    return (
      <div>
        <h1 className="jumbotron">404 Content Not Found </h1>
        <Link to='about' className="btn btn-primary btn-lg">Back To Home</Link>
      </div>
    );
  }
});

module.exports = notFound;

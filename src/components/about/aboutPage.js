'use strict';

var React = require('react');

var About = React.createClass({
  statics: {
    willTransitionTo: function(transition, params, query, callback) {
      if (!confirm('Are you sure you want to read this boring page?')){
        transition.about();
      } else {
        callback();
      }
    }
  },
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

'use strict';

var React = require('react');

var Header = React.createClass({
  render: function(){
    return (
      <nav className="navbar navbar-default">
    <div className="container-fluid">

      <div className="navbar-header">
        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <a className="navbar-brand vertical-aligner" href="/"><img className="image-logo" src="images/pluralsight.png" className="image-logo"/></a>
      </div>

      <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

        <ul className="nav navbar-nav navbar-right">
          <li><a href="/">Home</a></li>
          <li><a href="/#about">About</a></li>
          <li><a href="/#authors">Authors</a></li>
        </ul>
      </div>
    </div>
  </nav>

    );
  }
});

module.exports = Header;

'use strict';

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

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
        <li><Link to='app' className="navbar-brand vertical-aligner"><img className="image-logo" src="images/pluralsight.png" className="image-logo"/></Link></li>
      </div>

      <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

        <ul className="nav navbar-nav navbar-right">
          <li><Link to='app'>Home</Link></li>
          <li><Link to="about">About</Link></li>
          <li><Link to="authors">Authors</Link></li>
        </ul>
      </div>
    </div>
  </nav>

    );
  }
});

module.exports = Header;

'use strict';

var React = require('react');
var AuthorActions = require('../../actions/authorActions');
var AuthorStore = require('../../stores/authorStore');
var AuthorList = require('./authorList');
var addAuthor = require('./manageAuthorPage');
var Link = require('react-router').Link;

var AuthorPage = React.createClass({
  getInitialState: function(){
    return {
      authors: AuthorStore.getAllAuthors()
    };
  },
  render: function(){
    return (
      <div>
        <h1>Authors</h1>
          <Link to='addAuthor' className='btn btn-default'>Add Authors</Link>
          <AuthorList authors={this.state.authors} />
      </div>
    );
  }
});

module.exports = AuthorPage

'use strict';
var Dispatcher = require('../dispatcher/appDispatcher');
var AuthorApi = require('../api/AuthorApi');
var ActionTypes=require('../constants/actionTypes');

var AuthorActions = {
  createAuthor: function(author){
    var newAuthor = AuthorApi.saveAuthor(author);

    Dispatcher.dispatch({
      actionType: ActionTypes.CREATE_AUTHOR,
      author: newAuthor
    });

    console.log('hit create new author action')
  },
  updateAuthor: function(author){
    var updatedAuthor = AuthorApi.saveAuthor(author);

    Dispatcher.dispatch({
      actionType: ActionTypes.UPDATE_AUTHOR,
      author: updatedAuthor
    });

    console.log('hit update author action')
  },
  deleteAuthor: function(id){
    AuthorApi.deleteAuthor(id);

    Dispatcher.dispatch({
      actionType: ActionTypes.DELETE_AUTHOR,
      id: id
    });

    console.log('hit delete author action')
  }
}

module.exports = AuthorActions;

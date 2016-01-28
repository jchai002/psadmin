'use strict';
var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/ActionTypes');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var _=require('lodash');
var CHANGE_EVENT = 'change';

var _authors = [];

var AuthorStore = assign({}, EventEmitter.prototype, {
  addChangeListener: function(callback){
    this.on(CHANGE_EVENT,callback);
  },
  removeChangeListener: function(callback){
    this.removeListener(CHANGE_EVENT, callback);
  },
  emitChange: function(){
    this.emit(CHANGE_EVENT);
  },
  getAllAuthors: function(){
    return _authors;
  },
  getAuthorById: function(id){
    return _.find(_authors, {id: id})
  }
});

Dispatcher.register(function(action){
  console.log('Dispatching action:', action.actionType)
  switch(action.actionType){
    case ActionTypes.INITIALIZE:
         _authors= action.initialData.authors
         AuthorStore.emitChange();
         break;
    case ActionTypes.CREATE_AUTHOR:
          _authors.push(action.author);
          AuthorStore.emitChange();
          break;
    default:
      //nothing to do here
  }
});

module.exports = AuthorStore;
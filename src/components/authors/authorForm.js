'use strict';

var React = require('react');
var Input = require('./../common/textInput');

var AuthorForm = React.createClass({

  render: function(){
    return (
      <form>
        <Input
          name="firstName"
          label="First Name"
          placeholder="First Name"
          value={this.props.author.firstName}
          onChange={this.props.onChange} />

          <Input
            name="lastName"
            placeholder="Last Name"
            label="Last Name"
            value={this.props.author.lastName}
            onChange={this.props.onChange} />

          <input type="submit" value="save" onClick={this.props.onSave} className="btn btn-primary"/>
      </form>
    );
  }
});

module.exports = AuthorForm

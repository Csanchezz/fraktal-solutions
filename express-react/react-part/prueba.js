import React from 'react';
import ReactDOM from 'react-dom';


var NameInput = React.createClass({
  render: function() {
    return (
      <div>
        <label for="name">Name</label>
        <input id="name" value={this.props.name} onChange={this.props.onChange} />
      </div>
    );
  },
});
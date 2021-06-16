import React, { useRef } from 'react';
import './Select.scss';

import Select from Sele

const Select = React.createClass({

  getInitialState: function () {
      return {
          firstValue: ''
      }
  },

  handleFirstLevelChange : function (event) {
      this.setState({
          firstValue: event.target.value
      });
  },
  render : function(){

      var options = [
          { value: '', label: 'Select an option' },
          { value: 'one', label: 'One' },
          { value: 'two', label: 'Two' }
      ];

      return (<Select
          value={this.state.firstValue}
          options={options}
          onChange={this.handleFirstLevelChange}
          />)
  }
});

import default Select;
import React, { Component } from 'react';

export default class Fcomponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'ButtonPressed'
    }
  }
  
  render() {
    return (
      <div>
        <button onClick={() => {this.props.updateData(this.state.name)}}>Press button</button>
      </div>
    )
  }
}

import React, { Component } from 'react';
import './stylesNew.css';
import { Button } from '@material-ui/core';


export default class Ccomponent extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      input: '',
      items: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      input: event.target.value.trim(),
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.input) {
      this.setState({
        input: this.state.input,
        items: [...this.state.items, this.state.input]
      });
    } else {
      alert('Введите что-либо')
    }
  }


  render() {
    return (
      <div>
        <h1 className="hello">Hello</h1>
        <Button variant="contained" color="primary">
        Primary
        </Button>
        <Button variant="contained" color="secondary">
        Secondary
        </Button>
        <form onSubmit={this.handleSubmit}>
        <input value={this.state.input} onChange={this.handleChange}/>
        <button type="submit">Submit</button>
        </form>
        <ol>
          {this.state.items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ol>
      </div>
    );
  }
}

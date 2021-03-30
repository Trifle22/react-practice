import React, { Component } from 'react';
import './stylesNew.css';
import { Button } from '@material-ui/core';
import Switch from '@material-ui/core/Switch';


export default class Ccomponent extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      input: '',
      items: [],
      checkedA: true,
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

  handleChange = (event) => {
    const appHeader = document.querySelector('.App-header');
    const title = document.querySelector('.hello');
    this.setState({[event.target.name]: event.target.checked });
    if (this.state.checkedA) {
      appHeader.style.backgroundColor = '#333333';
      title.textContent = 'Night';
    } else {
      appHeader.style.backgroundColor = 'white';
      title.textContent = 'Day';

    }
  };

  resetBgrColor() {
    document.querySelector('.App-header').style.backgroundColor = '';
  }


  render() {
    return (
      <div>
        <Switch
        checked={this.state.checkedA}
        onChange={this.handleChange}
        name="checkedA"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
        <h1 className="hello">Hello</h1>
        <Button variant="contained" color="primary">
        Primary
        </Button>
        <Button variant="contained" color="secondary">
        Secondary
        </Button>
        <Button variant="contained" color="secondary" onClick={this.resetBgrColor}>
        ResetBgrColor
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

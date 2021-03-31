import React, { Component } from 'react';
import './stylesNew.css';
import Switch from '@material-ui/core/Switch';



export default class Ccomponent extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      checkedA: false,
      url: 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic',
      error: null,
      isloaded: false,
      items: []
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch(this.state.url)
    .then(res => res.json())
    .then((result) => {
      this.setState({
        isloaded: true,
        items: result.drinks
      });
    },
      (error) => {
        this.setState({
          isloaded: true,
          error
        })
      }
    )
  }

  componentWillUpdate() {
    fetch(this.state.url)
    .then(res => res.json())
    .then((result) => {
      this.setState({
        isloaded: true,
        items: result.drinks
      });
    },
      (error) => {
        this.setState({
          isloaded: true,
          error
        })
      }
    )
  }


  handleChange() {
    this.setState({
      checkedA: !this.state.checkedA,
      url: 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic'
    })
    console.log(this.state.url);
  }

  render() {
    const {error, isloaded, items} = this.state;
    if (error) {
      return <p>error : {error.message}</p>;
    } else if (!isloaded) {
      return <p>loading...</p>;
    } else {
      return (
        <div>
          <span>non_alcoholic</span>
        <Switch
          checked={this.state.checkedA}
          onChange={this.handleChange}
          name="checkedA"
          inputProps={{ 'aria-label': 'secondary checkbox' }}
          color="primary"
        />
        <span>alcoholic</span>
          <ul>
            {items.map(item => (
              <li key={item.idDrink} className="coctail-item">
                {item.strDrink}
                <img src={item.strDrinkThumb} alt={item.name} className="coctail-img"/>
              </li>
            ))}
          </ul>
        </div>
      )
    }
  }

}


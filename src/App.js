import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data:[],
      number: 0,
      items: [
        'learn react',
        'master react'
      ]
    }
  }
  componentDidMount() {
    fetch(url).then(results => {
        console.log(results);
        this.state.data.push(results);
    })
}

  increment = () => {
    this.setState({
      number: this.state.number + 1
    })
  }

  addItem = () => {
    const newItem = 'new item';
    const some = [...this.state.items];

    some.push(newItem);

    this.setState({
      items: some
    });

    // arrays []
    // objects {}
  }

  deleteItem = () => {
    const some = [...this.state.items];
    some.pop();
    this.setState({
      items: some
    });
  }

  render() {
   const number = this.state.number;
    const formattedItems = this.state.items.map(item => {
      return <li>{item}</li>
    });
    return (
      <div className="App">
        <h3>hiii, {number}</h3>
        <button onClick={this.increment}>Increment</button>
        {formattedItems}

        <button onClick={this.addItem} >Add item</button>
        <button onClick={this.deleteItem} >Delete item</button>
      </div>
    );
  }
}

export default App;
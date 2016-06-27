import React from 'react';
import { render } from 'react-dom';

class Counter extends React.Component{
  constructor(props){
    super();
    this.state = {count: props.start};
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment(){
    this.setState({count: this.state.count + 1});
  }

  decrement(){
    this.setState({count: this.state.count - 1});
  }

  render(){
    return (
      <div>
        <h3>Counter</h3>
        <div>Count: {this.state.count}</div>
        <button onClick={this.increment}>++</button>
        <button onClick={this.decrement}>--</button>
      </div>
    )
  };
}

export default Counter;

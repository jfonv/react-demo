import React from 'react';
import { render } from 'react-dom';

class Greeting extends React.Component{
  constructor(props){
    super();
    this.state = {name: 'Bob'};
    this.update = this.update.bind(this);
  }

  update(){
    const name = this.refs.name.value;
    this.setState({ name });
  }

  render(){
    return (
      <div>
        <h3>Greeting</h3>

        <input ref='name' type='text' />
        <button onClick={this.update} Set> </button>
        <div> Hello, {this.state.name} </div>

      </div>
    )
  };
}

export default Greeting;

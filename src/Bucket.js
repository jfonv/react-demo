import StupidList from './StupidList.js';
import React from 'react';
import { render } from 'react-dom';

class Bucket extends React.Component{
  constructor(props){
    super();
    this.state = {evens: [], odds: []};
    this.update = this.update.bind(this);
  }

  update(){
    const number = this.refs.number.value;
    let newArray = [];
    if (number%2) {
      newArray = this.state.odds;
      newArray.push(number);
      this.setState({ odds: newArray });
    } else {
      newArray = this.state.evens;
      newArray.push(number);
      this.setState({ evens: newArray });
    }
    this.refs.number.value = '';
  }

  render(){
    //var vertAlign = { vertical-align: 'text-top' };
    return (
      <table>
        <thead>
          <tr>
            <td>
              <h1>Bucket</h1>
              <p />
              <input ref='number' type='number' />
              <button ref='button' key='button' onClick={this.update} Add to Bucket > </button>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <h2>Evens</h2>
              <ul>
                <StupidList array={this.state.evens} />

              </ul>
            </td>
            <td>
              <h2>Odds</h2>
              <ul>
                <StupidList array={this.state.odds} />
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    );
  };
}



export default Bucket;

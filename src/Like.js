import React from 'react';
import { render } from 'react-dom';

class Like extends React.Component{
  constructor(props){
    super();
    this.state = {like: true};
    this.toggle = this.toggle.bind(this);
  }

  toggle(){
    if (this.state.like) {
      this.setState({like: false});
    } else {
      this.setState({like: true});
    }
  }

  render(){
    if (this.state.like)
      return (
        <div>
          <h3>Like</h3>
            <img src='like.png' onClick={this.toggle} />
        </div>
      )
    else
      return (
        <div>
          <h3>Hater!</h3>
            <img src='dislike.png' onClick={this.toggle} />
        </div>
      )
  };
}

export default Like;

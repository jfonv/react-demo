import React from 'react';

class Weather extends React.Component{
  constructor(props){
    super(props);
    this.state = {city: 'unknown'};
    this.update = this.update.bind(this);
  }

  componentWillMount(){
    console.log('THIS WILL MOUNT');
  }

  componentDidMount(){
    console.log('THIS DID MOUNT');


  }
  update(){
    this.setState({city: this.refs.city.value});
    console.log('city', this.refs.city.value);
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + this.state.city + '&appid=692d9840933cc93352daaab2d7bb4ac7&units=imperial')
    .then((rsp) => {
      console.log('rsp', rsp);
      this.setState({temp: rsp.main.temp})
    });
  }

  render(){
    console.log('THIS JUST RENDERED');
    return (
      <div>
        <h1>Weather!</h1>
        <input ref='city' type='text' />
        <button onClick={this.update}>Add</button>
        <div>{this.state.temp} fucking degrees in {this.state.city}</div>
      </div>
    );
  }
}

export default Weather;

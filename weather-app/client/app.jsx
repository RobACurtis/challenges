import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lattitude: '',
      longitude: ''
    };
    this.renderInput = this.renderInput.bind(this);
    this.getWeather = this.getWeather.bind(this);
  }

   renderInput(e) {
    if (e.target.id === 'lat') {
      this.setState({
        lattitude: e.target.value
      });
    } else {
      this.setState({
        longitude: e.target.value
      });
    }
  }

  getWeather() {

  }

  render() {
    return (
      <>
        <div className='background-image'></div>
        <div className='container'>
          <div className='row title'>
            <h1>Weather Forecast</h1>
          </div>
          <div className='container container-height row center margin-zero justify-content-evenly'>
            <Card date={'Today'} icon={'weather-icons/sunny.png'} />
            <Card date={'Tomorrow'} icon={'weather-icons/cloudy.png'} />
          </div>
          <div className="buttons d-flex justify-content-between mx-5">
            <button type="button" className="btn btn-small btn-outline-primary">Previous</button>
            <button type="button" className="btn btn-small btn-outline-primary">Next</button>
          </div>
        </div>
      </>
    );
  }
}

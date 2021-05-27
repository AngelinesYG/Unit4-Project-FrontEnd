import React from 'react'
import axios from 'axios'

class Weather extends React.Component {

  state = {
      zipcode: '48103',
      name: '',
      weatherLike: '',
      humidity: '',
      skies: ''
  }

  getWeather = (event) => {
    event.preventDefault();
    axios
    .get("https://api.openweathermap.org/data/2.5/weather?zip="+this.state.zipcode+"&appid=cb62c3b0bbf4bc98a92507bb71fa55d5&units=imperial")
    .then(
        (response) => {
            console.log(response)
            let temp = Math.ceil(Math.round(response.data.main.feels_like));
             this.setState({
                weatherLike: temp,
                humidity: response.data.main.humidity,
                skies: response.data
            })
        }
      )
    }

    render() {
        return (
            <div className ="Weather">
                <h1>Weather Component</h1>
                <summary> Wheather Check </summary>
            <form onSubmit={this.getWeather}>
                <input type="text" id="zipcode" onChange={this.props.handleChange}/><br/>
                <input type="submit" value = "City Destination" />
            </form>
            <dl>
                <dt> City Name: </dt>
                <dd>{this.state.name}</dd>
                <dt> Temperature: </dt>
                <dd>{this.state.weatherLike}</dd>
                <dt> Humidity: </dt>
                <dd>{this.state.humidity}</dd>
            </dl>
            </div>
        )
    }
}

export default Weather

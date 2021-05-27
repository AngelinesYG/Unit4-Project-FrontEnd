import React from 'react'
import axios from 'axios'

class Weather extends React.Component {

  state = {
      zipcode: '',
      name: '',
      weatherLike: '',
      humidity: '',
      skies: ''
  }

  handleChange = (event) => {
    this.setState ({
      [event.target.id]: event.target.value,
    })
  }
  // handleChange = (event) => {
  //     if (event.target.id === "favGames") {
  //         this.setState({
  //             favGames: event.target.value.split(',')
  //         })
  //     }
  //     else {
  //         this.setState({
  //             [event.target.id]: event.target.value
  //         })
  //     }
  //   }

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
                skies: response.data.weather[0].description,
                city: response.data.name
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
                <input type="text" id="zipcode" onChange={this.handleChange}/><br/>
                <input type="submit" value = "Enter ZipCode!" />
            </form>
            <dl>
                <dt> City: </dt>
                <dd>{this.state.city}</dd>
                <dt> Current Condition: </dt>
                <dd>{this.state.skies}</dd>
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

import React from 'react'
import axios from 'axios'

class Weather extends React.Component {

  state = {
      zipcode: '',
      city: '',
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
      if (this.state.city === "") {
        return (
            <div className ="Weather">
                <h2> Local Weather </h2>
                <form onSubmit={this.getWeather}>
                    <input type="text" id="zipcode" onChange={this.handleChange}/><br/>
                    <input type="submit" value = "Enter ZipCode!" />
                </form>
            </div>
        )
      }
      else {
        return (
          <div className ="Weather">
              <h2> Local Weather </h2>
              <form onSubmit={this.getWeather}>
                  <input type="text" id="zipcode" onChange={this.handleChange}/><br/>
                  <input type="submit" value = "Enter ZipCode!" />
              </form>
              <h3>The weather in {this.state.city} looks like:</h3>
              <section>
                <div>
                  <h5>Condition:</h5>
                  <h3>{this.state.skies}</h3>
                </div>
                <div>
                  <h5>Temperature:</h5>
                  <h3>{this.state.weatherLike}</h3>
                </div>
                <div>
                  <h5>Humidity:</h5>
                  <h3>{this.state.humidity}</h3>
                </div>
              </section>
          </div>
        )
      }
    }
}
export default Weather

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
            return <div className ="Weather">
                        <h1>Weather Component</h1>
                        <summary> Wheather Check </summary>
                        <form onSubmit={this.getWeather}>
                        <input type="text" id="zipcode" onChange={this.handleChange}/><br/>
                        <input type="submit" value = "Enter ZipCode!" />
                    </form>
                </div>
        } else {
            return <h1>HIIIIIIII THERES A STATE NOW</h1>
        }
    }
}

export default Weather

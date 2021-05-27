import React from 'react'

class Weather extends React.Component {

  state

  getWeather = (event) => {
    event.preventDefault();
    axios
    .get("https://api.openweathermap.org/data/2.5/weather?zip="+this.props.zipcode+"&appid=cb62c3b0bbf4bc98a92507bb71fa55d5&units=imperial")
    .then(
        (response) => {
          let temp = Math.ceil(Math.round(response.data.main.feels_like));
          this.setState({
          weatherLike: temp,
          weather: response.data.main.humidity
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
                <input type="text" onKeyUp={this.prop.zipcode}/><br/>
                <input className="btn btn-warning mb-5" type="submit" value = "City Destination" />
            </form>
            <dl>
                <dt> City Name: </dt>
                <dd>{this.state.name}</dd>
                <dt> Temperature: </dt>
                <dd>{this.state.weatherLike}</dd>
                <dt> Humidity: </dt>
                <dd>{this.state.weather}</dd>
            </dl>
            </div>
        )
    }
}

export default Weather

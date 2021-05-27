import React from 'react'

import axios from 'axios'

import Nav from './components/Nav'
import HeroArea from './components/HeroArea'
import DogProf from './components/DogProf'
import Weather from './components/Weather'
import Map from './components/Map'
import Footer from './components/Footer'


class App extends React.Component {

  state= {
    name: '',
    image: '',
    age: '',
    breed: '',
    human: '',
    zipcode: '',
    favGames: [],
    dogs: [],
  }

  addDog = (dog) => {
     console.log(dog)
    axios
    .post('https://bingo-was-his-django.herokuapp.com/api/dogs', dog)
    .then((response) => {
      console.log('.then triggered')
      console.log(response)
      this.getDogs()
    })
    .catch((error) => console.error(error))
  }

  // handleChange = (event) => {
  //   this.setState ({
  //     [event.target.id]: event.target.value,
  //   })
  // }

  handleChange = (event) => {
    if (event.target.id === "favGames") {
        this.setState({
            favGames: event.target.value.split(',')
        })
    }
    else {
        this.setState({
            [event.target.id]: event.target.value
        })
    }
}

  getDogs = () => {
    axios
      .get('https://bingo-was-his-django.herokuapp.com/api/dogs')
      .then(
        (response) => {
          this.setState({ dogs: response.data})
        },
        (err) => console.log(err)
      )
      .catch((error) => console.log(error))
  }

  deleteDog = (event) => {
    axios.delete('https://bingo-was-his-django.herokuapp.com/api/dogs/' + event.target.value).then((response) => {
      this.getDogs()
    })
  }

  updateDog = (event) => {
    event.preventDefault()
    const id = event.target.id
    axios
    .put('https://bingo-was-his-django.herokuapp.com/api/dogs/' + id, this.state)
    .then((response) => {
      this.getDogs()
    })
  }

   componentDidMount = () => {
    this.getDogs()
   }

    render() {
        return (
            <div className="main-container">
                <Nav />
                <HeroArea
                    addDog={this.addDog}
                    id="add"/>
                <div className="dogs-container">
                    {this.state.dogs.map((dog) => {
                      return(
                        <DogProf dog={dog}
                          updateDog={this.updateDog}
                          deleteDog={this.deleteDog}
                          handleChange={this.handleChange}
                          />
                      )
                    })}
                </div>
                <Weather
                    id="weather"
                    handleChange={this.handleChange}/>
                <Map
                    id="map"/>
                <Footer />
            </div>
        )
    }
}

export default App

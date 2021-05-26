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

  handleChange = (event) => {
    this.setState ({
      [event.target.id]: event.target.value,
    })
  }



  addDog = (dog) => {
    axios
    .post('https://bingo-was-his-django.herokuapp.com/api/dogs', dog)
    .then((response) => {
      this.getDogs()
    })
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

  componentDidMount = () => {
    this.getDogs()
  }

  deleteDog = (event) => {
    axios.delete('https://bingo-was-his-django.herokuapp.com/api/dogs' + event.target.value).then((response) => {
      this.getDogs()
    })
  }

  updateDog = (event) => {
    event.preventDefault()
    const id = event.target.id
    axios
    .put('https://bingo-was-his-django.herokuapp.com/api/dogs' + id, this.state)
    .then((response) => {
      this.getDogs()
    })
  }

    render() {
        return (
            <div className="main-container">
                <Nav />
                <HeroArea
                  addDog={this.addDog}/>
                {this.state.dogs.map((dog) => {
                  return(
                    <DogProf
                      dog={dog}
                      updateDog={this.updateDog}
                      deleteDog={this.deleteDog}
                      handleChange={this.handleChange}
                      />
                  )
                })}
                <Weather />
                <Map />
                <Footer />
            </div>
        )
    }
}

export default App

import React from 'react'
<<<<<<< HEAD
import axios from 'axios'
import 

class App extends React.Component {
  render = () => {
    return (
      <div>
        <h1>Hello</h1>
      </div>
    )
  }
=======

import Nav from './components/Nav'
import HeroArea from './components/HeroArea'
import DogProf from './components/DogProf'
import Weather from './components/Weather'
import Map from './components/Map'
import Footer from './components/Footer'

class App extends React.Component {
    render() {
        return (
            <div className="main-container">
                <Nav />
                <HeroArea />
                <DogProf />
                <Weather />
                <Map />
                <Footer />
            </div>
        )
    }
>>>>>>> baca3573c21952169083113f587c3fd2ce795c45
}

export default App

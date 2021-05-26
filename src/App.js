import React from 'react'

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
}

export default App

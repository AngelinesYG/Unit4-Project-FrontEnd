import React from 'react'
// import axios from 'axios'

class Map extends React.Component {
    state = {
        zipcode: '',
    }

    handleChange = (event) => {
        this.setState(
            {
                [event.target.id]: event.target.value
            }
        )
    }

    setZip = (event) => {
        event.preventDefault()
        this.setState(
            {
                [event.target.id]: event.target.value
            }
        )
        console.log(this.state.zipcode)
        this.renderMap()
    }

    renderMap = () => {
        console.log("renderMap was triggered");
        return (
            <div className="map">
                <iframe width="560" height="315" title="Dog Park Map" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBT9_mprou4lCaUHTuQNhvRCNM8hyim7LE
                &q={this.state.zipcode}"></iframe>
            </div>
        )
    }

    render() {
        return (
            <div>
                <h1>Map Component</h1>
                <form onSubmit={this.setZip}>
                    <input type="text" id="zipcode" onChange={this.handleChange} />
                    <input type="submit" value="find parks" />
                </form>
                <div className="map">
                    <iframe width="560" height="315" title="Dog Park Map" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBT9_mprou4lCaUHTuQNhvRCNM8hyim7LE
                    &q=48103"></iframe>
                </div>
            </div>
        )
    }
}

export default Map

// <iframe width="560" height="315" title="Dog Park Map" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBT9_mprou4lCaUHTuQNhvRCNM8hyim7LE
// &q={this.state.zipcode}"></iframe>

import React from 'react'

class HeroArea extends React.Component {

  state= {
    name: '',
    image: '',
    age: '',
    breed: '',
    human: '',
    zipcode: '',
    favGames: [],
  }
  
  handleChange = (event) => {
    this.setState ({
      [event.target.id]: event.target.value,
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.prop.addDog(this.state)
  }



    render() {
        return (
            <div>
                <h1>HeroArea Component</h1>
            </div>
        )
    }
}

export default HeroArea

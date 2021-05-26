import React from 'react'

class DogProf extends React.Component {
    render() {
        return (
            <div>
              <div>
                <h3>Name: {this.props.dog.name} </h3>
                <img src={this.props.dog.image} />
                <h5>Age: {this.props.dog.age}</h5>
                <h5>Breed: {this.props.dog.breed}</h5>
                <h5>Human: {this.props.dog.human}</h5>
                <h5>ZipCode: {this.props.dog.zipcode}</h5>
                <h5>FavGame: {this.props.dog.favGames}</h5>
                <details>
              <summary>Update Pooch</summary>
              <form id={this.props.dog.id} onSubmit={this.props.updateDog}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" onChange={this.props.handleChange} />
                <br />
                <label htmlFor="image">Image</label>
                <input type="text" id="image" onChange={this.props.handleChange} />
                <br />
                <label htmlFor="age">Age</label>
                <input type="text" id="age" onChange={this.props.handleChange} />
                <br />
                <label htmlFor="breed">Breed</label>
                <input type="text" id="breed" onChange={this.props.handleChange} />
                <br />
                <label htmlFor="human">Human</label>
                <input type="text" id="human" onChange={this.props.handleChange} />
                <br />
                <label htmlFor="zipcode">ZipCode</label>
                <input type="text" id="zipCode" onChange={this.props.handleChange} />
                <br />
                <label htmlFor="favGames">FavGames</label>
                <input type="text" id="favGames" onChange={this.props.handleChange} />
                <br />
                <input type="submit" value="Update Pooch" />
              </form>
            </details>
            <button value = {this.props.dog.id} onClick={this.props.deleteDog}>
            Bye!
            </button>
              </div>
            </div>
        )
    }
}

export default DogProf

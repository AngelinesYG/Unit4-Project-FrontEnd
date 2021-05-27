import React from 'react'

class DogProf extends React.Component {
    render() {
        return (
            <div className="dogprof-container">
                <article>
                    <section className="dog-intro">
                        <img src={this.props.dog.image} alt={this.props.dog.name}/>
                        <div className="intro-text">
                            <h3>{this.props.dog.name} </h3>
                            <p>{this.props.dog.age} yrs.</p>
                        </div>
                    </section>
                    <p>Breed: {this.props.dog.breed}</p>
                    <p>Human: {this.props.dog.human}</p>
                    <p>ZipCode: {this.props.dog.zipcode}</p>
                    <p>My favorite games:</p>
                        <ul>
                        {this.props.dog.favGames.map(game => {
                            return (
                                <li>{game}</li>
                            )
                        })}
                    </ul>
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
                        <input type="text" id="zipcode" onChange={this.props.handleChange} />
                        <br />
                        <label htmlFor="favGames">FavGames</label>
                        <input type="text" id="favGames" onChange={this.props.handleChange} />
                        <br />
                        <input type="submit" value="Update Pooch" />
                      </form>
                    </details>
                    <button value = {this.props.dog.id} onClick={this.props.deleteDog}>
                    Remove
                    </button>
                </article>
            </div>
        )
    }
}

export default DogProf

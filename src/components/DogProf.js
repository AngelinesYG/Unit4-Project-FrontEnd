import React from 'react'

class DogProf extends React.Component {
    render() {
        return (
            <div>
                <h1>DogProf Component</h1>
                <p>{this.props.dog.name}</p>
            </div>
        )
    }
}

export default DogProf

import React, {Component} from 'react'

class ParkNew extends Component {
    state = {
        name: "",
        description: "",
        activities: "",
        directions: "",
        images: ""
    }
    handleOnChange = event => {
        this.setState({[event.target.name]: event.target.value})
    }
    handleOnSubmit = event => {
        event.preventDefault()
    }
    render () {
        return (
            <div className="Add-New-Park">
                <h4>Add A National Park</h4>
                <form onSubmit={this.handleOnSubmit}>
                    <label>National Park Name:</label>
                    <input type="text" name="name" value={this.state.name} onChange={this.handleOnChange} />
                    <label>Description of National Park:</label>
                    <input type="textarea" name="description" value={this.state.description} onChange={this.handleOnChange} />
                    <label>List of Activities at the Park:</label>
                    <input type="textarea" name="activities" value={this.state.activities} onChange={this.handleOnChange} />
                    <label>Directions to the Park:</label>
                    <input type="textarea" name="directions" value={this.state.directions} onChange={this.handleOnChange} />
                    <label>Image URL:</label>
                    <input type="text" name="images" value={this.state.images} onChange={this.handleOnChange} />
                    <input type="submit"></input>
                </form>
            </div>
        )
    }
}
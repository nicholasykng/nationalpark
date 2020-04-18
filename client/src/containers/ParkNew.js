import React, {Component} from 'react'
import {createPark} from '../actions/createPark'
import {connect} from 'react-redux'

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
        this.props.createPark(this.state)
        this.setState({
            name: "",
            description: "",
            activities: "",
            directions: "",
            images: ""
        })
        this.props.history.push('/parks')
    }
    render () {
        return (
            <div className="Add-New-Park">
                <h4>Add A National Park</h4>
                <form onSubmit={this.handleOnSubmit}>
                    <label>National Park Name:</label>
                    <input type="text" name="name" value={this.state.name} onChange={this.handleOnChange} /><br></br>
                    <label>Description of National Park:</label>
                    <input type="textarea" name="description" value={this.state.description} onChange={this.handleOnChange} /><br></br>
                    <label>List of Activities at the Park:</label>
                    <input type="textarea" name="activities" value={this.state.activities} onChange={this.handleOnChange} /><br></br>
                    <label>Directions to the Park:</label>
                    <input type="textarea" name="directions" value={this.state.directions} onChange={this.handleOnChange} /><br></br>
                    <label>Image URL:</label>
                    <input type="text" name="images" value={this.state.images} onChange={this.handleOnChange} /><br></br>
                    <input type="submit"></input>
                </form>
            </div>
        )
    }
}
export default connect(null, {createPark})(ParkNew)
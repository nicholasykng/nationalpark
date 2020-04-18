import React, {Component} from 'react'
import {createPark} from '../actions/createPark'
import {connect} from 'react-redux'
import {FormControl, FormGroup, FormLabel} from 'react-bootstrap'

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
                    <FormGroup>
                    <FormLabel>National Park Name:</FormLabel>
                    <FormControl type="text" name="name" value={this.state.name} onChange={this.handleOnChange} /><br></br>
                    <FormLabel>Description of National Park:</FormLabel>
                    <FormControl  type="textarea" name="description" value={this.state.description} onChange={this.handleOnChange} /><br></br>
                    <FormLabel>List of Activities at the Park:</FormLabel>
                    <FormControl  type="textarea" name="activities" value={this.state.activities} onChange={this.handleOnChange} /><br></br>
                    <FormLabel>Directions to the Park:</FormLabel>
                    <FormControl  type="textarea" name="directions" value={this.state.directions} onChange={this.handleOnChange} /><br></br>
                    <FormLabel>Image URL:</FormLabel>
                    <FormControl  type="text" name="images" value={this.state.images} onChange={this.handleOnChange} /><br></br>
                    <FormControl  type="submit"></FormControl >
                    </FormGroup>
                </form>
            </div>
        )
    }
}
export default connect(null, {createPark})(ParkNew)
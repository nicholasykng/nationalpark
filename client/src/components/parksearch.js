import React, {Component} from 'react'
import {FormControl, FormGroup, FormLabel} from 'react-bootstrap'
import ParkCard from "../containers/ParkCard"
import {connect} from 'react-redux'
import {fetchParks} from '../actions/fetchParks.js'

class ParkSearch extends Component {
    state = {
        filtered: []
    }
    componentDidMount() {
        this.props.fetchParks()
        this.setState({
            filtered: this.props.parks
        })
    }
    renderParks = () => {
        return this.state.filtered.map(park => <ParkCard key={park.id} park={park} />)
    } 
    handleOnChange = event => {
        let currentPark = []
        let newParkList = []
        if (event.target.value !== "") {
            currentPark = this.props.parks
            newParkList = currentPark.filter(park => {
                const lowercaseparkname = park.name.toLowerCase()
                let filterpark = event.target.value.toLowerCase()
                return lowercaseparkname.includes(filterpark)
            })
        } else {
            newParkList = this.props.parks
        }
        this.setState({
            filtered: newParkList
        })
    }
    render() {
        return (
            <div>
                <FormGroup>
                    <FormLabel>Search For A National Park:</FormLabel>
                    <FormControl type="text" name="searchterm" onChange={this.handleOnChange} />
                </FormGroup>
                {this.renderParks()}
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        parks: state.parks
    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchParks: () => dispatch(fetchParks())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ParkSearch)
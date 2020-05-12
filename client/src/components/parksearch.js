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
    }
    renderParks = () => {
        if (this.state.filtered.length === 0) {
            return this.props.parks.map(park => <ParkCard key={park.id} park={park} />)
            }
        else  {
            return this.state.filtered.map(park => <ParkCard key={park.id} park={park} />) 
        }

    } 
    handleOnChange = event => {
            const newParkList = this.props.parks.filter(park => {
                const lowercaseparkname = park.name.toLowerCase()
                let filterpark = event.target.value.toLowerCase()
                return lowercaseparkname.includes(filterpark)
            })
       
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
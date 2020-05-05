import React from 'react'
import ParkCard from "../containers/ParkCard"
import {Button, FormControl, FormGroup, FormLabel} from 'react-bootstrap'

class ParksList extends React.Component {
    state = {
        sorted: true,
        filtered: []
    }
    componentDidMount() {
        this.setState({
            filtered: this.props.parks
        })
    }
    renderParks = () => {
        const defaultSort = this.state.sorted
        this.state.filtered.sort(function(a,b) {
            if (defaultSort) {
                return b.likes - a.likes
            } else {
                return a.likes - b.likes
            }
        })
        return this.state.filtered.map(park => <ParkCard key={park.id} park={park} />)
    } 
    
    handleSort = () => {
        this.setState({
            sorted: !this.state.sorted
        })
    }
    handleOnChange = event => {
        let currentPark = []
        let newParkList = []
        if (event.target.value !== "") {
            currentPark = this.props.parks
            newParkList = currentPark.filter(park => {
                const lowercaseparkname = park.name.toLowerCase()
                const filterpark = event.target.value.toLowerCase()
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
                <h1>List of Top National Parks From {this.state.sorted ? "Most To Least Likes" : "Least To Most Likes"}</h1>
                <Button variant="outline-dark" className="sort-like" onClick={this.handleSort}>{this.state.sorted ? "Sort Least to Most Likes" : "Sort Most to Least Likes"}</Button><br></br><br></br>
                <FormGroup>
                    <FormLabel>Search For A National Park:</FormLabel>
                    <FormControl type="text" name="searchterm" onChange={this.handleOnChange} />
                </FormGroup>
                {this.renderParks()}
            </div>
        )
    }
}
export default ParksList
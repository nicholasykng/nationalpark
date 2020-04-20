import React from 'react'
import ParkCard from "../containers/ParkCard"
import {Button} from 'react-bootstrap'

class ParksList extends React.Component {
    state = {
        sorted: true
    }

    renderParks = () => {
        const defaultSort = this.state.sorted
        this.props.parks.sort(function(a,b) {
            if (defaultSort) {
                return b.likes - a.likes
            } else {
                return a.likes - b.likes
            }
        })
        return this.props.parks.map(park => <ParkCard key={park.id} park={park} />)
    } 
    
    handleSort = () => {
        this.setState({
            sorted: !this.state.sorted
        })
    }
    
    render() {
        return (
            <div>
                <h1>List of Top National Parks From {this.state.sorted ? "Most To Least Likes" : "Least To Most Likes"}</h1>
                <Button variant="outline-dark" className="sort-like" onClick={this.handleSort}>{this.state.sorted ? "Sort Least to Most Likes" : "Sort Most to Least Likes"}</Button>
                {this.renderParks()}
            </div>
        )
    }
}
export default ParksList
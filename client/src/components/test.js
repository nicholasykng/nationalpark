import React from 'react'
import ParkCard from "../containers/ParkCard"

class ParksList extends React.Component {
    renderParks = () => {
        return this.props.parks.map(park => <ParkCard key={park.id} park={park} />)
    } 
    render() {
        return (
            <div>
                <h1>List of Top National Parks</h1>
                {this.renderParks()}
            </div>
        )
    }
}
export default ParksList
import React from 'react'
import ParkCard from "../containers/ParkCard"

class ParksList extends React.Component {
    renderParks = () => {
        return this.props.parks.map(park => <ParkCard key={park.id} park={park} />)
    } 
    render() {
        return (
            <div>
                {this.renderParks()}
            </div>
        )
    }
}
export default ParksList
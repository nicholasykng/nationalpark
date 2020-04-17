import React from 'react'
import ParkCard from "../containers/ParkCard"

const ParksList = ({parks}) => {
    const renderParks = parks.map(park => <ParkCard key={park.id} park={park} />)
    return (
        <>
        {renderParks}
        </>
    )
}
export default ParksList
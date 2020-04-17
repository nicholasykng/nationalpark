import React, {Component} from 'react'
import {Link} from 'react-router-dom'
class ParkCard extends Component {
    render() {
        const {park} = this.props
        return(
            <div className="park-card">
                <h4>{park.name}</h4>
                <img src={park.images} width="125" height="100" alt="pic" />
                <br/>
                <p>{park.description}</p>
                <br />
                <Link key={park.id} to={`/parks/${park.id}`} >
                    <button>More Information</button>
                </Link>
            </div>
        )
    }
}
export default ParkCard

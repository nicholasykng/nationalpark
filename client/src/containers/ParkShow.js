import React, {Component} from 'react'

class ParkShow extends Component {
    render() {
        const {parks, match} = this.props
        return (
            <div>
                <h2>{parks[match.params.parkId].name}</h2>
            </div>
        )
    }
}


export default ParkShow
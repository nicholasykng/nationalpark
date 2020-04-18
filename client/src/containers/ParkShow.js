import React, {Component} from 'react'

class ParkShow extends Component {
    render() {
        const {parks, match} = this.props
        return (
            <div>
                <h2>{parks[match.params.parkId + 1].name}</h2>
                <p>{parks[match.params.parkId + 1].description}</p>
                <p>{parks[match.params.parkId + 1].activities}</p>
                <p>{parks[match.params.parkId + 1].directions}</p>
                <img src={parks[match.params.parkId + 1].images} width="100%" height="100%" alt="pic"/>
            </div>
        )
    }
}


export default ParkShow
import React, {Component} from 'react'
import {connect} from  'react-redux'
import {fetchPark} from '../actions/index'

class ParkShow extends Component {
    componentDidMount() {
        this.props.fetchPark(this.props.match.params.parkId)
    }
    render() {
        const {park} = this.props
        return (
            <div>
                <h2>{park.name}</h2>
                <p>{park.description}</p>
                <p>{park.activities}</p>
                <p>{park.directions}</p>
                <img src={park.images} width="100%" height="100%" alt="pic"/>
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {

    const park = state.parks.find(park => park.id === parseInt(ownProps.match.params.parkId, 10)) || {}
    return ({
      park: park
      
    })
  }
export default connect(mapStateToProps, {fetchPark})(ParkShow)
import React, {Component} from 'react'
import {connect} from  'react-redux'
import {fetchPark} from '../actions/fetchPark.js'
import {fetchComments} from '../actions/fetchComments'
import CommentList from '../components/CommentList'

class ParkShow extends Component {
    componentDidMount() {
        this.props.fetchPark(this.props.match.params.parkId)
        this.props.fetchComments(this.props.match.params.parkId)
    }
    render() {
        const {park, comments} = this.props
        return (
            <div>
                <h2>{park.name}</h2>
                <p>{park.description}</p>
                <p>Activities: {park.activities}</p>
                <p>Directions: {park.directions}</p>
                <img src={park.images} width="100%" height="100%" alt="pic"/><br></br>
                <CommentList comments={comments} />
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {

    const park = state.parks.find(park => park.id === parseInt(ownProps.match.params.parkId, 10)) || {}
    return ({
      park: park,
      comments: state.comments
      
    })
  }
export default connect(mapStateToProps, {fetchPark, fetchComments})(ParkShow)
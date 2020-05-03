import React, {Component} from 'react'
import {connect} from  'react-redux'
import {fetchPark} from '../actions/fetchPark.js'
import {fetchComments} from '../actions/fetchComments'
import CommentList from '../components/CommentList'
import CommentNew from '../components/CommentNew'
import LikeButton from '../components/LikeButton'
import {likePark} from '../actions/likePark'
import {Button} from 'react-bootstrap'
import {deletePark} from '../actions/deletePark'

class ParkShow extends Component {
    componentDidMount() {
        this.props.fetchPark(this.props.match.params.parkId)
        this.props.fetchComments(this.props.match.params.parkId)
    }
    handleOnClick = () => {
        this.props.likePark(this.props.park)
    }
    render() {
        const {park, comments, history, deletePark} = this.props
        return (
            <div>
                <h1>{park.name}</h1>
                <p>{park.description}</p>
                <p>Activities: {park.activities}</p>
                <p>Directions: {park.directions}</p>
                <img src={park.images} width="900px" height="500px" alt="pic"/><br></br><br></br>
                <div className="likes">
                    <LikeButton park={park} likePark={this.handleOnClick} />
                </div><br></br>
                <div className="comments">
                    <CommentList comments={comments} />
                    <CommentNew parkId={this.props.match.params.parkId} />
                </div>
                <div className="delete-park">
                    <Button onClick={()=> deletePark(park.id, history)}>Delete Park</Button>
                </div>
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
export default connect(mapStateToProps, {fetchPark, fetchComments, likePark, deletePark})(ParkShow)
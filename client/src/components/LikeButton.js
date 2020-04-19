import React, {Component} from 'react'
import {Button, Badge} from 'react-bootstrap'

class LikeButton extends Component {
    render() {
        return (
            <div>
                <Button variant="success" className="like-park" onClick={this.props.likePark}>
                Like<Badge variant="light">{this.props.park.likes}</Badge>
                </Button>
            </div>
        )
    }
}
export default LikeButton
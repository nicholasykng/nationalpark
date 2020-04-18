import React, {Component} from 'react'
import {connect} from 'react-redux'
import {createComment} from '../actions/createComment'
import {FormControl, FormGroup, FormLabel} from 'react-bootstrap'

class CommentNew extends Component {
    state = {
        content: "",
        commenter: "",
        park_id: this.props.parkId
    }
    handleOnChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleOnSubmit = event => {
        event.preventDefault()
        this.props.createComment(this.state)
        this.setState({
            content: "",
            commenter: ""
        })
    }
    render() {
        return (
            <div className="comment-new-form">
                <h3>Add Comment:</h3>
                <form onSubmit={this.handleOnSubmit}>
                    <FormGroup controlId="basic-form">
                        <FormLabel>Comment:</FormLabel>
                        <FormControl type="text" value={this.state.content} name="content" onChange={this.handleOnChange} /><br></br>
                        <FormLabel>Your Name:</FormLabel>
                        <FormControl type="text" value={this.state.commenter} name="commenter" onChange={this.handleOnChange} /><br></br>
                        <FormControl type="submit"/>
                    </FormGroup>
                </form>
            </div>
        )
    }
}
export default connect(null, {createComment})(CommentNew)

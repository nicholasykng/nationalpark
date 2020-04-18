import React from 'react'
import CommentShow from './CommentShow'

const CommentList = ({comments}) => {
    const renderComments = comments.map(comment => <CommentShow key={comment.id} comment={comment} />)
    return (
        <div className='comments'>
            <p>Comments:</p>
            <ul>
                {renderComments}
            </ul>
        </div>
    )
}
export default CommentList
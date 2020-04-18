import React from 'react'

const CommentShow = ({comment}) => {
    return (
        <div>
            <li>{comment.content}  -{comment.commenter}</li>
        </div>
    )
}
export default CommentShow
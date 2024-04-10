import React from 'react';

const Comments = ({ comments }) => {
  return (
    <div className="comments">
      <h2>Comments</h2>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>
            <strong>{comment.user}</strong>: {comment.comment} {/* Change comment.text to comment.comment */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Comments;

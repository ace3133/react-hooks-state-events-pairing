import React from 'react';

const VideoPlayer = ({ title, description, videoUrl, upvotes, downvotes, views, publishedAt, onUpvote, onDownvote }) => {
  return (
    <div className="video-player">
      <iframe
        width="919"
        height="525"
        src={videoUrl}
        frameBorder="0"
        allowFullScreen
        title={title}
      />
      <div className="video-details">
        <h2>{title}</h2> 
        <p>{description}</p>
        <div className="voting">
          <h3>Votes</h3>
          <button onClick={onUpvote}>👍 {upvotes}</button>
          <button onClick={onDownvote}>👎 {downvotes}</button>
        </div>
        <div className="video-meta">
          <p>Views: {views}</p>
          <p>Published: {publishedAt}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;

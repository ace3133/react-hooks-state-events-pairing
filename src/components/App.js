import React, { useState } from 'react';
import video from "../data/video.js";
import VideoPlayer from "./VideoPlayer.js";
import Comments from "./Comments.js";

function App() {
  const [upvotes, setUpvotes] = useState(video.upvotes);
  const [downvotes, setDownvotes] = useState(video.downvotes);
  const [showComments, setShowComments] = useState(true);
  
  const [videoComments, setVideoComments] = useState(video.comments);

  const handleUpvote = () => {
    setUpvotes(upvotes + 1);
  };

  const handleDownvote = () => {
    setDownvotes(downvotes + 1);
  };

  const handleToggleComments = () => {
    setShowComments(prevShowComments => !prevShowComments);
  };

  const handleCommentUpvote = (index) => {
    const updatedComments = [...videoComments];
    updatedComments[index].upvotes++;
    setVideoComments(updatedComments);
  };

  const handleCommentDownvote = (index) => {
    const updatedComments = [...videoComments];
    updatedComments[index].downvotes++;
    setVideoComments(updatedComments);
  };

  return (
    <div className="App">
      <h1 className="main-title">{video.title}</h1>
      <VideoPlayer
        description={video.description}
        videoUrl={video.embedUrl}
        upvotes={upvotes}
        downvotes={downvotes}
        views={video.views}
        publishedAt={video.createdAt} 
        onUpvote={handleUpvote}
        onDownvote={handleDownvote}
      />
      <div className="additional-info">
        {showComments && (
          <Comments 
            comments={videoComments} 
            onCommentUpvote={handleCommentUpvote} 
            onCommentDownvote={handleCommentDownvote} 
          />
        )}
        <button onClick={handleToggleComments}>
          {showComments ? "Hide Comments" : "Show Comments"}
        </button>
      </div>
    </div>
  );
}

export default App;

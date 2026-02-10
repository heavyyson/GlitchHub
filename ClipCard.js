import React from 'react';
const ClipCard = ({ clip }) => {
  return (
    <div style={{ marginBottom: '20px', border: '1px solid #333', padding: '10px' }}>
      <video src={'http://localhost:5000' + clip.url} controls style={{ width: '100%' }} />
      <h3>{clip.title}</h3>
      <p>By: {clip.user.username}</p>
      <p>Likes: {clip.likes} | Shares: {clip.shares}</p>
    </div>
  );
};
export default ClipCard;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ClipCard from './ClipCard';

const Feed = () => {
  const [clips, setClips] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/clips')
      .then(res => setClips(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      {clips.map(clip => <ClipCard key={clip._id} clip={clip} />)}
    </div>
  );
};

export default Feed;
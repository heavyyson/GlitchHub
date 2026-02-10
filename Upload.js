import React, { useState } from 'react';
import axios from 'axios';

const Upload = () => {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState('');

  const handleUpload = () => {
    const formData = new FormData();
    formData.append('clip', file);
    formData.append('title', title);
    formData.append('userId', 'USER_ID_HERE'); // replace with real user ID after auth

    axios.post('http://localhost:5000/api/clips/upload', formData)
      .then(res => alert('Uploaded!'))
      .catch(err => console.log(err));
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <input type="text" placeholder="Title" onChange={e => setTitle(e.target.value)} />
      <input type="file" onChange={e => setFile(e.target.files[0])} />
      <button onClick={handleUpload}>Upload Clip</button>
    </div>
  );
};

export default Upload;
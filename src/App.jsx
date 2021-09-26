import { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [title, setTitle] = useState('hello world');

  useEffect(() => {
    (async () => {
      const res = await axios.get('https://test-project-backend.herokuapp.com/');
      setTitle(res.data);
    })();
  }, []);

  return (
    <div>
      <h1>{title}</h1>
      <p>This is not a test paragraph</p>
    </div>
  );
};

export default App;

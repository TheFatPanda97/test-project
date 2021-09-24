import { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [title, setTitle] = useState('hello world');

  useEffect(() => {
    (async () => {
      const res = await axios.get('http://localhost:8080');
      setTitle(res.data);
    })();
  }, []);

  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
};

export default App;

import { useState, useEffect } from 'react';

function App() {
  const [message, setMessage] = useState('Welcome to my world');

  useEffect(() => {
    console.log('Component mounted!');
    setTimeout(() => {
      setMessage('Thanks for visiting!');
    }, 3000); // after 3 seconds, message will change
  }); // empty array = runs only once when component mounts

  return (
    <h1>
      {message}
    </h1>
  );
}

export default App;

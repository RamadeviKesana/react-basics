import React from 'react';

const Greeting = ({ isLoggedIn }) => {
  if (isLoggedIn) {
    return <h2>Welcome back!</h2>;
  } else {
    return <h2>Please sign in.</h2>;
  }
};

const App = () => {
  return (
    <div className="p-6">
      <Greeting isLoggedIn={false} />
    </div>
  );
};

export default App;

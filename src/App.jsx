import React, { useState } from 'react';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4 text-center">
      {isAuthenticated ? (
        <>
          <h2 className="text-xl font-semibold text-green-700">Welcome back!</h2>
          <button 
            onClick={logout} 
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Logout
          </button>
        </>
      ) : (
        <>
          <h2 className="text-xl font-semibold text-gray-700">Please log in</h2>
          <button 
            onClick={login} 
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Login
          </button>
        </>
      )}
    </div>
  );
};

export default App;

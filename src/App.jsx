import React, { useState, useEffect } from 'react';
import Profile from './Components/Profile'
import Wrapper from './Components/Wrapper';
const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    setTimeout(() => {
      setLoading(false); 
    }, 1000000); 
  }, []);

  return (
    <>
     <div className="App">
      {loading ? (
        <Profile/>
      ) : (
       
      <Wrapper/>
      )}
    </div>

    </>
  )
}

export default App
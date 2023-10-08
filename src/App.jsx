import React, { useState, useEffect } from 'react';
import Header from './Components/Header'
import Profile from './Components/Profile'
const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    setTimeout(() => {
      setLoading(false); 
    }, 2334000); 
  }, []);

  return (
    <>
     <div className="App">
      {loading ? (
        <Profile/>
      ) : (
       
      <Header/>
      )}
    </div>

    </>
  )
}

export default App
import React from 'react'
import Card from './components/Card';
import Navbar from './components/Navbar';

const App = () => {
  
  const user = " Ayush Jaiswal";
  const age = 23;

  return (
    <div>
      <Navbar />
      <Card />
    </div>
  )
}

export default App
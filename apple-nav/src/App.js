import React, { useState } from 'react';
import { Header } from './components/Header';
import { Route } from 'react-router-dom';
import './App.css';
import macInfo from './macInfo.json';

function App() {
  const [appleData, setAppleData] = useState(macInfo)
  // console.log(appleData)

  return (
    <div className="App">
      <Route path='/' render={props => <Header {...props} appleData={appleData} /> } />
      <Route path='/imac' />
      <Route path='/ipad' />
      <Route path='/iphone' />
      <Route path='/watch' />
      <Route path='/tv' />
      <Route path='/music' />
      <Route path='support'/>

    </div>
  );
}

export default App;

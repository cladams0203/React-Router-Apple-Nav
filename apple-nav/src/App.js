import React, { useState } from 'react';
import { Header } from './components/Header';
import { Route } from 'react-router-dom';
import { Mac } from './components/Mac';
import { Iphone } from './components/Iphone';
import { Ipad } from './components/Ipad';
import './App.css';
import macInfo from './macInfo.json';

function App() {
  const [appleData, setAppleData] = useState(macInfo)
  // console.log(appleData)

  return (
    <div className="App">
      <Route path='/' render={props => <Header {...props} appleData={appleData} /> } />
      <Route path='/imac' render={props => <Mac {...props} appleData={appleData} /> } />
      <Route path='/ipad' render={props => <Ipad {...props} appleData={appleData} /> } />
      <Route path='/iphone' render={props => <Iphone {...props} appleData={appleData} /> } />
      <Route path='/watch' />
      <Route path='/tv' />
      <Route path='/music' />
      <Route path='support'/>

    </div>
  );
}

export default App;

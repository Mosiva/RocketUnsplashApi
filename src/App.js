
import React from 'react';
import './App.css';
import Rheader from './Rcomponent/rheader-navbar';
import SearchPhotos from "./searchPhotos"

function App() {
  return (
    <div className="App">
      <Rheader />

      <div className="container">
        <SearchPhotos />
        
      </div>
    </div>
  );
}
export default App;
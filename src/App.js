import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"

import Home from './Home';
import NavBar from './NavBar';
import AllBeers from './AllBeers';

function App() {
  return (
    <div >
      
      <BrowserRouter>
        <NavBar />
        <Route exact  path="/" component={Home} />
        <Route path='/all' component={AllBeers}/>
      </BrowserRouter>
    </div>
  );
}

export default App;

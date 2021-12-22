// import React from 'react'
// import Navbar from './components/Navbar'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// // Remeber that the v6 react-router-dom use 'Routes' instead of 'Switch'
// import './App.css'
// import Home from "./components/pages/Home"

import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
//If you are not using v6 react-router-dom , install v5 : npm install react-router-dom@5
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Service';
import Products from './components/pages/Product';
import SignUp from './components/pages/SignUp';


function App() {
  return (
      
      <>
      
      <Router>
        <Navbar/>
          <Switch>
            <Route path='/' exact component={Home} /> 
            <Route path='/services' exact component={Services}/>
            <Route path='/products' exact component={Products}/>
            <Route path='/sign-up' exact component={SignUp}/>
          </Switch>   
      </Router>
        
      </>

  );
}

export default App;

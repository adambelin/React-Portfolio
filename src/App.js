import React from 'react'
import './App.css';
import Nav from './components/Nav';
import Home from './components/Homepage';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import {  BrowserRouter,  Routes,  Route, } from "react-router-dom";
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context'

function App() {
  return (
      <div>
        <Nav />
        <div className="container">
          <Routes>
            <Route path="/" element= {<Home />} />
            <Route path="/Contact" element= {<Contact />} />
            <Route path="/Resume" element= {<Resume />} />
            <Route path="/Portfolio" element= {<Portfolio />} />
          </Routes>
        </div>
        </div>
    
  )
}

export default App;
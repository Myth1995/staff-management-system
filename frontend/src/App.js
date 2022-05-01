import './App.css';
import * as React from 'react';
import Login from './components/Login';
import Admin from './components/Admin';
import User from './components/User';
import Register from './components/Register';
import About from './components/About';
import Contact from './components/Contact';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/admin" element={<Admin/>} />
          <Route path="/user" element={<User/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </Router>
      <script src="./assets/js/bootstrap.bundle.min.js" type="text/javascript" />
    </div>
  );
}

export default App;

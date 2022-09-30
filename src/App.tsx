import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';
import ForgotPass from './components/ForgotPass';

function App() {
  return (
    <div>
      <Navbar />
      {/* <Login /> */}
      {/* <Register /> */}
      <ForgotPass />
    </div>
  );
}

export default App;

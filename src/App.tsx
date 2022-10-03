import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';
import ForgotPass from './components/ForgotPass';
import NewPass from './components/NewPass';
import Profile from './components/Profile';

function App() {
  return (
    <div>
      <Navbar />
      {/* <Login /> */}
      {/* <Register /> */}
      {/* <ForgotPass /> */}
      {/* <NewPass /> */}
      <Profile />
    </div>
  );
}

export default App;

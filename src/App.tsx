import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import AppRouter from './components/AppRouter';


const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <AppRouter />
    </div>
  );
}

export default App;

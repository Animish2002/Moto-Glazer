import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import ForgotPassword from './pages/Auth/ForgotPassword';
import Header from './Layout/Header';
import Footer from './Layout/Footer';

function App() {
  return (
    <Router>
      <Routes>
     

          <Route path="/" element={<HomePage />} />
          <Route path='/header' element={<Header/>} />
          <Route path='/footer' element={<Footer />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />



      
      </Routes>
    </Router>
  );
}

export default App;
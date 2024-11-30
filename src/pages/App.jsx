import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './AuthContext';
import 'typeface-inter';
import LandingPage from './LandingPage'; 
import SignIn from './SignIn'; 
import SignUp from './SignUp';
import Shop from './Shop';
import ForumPage from './ForumPage';
import About from './About';
import Contact from './Contact';


function App() {
  return (
    <AuthProvider>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/forums" element={<ForumPage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </AuthProvider>
  );
}

export default App;

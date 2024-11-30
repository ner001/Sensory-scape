// App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './AuthContext';
import 'typeface-inter';
import LandingPage from './LandingPage';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Shop from './Shop';
import ForumPage from './ForumPage';
import Layout from './appbefore';
import Board from './Board';
import Control from './ControlPanel';
import Fiche from './Fiche';
import Home from './Home';
import Contact from './Contact';
import About from './About';

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
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />

        {/* Layout Routes */}
        <Route path="/dashboard" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="control" element={<Control />} />
          <Route path="board" element={<Board />} />
          <Route path="patient/:patientId" element={<Fiche />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
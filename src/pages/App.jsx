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
import Layout from './before app';
import Board from './Board';
import Control from './Control';
import Fiche from './Fiche';

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
        
        {/* Layout Routes */}
        <Route path="/dashboard" element={<Layout />}>
          <Route index element={<Board />} />
          <Route path="control" element={<Control />} />
          <Route path="board" element={<Board />} />
          <Route path="patient/:id" element={<Fiche />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
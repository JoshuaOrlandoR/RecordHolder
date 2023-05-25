import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Start from './Pages/Start/Start';
import Dashboard from './Pages/Dashboard/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Start />} />
      <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Start from './Pages/Start/Start';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Start />} />
        {/* other routes go here */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
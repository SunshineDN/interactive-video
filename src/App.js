import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Aluno from './pages/Aluno';
import Professor from './pages/Professor';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/aluno" element={<Aluno />} />
          <Route path="/professor" element={<Professor />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;





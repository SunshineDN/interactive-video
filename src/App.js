import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Aluno from './pages/Aluno';
import Professor from './pages/Professor';

function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Aluno" element={<Aluno />} />
          <Route path="/Professor" element={<Professor />} />
        </Routes>
    </>
  );
}

export default App;





import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import UploadApp from './pages/UploadApp';
import Wallet from './pages/Wallet';
import FounderConsole from './pages/FounderConsole';

export default function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/upload' element={<UploadApp/>} />
        <Route path='/wallet' element={<Wallet/>} />
        <Route path='/founder' element={<FounderConsole/>} />
      </Routes>
    </BrowserRouter>
  );
}

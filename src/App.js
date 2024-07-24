import './App.css';

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './Components/Sidebar';
import Home from './Components/Home';
import Header from './Components/Header';
import Transacciones from './Components/Transacciones';
import Footer from './Components/Footer';

function App() {
  return (
      <div className='h-dvh flex'>
        <Router>
          <Sidebar/>
          <main className='bg-slate-200 flex flex-col flex-1 overflow-y-auto'>
            <Header/>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/transacciones' element={<Transacciones />} />
            </Routes>
            <Footer/> 
          </main>
          </Router>
        </div>
  );
}

export default App;

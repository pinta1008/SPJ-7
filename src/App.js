import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Ucitaj from './komponente/Ucitaj';
import Dodaj from './komponente/Dodaj';
import Nav from './komponente/Navigacija';



function App() {
  return (
   <BrowserRouter>
   <Nav />
      <Routes>
        <Route path='Ucitaj' element={<Ucitaj/>} />
        <Route path='Dodaj'element={<Dodaj/>} />
      </Routes>
   </BrowserRouter>
  );
}

export default App;

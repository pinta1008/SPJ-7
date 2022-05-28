import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Ucitaj from './komponente/Ucitaj';
import Dodaj from './komponente/Dodaj';
import Nav from './komponente/Navigacija';
import Edit from './komponente/Edit';
import FilterTable from './komponente/FilterTable';



function App() {
  return (
   <BrowserRouter>
   <Nav />
      <Routes>
        <Route path='/Ucitaj' element={<Ucitaj/>} />
        <Route path='/Dodaj'element={<Dodaj/>} />
        <Route path='/Ucitaj/Edit/:EditID' element={<Edit />} />
        <Route path='/Pretrazivanje' element={<FilterTable />} />
      </Routes>
   </BrowserRouter>
  );
}

export default App;

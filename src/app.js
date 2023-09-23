import React from 'react';
import { Route, Routes, useLocation} from 'react-router-dom';
import { Details, Home, Landing, NotFound } from './views/index'; // Use single quotes for consistency


function App() {


  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/detail/:id" element={<Details />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

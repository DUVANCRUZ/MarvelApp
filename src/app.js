import React from 'react';
import { Route, Routes, useLocation} from 'react-router-dom';
import Details from "./views/Details/Details_page";
import Landing from "./views/Landing/Landing_page";
import NotFound from "./views/Notfound/Notfound_page";
import Home from "./views/Home/Home_page";



function App() {


  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/detail/:id" element={<Details/>} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

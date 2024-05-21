import React from 'react';
import { Route, Routes} from 'react-router-dom';
import Details from "./views/details/details_page";
import Landing from "./views/landing/landing_page";
import NotFound from "./views/notfound/notfound_page";
import Home from "./views/home/home_page"



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

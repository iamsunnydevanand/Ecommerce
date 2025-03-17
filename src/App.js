

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import './App.css';
import Nav from "./Nav";
import Home  from "./Home";
import Admin from "./Admin";

function App() {
  return (
    <>
    




<Router>

  <Routes>
<Route path="/home" element={<>
<Nav/>
<Home/>
</> }></Route>


<Route path="/admin" element={<Admin/>}></Route>


  </Routes>
</Router>





    </>
  );
}

export default App;

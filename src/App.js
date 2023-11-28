import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing.jsx";
import Aboutus from "./pages/Aboutus.jsx";
import Allproducts from "./pages/Allproducts.jsx";
import NoPage from "./pages/Nopage.jsx";
import { useState } from 'react';
import './App.css'

function App() {

  const [modalactive, setactive] = useState('')

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing setactive = {setactive} modalactive = {modalactive}/>} />
        <Route path="Aboutus" element={<Aboutus />} />
        <Route path="Allproducts/:filter" element={<Allproducts setactive = {setactive} modalactive = {modalactive}/>} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </div>
  );
}

export default App;

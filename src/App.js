import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing.jsx";
import Aboutus from "./pages/Aboutus.jsx";
import Allproducts from "./pages/Allproducts.jsx";
import NoPage from "./pages/Nopage.jsx";
import './App.css'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="Aboutus" element={<Aboutus />} />
        <Route path="Allproducts" element={<Allproducts />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </div>
  );
}

export default App;

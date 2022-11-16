import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Partager from "./pages/Partager";

function App() {
  return (
    <div className="App font-Poppins text-black">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/partager" element={<Partager />} />
      </Routes>
    </div>
  );
}

export default App;

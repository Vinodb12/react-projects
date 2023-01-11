import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import About from "./Contactapp/About";
import Addedit from "./Contactapp/Addedit";
import Header from "./Contactapp/Header";
import Home from "./Contactapp/Home";
import View from "./Contactapp/View";

function App() {
  return (
    <BrowserRouter >
      <Header />
      <ToastContainer position="top-right" />
      

      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add/:id" element={<Addedit />} />
          <Route path="/about/:id" element={<About />} />
          <Route path="/view/:id" element={<View />} />
          <Route  element={<h1> 404 page not found</h1>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

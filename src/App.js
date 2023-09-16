import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Mainbody from "./components/Mainbody";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import About from "./components/About";
import Location from "./components/Location";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route element={<Mainbody />} path="/" />
          <Route element={<Menu />} path="/menu" />
          <Route element={<About />} path="/about" />
          <Route element={<Location />} path="/location" />
          <Route element={<Contact />} path="/contact" />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

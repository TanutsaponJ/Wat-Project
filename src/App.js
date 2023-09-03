import Navbar from "./Components/Navbar/Navbar";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./page/home";
// import Event from "./page/event";
// import Blog from "./page/blog";
import Contact from "./page/contact";
//  Import Components

import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Event from "./Components/Event/Event";
import Blog from "./Components/Blog/Blog";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Event />
      <Blog />
      <Routes>
        <Route path="/home" element={<HomePage />} />
        {/* <Route path="/event" element={<Event />} /> */}
        {/* <Route path="/blog" element={<Blog />} /> */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;

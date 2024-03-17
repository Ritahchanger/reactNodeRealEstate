import About from "./assets/pages/About";
import Contact from "./assets/pages/Contact";
import Blog from "./assets/pages/Blog";
import Services from "./assets/pages/Services";
import Pricing from "./assets/pages/Pricing";
import Home from "./assets/pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./Authentication/Signup";
import Login from "./Authentication/Login"
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/blog" element={<Blog />} />
          <Route exact path="/services" element={<Services />} />
          <Route exact path="/pricing" element={<Pricing />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/signup" element={<Signup/>} />
          <Route exact path="/login" element={<Login/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

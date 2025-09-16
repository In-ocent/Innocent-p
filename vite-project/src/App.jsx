// App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NaveBer from "./Component/NaveBer.jsx";
import Home from "./Component/pages/Home.jsx";
import About from "./Component/pages/About.jsx";
import Projects from "./Component/pages/Projects.jsx";
import Templates from "./Component/pages/Templates.jsx"; // ✅ Add this
import Contact from "./Component/pages/Contact.jsx";     // ✅ Add this

function App() {
  return (
    <BrowserRouter>
      <NaveBer />
      <Routes>
        <Route path="/" element={<Home />} />            {/* default */}
        <Route path="/home" element={<Home />} />        {/* Home */}
        <Route path="/about" element={<About />} />      {/* About */}
        <Route path="/project" element={<Projects />} /> {/* Projects */}
        <Route path="/template" element={<Templates />} />{/* Templates */}
        <Route path="/contact" element={<Contact />} />  {/* Contact */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

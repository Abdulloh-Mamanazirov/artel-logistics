import Aos from "aos";
import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar";
import NotFound from "./pages/404/NotFound";
import About from "./pages/About/About";
import Blogs from "./pages/Blogs/Blogs";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home";
import Servisec from "./pages/Services/Servisec";
import Vacansy from "./pages/Vacansy/Vacansy";
import Employee from "./pages/Employee/Employee";

function App() {
  Aos.init();
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ left: 0, top: 0 });
  }, [pathname]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/" element={<About />} />
        <Route path="/blog/" element={<Blogs />} />
        <Route path="/blog/:id" element={<Blogs />} />
        <Route path="/contact/" element={<Contact />} />
        <Route path="/vacansy/" element={<Vacansy />} />
        <Route path="/services/" element={<Servisec />} />
        <Route path="/employee/" element={<Employee />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

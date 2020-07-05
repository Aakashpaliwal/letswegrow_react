import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Aboutus from "./components/Aboutus/Aboutus";
import Services from "./components/Services/Services";
import Products from "./components/Products/Products";
import Testimonial from "./components/Testimonial/Testimonial";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Aboutus />
      <Services />
      {/*<Products />*/}
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

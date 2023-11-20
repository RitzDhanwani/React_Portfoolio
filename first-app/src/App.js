import React from "react";
import './App.css';

// import Navbar from "./components/Navbar";
import Offerings from "./components/Welcome";
import Welcome from "./components/Welcome";
import Footer from "./components/footer/Footer";
import Contactus from "./components/contactUS/Contactus";

const App = () => {
  return (
    <div>
      <main className="main">
        <Navbar />
        <Offerings />
        <Contactus />
        <Welcome />
        <Footer />
      </main>
    </div>
  )
}

export default App;

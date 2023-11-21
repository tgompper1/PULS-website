import React from "react";
// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";
 // We import all the components we need in our app
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import About from "./components/about";
import Home from "./components/home/home";

const App = () => {
 return (
   <div>
     <Navbar />
     <Routes>
        <Route path="/" element={<Home />} />
       <Route path="/about" element={<About />} />
     </Routes>
     <Footer />
   </div>
 );
};
 export default App;
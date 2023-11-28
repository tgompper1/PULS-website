import React from "react";
// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";
 // We import all the components we need in our app
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import About from "./components/about/about";
import Home from "./components/home/home";
import AdminEventsCalendar from "./components/calendar/adminCalendar"
import EventsCalendar from "./components/calendar/Calendar";

import { Login, Signup } from "./components/pages";
//import Home from "./components/pages/Home";

const App = () => {
 return (
   <div>
     <Navbar />
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/admincalendar" element={<AdminEventsCalendar />} />
        <Route path="/calendar" element={<EventsCalendar />} />
     </Routes>
     <Footer />
   </div>
 );
};
 export default App;
import React from "react";
// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";
 // We import all the components we need in our app
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./components/About";
import Home from "./components/Home";
import AdminBlogList from "./components/blog/BlogListAdmin";
import CreateBlogPost from "./components/blog/CreateBlogPost";
import BlogList from "./components/blog/BlogList";
<<<<<<< HEAD
import EditPostAdmin from "./components/blog/EditPostAdmin";
import PostDetails from "./components/blog/PostDetails";
=======
import AdminEventsCalendar from "./components/calendar/adminCalendar"
import EventsCalendar from "./components/calendar/Calendar";
>>>>>>> 7df9bb9e2c8af9803dcdea28110ed0a13f9ca111

import './styles/general.css';

const App = () => {
 return (
   <div>
     <Navbar />
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/admincalendar" element={<AdminEventsCalendar />} />
        <Route path="/calendar" element={<EventsCalendar />} />
        <Route path="/blog" element={<BlogList />} />
        <Route path="/blog-admin" element={<AdminBlogList />} />
        <Route path="/create-post" element={<CreateBlogPost />} />
        <Route path="/edit-post/:id" element={<EditPostAdmin />} />
        <Route path="/post/:id" element={<PostDetails />} />
     </Routes>
     <Footer />
   </div>
 );
};
 export default App;
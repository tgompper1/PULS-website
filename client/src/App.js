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
        <Route path="/create-post" element={<CreateBlogPost />} />
        <Route path="/edit-post/:id" element={<EditPostAdmin />} />
     </Routes>
     <Footer />
   </div>
 );
};
 export default App;
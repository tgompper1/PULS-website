import React from "react";
// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";
 // We import all the components we need in our app
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import About from "./components/about/about";
import Home from "./components/home/home";
import AdminBlogList from "./components/blog/BlogListAdmin";
import CreateBlogPost from "./components/blog/CreateBlogPost";
import BlogList from "./components/blog/BlogList";

const App = () => {
 return (
   <div>
     <Navbar />
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<BlogList />} />
        <Route path="/blog-admin" element={<AdminBlogList />} />
        <Route path="/blog-admin/create-post" element={<CreateBlogPost />} />
     </Routes>
     <Footer />
   </div>
 );
};
 export default App;
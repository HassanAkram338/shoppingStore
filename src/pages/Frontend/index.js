import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./About/About";
import Home from "./Home/Home";
import Contact from "./Contact/Contact";
import Faq from "./Faq/Faq";
import Blog from "./Blog/Blog";
import MarketingTool from "./MarketingTool/MarketingTool";

export default function index() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="faq" element={<Faq />} />
        <Route path="blog" element={<Blog />} />
        <Route path="marketingTool" element={<MarketingTool />} />
      </Route>
    </Routes>
  );
}

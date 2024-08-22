import React from 'react'

import "./../BlogsPage/BlogsStyle.css";
import Navbar from '../Homepage/Navbar/Navbar';


function BlogNavbar() {
  return (
    <div className="main_div_blogs_navbar">
    <Navbar />
    <div className="container">
      <p className="heading_blogs">Blogs</p>
      <div className="d-flex flex-row">
        <p className="para_blogs_white">Home</p>
        <div className="orange_line_blogs"></div>
        <p className="para_blogs_orange">Blogs</p>
      </div>
    </div>
  </div>
  )
}

export default BlogNavbar

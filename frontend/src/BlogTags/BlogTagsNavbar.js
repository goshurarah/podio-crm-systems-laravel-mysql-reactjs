import React from 'react'
import Navbar from '../Homepage/Navbar/Navbar'
import "./../BlogTags/BlogsTagsStyle.css"
function BlogTagsNavbar() {
  return (
    <div className="main_div_blogstags_navbar">
    <Navbar />
    <div className="container">
      <p className="heading_blogstags">Tag</p>
      <div className="d-flex flex-row">
        <p className="para_blogstags_white">Blogs</p>
        <div className="orange_line_blogstags"></div>
        <p className="para_blogstags_orange">Tag</p>
      </div>
    </div>
  </div>
  )
}

export default BlogTagsNavbar

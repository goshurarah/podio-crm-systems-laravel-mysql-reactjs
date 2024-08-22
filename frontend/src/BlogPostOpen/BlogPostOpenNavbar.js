import React from 'react'
import Navbar from '../Homepage/Navbar/Navbar'
import "./../BlogPostOpen/BlogsPostOpenStyle.css"
function BlogPostOpenNavbar() {
  return (
    <div className="main_div__blogsOpen_navbar">
    <Navbar />
    <div className="container">
      <p className="heading__blogsOpen">Blogs</p>
      <div className="d-flex flex-row">
        <p className="para__blogsOpen_white">Home</p>
        <div className="orange_line__blogsOpen"></div>
        <p className="para__blogsOpen_orange">Blogs</p>
      </div>
    </div>
  </div>
  )
}

export default BlogPostOpenNavbar
